# Shabey's iPhone (website simulasi iPhone 15 Pro Max · light mode soft pink)

Website statis murni (tanpa build / tanpa framework). Tinggal upload semua isi folder ini ke GitHub.

## Struktur
```
index.html            kerangka layar (lock, passcode, status bar, dynamic island)
style.css             semua tampilan
app.js                semua logika + semua DATA (chat, foto, musik, dll.)
assets/
  wallpaper-lock.jpg  wallpaper lockscreen
  wallpaper-home.jpg  wallpaper home screen (file yang sama, bisa diganti terpisah)
  avatar.jpg          foto profil Instagram
  posts/post-1..3.jpg 3 postingan Instagram
  photos/2026-MM-N.jpg foto per bulan (Jan–Okt 2026)
  stories/*.jpg       gambar story (me-1..4, baby-1..3, maxton-1, evander-1, eiser-1)
  music/helloo.jpg, art-1..5.jpg  cover playlist Helloo + artwork 5 lagu
tools/make_placeholders.py  pembuat aset awal (boleh dihapus)
```

## Deploy ke GitHub Pages
1. Buat repo baru, upload semua file di atas (pertahankan struktur foldernya).
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
3. Buka `https://USERNAME.github.io/NAMA-REPO/`.
(Bisa juga di Cloudflare Pages seperti contoh: pilih repo, build command kosong, output directory `/`.)

## Mengganti foto
Foto di `assets/` sekarang masih **placeholder**. Simpan foto dari Pinterest (kamu yang unduh),
lalu timpa file dengan **nama yang sama**:
- `assets/avatar.jpg` — foto profil IG
- `assets/posts/post-1.jpg`, `post-2.jpg`, `post-3.jpg`
- `assets/photos/2026-01-1.jpg` … `2026-10-3.jpg` (September 2 foto, Oktober 3 foto)
- `assets/wallpaper-lock.jpg` — ganti kalau mau wallpaper lain

Mau menambah foto di bulan tertentu? Edit array `PHOTOS` di `app.js`.

## Music (gaya Apple Music)
Aplikasi Music (ikon merah di dock) punya: Home (Top Picks for You, Recently Played), tab New / Radio / Library / Search,
playlist **Helloo** (owner bbee, tepat 5 lagu), mini player, dan Now Playing. Pemutar ini **simulasi** (tanpa audio asli):
Play/Pause, Next/Previous, Shuffle, dan Download (simulasi) berfungsi, state tetap terjaga saat pindah halaman.
- Data lagu & playlist: `AM_TRACKS` dan `AM_PLAYLISTS` di bagian DATA `app.js`.
- Cover playlist: `assets/music/helloo.jpg`. Artwork lagu: `assets/music/art-1.jpg` … `art-5.jpg`
  (placeholder — timpa dengan cover resmi memakai nama file yang sama, format persegi 1:1).

## Mengubah isi
Semua teks ada di bagian `DATA` paling atas `app.js`:
passcode (`CFG.passcode`), bio/caption IG (`IG`), email (`MAILS`), catatan (`NOTES`),
riwayat telepon (`CALLS`), chat Messages (`CHATS`), daftar lagu (`AM_TRACKS`).
Tanggal & jam semua pesan dihitung relatif terhadap hari saat website dibuka.

## Catatan
- Passcode: **2112**. Di desktop, tombol di sisi kanan bingkai HP = kunci layar. `Esc` = kembali ke home.
- Cuaca Bandung mengambil data asli dari Open-Meteo (gratis, tanpa API key). Offline → tampil data contoh.
- Ikon app (Instagram, Messages, Music) adalah gambar SVG sederhana buatan sendiri, bukan logo resmi.

## Fitur v2
- **Messages (iMessage)**: daftar percakapan (Edit, filter All/Known/Unread, Search, tombol tulis pesan baru) dan ruang chat
  bergaya iOS Light. Pesan yang kamu ketik tersimpan di `localStorage` (key `shabey-iphone-messages-v1`) dan tetap ada setelah refresh.
  Lampiran (Camera/Photos/Location), pesan suara, dan video call hanya simulasi — tidak ada file/panggilan yang dikirim.
- **Pesan baru** (ikon pensil kanan bawah) → daftar kontak (`MSG_CONTACTS`), bisa dicari.
- **Chat baru**: Dito, Jason BEM FTI, Kevin HIMA TI, Zayn Cybersecurity, Andrew PPIC Staff + chat Baby baru.
  "Jumat"/"Sabtu" di chat dihitung dari Sabtu terbaru, jadi selalu benar kapan pun website dibuka.
- **Otomatis**: 1 menit setelah dibuka → banner chat dari Baby ("abang:(" lalu "kabarin akuu"); buka chat Baby →
  "Shabey is typing…" → balasan "I'll be home soon baby". 5 menit → telepon masuk dari Baby (Accept/Decline + subtitle).
  Decline → Missed Call di Recents. Atur waktunya di `TRIGGER`; tambahkan `?fast` di URL untuk mencoba cepat (2 dtk / 25 dtk).
- Foto avatar kontak opsional lewat `AVATARS` (kosong = inisial berwarna).

## Avatar (foto kontak)
Upload foto persegi (.jpg, ±300x300) ke `assets/avatars/` dengan nama: shabey, baby, maxton, keenan, miyuka, kian,
akatsudi, eiser, evander, dito, jason, kevin, zayn, andrew, itteam, harvard (semua `.jpg`). Daftarnya ada di `AVATARS` (app.js).
Foto otomatis dipakai di daftar chat, header roomchat, bubble grup, story, notifikasi, dan layar telepon.
File yang belum ada → tampil inisial berwarna.

## Update: Messages, Photos, Weather, Calendar
- **Data Messages** ada di `app.js` bagian "MESSAGES — DATA": `MSG_PINNED` (percakapan yang disematkan, selalu di atas), `CHATS` (urutan tampil = urutan di array), `MSG_CONTACTS` (direktori kontak), `AVATARS` (foto profil di `assets/avatars/`). Ruelt, Mommy, Lokale = preview-only (`open: false`). Mommy & Lokale memakai siluet bawaan iOS (`plain: true`).
- **Pesan gambar**: `[pengirim, { img: 'nama-slot' }]`. Slot Marshall ada di `MSG_IMAGES` → timpa file `assets/messages/marshall-d1-shabey.jpg`, `marshall-d2-marshall.jpg`, `marshall-d2-shabey.jpg` dengan foto asli (nama sama). Tombol “+” → Photos/Camera juga bisa mengirim gambar; gambar diperkecil dan disimpan di localStorage (jika penuh, pengguna diberi tahu).
- **Photos**: Oktober 4 foto, November 5 foto (`assets/photos/2026-10-1..4.jpg`, `2026-11-1..5.jpg`) — masih placeholder netral, timpa dengan foto asli.
- **Weather**: lokasi Canary Wharf, London, England (`CFG.city`). Data cuaca dari Open-Meteo.
- **Calendar**: acara berulang bulanan `CAL_EVENTS` (“The important thing”, tanggal 12, sepanjang hari).
