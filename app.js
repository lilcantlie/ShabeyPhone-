/* =========================================================
   Shabey's iPhone — app.js
   Semua data (chat, foto, musik, dll.) ada di bagian "DATA"
   di bawah ini, jadi gampang kamu ubah sendiri.
   ========================================================= */
'use strict';

/* =========================================================
   DATA — EDIT DI SINI
   ========================================================= */
const CFG = {
  passcode: '2112',
  displayName: 'Shanna Habey',
  username: 'morfeme',
  city: { name: 'Canary Wharf', region: 'London, England', lat: 51.5054, lon: -0.0235, tz: 'Europe/London' },
};

const IG = {
  avatar: 'assets/avatar.jpg',
  posts: 6, followers: '1.079', following: 930,
  location: 'canary wharf',
  bio: ['rosewater قمر noun begins @ivoiwre ♥'],
  items: [
    { img: 'assets/posts/post-1.jpg', caption: '',                       ago: 2, likes: '1.284' },
    { img: 'assets/posts/post-2.jpg', caption: '',        ago: 6, likes: '962'   },
    { img: 'assets/posts/post-3.jpg', caption: '',    ago: 11, likes: '2.310' },
    { img: 'assets/posts/post-4.jpg', caption: '',                             ago: 16, likes: '845'   },   // post 4–6: placeholder, ganti file & caption
    { img: 'assets/posts/post-5.jpg', caption: '',                             ago: 23, likes: '1.102' },
    { img: 'assets/posts/post-6.jpg', caption: '',                             ago: 31, likes: '1.536' },
  ],
};

// Foto per bulan (tahun 2026): Oktober = 4 foto, November = 11 foto (total 15). Ganti file di assets/photos/ dengan foto asli (nama sama).
const PHOTOS = [
  { m: 9, imgs: ['assets/photos/2026-10-1.jpg', 'assets/photos/2026-10-2.jpg', 'assets/photos/2026-10-3.jpg', 'assets/photos/2026-10-4.jpg'] },
  { m: 10, imgs: ['assets/photos/2026-11-1.jpg', 'assets/photos/2026-11-2.jpg', 'assets/photos/2026-11-3.jpg', 'assets/photos/2026-11-4.jpg', 'assets/photos/2026-11-5.jpg', 'assets/photos/2026-11-6.jpg', 'assets/photos/2026-11-7.jpg', 'assets/photos/2026-11-8.jpg', 'assets/photos/2026-11-9.jpg', 'assets/photos/2026-11-10.jpg', 'assets/photos/2026-11-11.jpg'] },
];

// Music (gaya Apple Music): data playlist & lagu. Artwork ada di assets/music/.
// art-1..5.jpg = artwork tiap lagu (placeholder; timpa dengan cover resmi, nama file sama).
// helloo.jpg   = foto cover playlist Helloo.
// src = file audio lagu. Taruh file di assets/music/audio/ dengan nama di bawah (atau isi URL sumber audio yang sah).
// Tanpa file, lagu TIDAK diputar (aplikasi memberi tahu lagu mana yang belum punya audio) — tidak ada pemutaran palsu.
const AM_TRACKS = [
  { title: 'Robbers',               artist: 'The 1975',       art: 'assets/music/art-1.jpg', bg: '#222224', src: 'assets/music/audio/robbers.mp3' },
  { title: 'TOO DEEP TO TURN BACK', artist: 'Daniel Caesar',  art: 'assets/music/art-2.jpg', bg: '#3a0d10', src: 'assets/music/audio/too-deep-to-turn-back.mp3' },
  { title: 'Nothing',               artist: 'Bruno Major',    art: 'assets/music/art-3-baru.jpg', bg: '#c9a57c', src: 'assets/music/audio/nothing.mp3' },
  { title: 'Sienna',                artist: 'The Marías',     art: 'assets/music/art-4.jpg', bg: '#b9603f', src: 'assets/music/audio/sienna.mp3' },
  { title: 'Favorite Girl',         artist: 'Justin Bieber',  art: 'assets/music/art-5.jpg', bg: '#8fbbea', src: 'assets/music/audio/favorite-girl.mp3' },
];
const AM_PLAYLISTS = [
  { id: 'helloo', name: 'Helloo', owner: 'bbee', status: 'Just Updated', cover: 'assets/music/helloo.jpg', bg: '#c9a57c', tracks: [0, 1, 2, 3, 4] },
];
const AM_AUDIO = new Audio();   // satu pemutar audio asli untuk seluruh aplikasi (tetap jalan saat pindah app)
AM_AUDIO.preload = 'auto';

const MAILS = [
  { from: 'Lokalverse', addr: 'Lokalverse@gmail.com', when: 'Monday', unread: true, subj: 'You invited to lokalverse project',
    pre: 'I would like to invite you to join the lokalverse project. Please let me know if you are interested.' },
  { from: 'GitHub', when: 'Yesterday', unread: true, subj: '[GitHub] A new sign-in to your account',
    pre: 'Hey morfeme! We noticed a new sign-in to your GitHub account from Canary Wharf, London. If this was you, you...' },
  { from: 'Google', when: '02:14', unread: false, subj: 'Security alert',
    pre: 'A new sign-in on Mac OS. We notice a new sign-in to your Google Account on a Mac OS device.' },
];

const NOTES = [
  { id: 'n1', title: "A part of me that's still yours", ago: 0, time: '-45m', body:
`I never imagined how much one person could mean to me until you came into my life. From the moment we met, everything changed. You weren't just a person I saw you as my safe place, my reason to smile, my everything.

Even now, when we're apart, you're always in my thoughts. Whether it's a quiet moment at night or when I'm lost in a crowd, I still feel your presence in my heart. You gave me a love that felt so real, so deep, and no matter how much time passes, a part of me will always be yours. I know we've taken separate paths, and maybe this is where we're meant to be. But if nothing else, I hope you always remember the way I cared for you. Even if the world moves on, my love for you remains unchanged, unwavering. You'll always be the piece of my life that feels like home.` },
  // Isi catatan ini menunggu konten dari referensi Google Drive buyer (belum dapat diakses) — isi `body` di sini setelah tersedia.
  { id: 'n2', title: 'To be determined.', ago: 1, time: '21:10', body: '' },
  { id: 'n3', title: 'Fortnum & Mason - Diamond Jubilee Tea Salon', ago: 2, time: '16:20', body: '4th Floor, 181 Piccdilly, London W1A 1ER' },
];

const CALLS = [ // ago = berapa hari lalu
  { name: 'Marshall',    type: 'missed', n: 4, ago: 0, time: '03:48' },
  { name: 'Shanina',  type: 'out',    n: 1, ago: 0, time: '02:10' },
  { name: 'Marshall',    type: 'missed', n: 3, ago: 1, time: '22:15' },
  { name: 'Mommy', type: 'out',    n: 1, ago: 1, time: '20:40' },
  { name: 'Marshall',    type: 'missed', n: 2, ago: 1, time: '12:05' },
  { name: 'Jo',   type: 'out',    n: 1, ago: 2, time: '21:30' },
  { name: 'Marshall',    type: 'missed', n: 5, ago: 3, time: '19:20' },
  { name: 'Shanina',  type: 'out',    n: 1, ago: 3, time: '16:00' },
];
const CONTACTS = ['Jo', 'Keenan', 'Kianabelle', 'Marshall', 'Miyuka', 'Mommy', 'Shanina'];

/* ---------- Messages (data chat) ----------
   Format pesan: satu baris = satu pesan  →  "kode|isi pesan"
   Chat pribadi : i = lawan bicara, o = kamu
   Baris "#hari jam" = mulai hari baru. (#0 12:00 = hari ini, #2 = 2 hari lalu, "-5m" = 5 menit lalu)
   Baris "@HH:MM" = loncat jam.                                                         */


// Foto avatar kontak. Upload fotonya ke assets/avatars/ dengan nama file di bawah.
// Kalau file belum ada, otomatis tampil inisial berwarna. Nama tidak peka huruf besar/kecil.
const AVATARS = {   // foto profil: assets/avatars/<nama>.jpg (generik — ganti file dengan foto asli, nama sama). Mommy & Lokale sengaja tanpa foto.
  'Marshall': 'assets/avatars/marshall.jpg', 'Falds': 'assets/avatars/falds.jpg', 'Mr. Keen': 'assets/avatars/keen.jpg', 'Jo': 'assets/avatars/jo.jpg',
  'Shanina': 'assets/avatars/shanina.jpg', 'Jansen': 'assets/avatars/jansen.jpg', 'Ruelt': 'assets/avatars/ruelt.jpg',
  'Geova': 'assets/avatars/geova.jpg', 'Darren': 'assets/avatars/darren.jpg', 'Oswald': 'assets/avatars/oswald.jpg', 'Hakken': 'assets/avatars/hakken.jpg',
  'Alden': 'assets/avatars/alden.jpg', 'Northern': 'assets/avatars/northern.jpg', 'Hosea': 'assets/avatars/hosea.jpg',
};
// Nama lain yang memakai foto yang sama (mis. nama di grup / daftar kontak)
const AVATAR_ALIAS = {};

/* =========================================================
   MESSAGES — DATA (mudah diedit penjual)
   ---------------------------------------------------------
   MSG_ME          : nama pemilik HP (pesan keluar = biru, kanan)
   MSG_CONTACTS    : daftar kontak (halaman "New Message"). Foto di AVATARS.
   MSG_PINNED      : id percakapan yang disematkan (selalu di atas, tersimpan setiap refresh)
   CHATS           : daftar percakapan di Homepage, urut persis seperti di bawah.
     - days[]      : kelompok pesan per hari. when = { ago: N hari lalu, time: 'HH:MM' }  atau  { date: [bulan, tanggal] } (tanpa tahun & tanpa jam)
     - msgs[]      : [pengirim, 'teks']  atau  [pengirim, { img: 'nama-slot' }]  (pesan gambar)
     - preview     : percakapan hanya-tampilan (tidak bisa dibuka): { from, text }
     - group/members : percakapan grup
   MSG_IMAGES      : slot gambar -> file. Taruh foto asli dengan nama file tsb di assets/messages/.
                     Kalau file belum ada, tampil placeholder bersih (bukan ikon rusak).
   ========================================================= */
const MSG_ME = 'Shabey';
const MSG_PINNED = ['marshall'];
const MSG_IMAGES = {
  'marshall-d1-shabey':  'assets/messages/marshall-d1-shabey.jpg',    // Day 1 · Shabey (kanan) · sebelum "Exclusive content for my cranky baby"
  'marshall-d2-marshall': 'assets/messages/marshall-d2-marshall.jpg',  // Day 2 · Marshall (kiri) · sebelum "Baru bangun"
  'marshall-d2-shabey':  'assets/messages/marshall-d2-shabey.jpg',    // Day 2 · Shabey (kanan) · sebelum "I'm so glad you're into ME, kakak"
};
const MSG_CONTACTS = ['Marshall', 'Falds', 'Mr. Keen', 'Jo', 'Shanina', 'Jansen', 'Ruelt', 'Mommy', 'Lokale', 'Geova', 'Darren', 'Oswald', 'Hakken', 'Alden', 'Northern', 'Hosea'];

const CHATS = [
  { id: 'marshall', name: 'Marshall', days: [
    { when: { ago: 1, time: '14:37' }, msgs: [
      ['Shabey', { img: 'marshall-d1-shabey' }],
      ['Shabey', 'Exclusive content for my cranky baby'],
      ['Marshall', 'Cantik banget hari ini'],
      ['Marshall', 'I mean like ALWAYS'],
      ['Shabey', 'YESSS'],
      ['Shabey', 'Udah hapus makeup and bobo aja, kurangnya gak ada kakak'],
      ['Marshall', 'Stay at my place tonight will ya?'],
      ['Marshall', "I'll kiss you all night"],
      ['Shabey', 'Mauuu'],
    ] },
    { when: { ago: 0, time: '14:46' }, step: 26000, msgs: [   // step = jarak antar pesan (ms): gambar ke-3 jatuh sekitar 14:54
      ['Marshall', { img: 'marshall-d2-marshall' }],
      ['Marshall', 'Baru bangun'],
      ['Marshall', 'Looking for my girlfriend kok udah gak ada ya?'],
      ['Marshall', 'Where is she'],
      ['Marshall', 'I need her by my side'],
      ['Shabey', 'Adek meeting sekalian visit loooh'],
      ['Shabey', 'Earlier than we had expected'],
      ['Shabey', 'Aku langsung got out of bed'],
      ['Marshall', 'You forgot to wake me up to kiss me bye bye?'],
      ['Marshall', 'Did you kiss me bye bye?'],
      ['Shabey', 'Yes'],
      ['Marshall', "That's all that matters"],
      ['Shabey', 'You mumble'],
      ['Shabey', '"What is up"'],
      ['Shabey', '"I\'m eepy"'],
      ['Shabey', 'Must be very tired from your class yesterday ya'],
      ['Shabey', 'When you kissed me last night and this morn langsung fit lagi'],
      ['Shabey', "I'm so glad you're into ME, kakak"],
      ['Shabey', { img: 'marshall-d2-shabey' }],
      ['Marshall', 'Can i go with you?'],
      ['Shabey', 'For whattttt????'],
      ['Shabey', 'Jangan usap-usap or anything nanti adek bawaannya mau nyender terus :('],
      ['Marshall', 'Wait for me'],
      ['Marshall', "I'll wash my face terus ganti baju bentar ya sayang"],
    ] },
  ] },
  { id: 'falds', name: 'Falds', unread: 1, days: [{ when: { ago: 0, time: '06:40' }, msgs: [
    ['Falds', 'P'], ['Falds', 'P'], ['Falds', 'Ingat pokemon'], ['Falds', 'Pokemon'], ['Falds', 'Pokemon woyyyy'],
    ['Shabey', 'Bawel bangst sihh'], ['Falds', 'Pokemon'] ] }] },
  { id: 'keen', name: 'Mr. Keen', days: [{ when: { ago: 1, time: '21:30' }, msgs: [
    ['Shabey', "Hey, How's everything going?"],
    ['Mr. Keen', "Pretty good, by the way. Just wanted to check if we're still having a discussion about the project tomorrow."],
    ['Shabey', 'Yes, we are. I was thinking we could meet at the cafe around 2pm'],
    ['Shabey', 'Does that work for you?'],
    ['Mr. Keen', "That works perfectly. I'll see you there"],
    ['Mr. Keen', 'Just go throught the notes I sent you last week, so we can have a productive discussion'],
    ['Shabey', "Absolutely, I'll make sure to review them before we meet"],
    ['Mr. Keen', 'Great! See you tomorrow then. Have a good night!'],
    ['Shabey', 'Thanks, you too! See you tomorrow.'] ] }] },
  { id: 'jo', name: 'Jo', days: [{ when: { ago: 2, time: '17:50' }, msgs: [
    ['Jo', 'have you seen that new cafe lately?'],
    ['Shabey', 'OMMGGG'],
    ['Shabey', 'Literrally everywhere on my feed'],
    ['Jo', 'I know right? I was thinking of going there this weekend, wanna come?'],
    ['Shabey', 'Yesss! Ife been wanting to go there for a while now'],
    ['Jo', "I'll pick you up at 10am on Saturday"] ] }] },
  { id: 'shanina', name: 'Shanina', days: [{ when: { ago: 3, time: '20:15' }, msgs: [
    ['Shabey', 'Soooo, any updates about that guy?'],
    ['Shanina', "Not much, just the usual. He's been busy with work and stuff"],
    ['Shanina', 'Why do you ask?'],
    ['Shabey', 'Nothing, just curios'],
    ['Shabey', 'You were talking about him the other day, and I was wondering if you had any news'],
    ['Shanina', 'HAHAHA'],
    ['Shanina', "We've been texting a bit lately"],
    ['Shabey', "oh really? How's that going?"],
    ['Shanina', "It's going well, actually. We've been talking about meeting up sometime soon"],
    ['Shabey', 'Im happy for you. I hope it goes well bb'],
    ['Shanina', 'Thanks! I appreciate your support shabeyyy love youuuu'] ] }] },
  { id: 'jansen', name: 'Jansen', unread: 1, days: [   // tanggal tetap (tanpa tahun, tanpa jam tampil)
    { when: { date: [10, 1] }, msgs: [
      ['Jansen', 'Happy October, My dear Habey wishing you nothing but good things this month and always, may october bring you more happiness, peace, and beautiful moments. May God bless you always, Stay happy and take care of yourself always.'] ] },
    { when: { date: [10, 2] }, msgs: [['Shabey', "You don't have to bother"], ['Jansen', 'Wya?']] },
    { when: { date: [10, 5] }, msgs: [
      ['Jansen', 'You still there?'],
      ['Jansen', 'Hey, I know you’re busy, but I just wanted to check in and see how you’re doing'],
      ['Jansen', 'Hope everything is going well for you'] ] },
  ] },
  // ---- hanya tampilan (tidak bisa dibuka) ----
  { id: 'ruelt', name: 'Ruelt', open: false, unread: 1, preview: { from: 'Ruelt', text: 'Take your time, kalo udah baikan marahnya, text me.', ago: 4, time: '18:20' } },
  { id: 'mommy', name: 'Mommy', open: false, plain: true, preview: { from: 'Mommy', text: 'Okay sayang', ago: 5, time: '12:05' } },
  { id: 'lokale', name: 'Lokale', open: false, plain: true, unread: 1, preview: { from: 'Lokale', text: 'We would like to remind you to review your email.', ago: 6, time: '09:00' } },
  // ---- grup ----
  { id: 'w3e', name: 'Project W3E', group: true, members: ['Shabey', 'Geova', 'Oswald', 'Mr. Keen', 'Hakken', 'Darren'], days: [{ when: { ago: 1, time: '15:10' }, msgs: [
    ['Geova', 'Update???'],
    ['Oswald', 'Almost done, just need to finish the last part'],
    ['Mr. Keen', "Okay, let me know when you're ready to submit"],
    ['Shabey', 'Same here, just need to double check everything'],
    ['Geova', 'BTW, are we still on for the meeting tomorrow?'],
    ['Mr. Keen', "Yes, same time as usual. Don't forget to bring your notes"],
    ['Hakken', 'HAHHHHHHHHHH'],
    ['Hakken', 'Besok BANNGETTT NIH???'],
    ['Oswald', 'Oh here we go again'],
    ['Shabey', 'Check your messages, I sent you the notes yesterday'],
    ['Hakken', 'I know, I just wanted to make sure everyone is on the same page'],
    ['Oswald', 'Kan would be nice not including Hakken gue rasa'],
    ['Darren', 'HAHAHAH'],
    ['Darren', 'Make sure your parts are update ya kken'],
    ['Hakken', 'Yayayayaaa'],
    ['Mr. Keen', "Let's get this things on track, guys"],
    ['Mr. Keen', 'See you guys tommorow'] ] }] },
];

