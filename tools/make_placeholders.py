"""Membuat aset awal: wallpaper bintang + foto placeholder.
Jalankan:  python3 tools/make_placeholders.py   (butuh Pillow & numpy)
Foto placeholder boleh kamu timpa dengan foto asli (pakai nama file yang sama)."""
import numpy as np, os
from PIL import Image, ImageDraw, ImageFont, ImageFilter
rng = np.random.default_rng(7)
A = os.path.join(os.path.dirname(__file__), '..', 'assets')

def sky(w=1290, h=2796):
    y = np.linspace(0, 1, h)[:, None]; x = np.linspace(0, 1, w)[None, :]
    top = np.array([4, 8, 26]); bot = np.array([14, 22, 52])
    img = (top[None, None] * (1 - y[..., None]) + bot[None, None] * y[..., None]) * np.ones((h, w, 1))
    # pita bima sakti (diagonal)
    d = ((x - .5) * .9 + (y - .5) * .55)
    band = np.exp(-(d / .12) ** 2)
    noise = Image.fromarray((rng.random((h // 8, w // 8)) * 255).astype('uint8')).resize((w, h), Image.BICUBIC).filter(ImageFilter.GaussianBlur(25))
    n = np.asarray(noise) / 255.0
    img += (band * (0.35 + 0.65 * n))[..., None] * np.array([70, 80, 120])
    im = Image.fromarray(np.clip(img, 0, 255).astype('uint8'))
    glow = Image.new('RGB', (w, h)); star = ImageDraw.Draw(glow)
    for _ in range(2600):
        px, py = rng.integers(0, w), rng.integers(0, h)
        b = rng.random() ** 3
        r = 1 + 2.6 * b; c = int(120 + 135 * b)
        star.ellipse([px - r, py - r, px + r, py + r], fill=(c, c, min(255, c + 20)))
    for _ in range(26):  # bintang terang
        px, py = rng.integers(60, w - 60), rng.integers(60, h - 60); r = rng.integers(4, 7)
        star.ellipse([px - r, py - r, px + r, py + r], fill=(255, 255, 255))
    soft = glow.filter(ImageFilter.GaussianBlur(7))
    out = np.clip(np.asarray(im).astype(int) + np.asarray(soft).astype(int) * 1.4 + np.asarray(glow).astype(int), 0, 255).astype('uint8')
    Image.fromarray(out).resize((860, 1864), Image.LANCZOS).save(os.path.join(A, 'wallpaper-lock.jpg'), quality=88)

def font(sz):
    for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', '/usr/share/fonts/dejavu/DejaVuSans-Bold.ttf']:
        if os.path.exists(f): return ImageFont.truetype(f, sz)
    return ImageFont.load_default()

def ph(path, text, w=800, h=1000, hue=0):
    y = np.linspace(0, 1, h)[:, None, None]
    c1 = np.array([[30 + hue % 40, 34, 52 + hue % 30]]); c2 = np.array([[10, 12, 20]])
    arr = (c1 * (1 - y) + c2 * y) * np.ones((1, w, 1))
    im = Image.fromarray(arr.astype('uint8')); d = ImageDraw.Draw(im)
    d.rectangle([24, 24, w - 24, h - 24], outline=(70, 76, 100), width=3)
    f = font(34); lines = text.split('\n'); yy = h // 2 - 30 * len(lines)
    for ln in lines:
        tw = d.textlength(ln, font=f); d.text(((w - tw) / 2, yy), ln, fill=(160, 168, 200), font=f); yy += 52
    os.makedirs(os.path.dirname(path), exist_ok=True); im.save(path, quality=85)

if __name__ == '__main__':
    sky()
    ph(os.path.join(A, 'avatar.jpg'), 'avatar.jpg\n(foto profil)', 600, 600, 5)
    for i in (1, 2, 3): ph(os.path.join(A, 'posts', f'post-{i}.jpg'), f'posts/post-{i}.jpg\nganti dengan foto kamu', 800, 1000, i * 9)
    names = {1: 'Januari', 2: 'Februari', 3: 'Maret', 4: 'April', 5: 'Mei', 6: 'Juni', 7: 'Juli', 8: 'Agustus', 9: 'September', 10: 'Oktober'}
    cnt = {9: 2, 10: 3}
    for m in range(1, 11):
        for k in range(1, cnt.get(m, 1) + 1):
            ph(os.path.join(A, 'photos', f'2026-{m:02d}-{k}.jpg'), f'photos/2026-{m:02d}-{k}.jpg\n{names[m]} 2026', 800, 800, m * 7 + k * 3)
    for nm, n in {'me': 4, 'baby': 3, 'maxton': 1, 'evander': 1, 'eiser': 1}.items():
        for k in range(1, n + 1):
            ph(os.path.join(A, 'stories', f'{nm}-{k}.jpg'), f'stories/{nm}-{k}.jpg\nganti dengan foto story', 720, 1280, len(nm) * 11 + k * 17)
    print('selesai')