/* =========================================================
   HELPER
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const h  = html => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = n => String(n).padStart(2, '0');
const fmt = (d, o) => new Intl.DateTimeFormat('id-ID', o).format(d);
const hhmm = d => pad(d.getHours()) + ':' + pad(d.getMinutes());
const dayDiff = (a, b) => { const x = new Date(a), y = new Date(b); x.setHours(0, 0, 0, 0); y.setHours(0, 0, 0, 0); return Math.round((y - x) / 864e5); };
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/** Tanggal "ago hari lalu" jam time ('HH:MM') atau '-Nm' (N menit lalu). Tidak pernah di masa depan. */
function at(ago, time) {
  const n = new Date();
  if (time[0] === '-') return new Date(n.getTime() - parseInt(time.slice(1), 10) * 60000);
  const [H, M] = time.split(':').map(Number);
  const d = new Date(n); d.setDate(d.getDate() - ago); d.setHours(H, M, 0, 0);
  if (d > n) d.setDate(d.getDate() - 1);
  return d;
}
/** Label ala iOS untuk daftar: jam / Kemarin / nama hari / tgl */
function listTime(d) {
  const df = dayDiff(d, new Date());
  if (df <= 0) return hhmm(d);
  if (df === 1) return 'Kemarin';
  if (df < 7) return cap(fmt(d, { weekday: 'short' }));
  return fmt(d, { day: '2-digit', month: '2-digit', year: '2-digit' });
}
function longDate(d) { return fmt(d, { day: 'numeric', month: 'long', year: 'numeric' }); }

/* ---------- ikon garis (24x24) ---------- */
const ICP = {
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  comment: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  home: '<path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V13h6v9"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
  plus: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
  reels: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 9h18M8 3l3 6M14 3l3 6"/><path d="M10 13l5 3-5 3z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  more: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
  left: '<path d="M15 18l-6-6 6-6"/>', right: '<path d="M9 18l6-6-6-6"/>', down: '<path d="M6 9l6 6 6-6"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  tag: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M6 19c1-3 3-4 6-4s5 1 6 4"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
  clip: '<path d="M21.4 11l-9.2 9.2a6 6 0 0 1-8.5-8.5l9.2-9.2a4 4 0 0 1 5.7 5.7l-9.2 9.2a2 2 0 0 1-2.8-2.8l8.5-8.5"/>',
  check: '<path d="M20 6L9 17l-5-5"/>', dcheck: '<path d="M1 13l4 4L14 7M10 15l2 2L21 7"/>',
  mappin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  pin: '<path d="M12 17v5M9 3h6l-1 7 3 3H7l3-3z"/>',
  compose: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2 2 9.3l6.9-1z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  keypad: '<circle cx="6" cy="5" r="1.4"/><circle cx="12" cy="5" r="1.4"/><circle cx="18" cy="5" r="1.4"/><circle cx="6" cy="11" r="1.4"/><circle cx="12" cy="11" r="1.4"/><circle cx="18" cy="11" r="1.4"/><circle cx="6" cy="17" r="1.4"/><circle cx="12" cy="17" r="1.4"/><circle cx="18" cy="17" r="1.4"/><circle cx="12" cy="22" r="1.4"/>',
  vm: '<circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/>',
  share: '<path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M16 6l-4-4-4 4M12 2v14"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  photo: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  alarm: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3L2 6M19 3l3 3"/>',
  stopwatch: '<circle cx="12" cy="14" r="8"/><path d="M12 14l3-4M9 2h6M12 2v4"/>',
  timer: '<path d="M6 2h12M6 22h12M7 2c0 6 5 6 5 10s-5 4-5 10M17 2c0 6-5 6-5 10s5 4 5 10"/>',
  backspace: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM18 9l-6 6M12 9l6 6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  shuffle: '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  note: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/>',
  chevd: '<path d="M6 9l6 6 6-6"/>',
};
const ic = (n, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24">${ICP[n] || ''}</svg>`;

/* ---------- ikon aplikasi (60x60) ---------- */
const APPICONS = {
  instagram: { bg: 'linear-gradient(45deg,#fdc830 0%,#f5683c 30%,#e1306c 55%,#833ab4 80%,#405de6)', svg:
    '<rect x="16" y="16" width="28" height="28" rx="8.5" fill="none" stroke="#fff" stroke-width="3"/><circle cx="30" cy="30" r="6.6" fill="none" stroke="#fff" stroke-width="3"/><circle cx="38.3" cy="21.7" r="1.9" fill="#fff"/>' },
  photos: { bg: '#f7f7f9', svg: `<g transform="translate(30 30)" style="isolation:isolate">${['#ff9500', '#ffcc00', '#a6d800', '#34c759', '#00c7be', '#32ade6', '#af52de', '#ff2d55'].map((c, i) => `<ellipse cx="0" cy="-10.5" rx="6.3" ry="10" transform="rotate(${i * 45})" fill="${c}" style="mix-blend-mode:multiply" opacity=".92"/>`).join('')}</g>` },
  mail: { bg: 'linear-gradient(180deg,#4cc0ff,#0a6cff)', svg:
    '<rect x="13" y="18" width="34" height="25" rx="4" fill="none" stroke="#fff" stroke-width="3"/><path d="M14.5 21l15.5 11 15.5-11" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>' },
  clock: { bg: '#000', svg:
    '<circle cx="30" cy="30" r="26" fill="#fff"/>' + [...Array(12)].map((_, i) => `<rect x="29.2" y="6" width="1.6" height="${i % 3 ? 3 : 5}" fill="#111" transform="rotate(${i * 30} 30 30)"/>`).join('') +
    '<rect class="ch-h" x="28.6" y="15" width="2.8" height="15.5" rx="1.4" fill="#111" style="transform-box:view-box;transform-origin:30px 30px"/><rect class="ch-m" x="29" y="9" width="2" height="21.5" rx="1" fill="#111" style="transform-box:view-box;transform-origin:30px 30px"/><rect class="ch-s" x="29.4" y="8" width="1.2" height="24" fill="#ff9500" style="transform-box:view-box;transform-origin:30px 30px"/><circle cx="30" cy="30" r="2" fill="#ff9500"/>' },
  notes: { bg: '#fffdf3', svg:
    '<rect width="60" height="17" fill="#ffd60a"/><g stroke="#e5e0cf" stroke-width="1.4"><path d="M0 28h60M0 37h60M0 46h60M0 55h60"/></g><path d="M9 8.5h12M9 11.5h22" stroke="#7a6300" stroke-width="1.6" stroke-linecap="round" opacity=".6"/>' },
  weather: { bg: 'linear-gradient(180deg,#2f7dd6,#69bdf5)', svg:
    '<circle cx="22" cy="23" r="9.5" fill="#ffd54a"/><path d="M20 44a8 8 0 0 1 1.2-15.9A11 11 0 0 1 42 31a7 7 0 0 1 1 14z" fill="#fff"/>' },
  settings: { bg: 'linear-gradient(180deg,#a2a2a8,#6d6d73)', svg:
    '<circle cx="30" cy="30" r="17" fill="none" stroke="#3c3c40" stroke-width="7" stroke-dasharray="5.3 5.3"/><circle cx="30" cy="30" r="15" fill="#d4d4d8"/><circle cx="30" cy="30" r="11" fill="none" stroke="#8d8d93" stroke-width="2"/><circle cx="30" cy="30" r="5.2" fill="#6d6d73"/>' },
  maps: { bg: '#e8efe0', svg:
    '<rect width="60" height="60" fill="#e8efe0"/><path d="M0 40L60 22v10L0 52z" fill="#fff"/><path d="M22 0l10 60h-9L13 0z" fill="#f7d36b" opacity=".85"/><path d="M46 0v60" stroke="#9fd0ff" stroke-width="8"/><path d="M0 14h60" stroke="#fff" stroke-width="3"/><circle cx="31" cy="24" r="8.5" fill="#ff3b30"/><circle cx="31" cy="24" r="3.3" fill="#fff"/><path d="M26 29l5 12 5-12z" fill="#ff3b30"/>' },
  call: { bg: 'linear-gradient(180deg,#5ee27b,#27c24a)', svg:
    '<path transform="translate(14 14) scale(1.35)" fill="#fff" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>' },
  browser: { bg: 'linear-gradient(180deg,#fafcff,#d9e8fb)', svg:
    '<circle cx="30" cy="30" r="24" fill="#fff" stroke="#2f8bf7" stroke-width="3"/><g stroke="#2f8bf7" stroke-width="1.3">' + [...Array(12)].map((_, i) => `<path d="M30 8.5v${i % 3 ? 2.5 : 4.5}" transform="rotate(${i * 30} 30 30)"/>`).join('') + '</g><g transform="rotate(45 30 30)"><path d="M30 13l6.5 17h-13z" fill="#ff3b30"/><path d="M30 47l-6.5-17h13z" fill="#d5dae1"/></g>' },
  messages: { bg: 'linear-gradient(180deg,#6df07f,#0cc03a)', svg:
    '<path fill="#fff" d="M30 12.500c-11.300 0-20.500 7.200-20.500 16.100 0 4.900 2.800 9.300 7.200 12.200-.4 2.900-1.900 5.600-3.900 7.500 3.900-.2 7.600-1.700 10.300-4 2.200.6 4.600 1 6.900 1 11.300 0 20.500-7.200 20.500-16.100S41.300 12.500 30 12.500z"/>' },
  music: { bg: 'linear-gradient(180deg,#ff6a7e,#fa233b)', svg:
    '<path d="M40.5 14.5 25 18.200v20.600a6.300 6.300 0 1 0 3 5.400V27.200l9.500-2.300v11.600a6.300 6.300 0 1 0 3 5.400z" fill="#fff"/>' },
};
function appIconHTML(id) {
  if (id === 'calendar') {
    const d = new Date();
    return `<div class="appicon cal"><b>${esc(fmt(d, { weekday: 'long' }).slice(0, 3))}</b><span>${d.getDate()}</span></div>`;
  }
  const a = APPICONS[id];
  return `<div class="appicon" style="background:${a.bg}"><svg viewBox="0 0 60 60">${a.svg}</svg></div>`;
}

/* ---------- avatar (inisial warna) ---------- */
const PAL = [['#ff885e', '#ff516a'], ['#ffcd6a', '#ffa85c'], ['#82b1ff', '#665fff'], ['#a0de7e', '#54cb68'], ['#53edd6', '#28c9b7'], ['#72d5fd', '#2a9ef1'], ['#e0a2f3', '#d669ed']];
const hash = s => [...s].reduce((a, c) => (a * 31 + c.codePointAt(0)) >>> 0, 7);
function avatar(name, size = 54) {
  const [a, b] = PAL[hash(name) % PAL.length];
  const ini = [...name.trim()].filter(c => /\p{L}|\p{N}/u.test(c)).slice(0, 1).join('').toUpperCase();
  return `<div class="av" style="width:${size}px;height:${size}px;font-size:${Math.round(size * .42)}px;background:linear-gradient(${a},${b})">${esc(ini)}</div>`;
}
const NAME_COL = ['#d6453d', '#b8740a', '#2f9e44', '#16907f', '#2b7fc4', '#a23fc0'];

/* =========================================================
   LAYAR, STATE, SKALA
   ========================================================= */
const phone = $('#phone');
let S = 1;           // skala tampilan
let currentApp = null;
const setState = s => phone.dataset.state = s;

function fit() {
  const W = 430, mobile = innerWidth <= 520;
  if (mobile) {
    S = innerWidth / W;
    phone.style.height = (innerHeight / S) + 'px';
    phone.classList.add('fullscreen');
  } else {
    phone.style.height = '932px';
    phone.classList.remove('fullscreen');
    S = Math.min((innerHeight - 40) / 932, (innerWidth - 60) / W, 1);
  }
  phone.style.setProperty('--s', S);
}
addEventListener('resize', fit); fit();

/* ---------- jam & status bar ---------- */
function tick() {
  const d = new Date();
  $('#sb-time').textContent = hhmm(d);
  $('#lock-time').textContent = hhmm(d);
  $('#lock-date').textContent = cap(fmt(d, { weekday: 'long', day: 'numeric', month: 'long' }));
  const s = d.getSeconds(), m = d.getMinutes(), hr = d.getHours() % 12;
  $$('.ch-s').forEach(e => e.style.transform = `rotate(${s * 6}deg)`);
  $$('.ch-m').forEach(e => e.style.transform = `rotate(${m * 6 + s * .1}deg)`);
  $$('.ch-h').forEach(e => e.style.transform = `rotate(${hr * 30 + m * .5}deg)`);
  checkAlarms(d);
}
if (navigator.getBattery) navigator.getBattery().then(b => {
  const up = () => $('#sb-batt-fill').setAttribute('width', Math.max(2, 20 * b.level));
  up(); b.addEventListener('levelchange', up);
}).catch(() => {});

/* ---------- LOCK SCREEN ---------- */
function buildLock() {
  const nots = [
    { app: 'messages', av: true, title: 'Marshall', body: "I'll wash my face terus ganti baju bentar ya sayang", t: '2m lalu' },
    { app: 'messages', av: true, title: 'Project W3E', body: 'Mr. Keen: See you guys tommorow', t: '5m lalu' },
    (() => {   // notifikasi acara berulang tanggal 12 → kemunculan berikutnya (hari ini atau 12 terdekat)
      const n = new Date(), d12 = new Date(n.getFullYear(), n.getMonth() + (n.getDate() > 12 ? 1 : 0), 12);
      return { app: 'calendar', title: 'Kalender', body: `${fmt(d12, { day: 'numeric', month: 'long' })} — remember the 12 things`, t: n.getDate() === 12 ? 'Hari ini' : 'Pengingat' };
    })(),
  ];
  $('#lock-notifs').innerHTML = nots.map(n => `
    <div class="notif">${notifIcon(n.app, n.title, n.av)}<div class="nt"><div class="nt-top"><b>${esc(n.title)}</b><small>${n.t}</small></div><p>${esc(n.body)}</p></div></div>`).join('');

  const lock = $('#lock');
  let y0 = null, dy = 0, moved = false;
  lock.addEventListener('pointerdown', e => {
    if (e.target.closest('.swipe-hint')) return;
    y0 = e.clientY; dy = 0; moved = false; lock.classList.add('dragging');
  });
  lock.addEventListener('pointermove', e => {
    if (y0 === null) return;
    dy = Math.min(0, (e.clientY - y0) / S);
    if (dy < -4 && !moved) { moved = true; try { lock.setPointerCapture(e.pointerId); } catch (_) {} }
    lock.style.transform = `translateY(${dy * .85}px)`;
  });
  const end = () => {
    if (y0 === null) return;
    lock.classList.remove('dragging'); lock.style.transform = '';
    if (dy < -110) showPasscode();
    y0 = null;
  };
  lock.addEventListener('pointerup', end);
  lock.addEventListener('pointercancel', end);
  lock.addEventListener('click', e => { if (!moved && e.target.closest('.notif')) showPasscode(); });
  $('#swipe-hint').addEventListener('click', showPasscode);
}

/* ---------- PASSCODE ---------- */
let code = '';
const LETTERS = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ' };
function buildPasscode() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null];
  $('#pc-pad').innerHTML = keys.map(k => k === null ? '<div class="pc-key blank"></div>' :
    `<button class="pc-key" data-k="${k}"><b>${k}</b><small>${LETTERS[k] || ''}</small></button>`).join('');
  $('#pc-pad').addEventListener('click', e => { const b = e.target.closest('.pc-key[data-k]'); if (b) press(b.dataset.k); });
  $('#pc-cancel').addEventListener('click', hidePasscode);
  addEventListener('keydown', e => {
    if (phone.dataset.state !== 'passcode') return;
    if (/^\d$/.test(e.key)) press(e.key);
    if (e.key === 'Backspace') { code = code.slice(0, -1); paintDots(); }
    if (e.key === 'Escape') hidePasscode();
  });
}
function paintDots() { $$('#pc-dots i').forEach((d, i) => d.classList.toggle('on', i < code.length)); }
function showPasscode() { code = ''; paintDots(); $('#pc-title').textContent = 'Enter Passcode'; $('#passcode').classList.add('show'); setState('passcode'); }
function hidePasscode() { $('#passcode').classList.remove('show'); setState('lock'); }
function press(k) {
  if (code.length >= 4) return;
  code += k; paintDots();
  if (code.length === 4) setTimeout(() => {
    if (code === CFG.passcode) unlock();
    else {
      const d = $('#pc-dots'); d.classList.add('shake'); $('#pc-title').textContent = 'Try Again';
      setTimeout(() => { d.classList.remove('shake'); code = ''; paintDots(); }, 520);
    }
  }, 120);
}
function unlock() {
  $('#lock').classList.add('gone');
  $('#passcode').classList.remove('show');
  setState('home');
}
function lockPhone() {
  if (currentApp) { const r = $('#app-' + currentApp); r.classList.remove('open', 'show'); currentApp = null; }
  $('#lock').classList.remove('gone'); $('#passcode').classList.remove('show'); setState('lock'); tick();
}
$('#btn-side').addEventListener('click', lockPhone);

/* ---------- HOME ---------- */
const HOME_APPS = ['instagram', 'photos', 'mail', 'calendar', 'clock', 'notes', 'weather', 'settings', 'maps'];
const DOCK = ['call', 'browser', 'messages', 'music'];
const APPS = {
  instagram: { label: 'Instagram', build: buildInstagram },
  photos:    { label: 'Photos',    build: buildPhotos, onOpen: r => { const b = $('.app-body', r); b.scrollTop = b.scrollHeight; } },
  mail:      { label: 'Mail',      build: buildMail },
  calendar:  { label: 'Calendar',  build: buildCalendar },
  clock:     { label: 'Clock',     build: buildClock },
  notes:     { label: 'Notes',     build: buildNotes },
  weather:   { label: 'Weather',   build: buildWeather },
  settings:  { label: 'Settings',  inert: true },
  maps:      { label: 'Maps',      inert: true },
  call:      { label: 'Phone',     build: buildCall, onOpen: r => r._render && r._render() },
  browser:   { label: 'Safari',    inert: true },
  messages:  { label: 'Messages',  build: buildMessages },
  music:     { label: 'Music',     build: buildMusic },
};
const icHTML = id => `<div class="ic" data-app="${id}">${appIconHTML(id)}<span>${APPS[id].label}</span></div>`;

function buildHome() {
  const note = latestNote();
  $('#home').innerHTML = `
    <div class="home-grid">
      <div class="widget w-notes" data-app="notes">
        <div class="wn-h">${ic('note')}Notes</div>
        <h4>${esc(note.title)}</h4>
        <p>${esc(note.body.slice(0, 160))}</p>
      </div>
      <div class="widget w-weather" data-app="weather">
        <div class="ww-city">${esc(CFG.city.name)} ${ic('right').replace('class="i "', 'class="i" style="width:11px;height:11px;stroke-width:3"')}</div>
        <div class="ww-t" id="ww-t">--°</div>
        <div class="ww-ic" id="ww-ic">⛅</div>
        <div class="ww-d" id="ww-d">Memuat…</div>
      </div>
      ${HOME_APPS.map(icHTML).join('')}
    </div>
    <div class="home-bottom">
      <div class="home-search">🔍 Search</div>
      <div class="dock">${DOCK.map(icHTML).join('')}</div>
    </div>`;
  $('#home').addEventListener('click', e => {
    const t = e.target.closest('[data-app]'); if (t) openApp(t.dataset.app, t);
  });
}
function latestNote() { return NOTES.map(n => ({ ...n, d: at(n.ago, n.time) })).sort((a, b) => b.d - a.d)[0]; }

function openApp(id, origin) {
  const A = APPS[id];
  if (A.inert) { const ico = origin.querySelector('.appicon'); ico.classList.remove('wiggle'); void ico.offsetWidth; ico.classList.add('wiggle'); return; }
  let root = $('#app-' + id);
  if (!root) { root = h(`<div class="app" id="app-${id}"></div>`); $('#apps').appendChild(root); A.build(root); }
  const pr = phone.getBoundingClientRect(), r = origin.getBoundingClientRect();
  root.style.transformOrigin = `${(r.left + r.width / 2 - pr.left) / S}px ${(r.top + r.height / 2 - pr.top) / S}px`;
  root.classList.add('show'); void root.offsetWidth; root.classList.add('open');
  A.onOpen && A.onOpen(root);
  currentApp = id; setState('app');
  $('#apps').style.pointerEvents = 'auto';
}
function goHome() {
  if (!currentApp) return;
  const root = $('#app-' + currentApp);
  root.classList.remove('open');
  setTimeout(() => root.classList.remove('show'), 430);
  currentApp = null; setState('home');
  $('#apps').style.pointerEvents = 'none';
}
(function homeBar() {
  const hb = $('#homebar'); let y0 = null;
  hb.addEventListener('pointerdown', e => { y0 = e.clientY; hb.setPointerCapture(e.pointerId); });
  hb.addEventListener('pointerup', e => { if (y0 !== null && (y0 - e.clientY) / S > -3) goHome(); y0 = null; });
  addEventListener('keydown', e => { if (e.key === 'Escape' && phone.dataset.state === 'app') goHome(); });
})();

/** Sheet geser dari kanan (detail post, chat, catatan, dll.) */
function push(root, html, cls = '') {
  const s = h(`<div class="sheet ${cls}">${html}</div>`);
  root.appendChild(s);
  requestAnimationFrame(() => requestAnimationFrame(() => s.classList.add('in')));
  s.back = () => { s.classList.remove('in'); setTimeout(() => s.remove(), 320); };
  $$('[data-back]', s).forEach(b => b.addEventListener('click', () => s.back()));
  return s;
}
const body = r => $('.app-body', r);

/* =========================================================
   INSTAGRAM
   ========================================================= */
function buildInstagram(root) {
  root.innerHTML = `
    <div class="ig-top">
      <div class="ig-user">${esc(CFG.username)} ${ic('down')}</div>
      <div class="ig-icons">${ic('plus')}${ic('menu')}</div>
    </div>
    <div class="app-body" style="padding-bottom:0">
      <div class="ig-prof">
        <div class="ig-av"><img src="${IG.avatar}" alt=""></div>
        <div class="ig-stats">
          <div><b>${IG.posts}</b><span>posts</span></div>
          <div><b>${IG.followers}</b><span>followers</span></div>
          <div><b>${IG.following}</b><span>following</span></div>
        </div>
      </div>
      <div class="ig-bio"><b>${esc(CFG.displayName)}</b>${IG.location ? `<span class="cat loc">${ic('mappin')}${esc(IG.location)}</span>` : ''}${IG.bio.map(l => esc(l).replace(/@(\w+)/g, '<span class="m">@$1</span>')).join('<br>')}</div>
      <div class="ig-btns"><button>Following ▾</button><button>Message</button><button class="sm">${ic('user')}</button></div>
      <div class="ig-tabs"><div class="on">${ic('grid')}</div><div>${ic('reels')}</div><div>${ic('tag')}</div></div>
      <div class="ig-grid">${IG.items.map((p, i) => `<div data-i="${i}"><img src="${p.img}" alt="" loading="lazy"></div>`).join('')}</div>
    </div>
    <div class="ig-nav">${ic('home')}${ic('search')}${ic('plus')}${ic('reels')}<img class="mini" src="${IG.avatar}" alt=""></div>`;
  $('.ig-grid', root).addEventListener('click', e => {
    const c = e.target.closest('[data-i]'); if (!c) return;
    openIgPost(root, +c.dataset.i);
  });
}
function openIgPost(root, i) {
  const p = IG.items[i];
  const cap = esc(p.caption).replace(/@(\w+)/g, '<span class="m">@$1</span>');
  const d = at(p.ago, '12:00');
  const s = push(root, `
    <div class="nav"><div class="back" data-back>${ic('left')}</div><b style="font-size:16px">Posts</b><span style="width:26px"></span></div>
    <div class="app-body" style="padding-bottom:20px">
      <div class="ig-post-h"><img src="${IG.avatar}" alt=""><div>${esc(CFG.username)}</div><div class="more">${ic('more')}</div></div>
      <img class="ig-post-img" src="${p.img}" alt="">
      <div class="ig-act">${ic('heart')}${ic('comment')}${ic('send')}<span class="sv">${ic('bookmark')}</span></div>
      <div class="ig-meta" style="color:var(--ink);font-weight:600;font-size:14px">${p.likes} likes</div>
      ${p.caption ? `<div class="ig-cap"><b>${esc(CFG.username)}</b> ${cap}</div>` : ''}
      <div class="ig-meta" style="margin-top:4px">Lihat semua komentar</div>
      <div class="ig-meta d">${esc(fmt(d, { day: 'numeric', month: 'long' }))}</div>
    </div>`, 'ig-sheet');
  s.style.setProperty('--bg', '#fff');
}

/* =========================================================
   PHOTOS
   ========================================================= */
function buildPhotos(root) {
  const total = PHOTOS.reduce((a, m) => a + m.imgs.length, 0);
  root.innerHTML = `
    <div class="nav"><span></span><span class="blue">Select</span></div>
    <div class="app-body">
      <div class="bigtitle">Library</div>
      <div class="ph-seg"><div>Years</div><div class="on">Months</div><div>Days</div><div>All</div></div>
      ${PHOTOS.map(m => {
        const d = new Date(2026, m.m, 1);
        return `<div class="ph-month">${esc(cap(fmt(d, { month: 'long', year: 'numeric' })))}<small>${CFG.city.name}</small></div>
        <div class="ph-grid ${m.imgs.length === 1 ? 'one' : ''}">${m.imgs.map(src => `<img src="${src}" data-src="${src}" data-m="${m.m}" alt="" loading="lazy">`).join('')}</div>`;
      }).join('')}
      <div class="ph-count">${total} Photos</div>
    </div>
    <div class="tabbar" style="--tc:#0a84ff"><button class="on">${ic('photo')}Library</button><button>${ic('heart')}For You</button><button>${ic('folder')}Albums</button><button>${ic('search')}Search</button></div>`;
  body(root).addEventListener('click', e => {
    const im = e.target.closest('img[data-src]'); if (!im) return;
    const d = new Date(2026, +im.dataset.m, 15);
    push(root, `
      <div class="nav"><div class="back" data-back>${ic('left')}</div>
        <div class="ttl"><b>${esc(fmt(d, { day: 'numeric', month: 'long', year: 'numeric' }))}</b><span>${CFG.city.name}</span></div><span style="width:26px"></span></div>
      <div class="stage"><img src="${im.dataset.src}" alt=""></div>
      <div class="ph-tools">${ic('share')}${ic('heart')}${ic('info')}${ic('trash')}</div>`, 'ph-view').style.setProperty('--bg', '#fff');
  });
}

/* =========================================================
   MAIL
   ========================================================= */
function buildMail(root) {
  root.innerHTML = `
    <div class="nav"><div class="back">${ic('left')}Mailboxes</div><span class="blue">Edit</span></div>
    <div class="app-body">
      <div class="bigtitle">Inbox</div>
      <div class="searchbar">${ic('search')}Search</div>
      ${MAILS.map(m => `
        <div class="ml-row">
          <div class="ml-dot">${m.unread ? '<i></i>' : ''}</div>
          <div class="ml-main">
            <div class="ml-top"><b>${esc(m.from)}</b><span>${esc(m.when || listTime(at(m.ago, m.time)))} ${ic('right').replace('class="i "', 'class="i" style="width:14px;height:14px;stroke:#c7c7cc"')}</span></div>
            ${m.addr ? `<div class="ml-addr">${esc(m.addr)}</div>` : ''}
            <div class="ml-sub">${esc(m.subj)}</div>
            <div class="ml-pre">${esc(m.pre)}</div>
          </div>
        </div>`).join('')}
    </div>
    <div class="ml-foot"><span class="blue">${ic('list')}</span><div>Updated Just Now<br><small style="color:var(--dim)">${MAILS.filter(m => m.unread).length} Unread</small></div><span class="blue">${ic('compose')}</span></div>`;
}

/* =========================================================
   CALENDAR (bisa dipakai)
   ========================================================= */
function buildCalendar(root) {
  const now = new Date();
  const st = { y: now.getFullYear(), m: now.getMonth(), sel: new Date(now.getFullYear(), now.getMonth(), now.getDate()) };
  root.innerHTML = `
    <div class="cal-head"><div class="mn"><span id="cal-m"></span><b id="cal-y" style="font-weight:700"></b></div>
      <div class="cal-nav"><span id="cal-prev">${ic('left')}</span><span id="cal-today" style="font-size:16px;font-weight:600;align-self:center">Hari ini</span><span id="cal-next">${ic('right')}</span></div></div>
    <div class="cal-dow">${['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'].map(d => `<div>${d}</div>`).join('')}</div>
    <div class="cal-days" id="cal-days"></div>
    <div class="cal-ev" id="cal-ev"></div>`;
  // Acara berulang (data nyata): repeat 'monthly' = muncul setiap bulan pada tanggal `day` (tanpa jam = sepanjang hari)
  const CAL_EVENTS = [
    { id: 'remember', title: 'remember the 12 things', allDay: true, repeat: 'monthly', day: 12, sub: () => 'Setiap bulan tanggal 12' },
    { id: 'important', title: 'The important thing', allDay: true, repeat: 'monthly', day: 12, sub: () => 'Setiap bulan tanggal 12' },
  ];
  const events = d => CAL_EVENTS.filter(e => e.repeat === 'monthly' && d.getDate() === Math.min(e.day, new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()))
    .map(e => ({ id: e.id, title: e.title, t: e.allDay ? 'Sepanjang hari' : e.time, sub: e.sub(d), repeat: 'Setiap bulan' }));
  function render() {
    $('#cal-m', root).textContent = cap(fmt(new Date(st.y, st.m, 1), { month: 'long' }));
    $('#cal-y', root).textContent = st.y;
    const first = (new Date(st.y, st.m, 1).getDay() + 6) % 7;
    const dim = new Date(st.y, st.m + 1, 0).getDate(), prevDim = new Date(st.y, st.m, 0).getDate();
    let html = '';
    for (let i = 0; i < 42; i++) {
      const dn = i - first + 1; let d, out = false;
      if (dn < 1) { d = new Date(st.y, st.m - 1, prevDim + dn); out = true; }
      else if (dn > dim) { d = new Date(st.y, st.m + 1, dn - dim); out = true; }
      else d = new Date(st.y, st.m, dn);
      if (i >= 35 && out) break;
      const isT = d.toDateString() === now.toDateString(), isS = d.toDateString() === st.sel.toDateString();
      html += `<div class="${out ? 'out ' : ''}${isT ? 'today ' : ''}${isS ? 'sel' : ''}" data-d="${+d}"><em>${d.getDate()}</em>${events(d).length ? '<i></i>' : ''}</div>`;
    }
    $('#cal-days', root).innerHTML = html;
    const evs = events(st.sel);
    $('#cal-ev', root).innerHTML = `<h5>${esc(cap(fmt(st.sel, { weekday: 'long', day: 'numeric', month: 'long' })))}</h5>` +
      (evs.length ? evs.map(e => `<div class="ev" data-ev="${e.id}"><i></i><div><b>${esc(e.title)}</b><span>${e.t} · ${e.sub}</span></div></div>`).join('') : '<div class="ev-none">Tidak ada acara</div>');
  }
  root.addEventListener('click', e => {
    const ev = e.target.closest('[data-ev]');
    if (ev) {                                       // detail acara
      const x = events(st.sel).find(q => q.id === ev.dataset.ev); if (!x) return;
      push(root, `<div class="nav"><div class="back" data-back>${ic('left')}Kembali</div><b style="font-size:17px">Detail Acara</b><span style="width:70px"></span></div>
        <div class="cal-det"><h2>${esc(x.title)}</h2><p>${esc(cap(fmt(st.sel, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })))}</p>
          <div class="row"><span>Waktu</span><b>${x.t}</b></div><div class="row"><span>Ulangi</span><b>${x.repeat}</b></div></div>`, 'cal-detail');
      return;
    }
    const d = e.target.closest('[data-d]');
    if (d) { st.sel = new Date(+d.dataset.d); st.y = st.sel.getFullYear(); st.m = st.sel.getMonth(); render(); return; }
    if (e.target.closest('#cal-prev')) { st.m--; if (st.m < 0) { st.m = 11; st.y--; } render(); }
    if (e.target.closest('#cal-next')) { st.m++; if (st.m > 11) { st.m = 0; st.y++; } render(); }
    if (e.target.closest('#cal-today')) { st.y = now.getFullYear(); st.m = now.getMonth(); st.sel = new Date(now.getFullYear(), now.getMonth(), now.getDate()); render(); }
  });
  render();
}

/* =========================================================
   CLOCK (World clock, Alarm, Stopwatch, Timer — semuanya jalan)
   ========================================================= */
const alarms = [
  { t: '05:30', label: 'Bangun', on: true },
  { t: '07:15', label: 'Berangkat kerja', on: false },
];
let alarmFired = '';
function beep(n = 3) {
  try {
    const ac = beep.ac || (beep.ac = new (window.AudioContext || window.webkitAudioContext)());
    if (ac.state === 'suspended') ac.resume();
    for (let i = 0; i < n; i++) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(ac.destination);
      const t = ac.currentTime + i * .4; g.gain.setValueAtTime(.2, t); g.gain.exponentialRampToValueAtTime(.001, t + .3);
      o.start(t); o.stop(t + .32);
    }
  } catch (e) {}
}
function banner(text) {
  const b = h(`<div class="banner">${esc(text)}</div>`); $('#screen').appendChild(b);
  b.style.zIndex = 200; setTimeout(() => b.remove(), 5000);
}
function checkAlarms(d) {
  if (d.getSeconds() !== 0) return;
  const key = hhmm(d) + d.getDate();
  if (alarmFired === key) return;
  const a = alarms.find(x => x.on && x.t === hhmm(d));
  if (a) { alarmFired = key; beep(4); banner('⏰ ' + a.label + ' — ' + a.t); }
}

function buildClock(root) {
  const zones = [['Bandung', 'Asia/Jakarta'], ['Tokyo', 'Asia/Tokyo'], ['Seoul', 'Asia/Seoul'], ['London', 'Europe/London'], ['New York', 'America/New_York']];
  let tab = 'world', swT = null, swStart = 0, swAcc = 0, laps = [], tmT = null, tmEnd = 0, tmLeft = 0;
  root.innerHTML = `<div class="app-body" id="ck-body" style="padding-bottom:0"></div>
    <div class="tabbar">
      <button data-t="world" class="on">${ic('globe')}World Clock</button><button data-t="alarm">${ic('alarm')}Alarm</button>
      <button data-t="sw">${ic('stopwatch')}Stopwatch</button><button data-t="timer">${ic('timer')}Timer</button></div>`;
  const B = $('#ck-body', root);
  const f2 = n => pad(Math.floor(n));
  const swFmt = ms => `${f2(ms / 60000)}:${f2(ms / 1000 % 60)}.${f2(ms % 1000 / 10)}`;
  const tmFmt = s => `${f2(s / 3600)}:${f2(s / 60 % 60)}:${f2(s % 60)}`;
  const zoneInfo = tz => {
    const now = new Date(), loc = new Date(now.toLocaleString('en-US', { timeZone: tz }));
    const diff = Math.round((loc - new Date(now.toLocaleString('en-US'))) / 36e5);
    const dd = dayDiff(new Date(now.toLocaleString('en-US')), loc);
    return { time: fmt(now, { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: tz }).replace('.', ':'), day: dd === 0 ? 'Hari ini' : dd > 0 ? 'Besok' : 'Kemarin', diff: (diff >= 0 ? '+' : '') + diff + ' jam' };
  };
  function render() {
    clearInterval(render.iv);
    if (tab === 'world') {
      const paint = () => B.innerHTML = `<div class="nav"><span class="ck-plus" style="font-size:17px;color:#ff9f0a">Edit</span><span class="ck-plus">+</span></div><div class="ck-title">World Clock</div>` +
        zones.map(([n, tz]) => { const z = zoneInfo(tz); return `<div class="wc"><div><small>${z.day}, ${z.diff}</small><b>${n}</b></div><div class="t">${z.time}</div></div>`; }).join('');
      paint(); render.iv = setInterval(paint, 5000);
    }
    if (tab === 'alarm') {
      B.innerHTML = `<div class="nav"><span class="ck-plus" style="font-size:17px">Edit</span><span class="ck-plus" id="al-add">+</span></div><div class="ck-title">Alarm</div>` +
        alarms.map((a, i) => `<div class="al ${a.on ? '' : 'off'}"><div><div class="t">${a.t}</div><small>${esc(a.label)}, Setiap hari</small></div><div class="sw ${a.on ? 'on' : ''}" data-i="${i}"></div></div>`).join('');
      $$('.sw', B).forEach(s => s.onclick = () => { alarms[+s.dataset.i].on = !alarms[+s.dataset.i].on; render(); });
      $('#al-add', B).onclick = () => {
        const v = prompt('Jam alarm (HH:MM, 24 jam)', '06:00');
        if (v && /^([01]?\d|2[0-3]):[0-5]\d$/.test(v.trim())) { const [a, b] = v.trim().split(':'); alarms.push({ t: pad(a) + ':' + b, label: 'Alarm', on: true }); alarms.sort((x, y) => x.t.localeCompare(y.t)); render(); }
      };
    }
    if (tab === 'sw') {
      const run = !!swT;
      B.innerHTML = `<div class="ck-title" style="padding-top:20px">Stopwatch</div><div class="sw-time" id="sw-t">${swFmt(run ? performance.now() - swStart + swAcc : swAcc)}</div>
        <div class="sw-btns"><button class="rbtn ${run ? '' : 'dim'}" id="sw-l">${run ? 'Lap' : 'Reset'}</button><button class="rbtn ${run ? 'r' : 'g'}" id="sw-s">${run ? 'Stop' : 'Start'}</button></div>
        <div class="laps">${laps.map((l, i) => `<div><span>Lap ${laps.length - i}</span><span>${swFmt(l)}</span></div>`).join('')}</div>`;
      const upd = () => { const e = $('#sw-t', B); if (e) e.textContent = swFmt(performance.now() - swStart + swAcc); };
      if (run) render.iv = setInterval(upd, 31);
      $('#sw-s', B).onclick = () => { if (swT) { swAcc += performance.now() - swStart; swT = null; } else { swStart = performance.now(); swT = true; } render(); };
      $('#sw-l', B).onclick = () => { if (swT) { const cur = performance.now() - swStart + swAcc; laps.unshift(cur - laps.reduce((a, b) => a + b, 0)); } else { swAcc = 0; laps = []; } render(); };
    }
    if (tab === 'timer') {
      if (tmT) {
        B.innerHTML = `<div class="ck-title" style="padding-top:20px">Timer</div><div class="tm-big" id="tm-t">${tmFmt(Math.ceil(tmLeft))}</div>
          <div class="sw-btns"><button class="rbtn" id="tm-c">Cancel</button><button class="rbtn o" id="tm-p">Pause</button></div>`;
        const upd = () => {
          tmLeft = Math.max(0, (tmEnd - performance.now()) / 1000);
          const e = $('#tm-t', B); if (e) e.textContent = tmFmt(Math.ceil(tmLeft));
          if (tmLeft <= 0) { clearInterval(tmInt); tmT = null; beep(5); banner('⏱️ Timer selesai'); if (tab === 'timer') render(); }
        };
        clearInterval(tmInt); var tmInt = setInterval(upd, 200); render.iv = tmInt;
        $('#tm-c', B).onclick = () => { tmT = null; render(); };
        $('#tm-p', B).onclick = () => { tmT = null; tmPaused = tmLeft; render(); };
      } else {
        const hs = tmPaused ? Math.floor(tmPaused / 3600) : 0, ms = tmPaused ? Math.floor(tmPaused / 60 % 60) : 1, ss = tmPaused ? Math.floor(tmPaused % 60) : 0;
        const opts = (n, v) => [...Array(n)].map((_, i) => `<option ${i === v ? 'selected' : ''}>${i}</option>`).join('');
        B.innerHTML = `<div class="ck-title" style="padding-top:20px">Timer</div>
          <div class="tm-sel"><label>jam<select id="tm-h">${opts(24, hs)}</select></label><label>menit<select id="tm-m">${opts(60, ms)}</select></label><label>detik<select id="tm-s">${opts(60, ss)}</select></label></div>
          <div class="sw-btns"><button class="rbtn dim">Cancel</button><button class="rbtn g" id="tm-go">Start</button></div>`;
        $('#tm-go', B).onclick = () => {
          const t = +$('#tm-h', B).value * 3600 + +$('#tm-m', B).value * 60 + +$('#tm-s', B).value;
          if (!t) return; tmPaused = 0; tmLeft = t; tmEnd = performance.now() + t * 1000; tmT = true; render();
        };
      }
    }
  }
  let tmPaused = 0;
  $('.tabbar', root).addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('.tabbar button', root).forEach(x => x.classList.toggle('on', x === b)); tab = b.dataset.t; render();
  });
  render();
}

/* =========================================================
   NOTES
   ========================================================= */
function buildNotes(root) {
  const items = NOTES.map(n => ({ ...n, d: at(n.ago, n.time) })).sort((a, b) => b.d - a.d);
  const sec = d => { const k = dayDiff(d, new Date()); return k <= 0 ? 'Hari Ini' : k <= 7 ? '7 Hari Terakhir' : k <= 30 ? '30 Hari Terakhir' : cap(fmt(d, { month: 'long', year: 'numeric' })); };
  const groups = []; items.forEach(n => { const s = sec(n.d); let g = groups.find(x => x.s === s); if (!g) groups.push(g = { s, l: [] }); g.l.push(n); });
  root.innerHTML = `
    <div class="nav"><div class="back" style="color:#e0a100">${ic('left')}Folders</div><span style="color:#e0a100">${ic('more')}</span></div>
    <div class="app-body">
      <div class="bigtitle">Notes</div>
      <div class="searchbar">${ic('search')}Search</div>
      ${groups.map(g => `<div class="nt-sec">${g.s}</div><div class="nt-list">${g.l.map(n => `
        <div class="nt-item" data-id="${n.id}"><b>${esc(n.title)}</b>
          <p><span>${n.d.toDateString() === new Date().toDateString() ? hhmm(n.d) : fmt(n.d, { day: '2-digit', month: '2-digit', year: 'numeric' })}</span><em>${esc(n.body.replace(/\s+/g, ' ').slice(0, 60))}</em></p>
          <div class="nt-folder">${ic('folder')}Notes</div></div>`).join('')}</div>`).join('')}
    </div>
    <div class="nt-foot"><span>${items.length} Notes</span><b></b><b></b><b style="color:#e0a100">${ic('compose')}</b></div>`;
  body(root).addEventListener('click', e => {
    const it = e.target.closest('.nt-item'); if (!it) return;
    const n = items.find(x => x.id === it.dataset.id);
    push(root, `
      <div class="nav"><div class="back" data-back style="color:#e0a100">${ic('left')}Notes</div><span style="color:#e0a100;display:flex;gap:18px">${ic('share')}${ic('more')}</span></div>
      <div class="nt-doc">
        <div class="dt">${esc(fmt(n.d, { day: 'numeric', month: 'long', year: 'numeric' }))} pukul ${esc(hhmm(n.d).replace(':', '.'))}</div>
        <h1 contenteditable="true" spellcheck="false">${esc(n.title)}</h1>
        <div class="bd ${n.mono ? 'mono' : ''}" contenteditable="true" spellcheck="false">${esc(n.body)}</div>
      </div>
      <div class="nt-tools">${ic('check')}${ic('clip')}${ic('compose')}${ic('compose')}</div>`, 'nt-sheet').style.setProperty('--bg', '#fff');
  });
}

/* =========================================================
   WEATHER (data asli dari Open-Meteo, lokasi Canary Wharf, London)
   ========================================================= */
const WMAP = { 0: ['☀️', 'Cerah'], 1: ['🌤️', 'Cerah Berawan'], 2: ['⛅', 'Berawan Sebagian'], 3: ['☁️', 'Berawan'], 45: ['🌫️', 'Berkabut'], 48: ['🌫️', 'Berkabut'],
  51: ['🌦️', 'Gerimis'], 53: ['🌦️', 'Gerimis'], 55: ['🌧️', 'Gerimis Lebat'], 56: ['🌧️', 'Gerimis Beku'], 57: ['🌧️', 'Gerimis Beku'], 61: ['🌧️', 'Hujan Ringan'], 63: ['🌧️', 'Hujan'], 65: ['🌧️', 'Hujan Lebat'],
  66: ['🌧️', 'Hujan Beku'], 67: ['🌧️', 'Hujan Beku'], 80: ['🌦️', 'Hujan Lokal'], 81: ['🌧️', 'Hujan Lokal'], 82: ['⛈️', 'Hujan Deras'], 95: ['⛈️', 'Badai Petir'], 96: ['⛈️', 'Badai Petir'], 99: ['⛈️', 'Badai Petir'] };
const wx = (c, day = true) => (c === 0 || c === 1) && !day ? ['🌙', 'Cerah'] : (WMAP[c] || ['🌡️', '—']);
let WX = null;
function fallbackWx() {
  const now = new Date(), t0 = new Date(now); t0.setMinutes(0, 0, 0);
  const iso = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:00`;
  const hrs = [...Array(48)].map((_, i) => new Date(t0.getTime() + i * 36e5));
  const temp = d => Math.round(10 + 3 * Math.sin((d.getHours() - 9) / 24 * 2 * Math.PI));
  return { off: true,
    current: { time: iso(t0), temperature_2m: temp(t0), apparent_temperature: temp(t0) + 2, relative_humidity_2m: 82, weather_code: 3, wind_speed_10m: 14, surface_pressure: 1012, visibility: 10000, is_day: +(t0.getHours() > 5 && t0.getHours() < 18) },
    hourly: { time: hrs.map(iso), temperature_2m: hrs.map(temp), weather_code: hrs.map(() => 3), is_day: hrs.map(d => +(d.getHours() > 5 && d.getHours() < 18)) },
    daily: { time: [...Array(10)].map((_, i) => iso(new Date(t0.getTime() + i * 864e5)).slice(0, 10)), weather_code: [3, 61, 3, 2, 3, 61, 2, 3, 2, 3], temperature_2m_max: [13, 12, 12, 14, 13, 11, 12, 13, 12, 12], temperature_2m_min: [8, 8, 7, 9, 8, 6, 7, 8, 7, 7], uv_index_max: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1] } };
}
function loadWeather() {
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${CFG.city.lat}&longitude=${CFG.city.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure,visibility,is_day&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&timezone=${encodeURIComponent(CFG.city.tz)}&forecast_days=10`;
  return fetch(u).then(r => r.json()).then(j => { if (!j.current) throw 0; WX = j; }).catch(() => { WX = fallbackWx(); }).then(() => { paintWidget(); const r = $('#app-weather'); if (r) paintWeather(r); });
}
function paintWidget() {
  if (!WX) return; const c = WX.current, w = wx(c.weather_code, c.is_day);
  $('#ww-t').textContent = Math.round(c.temperature_2m) + '°'; $('#ww-ic').textContent = w[0];
  $('#ww-d').textContent = `${w[1]} · T:${Math.round(WX.daily.temperature_2m_max[0])}° R:${Math.round(WX.daily.temperature_2m_min[0])}°`;
}
function buildWeather(root) {
  root.innerHTML = `<div class="app-body" id="wx-body"><div class="wx-load">Memuat cuaca…</div></div>`;
  if (WX) paintWeather(root);
}
function paintWeather(root) {
  const c = WX.current, d = WX.daily, w = wx(c.weather_code, c.is_day);
  const idx = Math.max(0, WX.hourly.time.findIndex(t => t >= c.time.slice(0, 13) + ':00'));
  const hours = WX.hourly.time.slice(idx, idx + 24).map((t, i) => ({ t, T: WX.hourly.temperature_2m[idx + i], w: wx(WX.hourly.weather_code[idx + i], WX.hourly.is_day[idx + i]) }));
  const lo = Math.min(...d.temperature_2m_min), hi = Math.max(...d.temperature_2m_max);
  const uv = Math.round(d.uv_index_max[0]);
  const uvL = uv < 3 ? 'Rendah' : uv < 6 ? 'Sedang' : uv < 8 ? 'Tinggi' : uv < 11 ? 'Sangat Tinggi' : 'Ekstrem';
  $('#wx-body', root).innerHTML = `
    <div class="wx-top"><h2>${esc(CFG.city.name)}</h2><div class="wx-reg">${esc(CFG.city.region)}</div><div class="big">${Math.round(c.temperature_2m)}°</div>
      <div class="cond">${w[0]} ${w[1]}</div><div class="hl">T:${Math.round(d.temperature_2m_max[0])}°  R:${Math.round(d.temperature_2m_min[0])}°</div></div>
    <div class="wx-card"><div class="hd">${ic('clock')} Prakiraan per jam</div>
      <div class="wx-hours">${hours.map((x, i) => `<div><span>${i === 0 ? 'Sekarang' : x.t.slice(11, 13)}</span><em>${x.w[0]}</em>${Math.round(x.T)}°</div>`).join('')}</div></div>
    <div class="wx-card"><div class="hd">${ic('clock')} Prakiraan 10 hari</div>
      ${d.time.map((t, i) => { const dt = new Date(t + 'T12:00'); const l = (d.temperature_2m_min[i] - lo) / (hi - lo) * 100, r = (d.temperature_2m_max[i] - lo) / (hi - lo) * 100;
        return `<div class="wx-day"><span>${i === 0 ? 'Hari ini' : cap(fmt(dt, { weekday: 'short' }))}</span><span>${wx(d.weather_code[i])[0]}</span><span class="lo">${Math.round(d.temperature_2m_min[i])}°</span><div class="bar"><i style="left:${l}%;width:${Math.max(8, r - l)}%"></i></div><span class="hi">${Math.round(d.temperature_2m_max[i])}°</span></div>`; }).join('')}</div>
    <div class="wx-grid">
      <div class="wx-card"><div class="hd">☀️ Indeks UV</div><div class="v">${uv}</div><div class="s">${uvL}</div></div>
      <div class="wx-card"><div class="hd">💨 Angin</div><div class="v">${Math.round(c.wind_speed_10m)}<small style="font-size:15px"> km/j</small></div><div class="s">Kecepatan angin saat ini</div></div>
      <div class="wx-card"><div class="hd">🌡️ Terasa seperti</div><div class="v">${Math.round(c.apparent_temperature)}°</div><div class="s">${c.apparent_temperature > c.temperature_2m ? 'Terasa lebih hangat' : 'Mirip suhu sebenarnya'}</div></div>
      <div class="wx-card"><div class="hd">💧 Kelembapan</div><div class="v">${Math.round(c.relative_humidity_2m)}%</div><div class="s">Titik embun sekitar ${Math.round(c.temperature_2m - (100 - c.relative_humidity_2m) / 5)}°</div></div>
      <div class="wx-card"><div class="hd">👁️ Jarak pandang</div><div class="v">${Math.round((c.visibility || 10000) / 1000)}<small style="font-size:15px"> km</small></div><div class="s">${(c.visibility || 10000) >= 10000 ? 'Sangat jernih' : 'Agak berkabut'}</div></div>
      <div class="wx-card"><div class="hd">⏲️ Tekanan</div><div class="v">${Math.round(c.surface_pressure)}<small style="font-size:15px"> hPa</small></div><div class="s">Tekanan udara</div></div>
    </div>${WX.off ? '<div class="wx-load" style="font-size:12px">Offline — menampilkan data contoh</div>' : ''}`;
}

/* =========================================================
   PHONE / CALL
   ========================================================= */
function buildCall(root) {
  let tab = 'recents', filter = 'all', num = '';
  root.innerHTML = `<div class="app-body" id="cl-body" style="padding-bottom:0"></div>
    <div class="tabbar" style="--tc:#0a84ff"><button data-t="fav">${ic('star')}Favorites</button><button data-t="recents" class="on">${ic('clock')}Recents</button><button data-t="contacts">${ic('users')}Contacts</button><button data-t="keypad">${ic('keypad')}Keypad</button><button data-t="vm">${ic('vm')}Voicemail</button></div>`;
  const B = $('#cl-body', root);
  function render() {
    if (tab === 'recents') {
      const list = [...CALL_LOGS].sort((a, b) => b.d - a.d).filter(l => filter === 'all' || l.type === 'missed');
      B.innerHTML = `<div class="cl-nav"><span class="blue">Edit</span><div class="cl-seg" id="cl-seg"><div data-f="all" class="${filter === 'all' ? 'on' : ''}">All</div><div data-f="missed" class="${filter === 'missed' ? 'on' : ''}">Missed</div></div><span style="width:30px"></span></div>
        <div class="bigtitle">Recents</div>` +
        list.map(l => `<div class="cl-row ${l.type === 'missed' ? 'miss' : ''}">
          <svg class="i ar" viewBox="0 0 24 24" style="${l.type === 'missed' ? 'color:#e5384f' : ''}">${l.type === 'out' ? '<path d="M7 17L17 7M8 7h9v9"/>' : '<path d="M17 7L7 17M16 17H7V8"/>'}</svg>
          <div class="nm"><b>${esc(l.name)}${l.n > 1 ? ` (${l.n})` : ''}</b><span>mobile${l.type === 'out' ? ' · keluar' : l.type === 'in' ? ' · masuk' : ' · tidak terjawab'}</span></div>
          <div class="tm">${listTime(l.d)}</div>${ic('info', 'inf')}</div>`).join('');
      $('#cl-seg', B).onclick = e => { const f = e.target.dataset.f; if (f) { filter = f; render(); } };
    }
    if (tab === 'fav') B.innerHTML = `<div class="cl-nav"><span class="blue">Edit</span><span></span><span class="blue" style="font-size:28px">+</span></div><div class="bigtitle">Favorites</div>
        <div class="cl-ct" data-n="Marshall">${avatarOf('Marshall', 40)}<span>Marshall</span></div>`;
    if (tab === 'contacts') {
      let last = '';
      B.innerHTML = `<div class="cl-nav"><span class="blue">Lists</span><span></span><span class="blue" style="font-size:28px">+</span></div><div class="bigtitle">Contacts</div><div class="searchbar">${ic('search')}Search</div>` +
        CONTACTS.map(n => { const L = n[0].toUpperCase(); const s = L !== last ? `<div class="cl-sec">${L}</div>` : ''; last = L; return `${s}<div class="cl-ct" data-n="${n}">${avatarOf(n, 36)}<span>${esc(n)}</span></div>`; }).join('');
    }
    if (tab === 'keypad') {
      const L = { 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ', 0: '+' };
      B.innerHTML = `<div class="kp-num" id="kp-n">${esc(num)}</div><div class="kp-pad">${['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(k => `<button class="kp-key" data-k="${k}"><b>${k}</b><small>${L[k] || ''}</small></button>`).join('')}<span></span><button class="kp-call" id="kp-go">${PH}</button><button class="kp-del" id="kp-d">${num ? ic('backspace') : ''}</button></div>`;
      B.onclick = e => {
        const k = e.target.closest('[data-k]'); if (k) { num += k.dataset.k; render(); return; }
        if (e.target.closest('#kp-d')) { num = num.slice(0, -1); render(); }
      };
    }
    if (tab === 'vm') B.innerHTML = `<div class="cl-nav"><span></span><span></span><span></span></div><div class="bigtitle">Voicemail</div><div class="vm-empty">Tidak Ada Voicemail</div>`;
  }
  $('.tabbar', root).onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('.tabbar button', root).forEach(x => x.classList.toggle('on', x === b)); tab = b.dataset.t; render(); };
  root._render = render;
  render();
}

/* =========================================================
   MESSAGES (iMessage) — data & parser (data lama Telegram dipakai ulang)
   ========================================================= */
ICP.x = '<path d="M18 6L6 18M6 6l12 12"/>';
Object.assign(ICP, {
  ms_filter: '<circle cx="12" cy="12" r="9.500"/><path d="M7.500 9h9M9.500 12h5M11 15h2"/>',
  ms_compose: '<path d="M12 4H7a3.500 3.500 0 0 0-3.500 3.500v9.500A3.500 3.500 0 0 0 7 20.500h9.500a3.500 3.500 0 0 0 3.500-3.500v-5"/><path d="M18.200 3.300a1.900 1.900 0 0 1 2.700 2.700L12 15l-3.800.9.900-3.800z"/>',
  ms_wave: '<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10.500v3"/>',
  ms_up: '<path d="M12 19V5M5.500 11.500L12 5l6.500 6.500"/>',
  ms_pin: '<path d="M9 3.500h6l-1 6 3 3v1.500H7V12.500l3-3zM12 14v7"/>',
  ms_check: '<path d="M4.500 12.500l5 5 10-11"/>',
  ms_camera: '<path d="M3 8.500A2.500 2.500 0 0 1 5.500 6h2l1.500-2h6l1.500 2h2A2.500 2.500 0 0 1 21 8.500v9a2.500 2.500 0 0 1-2.500 2.500h-13A2.500 2.500 0 0 1 3 17.500z"/><circle cx="12" cy="13" r="3.800"/>',
  ms_photo: '<rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="9.500" r="1.700"/><path d="M3.500 17l5-4.500 4 3.500 3-2.500 5 4"/>',
  ms_loc: '<path d="M12 21s7-6.100 7-11.500a7 7 0 0 0-14 0C5 14.900 12 21 12 21z"/><circle cx="12" cy="9.500" r="2.500"/>',
});

/** Data percakapan (CHATS di atas) → c.msgs. Jam tiap pesan = jam awal hari + 1 menit per pesan (perkiraan). */
const lastOf = c => { const m = c.msgs[c.msgs.length - 1]; return { t: m.t, text: m.type === 'img' ? 'Photo' : m.text, out: m.out, name: m.name, fixed: m.fixed }; };
(function buildChats() {
  const now = new Date();
  CHATS.forEach((c, idx) => {
    c.order = idx; c.pinned = MSG_PINNED.includes(c.id); c.msgs = [];
    if (c.group) c.sub = c.members.length + ' people';
    const mk = (who, body, t, fixed) => {
      const img = typeof body === 'object';
      return { who, type: img ? 'img' : 'text', text: img ? '' : body, slot: img ? body.img : '', src: '', t, out: who === MSG_ME, name: c.group ? who : '', fixed: !!fixed };
    };
    if (c.preview) { const p = c.preview; c.msgs.push(mk(p.from, p.text, at(p.ago, p.time))); }
    (c.days || []).forEach(day => {
      let base, fixed = false;
      if (day.when.date) {            // tanggal tetap, tanpa tahun: tahun hanya dipakai internal untuk urutan
        const [mo, d] = day.when.date; let y = now.getFullYear(); base = new Date(y, mo - 1, d, 9, 0); if (base > now) base = new Date(y - 1, mo - 1, d, 9, 0); fixed = true;
      } else {
        const [H, M] = day.when.time.split(':').map(Number); base = new Date(now); base.setDate(base.getDate() - day.when.ago); base.setHours(H, M, 0, 0);
      }
      day.msgs.forEach(([who, body], k) => c.msgs.push(mk(who, body, new Date(base.getTime() + k * (day.step || 60000)), fixed)));   // jam sesuai permintaan (Marshall: ≈14:37 / ≈14:46), tidak dipotong ke jam sekarang
    });
    c.last = lastOf(c);
  });
})();
const chatById = id => CHATS.find(c => c.id === id);
function avatarSrc(name) {
  const k = String(name).toLowerCase();
  for (const n in AVATARS) if (n.toLowerCase() === k) return AVATARS[n];
  const al = AVATAR_ALIAS[name]; return al ? avatarSrc(al) : null;
}
/** Avatar percakapan: grup = gabungan foto anggota (2x2), selain itu foto/inisial kontak */
function chatAvatar(c, size) {
  if (!c.group) return avatarOf(c.name, size);
  const mem = c.members.filter(n => n !== MSG_ME).slice(0, 4), h2 = Math.round(size / 2);
  return `<div class="av ms-grp" style="width:${size}px;height:${size}px">${mem.map(n => avatarOf(n, h2)).join('')}</div>`;
}
/** Avatar: foto kalau ada, kalau tidak inisial berwarna */
const SIL_SVG = '<svg viewBox="0 0 24 24"><circle cx="12" cy="8.800" r="4.300" fill="#fff"/><path d="M3.800 23c0-5 3.600-8 8.200-8s8.200 3 8.200 8z" fill="#fff"/></svg>';
function avatarOf(name, size) {
  if (CHATS.some(c => c.plain && c.name === name))     // tanpa foto → siluet kontak bawaan iOS
    return `<div class="av ms-sil" style="width:${size}px;height:${size}px">${SIL_SVG}</div>`;
  const base = avatar(name, size), src = avatarSrc(name);
  if (!src) return base;
  return base.replace(/<\/div>$/, `<img class="av-img" src="${src}" alt="" onerror="this.remove()"></div>`);
}

const MSG = { root: null, open: null, add: null, typing: null, q: '', filter: 'all', edit: false, sel: new Set() };
const MSG_KEY = 'shabey-iphone-messages-v1';
const MSG_FILTERS = [['all', 'All Messages', 'Messages'], ['known', 'Known Senders', 'Known Senders'], ['unread', 'Unread Messages', 'Unread Messages']];

/* ---------- format waktu (gaya iOS) ---------- */
const mTime = d => pad(d.getHours()) + '.' + pad(d.getMinutes());
const mWeekday = d => new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(d);
function mListTime(d, fixed) {
  if (fixed) return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(d);
  const df = dayDiff(d, new Date());
  if (df <= 0) return mTime(d);
  if (df === 1) return 'Yesterday';
  if (df < 7) return mWeekday(d);
  return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).format(d);
}
function mStamp(d, fixed) {                // pemisah waktu di dalam chat → [tebal, biasa]
  if (fixed) return [new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(d), ''];   // tanggal tetap: tanpa tahun & tanpa jam
  const df = dayDiff(d, new Date());
  if (df <= 0) return ['Today', mTime(d)];
  if (df === 1) return ['Yesterday', mTime(d)];
  if (df < 7) return [mWeekday(d), mTime(d)];
  return [new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(d), mTime(d)];
}

/* ---------- penyimpanan (satu key localStorage; hanya pesan yang diketik pengguna) ---------- */
const mStore = {
  read() { try { return JSON.parse(localStorage.getItem(MSG_KEY)) || { sent: {}, chats: {} }; } catch (e) { return { sent: {}, chats: {} }; } },
  write(o) { try { localStorage.setItem(MSG_KEY, JSON.stringify(o)); return true; } catch (e) { return false; } },   // false = penyimpanan penuh/diblokir
  add(c, m) {
    const o = this.read(); (o.sent[c.id] = o.sent[c.id] || []).push(m.type === 'img' ? { img: m.src, t: m.t.getTime() } : { text: m.text, t: m.t.getTime() });
    if (c.hidden) o.chats[c.id] = c.name;
    return this.write(o);
  },
};
(function restoreSent() {
  const o = mStore.read();
  Object.keys(o.chats || {}).forEach(id => { if (!chatById(id)) CHATS.push({ id, name: o.chats[id], order: CHATS.length, msgs: [], hidden: true, last: { t: new Date(0), text: '', out: false, name: '' } }); });
  Object.keys(o.sent || {}).forEach(id => {
    const c = chatById(id); if (!c || c.open === false) return;
    o.sent[id].forEach(x => c.msgs.push(x.img ? { who: MSG_ME, type: 'img', text: '', src: x.img, t: new Date(x.t), out: true, name: c.group ? MSG_ME : '', mine: true }
                                              : { who: MSG_ME, type: 'text', text: x.text, t: new Date(x.t), out: true, name: c.group ? MSG_ME : '', mine: true }));
    c.last = lastOf(c);
    if (c.hidden) c.bump = c.last.t.getTime();
  });
})();

const mKnown = c => !!c.group || MSG_CONTACTS.some(n => n.toLowerCase() === c.name.toLowerCase()) || c.id === 'kian' || !!avatarSrc(c.name);
const mUnreadTotal = ex => CHATS.reduce((n, c) => n + (c.id !== ex && !c.deleted ? (c.unread || 0) : 0), 0);

/** Tambah pesan ke chat. content = 'teks' atau { img: dataURL }. persist=true hanya untuk pesan yang dikirim pengguna. Return pesan. */
function addMsg(c, content, out, persist) {
  const isImg = typeof content === 'object';
  const m = { who: out ? MSG_ME : c.name, type: isImg ? 'img' : 'text', text: isImg ? '' : content, src: isImg ? content.img : '', t: new Date(), out, name: c.group ? (out ? MSG_ME : '') : '', mine: !!persist };
  c.msgs.push(m); c.last = lastOf(c); c.deleted = false;
  m.saved = persist ? mStore.add(c, m) : true;
  if (!out && MSG.open !== c.id) c.unread = (c.unread || 0) + 1;
  if (MSG.open === c.id && MSG.add) MSG.add(m);
  renderChatList();
  return m;
}

function msToast(root, t) {
  let e = $('.ms-toast', root); if (!e) { e = h('<div class="ms-toast"></div>'); root.appendChild(e); }
  e.textContent = t; e.classList.add('on'); clearTimeout(e._t); e._t = setTimeout(() => e.classList.remove('on'), 1700);
}

/* =========================================================
   MESSAGES — daftar percakapan
   ========================================================= */
function buildMessages(root) {
  MSG.root = root;
  root.innerHTML = `
    <div class="ms-top">
      <button class="ms-edit" data-act="edit">Edit</button>
      <button class="ms-circ" data-act="filter" aria-label="Filter">${ic('ms_filter')}</button>
    </div>
    <div class="app-body ms-body"><h1 class="ms-title">Messages</h1><div id="ms-list"></div></div>
    <div class="ms-bottom">
      <label class="ms-search">${ic('search')}<input id="ms-q" placeholder="Search" autocomplete="off">${ic('mic', 'ms-mic')}</label>
      <button class="ms-fab" data-act="new" aria-label="New message">${ic('ms_compose')}</button>
    </div>
    <div class="ms-editbar"><span>Read All</span><b data-act="del" class="off">Delete</b></div>`;
  const q = $('#ms-q', root);
  q.addEventListener('input', () => { MSG.q = q.value.trim(); renderChatList(); });
  root.addEventListener('click', e => {
    const a = e.target.closest('[data-act]');
    if (a && !a.closest('.sheet')) {
      const act = a.dataset.act;
      if (act === 'edit') { MSG.edit = !MSG.edit; MSG.sel.clear(); renderChatList(); }
      else if (act === 'filter') toggleFilterMenu(a);
      else if (act === 'new') openContacts();
      else if (act === 'del') {
        if (a.classList.contains('off')) return;
        MSG.sel.forEach(id => { const c = chatById(id); if (c) { c.deleted = true; c.unread = 0; } });
        MSG.sel.clear(); MSG.edit = false; renderChatList();
      } else if (a.parentElement.classList.contains('ms-editbar')) {
        CHATS.forEach(c => c.unread = 0); renderChatList();
      }
      return;
    }
    const m = e.target.closest('.ms-menu'); if (m) return;
    closeFilterMenu();
    const r = e.target.closest('.ms-row'); if (!r || r.closest('.sheet')) return;
    const c = chatById(r.dataset.id); if (!c) return;
    if (MSG.edit) { MSG.sel.has(c.id) ? MSG.sel.delete(c.id) : MSG.sel.add(c.id); return renderChatList(); }
    if (c.open === false) return msToast(root, 'Preview only — this conversation can’t be opened');
    openChat(c);
  });
  $('.ms-editbar span', root).dataset.act = 'readall';
  renderChatList();
}
function closeFilterMenu() { const m = $('.ms-menu', MSG.root); if (m) m.remove(); }
function toggleFilterMenu() {
  if ($('.ms-menu', MSG.root)) return closeFilterMenu();
  const m = h(`<div class="ms-menu">${MSG_FILTERS.map(f => `<div class="ms-mi" data-f="${f[0]}"><span>${f[1]}</span>${MSG.filter === f[0] ? ic('ms_check') : ''}</div>`).join('')}</div>`);
  m.addEventListener('click', e => {
    const i = e.target.closest('.ms-mi'); if (!i) return;
    MSG.filter = i.dataset.f; m.remove(); renderChatList();
  });
  MSG.root.appendChild(m);
}
function renderChatList() {
  if (!MSG.root) return;
  const el = $('#ms-list', MSG.root); if (!el) return;
  const root = MSG.root, q = MSG.q.toLowerCase();
  let list = CHATS.filter(c => !c.deleted && (!c.hidden || c.msgs.length)).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || (b.bump || 0) - (a.bump || 0) || a.order - b.order);
  if (MSG.filter === 'known') list = list.filter(mKnown);
  if (MSG.filter === 'unread') list = list.filter(c => c.unread > 0);
  if (q) list = list.filter(c => c.name.toLowerCase().includes(q) || c.last.text.toLowerCase().includes(q) || c.msgs.some(m => m.text.toLowerCase().includes(q)));
  $('.ms-title', root).textContent = MSG_FILTERS.find(f => f[0] === MSG.filter)[2];
  root.classList.toggle('editing', MSG.edit);
  $('.ms-edit', root).textContent = MSG.edit ? 'Done' : 'Edit';
  const del = $('.ms-editbar b', root); del.classList.toggle('off', !MSG.sel.size); del.textContent = MSG.sel.size ? `Delete (${MSG.sel.size})` : 'Delete';
  el.innerHTML = list.map(c => {
    const l = c.last, who = c.group && l.name && !l.out ? l.name + ': ' : '', ro = c.open === false;
    return `<div class="ms-row ${c.unread ? 'unr' : ''} ${MSG.sel.has(c.id) ? 'sel' : ''} ${ro ? 'ro' : ''} ${c.pinned ? 'pin' : ''}" data-id="${c.id}">
      <span class="ms-sel"><i></i></span><span class="ms-dot"></span>${chatAvatar(c, 50)}
      <div class="ms-tx"><div class="ms-top1"><b>${c.group ? ic('users', 'ms-grpic') : ''}<span>${esc(c.name)}</span></b><span class="ms-time">${c.pinned ? ic('ms_pin', 'ms-pinic') : ''}${mListTime(l.t, l.fixed)}${ro ? '' : ic('right', 'ms-chev')}</span></div>
        <div class="ms-pre">${esc(who + l.text)}</div></div></div>`;
  }).join('') || `<div class="ms-none">${q ? 'No Results' : MSG.filter === 'unread' ? 'No Unread Messages' : 'No Messages'}</div>`;
}

/* =========================================================
   MESSAGES — ruang chat
   ========================================================= */
function openChat(c) {
  const root = MSG.root; closeFilterMenu();
  const unreadOther = mUnreadTotal(c.id);
  const s = push(root, `
    <div class="mc-head">
      <div class="mc-back" data-back>${ic('left')}${unreadOther ? `<span class="mc-badge">${unreadOther > 99 ? '99+' : unreadOther}</span>` : ''}</div>
      <div class="mc-who" data-act="info">${chatAvatar(c, 46)}<span class="mc-name">${esc(c.name)}${ic('right')}</span></div>
    </div>
    <div class="mc-msgs"></div>
    <div class="mc-menu"><div data-k="Camera">${ic('ms_camera')}Camera</div><div data-k="Photos">${ic('ms_photo')}Photos</div><div data-k="Location">${ic('ms_loc')}Location</div></div>
    <div class="mc-input"><button class="mc-plus" aria-label="Attachments">${ic('plus')}</button>
      <div class="mc-pill"><input placeholder="iMessage" autocomplete="off" enterkeyhint="send"><button class="mc-wave" aria-label="Audio">${ic('ms_wave')}</button><button class="mc-send" aria-label="Send">${ic('ms_up')}</button></div></div>`, 'ms-chat');
  const box = $('.mc-msgs', s);
  let prev = null, lastEl = null, tyEl = null;
  const add = m => {
    if (tyEl) tyEl.remove();
    const newStamp = !prev || m.t.toDateString() !== prev.t.toDateString() || (!m.fixed && m.t - prev.t > 2 * 36e5);
    if (newStamp) { const [a, b] = mStamp(m.t, m.fixed); box.insertAdjacentHTML('beforeend', `<div class="mc-stamp"><b>${esc(a)}</b> ${b}</div>`); }
    const cont = !newStamp && prev.out === m.out && prev.name === m.name;
    if (cont && lastEl) lastEl.classList.remove('tail');
    const sn = c.group && !m.out && !cont && m.name ? `<div class="mc-sn">${esc(m.name)}</div>` : '';
    if (m.type === 'img') {
      box.insertAdjacentHTML('beforeend', `${sn}<div class="mc-img ${m.out ? 'out' : 'in'} ${cont ? 'cont' : 'first'}"></div>`);
      lastEl = box.lastElementChild; fillImage(lastEl, m, () => { box.scrollTop = box.scrollHeight; });
    } else {
      box.insertAdjacentHTML('beforeend', `${sn}<div class="mc-b ${m.out ? 'out' : 'in'} tail ${cont ? 'cont' : 'first'}">${esc(m.text)}</div>`);
      lastEl = box.lastElementChild;
    }
    prev = m;
    if (tyEl) box.appendChild(tyEl);
    box.scrollTop = box.scrollHeight;
  };
  c.msgs.forEach(add);
  c.unread = 0; MSG.open = c.id; MSG.add = add;
  MSG.typing = on => {
    if (on && !tyEl) { tyEl = h('<div class="mc-b out tail ty"><i></i><i></i><i></i></div>'); box.appendChild(tyEl); box.scrollTop = box.scrollHeight; }
    if (!on && tyEl) { tyEl.remove(); tyEl = null; }
  };
  setTimeout(() => box.scrollTop = box.scrollHeight, 340);
  const inp = $('input', s), bar = $('.mc-input', s), menu = $('.mc-menu', s);
  const sync = () => bar.classList.toggle('typing', !!inp.value.trim());
  inp.addEventListener('input', sync);
  const send = () => { const v = inp.value.trim(); if (!v) return; inp.value = ''; sync(); addMsg(c, v, true, true); };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  $('.mc-send', s).addEventListener('click', send);
  $('.mc-plus', s).addEventListener('click', () => { menu.classList.toggle('on'); bar.classList.toggle('open', menu.classList.contains('on')); });
  const pick = h('<input type="file" accept="image/*" hidden>'), shoot = h('<input type="file" accept="image/*" capture="environment" hidden>');
  s.appendChild(pick); s.appendChild(shoot);
  const onFile = async e => {
    const f = e.target.files && e.target.files[0]; e.target.value = ''; if (!f) return;
    try {
      const url = await mImageData(f), m = addMsg(c, { img: url }, true, true);
      if (!m.saved) msToast(s, 'Photo sent, but it is too large to keep after refresh');
    } catch (err) { msToast(s, 'That file couldn’t be opened as a photo'); }
  };
  pick.addEventListener('change', onFile); shoot.addEventListener('change', onFile);
  menu.addEventListener('click', e => {
    const d = e.target.closest('[data-k]'); if (!d) return;
    menu.classList.remove('on'); bar.classList.remove('open');
    if (d.dataset.k === 'Photos') pick.click();
    else if (d.dataset.k === 'Camera') shoot.click();
    else msToast(s, 'Location is simulated — nothing is sent');
  });
  $('.mc-wave', s).addEventListener('click', () => msToast(s, 'Audio messages are simulated'));
  box.addEventListener('click', () => { menu.classList.remove('on'); bar.classList.remove('open'); });
  $('.mc-who', s).addEventListener('click', () => contactInfo(s, c));
  const back = s.back;
  s.back = () => { MSG.open = null; MSG.add = null; MSG.typing = null; back(); renderChatList(); };
  renderChatList();
  return s;
}
function contactInfo(s, c) {
  const mem = c.group ? `<div class="mi-list"><small>${c.members.length} PEOPLE</small>${c.members.map(n => `<div class="mi-m">${avatarOf(n, 36)}<span>${esc(n)}</span></div>`).join('')}</div>` : '';
  return push(s, `<div class="nav"><span style="width:70px"></span><b style="font-size:17px">Details</b><span class="mi-done" data-back>Done</span></div>
    <div class="mi-body">${chatAvatar(c, 96)}<h2>${esc(c.name)}</h2>${c.group ? '<p>Group Chat</p>' : ''}</div>${mem}`, 'ms-info');
}

/* ---------- gambar di dalam chat ---------- */
const MSG_PH = [['#d7d9e0', '#b9bdc9'], ['#e0d6d2', '#c5b4ad'], ['#d2dfd8', '#a9c2b4'], ['#d9d3e3', '#b8add0']];
function fillImage(box, m, onload) {
  const src = m.src || MSG_IMAGES[m.slot];
  const ph = () => {
    const g = MSG_PH[hash(String(m.slot || m.src || 'x')) % MSG_PH.length];
    box.innerHTML = `<div class="mc-ph" style="background:linear-gradient(160deg,${g[0]},${g[1]})">${ic('ms_photo')}</div>`; onload && onload();
  };
  if (!src) return ph();
  const im = new Image(); im.alt = '';
  im.onload = () => { box.innerHTML = ''; box.appendChild(im); onload && onload(); };
  im.onerror = ph; im.src = src;
}
function mImageData(file) {   // perkecil supaya muat di localStorage (maks ±1000px, JPEG)
  return new Promise((ok, no) => {
    const fr = new FileReader();
    fr.onerror = no;
    fr.onload = () => {
      const im = new Image(); im.onerror = no;
      im.onload = () => {
        let max = 1000, q = .78, url = '';
        for (let k = 0; k < 4; k++) {
          const r = Math.min(1, max / Math.max(im.width, im.height)), cv = document.createElement('canvas');
          cv.width = Math.max(1, Math.round(im.width * r)); cv.height = Math.max(1, Math.round(im.height * r));
          cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
          url = cv.toDataURL('image/jpeg', q);
          if (url.length < 350000) break; max = Math.round(max * .75); q -= .08;
        }
        ok(url);
      };
      im.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

/* ---------- pesan baru (pilih kontak) ---------- */
function openContacts() {
  const root = MSG.root; closeFilterMenu();
  const s = push(root, `
    <div class="nav"><span style="width:70px"></span><b style="font-size:17px">New Message</b><span class="mi-done" data-back>Cancel</span></div>
    <div class="ct-to"><span>To:</span><input id="ct-q" autocomplete="off"></div>
    <div class="app-body ct-list"></div>`, 'ms-contacts');
  const list = $('.ct-list', s);
  const paint = q => {
    const items = MSG_CONTACTS.filter(n => n.toLowerCase().includes(q.toLowerCase()));
    list.innerHTML = items.map(n => `<div class="ct-row" data-n="${esc(n)}">${avatarOf(n, 38)}<span>${esc(n)}</span></div>`).join('') || '<div class="ms-none">No Results</div>';
  };
  paint('');
  $('#ct-q', s).addEventListener('input', e => paint(e.target.value.trim()));
  list.addEventListener('click', e => {
    const r = e.target.closest('.ct-row'); if (!r) return;
    const name = r.dataset.n;
    let c = CHATS.find(x => !x.group && x.name.toLowerCase() === name.toLowerCase());
    if (c && c.open === false) return msToast(s, 'Preview only — this conversation can’t be opened');
    if (!c) { c = { id: 'x-' + name, name, order: CHATS.length, msgs: [], hidden: true }; CHATS.push(c); c.last = { t: new Date(0), text: '', out: false, name: '' }; }
    if (c.deleted) c.deleted = false;
    s.back(); setTimeout(() => openChat(c), 120);
  });
}


/* =========================================================
   NOTIFIKASI BANNER
   ========================================================= */

/** Ikon notifikasi: foto kontak + lencana app kecil (kalau avatar=true), atau ikon app biasa */
function notifIcon(app, title, av) {
  return av ? `<div class="nav-av">${(c => c ? chatAvatar(c, 38) : avatarOf(title, 38))(CHATS.find(x => x.name === title))}<span class="nbadge">${appIconHTML(app)}</span></div>` : appIconHTML(app);
}
function notify({ app, title, body, avatar: av, onTap }) {
  const st = phone.dataset.state;
  if (st === 'lock' || st === 'passcode') {            // layar terkunci → masuk tumpukan notif lockscreen
    const n = h(`<div class="notif">${notifIcon(app, title, av)}<div class="nt"><div class="nt-top"><b>${esc(title)}</b><small>sekarang</small></div><p>${esc(body)}</p></div></div>`);
    const box = $('#lock-notifs'); box.prepend(n); while (box.children.length > 5) box.lastElementChild.remove();
    return;
  }
  const b = h(`<div class="banner-ios">${notifIcon(app, title, av)}<div class="nt"><div class="nt-top"><b>${esc(title)}</b><small>sekarang</small></div><p>${esc(body)}</p></div></div>`);
  const layer = $('#banner-layer'); layer.innerHTML = ''; layer.appendChild(b);
  requestAnimationFrame(() => b.classList.add('in'));
  const kill = () => { b.classList.remove('in'); setTimeout(() => b.remove(), 350); };
  b.addEventListener('click', () => { kill(); onTap && onTap(); });
  setTimeout(kill, 4200);
}
function gotoChat(id) {
  const c = chatById(id), tgIcon = () => $('#home [data-app="messages"]');
  const openIt = () => { if (MSG.open !== id) openChat(c); };
  if (currentApp === 'messages') return openIt();
  const go = () => { openApp('messages', tgIcon()); setTimeout(openIt, 480); };
  if (currentApp) { goHome(); setTimeout(go, 520); } else go();
}

/* ---------- riwayat panggilan (data untuk tab Recents; tidak ada panggilan/dering) ---------- */
const CALL_LOGS = CALLS.map(c => ({ ...c, d: at(c.ago, c.time) }));


/* =========================================================
   MUSIC (gaya Apple Music) — pemutar SIMULASI (tanpa audio asli)
   State (lagu aktif, play/pause, shuffle, download) disimpan di closure,
   jadi tetap terjaga saat pindah tab / halaman / menutup aplikasi.
   ========================================================= */
function buildMusic(root) {
  const T = AM_TRACKS, PL = AM_PLAYLISTS[0], au = AM_AUDIO;
  const st = { order: PL.tracks.slice(), pos: 1, playing: false, started: false, shuffle: false, ok: {}, dl: 'none', tab: 'home' };   // ok[i]: true=file ada, false=belum ada audio
  const cur = () => st.order[st.pos];
  const sv = (d, extra = '') => `<svg viewBox="0 0 24 24" class="am-i" ${extra}>${d}</svg>`;
  const ln = 'fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"';
  const I = {
    back: sv(`<path d="M15 5l-7 7 7 7" ${ln} stroke-width="2.6"/>`),
    adduser: sv('<circle cx="9" cy="8" r="4" fill="currentColor"/><path d="M9 14c-3.4 0-6 1.8-6 4.2V20h10.4a5.6 5.6 0 0 1-.4-2.200c0-1.400.5-2.700 1.300-3.700A8.500 8.500 0 0 0 9 14z" fill="currentColor"/><circle cx="18" cy="17.500" r="4.300" fill="currentColor"/><path d="M18 15.300v4.400M15.800 17.500h4.400" stroke="var(--am-cut,#b88f7c)" stroke-width="1.700" stroke-linecap="round"/>'),
    share: sv(`<path d="M12 14.500V3.500M8 7.300l4-4 4 4M7 10H6.500a2 2 0 0 0-2 2v6.500a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H17" ${ln} stroke-width="2"/>`),
    more: sv('<circle cx="5" cy="12" r="1.900" fill="currentColor"/><circle cx="12" cy="12" r="1.900" fill="currentColor"/><circle cx="19" cy="12" r="1.900" fill="currentColor"/>'),
    shuffle: sv(`<path d="M3 7.500h3c2.300 0 3.700 1 5 3l1.800 3c1.300 2 2.700 3 5 3H21M3 16.500h3c1.600 0 2.800-.5 3.800-1.600M13.800 8.800c1-.9 2.100-1.300 3.700-1.300H21M18.500 5l2.500 2.500-2.500 2.500M18.500 14l2.500 2.500-2.500 2.500" ${ln} stroke-width="2"/>`),
    download: sv(`<path d="M12 5v13M6 12.500l6 6 6-6" ${ln} stroke-width="2.200"/>`),
    check: sv(`<path d="M5 12.500l4.500 4.500L19 7.500" ${ln} stroke-width="2.600"/>`),
    play: sv('<path d="M7 4.500v15l13-7.500z" fill="currentColor"/>'),
    pause: sv('<path d="M6.500 4.500h4v15h-4zM13.500 4.500h4v15h-4z" fill="currentColor"/>'),
    next: sv('<path d="M3 5.500v13l9-6.500zM12 5.500v13l9-6.500z" fill="currentColor"/>'),
    prev: sv('<path d="M21 5.500v13l-9-6.500zM12 5.500v13l-9-6.500z" fill="currentColor"/>'),
    chev: sv(`<path d="M9 5l7 7-7 7" ${ln} stroke-width="2.600"/>`),
    down: sv(`<path d="M5 9l7 7 7-7" ${ln} stroke-width="2.600"/>`),
    star: sv('<path d="M12 2.500l2.900 6.100 6.600.9-4.800 4.600 1.200 6.600L12 17.500l-5.900 3.200 1.200-6.600L2.500 9.500l6.600-.9z" fill="currentColor"/>'),
    home: sv('<path d="M12 3 3 10.300V20a1.200 1.200 0 0 0 1.200 1.200H9V15h6v6.200h4.800A1.200 1.200 0 0 0 21 20v-9.700z" fill="currentColor" stroke="currentColor" stroke-width="1.200" stroke-linejoin="round"/>'),
    grid: sv('<rect x="3.500" y="3.500" width="7.500" height="7.500" rx="2" fill="currentColor"/><rect x="13" y="3.500" width="7.500" height="7.500" rx="2" fill="currentColor"/><rect x="3.500" y="13" width="7.500" height="7.500" rx="2" fill="currentColor"/><rect x="13" y="13" width="7.500" height="7.500" rx="2" fill="currentColor"/>'),
    radio: sv(`<circle cx="12" cy="12" r="1.800" fill="currentColor"/><path d="M8.800 8.800a4.500 4.500 0 0 0 0 6.400M15.200 8.800a4.500 4.500 0 0 1 0 6.400M5.800 5.800a8.700 8.700 0 0 0 0 12.400M18.200 5.800a8.700 8.700 0 0 1 0 12.400" ${ln} stroke-width="1.800"/>`),
    library: sv('<path d="M7 3.500h10M9 1.500h6" stroke="currentColor" stroke-width="1.600" stroke-linecap="round"/><rect x="4.500" y="5.500" width="15" height="16" rx="3.200" fill="currentColor"/><path d="M14.200 10.200v5.100a1.700 1.700 0 1 1-1.100-1.600v-3.200l3.200-.8v-.1z" fill="#fff"/>'),
    search: sv(`<circle cx="10.500" cy="10.500" r="6.500" ${ln} stroke-width="2.200"/><path d="M15.500 15.500 20.500 20.500" ${ln} stroke-width="2.400"/>`),
    apple: sv('<path d="M12.152 6.896c-.948 0-2.415-1.078-3.960-1.040-2.040.027-3.910 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.090 1.013 1.454 2.208 3.090 3.792 3.039 1.520-.065 2.090-.987 3.935-.987 1.831 0 2.350.987 3.960.948 1.637-.026 2.676-1.480 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.220-4.857-.026-3.040 2.480-4.494 2.597-4.559-1.429-2.090-3.623-2.324-4.390-2.376-2-.156-3.675 1.090-4.610 1.090zM15.530 3.830c.843-1.012 1.400-2.427 1.245-3.830-1.207.052-2.662.805-3.532 1.818-.780.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor"/>'),
  };
  const art = i => `<span class="am-a" style="background:${T[i].bg}"><img src="${T[i].art}" alt="" draggable="false" onerror="this.remove()"></span>`;
  const cover = (cls = '') => `<span class="am-a ${cls}" style="background:${PL.bg}"><img src="${PL.cover}" alt="" draggable="false" onerror="this.remove()"></span>`;
  const favTile = '<span class="am-a am-fav">' + I.star + '</span>';
  const tabs = [['home', 'Home', I.home], ['new', 'New', I.grid], ['radio', 'Radio', I.radio], ['library', 'Library', I.library], ['search', 'Search', I.search]];

  /* ---------- kerangka ---------- */
  root.innerHTML = `
    <div class="am-page on" data-p="home">
      <div class="am-hd"><h1>Home</h1><button class="am-prof" data-act="prof" aria-label="Profil">S</button></div>
      <h2 class="am-h2">Top Picks for You</h2>
      <div class="am-hs am-picks">
        <div class="am-pick heavy" data-act="heavy">
          <div class="am-logo">${I.apple}<span>Music</span></div>
          <div class="am-heavy"><b>Heavy<br>Rotation</b></div>
          <div class="am-pdesc"><em>Made for You</em><span>${esc([...new Set(PL.tracks.map(i => T[i].artist))].join(', '))}, and more</span></div>
        </div>
        <div class="am-pick dark" data-play="0">${art(0)}<div class="am-pshade"></div>
          <div class="am-pdesc"><small>New Release</small><b>${esc(T[0].title)}</b><span>${esc(T[0].artist)}</span></div></div>
        <div class="am-pick dark" data-open="helloo">${cover()}<div class="am-pshade"></div>
          <div class="am-pdesc"><small>Updated Playlist</small><b>${esc(PL.name)}</b><span>${esc(PL.owner)}</span></div></div>
      </div>
      <h2 class="am-h2 am-link" data-tab="library">Recently Played ${I.chev}</h2>
      <div class="am-hs am-recent">
        <div class="am-card" data-open="helloo">${cover()}<b>${esc(PL.name)}</b></div>
        <div class="am-card" data-act="fav">${favTile}<b>Favourite Songs <i class="am-redstar">${I.star}</i></b></div>
        <div class="am-card" data-play="2">${art(2)}<b>${esc(T[2].title)}</b><span>${esc(T[2].artist)}</span></div>
        <div class="am-card" data-play="3">${art(3)}<b>${esc(T[3].title)}</b><span>${esc(T[3].artist)}</span></div>
      </div>
      <h2 class="am-h2">Popular Right Now</h2>
      <div class="am-hs am-recent">${T.map((t, i) => `<div class="am-card" data-play="${i}">${art(i)}<b>${esc(t.title)}</b><span>${esc(t.artist)}</span></div>`).join('')}</div>
    </div>
    <div class="am-page" data-p="new">
      <div class="am-hd"><h1>New</h1></div>
      <h2 class="am-h2">New Music</h2>
      <div class="am-hs am-recent">${T.map((t, i) => `<div class="am-card" data-play="${i}">${art(i)}<b>${esc(t.title)}</b><span>${esc(t.artist)}</span></div>`).join('')}</div>
      <h2 class="am-h2">Updated Playlist</h2>
      <div class="am-hs am-recent"><div class="am-card" data-open="helloo">${cover()}<b>${esc(PL.name)}</b><span>${esc(PL.owner)}</span></div></div>
    </div>
    <div class="am-page" data-p="radio">
      <div class="am-hd"><h1>Radio</h1></div>
      ${[['Apple Music 1', 'linear-gradient(135deg,#fa5c70,#fa233b)'], ['Apple Music Hits', 'linear-gradient(135deg,#ffb347,#ff7a18)'], ['Apple Music Country', 'linear-gradient(135deg,#7ac6ff,#3a7bd5)']].map(([n, g]) => `
      <div class="am-rrow" data-act="radio"><span class="am-a" style="background:${g}">${I.radio}</span><div class="am-tx"><b>${n}</b><span>Live Radio</span></div></div>`).join('')}
    </div>
    <div class="am-page" data-p="library">
      <div class="am-hd"><h1>Library</h1></div>
      <h2 class="am-h2">Playlists</h2>
      <div class="am-rrow" data-open="helloo">${cover()}<div class="am-tx"><b>${esc(PL.name)}</b><span>Playlist · ${esc(PL.owner)}</span></div>${I.chev}</div>
      <div class="am-rrow" data-act="fav">${favTile}<div class="am-tx"><b>Favourite Songs</b><span>Playlist</span></div>${I.chev}</div>
    </div>
    <div class="am-page" data-p="search">
      <div class="am-hd"><h1>Search</h1></div>
      <div class="am-sbar">${I.search}<input id="am-q" placeholder="Artists, Songs, Lyrics, and More" autocomplete="off"></div>
      <div id="am-res"></div>
    </div>
    <div class="am-dock" data-mode="home">
      <div class="am-row">
        <button class="am-side" data-act="gohome" aria-label="Music">${appIconHTML('music')}</button>
        <div class="am-mini" data-act="mini">
          <span class="am-mart"></span>
          <div class="am-tx"><b id="am-mt"></b><span id="am-ma"></span></div>
          <button class="am-mb" data-act="pp" id="am-mpp" aria-label="Play/Pause"></button>
          <button class="am-mb" data-act="next" aria-label="Next">${I.next}</button>
        </div>
        <button class="am-side" data-act="gosearch" aria-label="Search">${I.search}</button>
      </div>
      <div class="am-tabs">${tabs.map(([k, n, ic]) => `<button data-tab="${k}" class="${k === 'home' ? 'on' : ''}">${ic}<span>${n}</span></button>`).join('')}</div>
    </div>
    <div class="am-toast" id="am-toast"></div>
    <div class="am-menu" id="am-menu"><div class="am-mdim" data-act="mclose"></div><div class="am-msheet" id="am-msheet"></div></div>`;
  const $$m = s => [...root.querySelectorAll(s)];
  const dock = $('.am-dock', root);

  /* ---------- util UI ---------- */
  let tt = 0;
  const toast = msg => { const el = $('#am-toast', root); el.textContent = msg; el.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => el.classList.remove('on'), 1800); };
  function menu(title, items) {
    $('#am-msheet', root).innerHTML = `${title ? `<div class="am-mt">${esc(title)}</div>` : ''}` + items.map((it, i) => `<button data-mi="${i}">${esc(it[0])}</button>`).join('') + '<button data-mi="x" class="c">Cancel</button>';
    $('#am-msheet', root).onclick = e => { const b = e.target.closest('[data-mi]'); if (!b) return; $('#am-menu', root).classList.remove('on'); const it = items[b.dataset.mi]; it && it[1] && it[1](); };
    $('#am-menu', root).classList.add('on');
  }
  const mmss = s => `${Math.floor(s / 60)}:${pad(Math.floor(s % 60))}`;

  /* ---------- logika pemutar (audio asli via <audio>) ---------- */
  const elapsed = () => au.currentTime || 0, total = () => isFinite(au.duration) ? au.duration : 0;
  function setOrder(shuffle) {
    const c = cur(); st.shuffle = shuffle;
    if (shuffle) { const rest = PL.tracks.filter(i => i !== c).sort(() => Math.random() - .5); st.order = [c, ...rest]; st.pos = 0; }
    else { st.order = PL.tracks.slice(); st.pos = st.order.indexOf(c); }
  }
  let loaded = -1;
  function missing(i) { st.ok[i] = false; if (loaded === i) { au.pause(); st.playing = false; } toast(`Belum ada file audio untuk “${T[i].title}” — ${T[i].src}`); sync(); }
  /** Muat & putar lagu ke-i (play=false: hanya pilih). Tidak pernah menandai "sedang diputar" kalau audio tidak benar-benar jalan. */
  function load(i, play) {
    st.started = true; loaded = i;
    if (st.ok[i] === false) { au.pause(); st.playing = false; sync(); if (play) toast(`Belum ada file audio untuk “${T[i].title}” — ${T[i].src}`); return; }
    au.src = T[i].src; au.currentTime = 0;
    if (!play) { au.pause(); sync(); return; }
    const pr = au.play();
    if (pr && pr.catch) pr.catch(err => { if (loaded === i && err && err.name !== 'AbortError') { st.playing = false; if (err.name === 'NotAllowedError') toast('Ketuk Play untuk memulai audio'); else missing(i); } });
    sync();
  }
  function playTrack(i, play = true) { st.pos = st.order.indexOf(i); load(i, play); }
  function next() { st.pos = (st.pos + 1) % st.order.length; load(cur(), true); }
  function prev() { if (elapsed() > 3 && st.ok[cur()] !== false) { au.currentTime = 0; syncNp(); return; } st.pos = (st.pos - 1 + st.order.length) % st.order.length; load(cur(), true); }
  function toggle() {
    const i = cur();
    if (loaded !== i || !au.src) return load(i, true);
    if (au.paused) { const pr = au.play(); pr && pr.catch(() => { st.playing = false; sync(); }); } else au.pause();
  }
  function playPlaylist() {
    if (st.started && loaded >= 0) return toggle();
    if (st.shuffle) setOrder(true), st.pos = Math.floor(Math.random() * st.order.length); else st.pos = 0;
    load(cur(), true);
  }
  function shufflePlay() { setOrder(true); st.pos = 0; load(cur(), true); }
  /* status pemutar mengikuti elemen audio yang sebenarnya */
  au.addEventListener('playing', () => { st.playing = true; st.ok[loaded] = true; sync(); });
  au.addEventListener('pause', () => { st.playing = false; sync(); });
  au.addEventListener('ended', () => next());
  au.addEventListener('timeupdate', () => syncNp());
  au.addEventListener('loadedmetadata', () => syncNp());
  au.addEventListener('error', () => { if (loaded >= 0 && au.src) missing(loaded); });
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', toggle); navigator.mediaSession.setActionHandler('pause', toggle);
    navigator.mediaSession.setActionHandler('nexttrack', next); navigator.mediaSession.setActionHandler('previoustrack', prev);
  }
  function toggleShuffle() { setOrder(!st.shuffle); sync(); toast(st.shuffle ? 'Shuffle On' : 'Shuffle Off'); }
  function download() {
    if (st.dl === 'busy') return;
    if (st.dl === 'done') { st.dl = 'none'; sync(); return toast('Download dihapus'); }
    st.dl = 'busy'; sync();
    setTimeout(() => { st.dl = 'done'; sync(); toast('Helloo berhasil diunduh (simulasi)'); }, 1600);
  }

  /* ---------- sinkronisasi tampilan ---------- */
  function sync() {
    const i = cur(), t = T[i];
    $('.am-mart', root).innerHTML = art(i);
    $('#am-mt', root).textContent = t.title; $('#am-ma', root).textContent = t.artist;
    $('#am-mpp', root).innerHTML = st.playing ? I.pause : I.play;
    if ('mediaSession' in navigator && window.MediaMetadata) navigator.mediaSession.metadata = new MediaMetadata({ title: t.title, artist: t.artist, album: PL.name, artwork: [{ src: t.art, sizes: '512x512', type: 'image/jpeg' }] });
    $$m('.am-trow').forEach(r => { const on = +r.dataset.i === i; r.classList.toggle('on', on); r.classList.toggle('playing', on && st.playing); });
    const pb = $('#am-playbtn', root); if (pb) pb.innerHTML = (st.playing ? I.pause : I.play) + '<span>' + (st.playing ? 'Pause' : 'Play') + '</span>';
    const sb = $('#am-shuf', root); if (sb) sb.classList.toggle('on', st.shuffle);
    const db = $('#am-dl', root); if (db) { db.className = 'am-circ ' + st.dl; db.innerHTML = st.dl === 'done' ? I.check : st.dl === 'busy' ? '<i class="am-spin"></i>' : I.download; }
    syncNp();
  }
  let np = null;
  function syncNp() {
    if (!np) return;
    const i = cur(), t = T[i];
    $('.am-npart', np).innerHTML = art(i); $('.am-npt b', np).textContent = t.title; $('.am-npt span', np).textContent = t.artist;
    $('.am-nppp', np).innerHTML = st.playing ? I.pause : I.play;
    const el = loaded === cur() ? elapsed() : 0, du = loaded === cur() ? total() : 0;
    $('.am-npbar i', np).style.width = (du ? el / du * 100 : 0) + '%';
    $('.t1', np).textContent = mmss(el); $('.t2', np).textContent = du ? '-' + mmss(du - el) : '-:--';
    $('.am-npsh', np).classList.toggle('on', st.shuffle);
  }

  /* ---------- halaman ---------- */
  function showTab(k) {
    st.tab = k;
    $$m('.am-page').forEach(p => p.classList.toggle('on', p.dataset.p === k));
    $$m('.am-tabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === k));
    if (k === 'search') renderSearch($('#am-q', root).value);
  }
  function renderSearch(q) {
    q = q.trim().toLowerCase();
    const list = q ? T.map((t, i) => [t, i]).filter(([t]) => (t.title + ' ' + t.artist).toLowerCase().includes(q)) : [];
    $('#am-res', root).innerHTML = !q ? '<div class="am-empty">Cari lagu di playlist Helloo.</div>' : list.length ? list.map(([t, i]) =>
      `<div class="am-rrow" data-play="${i}">${art(i)}<div class="am-tx"><b>${esc(t.title)}</b><span>${esc(t.artist)}</span></div></div>`).join('') : '<div class="am-empty">Tidak ada hasil.</div>';
  }
  $('#am-q', root).addEventListener('input', e => renderSearch(e.target.value));

  function rowMenu(i) {
    menu(T[i].title + ' — ' + T[i].artist, [['Play Next', () => toast('Ditambahkan ke Play Next')], ['Add to Library', () => toast('Ditambahkan ke Library')], ['Share Song…', () => toast('Tautan lagu disalin')]]);
  }
  function openPlaylist() {
    if ($('.am-det', root)) return;
    const s = push(root, `
      <div class="am-dbg"></div>
      <div class="am-dhd">
        <button class="am-circ" data-back aria-label="Back">${I.back}</button>
        <div class="am-pgrp"><button data-act="adduser" aria-label="Add user">${I.adduser}</button><button data-act="share" aria-label="Share">${I.share}</button></div>
        <button class="am-circ" data-act="dmore" aria-label="More">${I.more}</button>
      </div>
      <div class="am-dscroll">
        <div class="am-cov">${cover()}</div>
        <h1>${esc(PL.name)}</h1><div class="am-own">${esc(PL.owner)}</div><div class="am-stat">${esc(PL.status)}</div>
        <div class="am-ctl">
          <button class="am-circ" id="am-shuf" data-act="shuffle" aria-label="Shuffle">${I.shuffle}</button>
          <button class="am-playbtn" id="am-playbtn" data-act="playpl"></button>
          <button class="am-circ" id="am-dl" data-act="dl" aria-label="Download">${I.download}</button>
        </div>
        <div class="am-tl">${PL.tracks.map(i => `<div class="am-trow" data-i="${i}">${art(i)}<div class="am-tx"><b>${esc(T[i].title)}</b><span>${esc(T[i].artist)}</span></div><span class="am-eq"><i></i><i></i><i></i></span><button class="am-rmore" data-more="${i}" aria-label="More">${I.more}</button></div>`).join('')}</div>
      </div>`, 'am-det');
    dock.dataset.mode = 'detail';
    const old = s.back; s.back = () => { old(); dock.dataset.mode = 'home'; };
    sync();
  }
  function openNp() {
    if (np) return;
    np = push(root, `
      <div class="am-nph"><button data-back aria-label="Close">${I.down}</button></div>
      <div class="am-npart"></div>
      <div class="am-npt"><b></b><span></span></div>
      <div class="am-npbar"><i></i></div><div class="am-npt2"><span class="t1">0:00</span><span class="t2">-0:00</span></div>
      <div class="am-npc">
        <button class="am-npsh" data-act="shuffle" aria-label="Shuffle">${I.shuffle}</button>
        <button data-act="prev" aria-label="Previous">${I.prev}</button>
        <button class="am-nppp" data-act="pp" aria-label="Play/Pause"></button>
        <button data-act="next" aria-label="Next">${I.next}</button>
        <button data-act="npmore" aria-label="More">${I.more}</button>
      </div>`, 'am-np');
    $('.am-npbar', np).addEventListener('click', e => { const du = total(); if (!du || loaded !== cur()) return; const r = e.currentTarget.getBoundingClientRect(); au.currentTime = du * Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); syncNp(); });
    dock.classList.add('hide');
    const old = np.back; np.back = () => { old(); np = null; dock.classList.remove('hide'); };
    syncNp();
  }

  /* ---------- event ---------- */
  root.addEventListener('click', e => {
    const q = s => e.target.closest(s);
    let b;
    if ((b = q('[data-more]'))) return rowMenu(+b.dataset.more);
    if ((b = q('[data-tab]'))) return showTab(b.dataset.tab);
    if ((b = q('[data-open]'))) return openPlaylist();
    if ((b = q('[data-play]'))) return playTrack(+b.dataset.play);
    if ((b = q('.am-trow'))) return playTrack(+b.dataset.i);
    if (!(b = q('[data-act]'))) return;
    switch (b.dataset.act) {
      case 'pp': return toggle();
      case 'next': return next();
      case 'prev': return prev();
      case 'mini': return openNp();
      case 'playpl': return playPlaylist();
      case 'shuffle': return toggleShuffle();
      case 'dl': return download();
      case 'gohome': { const d = $('.am-det', root); d && d.back(); return showTab('home'); }
      case 'gosearch': { const d = $('.am-det', root); d && d.back(); return showTab('search'); }
      case 'prof': return toast('Akun: Shabey');
      case 'fav': return toast('Belum ada lagu favorit');
      case 'radio': return toast('Radio tidak tersedia di simulator');
      case 'heavy': { shufflePlay(); return; }
      case 'adduser': return toast('Undangan kolaborasi dikirim (simulasi)');
      case 'share': return toast('Tautan playlist disalin');
      case 'dmore': return menu(PL.name, [['Download', download], ['Shuffle Play', shufflePlay], ['Share Playlist…', () => toast('Tautan playlist disalin')]]);
      case 'npmore': return menu(T[cur()].title, [['Add to Library', () => toast('Ditambahkan ke Library')], ['Share Song…', () => toast('Tautan lagu disalin')]]);
      case 'mclose': return $('#am-menu', root).classList.remove('on');
    }
  });
  sync(); renderSearch('');
}

/* =========================================================
   START
   ========================================================= */
buildLock(); buildPasscode(); buildHome();
tick(); setInterval(tick, 1000);
loadWeather();
setState('lock');
