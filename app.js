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
  city: { name: 'Bandung', region: 'Indonesia', lat: -6.9175, lon: 107.6191, tz: 'Asia/Jakarta' },
};

const IG = {
  avatar: 'assets/avatar.jpg',
  posts: 6, followers: '1.079', following: 930,
  location: 'canary wharf',
  bio: ['rosewater قمر noun begins @ivoiwre ♥'],
  items: [
    { img: 'assets/posts/post-1.jpg', caption: 'yuh 👺',                       ago: 2, likes: '1.284' },
    { img: 'assets/posts/post-2.jpg', caption: 'huh abis anuin server',        ago: 6, likes: '962'   },
    { img: 'assets/posts/post-3.jpg', caption: 'my sweetness baby @hagiel',    ago: 11, likes: '2.310' },
  ],
};

// Foto per bulan (tahun 2026). Ganti file di assets/photos/ dengan foto kamu (nama sama).
const PHOTOS = [
  { m: 0, imgs: ['assets/photos/2026-01-1.jpg'] },
  { m: 1, imgs: ['assets/photos/2026-02-1.jpg'] },
  { m: 2, imgs: ['assets/photos/2026-03-1.jpg'] },
  { m: 3, imgs: ['assets/photos/2026-04-1.jpg'] },
  { m: 4, imgs: ['assets/photos/2026-05-1.jpg'] },
  { m: 5, imgs: ['assets/photos/2026-06-1.jpg'] },
  { m: 6, imgs: ['assets/photos/2026-07-1.jpg'] },
  { m: 7, imgs: ['assets/photos/2026-08-1.jpg'] },
  { m: 8, imgs: ['assets/photos/2026-09-1.jpg', 'assets/photos/2026-09-2.jpg'] },
  { m: 9, imgs: ['assets/photos/2026-10-1.jpg', 'assets/photos/2026-10-2.jpg', 'assets/photos/2026-10-3.jpg'] },
];

// Music (gaya Apple Music): data playlist & lagu. Artwork ada di assets/music/.
// art-1..5.jpg = artwork tiap lagu (placeholder; timpa dengan cover resmi, nama file sama).
// helloo.jpg   = foto cover playlist Helloo.
const AM_TRACKS = [
  { title: 'Robbers',               artist: 'The 1975',       art: 'assets/music/art-1.jpg', bg: '#222224' },
  { title: 'TOO DEEP TO TURN BACK', artist: 'Daniel Caesar',  art: 'assets/music/art-2.jpg', bg: '#3a0d10' },
  { title: 'Nothing',               artist: 'Bruno Major',    art: 'assets/music/art-3.jpg', bg: '#c9a57c' },
  { title: 'Sienna',                artist: 'The Marías',     art: 'assets/music/art-4.jpg', bg: '#b9603f' },
  { title: 'Favorite Girl',         artist: 'Justin Bieber',  art: 'assets/music/art-5.jpg', bg: '#8fbbea' },
];
const AM_PLAYLISTS = [
  { id: 'helloo', name: 'Helloo', owner: 'bbee', status: 'Just Updated', cover: 'assets/music/helloo.jpg', bg: '#c9a57c', tracks: [0, 1, 2, 3, 4] },
];
const AM_SIM_DUR = 210; // durasi simulasi per lagu (detik) — tidak ada audio asli

const MAILS = [
  { from: 'Lokalverse', addr: 'Lokalverse@gmail.com', when: 'Monday', unread: true, subj: 'You invited to lokalverse project',
    pre: 'I would like to invite you to join the lokalverse project. Please let me know if you are interested.' },
  { from: 'GitHub', when: 'Yesterday', unread: true, subj: '[GitHub] A new sign-in to your account',
    pre: 'Hey morfene! We noticed a new sign-in to your GitHub account from Canary Wharf, London. If this was you, you...' },
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
  { name: 'Baby',    type: 'missed', n: 4, ago: 0, time: '03:48' },
  { name: 'Maxton',  type: 'out',    n: 1, ago: 0, time: '02:10' },
  { name: 'Baby',    type: 'missed', n: 3, ago: 1, time: '22:15' },
  { name: 'Evander', type: 'out',    n: 1, ago: 1, time: '20:40' },
  { name: 'Baby',    type: 'missed', n: 2, ago: 1, time: '12:05' },
  { name: 'Eiser',   type: 'out',    n: 1, ago: 2, time: '21:30' },
  { name: 'Baby',    type: 'missed', n: 5, ago: 3, time: '19:20' },
  { name: 'Maxton',  type: 'out',    n: 1, ago: 3, time: '16:00' },
];
const CONTACTS = ['Baby', 'Eiser', 'Evander', 'Keenan', 'Kianabelle', 'Maxton', 'Miyuka'];

/* ---------- Telegram ----------
   Format pesan: satu baris = satu pesan  →  "kode|isi pesan"
   Chat pribadi : i = lawan bicara, o = kamu
   Chat grup    : M Maxton, J Evander, E Eiser, G kamu
   Baris "#hari jam" = mulai hari baru. (#0 12:00 = hari ini, #2 = 2 hari lalu, "-5m" = 5 menit lalu)
   Baris "@HH:MM" = loncat jam.                                                         */
const GROUP_NAMES = { M: 'Maxton', J: '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑', E: 'Eiser Kendrick', G: 'me' };

// Story (urutan = urutan lingkaran). Gambar di assets/stories/ — ganti dengan foto kamu (nama sama).
const STORIES = [
  { id: 'me',      name: 'My Story', who: 'Shabey',   items: [
    { img: 'assets/stories/me-1.jpg', h: 1 }, { img: 'assets/stories/me-2.jpg', h: 3 },
    { img: 'assets/stories/me-3.jpg', h: 5 }, { img: 'assets/stories/me-4.jpg', h: 8 } ] },
  { id: 'baby',    name: 'Baby',     who: 'Baby',    items: [
    { img: 'assets/stories/baby-1.jpg', h: 2 }, { img: 'assets/stories/baby-2.jpg', h: 4 }, { img: 'assets/stories/baby-3.jpg', h: 6 } ] },
  { id: 'maxton',  name: 'Maxton',   who: 'Maxton',  items: [{ img: 'assets/stories/maxton-1.jpg', h: 3 }] },
  { id: 'evander', name: 'Evander',  who: 'Evander', items: [{ img: 'assets/stories/evander-1.jpg', h: 5 }] },
  { id: 'eiser',   name: 'Eiser',    who: 'Eiser',   items: [{ img: 'assets/stories/eiser-1.jpg', h: 9 }] },
];
const STORY_MS = 5000; // durasi tiap story

// Foto avatar kontak. Upload fotonya ke assets/avatars/ dengan nama file di bawah.
// Kalau file belum ada, otomatis tampil inisial berwarna. Nama tidak peka huruf besar/kecil.
const AVATARS = {
  'Shabey': 'assets/avatars/shabey.jpg',
  'Baby': 'assets/avatars/baby.jpg',
  'Maxton': 'assets/avatars/maxton.jpg',
  'Keenan': 'assets/avatars/keenan.jpg',
  'Miyuka': 'assets/avatars/miyuka.jpg',
  'Noona Kian': 'assets/avatars/kian.jpg',
  'Akatsudi': 'assets/avatars/akatsudi.jpg',
  'Eiser': 'assets/avatars/eiser.jpg',
  'Evander': 'assets/avatars/evander.jpg',
  'Dito': 'assets/avatars/dito.jpg',
  'Jason BEM FTI': 'assets/avatars/jason.jpg',
  'Kevin HIMA TI': 'assets/avatars/kevin.jpg',
  'Zayn Cybersecurity': 'assets/avatars/zayn.jpg',
  'Andrew PPIC Staff': 'assets/avatars/andrew.jpg',
  'IT Team': 'assets/avatars/itteam.jpg',
  'Harvard survivor': 'assets/avatars/harvard.jpg',
};
// Nama lain yang memakai foto yang sama (mis. nama di grup / daftar kontak)
const AVATAR_ALIAS = { '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑': 'Evander', 'Eiser Kendrick': 'Eiser', 'Shanna Habey': 'Shabey', 'miyuka dedoll': 'Miyuka' };

// Pemicu otomatis (ms sejak website dibuka). Tambah ?fast di URL untuk mencoba cepat (2 dtk / 25 dtk).
const FAST = /[?&]fast\b/.test(location.search);
const TRIGGER = { chat: FAST ? 2000 : 60000, call: FAST ? 25000 : 300000 };
const CALL_SCRIPT = [
  ['Baby', 'sayang hati hatii'], ['Shabey', 'iyaa sayang'], ['Shabey', 'Kenapa call'], ['Baby', 'gapapa call aja'],
  ['Baby', 'I love you'], ['Shabey', 'i love you more'], ['Shabey', 'Udah ya aku matiin'], ['Baby', 'huum'],
];

// Daftar kontak (halaman "New Message") — urutan persis seperti permintaan.
const TG_CONTACTS = ['Baby', 'Keenan', 'Maxton', 'Eiser', 'Evander', 'Miyuka', 'Noona kian', 'Adrian Manager IT', 'Rayhan Network Engineer', 'Calvin System Admin', 'Revan IT Support', 'Ethan Programmer', 'Zayn Cybersecurity', 'Farel Operator Produksi', 'Keith Leader Produksi', 'Andrew PPIC Staff', 'Raka Supervisor Produksi', 'Bryan Maintenance Engineer', 'Jordan QC Inspector', 'Michael Manager PPIC', 'Arvin Akuntansi', 'Devin Production Planner', "Rafan TI'23", 'Kevin HIMA TI', 'Jason BEM FTI', "Elvano TI'22", 'Nathan Aslab TI', "Darren HIMA'23", 'Kenzo Panitia IT Fest', 'alam', 'akim', 'amaila sheaby', 'amani laekasih', 'amaraa eunoia', 'amayinn whitney s', 'amiliona ayacha', 'anaire', 'anaireè hierarchy', 'barbie ello', 'bimielle', 'callā guimaraes', 'chanriel novaiere', 'charina r', 'chloe', 'citah', 'dalf', 'darcie amethyste', 'djoernst vermond', 'ejipa', 'emma beibelle', 'evaniessence', 'feeny vacquez', 'gabriel', 'gamas marshal', 'genevieve eve', 'gisara sylveraine', 'gladies sabina', 'haidar ali', 'haikal', 'halevi seraphin', 'halbert', 'hasca', 'haury honey isabelle', 'havel pratama', 'hazëllio lillouth', 'helianth elour', 'hejrson', 'herga', 'hillary h', 'hikaru', 'hyven solstice', 'illiana elsher', 'jacob', 'james edward', 'jarc', 'jearth', 'jeje', 'jenerice', 'jordan', 'josean', 'khaalèd winston', 'khade rhae', 'khairo', 'kindi', 'kindi vältzh', 'lieselottie c', 'louise', 'lucienne m', 'lupi', 'madavin', 'maddox edric vale', 'mahesa', 'marson aitah', 'markliox ryver a', 'mayeen adek persija side', 'micaa lowent', 'miyuka dedoll', 'morve lumio', 'morthiel', 'ocean arutala', 'raden', 'raze', 'rekal', 'reyhan denandra', 'samuel j', 'shane', 'stevanno', 'vjeesc', 'willy', 'yvonné dolgëz'];


const CHATS = [
  { id: 'baby', name: 'Baby', pinned: true, sub: 'last seen recently', unread: 1, src: `
#F 14:32
i|Sayang, udah di kampus?
o|Udah, sayang. Bentar lagi berangkat ke titik kumpul.
i|Demo-nya jadi hari ini, ya?
i|Kamu beneran ikut turun langsung?
o|Iya, Baby. Aku bantu koordinasi lapangan juga hari ini.
i|Jujur aku khawatir, sayang. Aku tahu ini penting buat kamu, tapi tetap aja kepikiran.
o|I know, baby. Aku bakal hati-hati, kok. Nanti kalau udah selesai aku kabarin kamu, ya.
i|Janji jangan lupa jaga diri sendiri. Kamu suka sibuk mastiin semua orang aman, terus lupa kalau kamu juga harus dijaga.
o|Iya, cintaku. Aku inget, kok. Makasih udah selalu khawatirin aku.
i|Love you, abang. Hati-hati, ya.
o|Love you more, baby. Nanti aku kabarin lagi ❤️
#F 21:46
o|Baby, aku udah selesai. Sekarang otw apartemen.
i|Sayanggg, akhirnya 😭
i|Kamu aman, kan? Ada apa-apa tadi?
o|Aman, sayang. Cuma capek aja, tadi sempat padat pas massa mulai bubar, tapi semuanya udah kondusif.
i|Syukurlah. Aku dari tadi nunggu kabar kamu.
o|Maaf ya bikin kamu khawatir. Sebentar lagi aku sampai, kok.
i|Kabarin kalau udah depan pintu, nanti aku bukain.
o|Baby, bukain pintu dong. Aku udah depan 😭
i|Lah, bukannya kamu bawa kunci?
o|Bawa, sayang. Tapi tanganku penuh banget ini, ada tas laptop sama barang-barang lainnya wkwk.
i|Iya, iya, tunggu sebentar. Aku bukain sekarang.
o|Makasih, gantengnya aku.
i|Sini masuk, sayang. Kamu pasti capek banget. Mandi dulu terus makan, ya.
o|Iya, Baby. Kangen banget pengen dipeluk kamu.
i|Sini, aku peluk sepuasnya. ❤️
#S 06:47
o|Baby, aku berangkat kerja dulu, ya.
o|Kamu tidur aja lagi, nggak perlu bangun. Masih pagi banget ini.
o|Makanan udah aku siapin di meja. Nanti bangun jangan lupa makan dulu, ya, sayang.
o|Aku harus ke kantor buat beresin server yang semalam down. Kayaknya bakal agak lama.
o|Love you, Baby. Tidur yang nyenyak, nanti aku kabarin lagi ❤️
#S 09:12
i|Sayang?
i|Kamu udah sampai kantor?
i|Aku baru bangun, maaf ya nggak sempat nemenin kamu tadi pagi :(
i|Kamu semalam tidur jam berapa, sih?
o|Hehe, baru bangun ya, ganteng?
o|Udah sampai dari tadi, kok. Sekarang lagi mulai cek servernya.
i|Jangan ngalihin pertanyaan, abang 😭
i|Kamu tidur berapa jam?
o|Sekitar enam jam kayaknya, sayang. Masih aman, kok, jangan khawatir.
i|Enam jam itu nggak banyak, tau.
i|Servernya gimana sekarang? Udah normal?
o|Belum sepenuhnya. Lagi dicek bareng tim infra sama security, masih ada beberapa service yang perlu divalidasi.
i|Oke, semangat ya, sayang. Tapi kalau udah mulai capek, istirahat sebentar. Jangan dipaksain terus.
o|Iya, Baby. Aku usahain. Kamu udah makan belum?
i|Belum, baru mau bikin sesuatu.
o|Yaudah, makan dulu sana. Jangan sampai kamu juga lupa makan gara-gara sibuk sendiri wkwk.
i|Iya, abang. Kamu juga jangan lupa makan siang, ya. ❤️
#S 20:36
i|Abang kamu lembur sayang?
o|Iya, Baby. Masih di kantor, belum selesai semuanya.
i|Ya ampun, dari pagi kamu di sana terus?
i|Emangnya masih ada masalah apa, sayang?
o|Servernya udah mulai stabil, tapi masih ada beberapa hal yang harus dipastikan. Aku nggak mau besok pagi malah error lagi pas operasional mulai.
i|Aku ngerti kok, sayang. Kerjaan kamu penting, apalagi kalau menyangkut sistem kantor.
i|Cuma aku khawatir kamu kecapekan. Dari kemarin kegiatan kamu padat banget.
o|I know, Baby. Aku juga udah pengen pulang, kangen kamu.
o|Seharian ketemu layar sama log error terus. Sekarang malah makin kangen pengen pulang terus peluk kamu 😭❤️
i|Sini nanti aku peluk lama-lama.
i|Mau aku tungguin makan malam, sayang?
o|Jangan tunggu sampai kemaleman, ya. Kalau ngantuk tidur aja dulu.
o|Nanti aku kabarin kalau udah mau pulang, kok.
i|Aku bisa tunggu sebentar. Tapi janji kalau udah selesai langsung pulang, ya, abang.
o|Iya, sayang. Aku juga maunya cepet pulang, mandi, makan, terus tidur sambil peluk kamu.
i|Hehe, yaudah. Aku tunggu kabar abang.
i|Hati-hati nanti pulangnya. Love you, abang. ❤️
o|Love you more, Baby.
o|Bentar lagi aku update, ya. Jangan tidur sambil nungguin HP terus, sayang. ❤️
` },

  { id: 'maxton', name: 'Maxton', sub: 'last seen recently', src: `
#0 00:12
o|Ayo nonton upi bub
i|Ga demen
i|Kedemenan si malik ajg
o|Aing ge demen kontol
o|Memek
i|Bub
i|Bub
i|Aing lmn ga ketemu sia rugi mrn nya
i|Ga nyesel aing dulu nyoba main mutual diajarin jude
i|Kalo dulu ga nyoba maen mutual, mungkin kita gaakan ketemu bub
i|Lopyu bub
o|Abis ngadahar naon
o|Untung aing lebih milih sia daripada malik
i|Ah kontol
i|Sia kenal aing duluan deketnya sama malik duluan
o|Sia ga asik tolol
o|Saling rep reply doang tp te basa basi
i|Lah aing era anjg
i|Aing ngeri sia cap aing sok asik
o|Lah jaba rek deket tp sieun di anggep sok asik
o|Nya ges kan akhirnya kita yg bersama
o|Cig malik eweh hanya sia yg ada di hati aing
i|Goblok
i|Hoak
i|Aing merasa apaya bub, cuma sia lah yang paling relate sama kehidupan aing kitu asli
i|Jadi aing nyaah bgt ka sia
o|Nya karna hampir mirip hirup aing jeng sia
o|Jd sia bisa relate ka aing
o|Aing jg ngerasa kitu
i|Nahhh wkwkwk
i|Lagi sedih bgt gini meratapi hidup
i|Langsung inget na ka sia😭
i|Semoga hidup sia selalu diberi kebahagiaan nya bub, walau aing nyaho ayena sesek bgt buat dijalanin. Semoga ga lama lama, kalo udah bisa napas lega tong poho buat bahagia trs pokona mah
o|Mewek ye bae tong
o|Amin amin
o|Semoga nu sia ucapkan berbalik baik ka diri sia, aing jg mau sia bahagia trs semangat buat hirup sia sorangan, semoga makin banyak nu nemenin sia makin banyak yg nyaah ka sia
i|Kurang hiji deui
i|Sia boga abang tapi abang sia te peduli?
i|Lmn hh sarua ajg
o|Heeh tolol
o|Hokcuhh
i|Sarua kontol😭
i|Goblok dih
i|Mirip bgt ajg
o|Sia saha kontol?
o|Merinding gini ajg
i|Sien dah aing
i|Jangan" kita kaya kimi no nawa bub
i|Yang jiwa nya pindah itu bertukar
o|Sia in another life aing meren ajg
i|Sumpah bub
i|Saking miripnya
i|Ngeri inimah
o|Sieun jujur
i|Yang beda cuma agama bub😭
` },

  { id: 'keenan', name: 'Keenan', sub: 'last seen recently', src: `
#3 19:30
o|Marah terus
i|sengaja
i|wle
o|Tidur ra
i|kok
i|tau sih
i|oh
i|cf gua
i|gua blm buka tt lagu
i|apalagi yg lu kirim ajg
o|Itu gua reupload
o|Jd lu komen ulang ya
i|Tuhannn
i|mau brp banyak gua komen
o|100
` },

  { id: 'miyuka', name: 'Miyuka', sub: 'online', src: `
#2 21:15
o|Ayo vd adek
i|MALEMAN YUK ABANG
o|Oke adek
i|abang bergadang kan??
o|Yoi
o|Inpokan saja
o|Ayo dedoll
i|hari ini yuuk
o|Mau sekarang?
o|Cius nih?
i|ah nti dulu deh...
i|PAS WEEKEND AJADEH AKU IKUT
i|ily abangz ❤️❤️
` },

  { id: 'kian', name: 'Noona Kian', sub: 'last seen recently', src: `
#6 10:20
o|Happy October, my dear nunaa wishing you nothing but good things this month and always, may october bring you more happiness, peace, and beautiful moments. May God bless you always, nun. Stay happy and take care of yourself always.
#5 08:44
i|Amiin.. thank u so much!!! happy October juga buat adekku sayangg 😆 I hope a lot of goodness comes to you in this month and you are always given luck and happiness!! 💞
i|Walahh.. pantess atuh :( get enough rest yaa, semoga cepat sembuh dekk, ntar kita bisa chattan lagii kita cerita cerita
o|How sweet nunaa
o|Thank you nuna
o|Amiin nun udh mulai membaik nun
#4 13:02
i|Yeeey Alhamdulillah udah sembuh, jaga kesehatan yaa kedepannya!! btw maaf Nuna baru reply chat kamu
i|Kabar dan kondisi kamu baik kan??
o|Baik nunaaa udh sembuh ini
o|Thank you for asking nun
o|Nuna gimana kabarnya?
i|Shabey sekarang kesibukannya apaa?
i|Nuna alhamdulillah baik kok, kemarin kemarin sibuk sama tugas kuliah
o|Kesibukannya menjadi barudak korporat
o|Tiada libur itu nun
o|Maklum jagoan
` },

  { id: 'akatsudi', name: 'Akatsudi', group: true, sub: '4 members', unread: 1, mute: true, src: `
#1 00:02
M|Baharrr
M|Inenned
M|Pinned
M|Pinned
M|Anjg
M|Goblok anjg
J|Tot
J|Pinned
M|Gakuat
J|Anjgg
M|Ngakakk
G|ADUH
J|WKWKWK
G|MAKSTON MEMEK
M|Baharrrr
M|Gakiat
G|MEMEK KAU AJG
M|Lemess
G|SIAPA SURUH DI PINNED BGST
M|Gua ampe ngiler
G|Tolol kau makston
M|Ngilerr
M|Sumpah
M|Ngakak
M|Gakuatt
J|Udah dikasih contoh sama gua di st, tidak mau mengerti
G|Ga nyadar ajg
G|Kontol
M|Nangisss
G|Masih ada kg
G|Udh gua edit
M|Siapa aja yg udah liat😭😭😭😭
G|Ke dit kaga
G|Langsung 8 orang sama lu
J|Udah kaga
G|😁
M|Dongo banget anjg
M|Gakiat
M|Ampe ngiler
J|Ih jijik ih
G|Tolol ajg
G|Siapa yg pin
J|Si Maxton, anjir
E|WKWKWKWKWK
E|NGAKAK
G|Nahkan tolol
E|IDIOTTT
E|siapa aja yang liat
E|WKWKWKWKWK
E|WKWKWKWKWK
E|LUCUUU
E|suka dah
J|Dikasih contoh, tidak mau mengerti
E|gapapa ege biar di notice lu @Noctiish
E|NGAKAK
E|WKWKWKWK
G|Bang
E|GA KUAT
E|DONGO
G|Gimana bang
G|Dia ngeliat sebelum 12:05 kg?
M|Gakuat
G|Gua kg mau lg ah ss ss ajg
G|Babi kau makston
E|harusnya lu hapus bukan edit
M|Lemes banget
M|Sumpah
M|Batuk anjg
E|WKWKWK
E|LUCU BANGET
G|Gua kg mau tanggung jawab
G|WKWKKWKW
J|Oke, kasih solusi. Saran dari gua kalau emang dia mempertanyakan, jawab jujur aja emang Maxton mau mutualan sama lu
M|Gakuattt
M|Tolol anj
M|Makanya liat"😭
M|Anjg anjg
G|Babi
#0 -2m
M|Wkwkwk
` },

  { id: 'dito', name: 'Dito', sub: 'last seen recently', src: `
#4 21:30
o|Dit
i|Uy
i|Apa jing
o|Manggil aja jing
o|Takut lu lupa ma gua
i|Ngawur bener anjr
o|Peace
o|Canda dit
i|Kangen bilang, naksir bilang
o|Banget
i|Dek?
i|Pap bugil coba
o|Jangan di spill
i|Fak pulennya shabey
i|Menarik banget
i|Shabey like gravitasi
o|Ikr
i|Anjg
` },

  { id: 'jason', name: 'Jason BEM FTI', sub: 'last seen recently', src: `
#F-1 16:05
i|vy, lu udah free belom?
o|kenapa jon
i|besok malem ada konsolidasi bem dulu ya. bahas aksi ke HI soal karhutla
o|akhirnya gerak juga wkwk. kapan konsolnya?
i|malem ini bisa ga? jam 8 di sekret. anak hima juga gue suruh join biar satu suara dulu
o|bisa, gue dateng. emang udah fix ke bunderan HI?
i|arahnya ke sana. kita mau bawa isu karhutla ini, apalagi yang di daerah jabar juga makin sering kejadian. cuma teknis lapangan belom mateng, makanya perlu konsol
o|oke. buat lapangan biar gue bantu atur ya. dari pembagian korlap, titik kumpul, mobilisasi massa sampe koordinasi antarbarisan. jangan sampe hari H malah chaos gara-gara miskom
i|NAH ini yg gue cari dari tadi 😭🙏🏻
o|anjing wkwk. tapi serius, kita harus jelas dulu siapa PIC tiap bagian. jalur komunikasi satu pintu, kalo ada perubahan jangan semua orang bikin keputusan sendiri
i|setuju. gue urus kajian isu, tuntutan sama koordinasi antar-BEM. lu bantu teknis lapangan aja ya, nanti kita sinkronin pas konsol
o|siap. massa dari kampus mana aja yg udah confirm?
i|FTI kita, beberapa fakultas lain masih nunggu hasil konsol. hima juga lagi ngajak kampus sebelah
o|oke, jangan tulis estimasi massa dulu kalo belum confirm. nanti malah ngaco di publikasi. sama tuntutannya harus konkret, jangan cuma rame di poster doang
i|real. gue juga pengen isu ini ga cuma numpang lewat di timeline 2 hari terus ilang
o|nah itu. karhutla bukan isu musiman buat konten doang. ada masyarakat yang kena dampaknya, ada lingkungan yang rusak, dan harus jelas siapa yang bertanggung jawab. kita suarain pake data biar ga gampang dipatahkan
i|anjir tumben lu ngomong panjang vy
o|bacot. lu yg ngajak rapat malah gue yg briefing 😭
i|WKWKWK yaudah ketemu jam 8. jangan ngilang lu
o|santai. gue bawa laptop sekalian, kita mapping kebutuhan lapangan sama pembagian PIC. kirim rundown sementara ke gue sebelum konsol
i|siap, korlap dadakan 🫡
o|belom jadi korlap udah dikasih jabatan. transfer gaji dulu minimal
i|gaji lu doa mahasiswa sejahtera
o|yaudah demo aja sekalian nuntut UKT lu naik lagi
i|KONTOL 😭😭😭
o|jam 8, jon. jangan telat.
` },

  { id: 'kevin', name: 'Kevin HIMA TI', sub: 'last seen recently', src: `
#F 21:10
o|vin, lapangan aman?
i|aman vy, udah mulai bubar juga ini. kenapa emg?
o|mastiin aja. tadi sempet liat barisan belakang agak padet, sekarang udah kondusif?
i|udah kok, massa udah pada geser. anak-anak juga lagi mastiin ga ada yg ketinggalan barang. korlap tiap barisan udah gue kabarin buat cek orang masing-masing.
o|oke good. ga ada yg kenapa-kenapa kan?
i|sejauh ini aman, vy. tadi emg sempet desek-desekan dikit pas orang mulai keluar, tapi udah ke-handle. lu tenang aja.
o|sip, makasih ya vin. lu juga jangan sampe lupa cek anak-anak sendiri, jangan sibuk ngurus orang sampe diri lu malah ga keurus wkwk
i|siap pak koordinator lapangan 😭 lu sendiri masih di mana?
o|masih sekitar sini, tapi gue cabut duluan ya. baby udah nunggu di apartemen dari tadi.
i|WKWKWK OALAHHH pantes buru-buru mastiin lapangan aman, ternyata ada yg nungguin.
o|bacot anjing 😭 gue mastiin emg karena tanggung jawab, sekalian izin cabut.
i|iya iya, alesan diterima. sana pulang, kasian baby nungguin. sisanya aman, nanti kalo ada update gue kabarin.
o|oke, jangan lupa makan dulu lu. makasih ya udah bantu pegang lapangan hari ini.
i|siap vy, lu juga hati-hati di jalan.
o|noted. kabarin kalo ada apa-apa.
i|gas. salam buat baby WKWKWK
o|ga usah ikut campur hidup orang, vin.
i|HAHAHAHAHAH KNTL 😭
` },

  { id: 'zayn', name: 'Zayn Cybersecurity', sub: 'last seen recently', src: `
#F 23:48
i|vy, lu masih melek?
o|masih. kenapa?
i|server internal down lagi. monitoring dari gue alert dari jam 23.40, sekarang beberapa service udah timeout.
o|yang production apa internal?
i|internal dulu, tapi impact-nya udah kena beberapa service yang dipake tim ops. gue cek dari monitoring, ada request spike sebelum server drop.
o|ada indikasi attack?
i|belum bisa gue pastiin. makanya gue chat lu. gue butuh cek dari sisi infra juga, tapi akses log yang gue pegang terbatas.
o|oke, gue coba remote dulu. kirim timestamp sama error log yang udah lu kumpulin.
i|udah gue kirim di grup incident. lu belum baca?
o|belum, baru buka chat lu. gue cek sekarang.
i|vy, no offense ya, tapi harusnya lu udah monitor ini dari tadi. alert pertama masuk ke channel IT sebelum gue follow up.
o|gue paham, tapi jangan langsung asumsi gue ignore alert. notifikasi monitoring masuk ke channel, bukan berarti semuanya otomatis ke-handle sama gue. gue juga perlu tau siapa PIC incident-nya.
i|gue bukan nyalahin lu. gue cuma bilang response time kita kelamaan. kalau service ini nyambung ke operasional besok pagi, impact-nya bisa lebih luas.
o|dan gue juga lagi coba cari root cause-nya, zayn. kalau mau bahas response time, kita evaluasi setelah incident beres. sekarang fokus recovery dulu.
i|oke. fair enough. gue cek security event sama access log, lu cek infra dan resource utilization. jangan restart service dulu sebelum log penting ke-capture.
o|nah, gitu. gue cek CPU, memory, disk sama koneksi database dulu. kalau ada indikasi compromise, kita preserve evidence dan eskalasi sesuai prosedur.
i|siap. btw besok lu masuk kantor jam 8 ya.
o|hah? besok sabtu, zayn 💀
i|gue tau. Pak Ardi minta tim terkait standby langsung di kantor. incident ini perlu dicek bareng infra, security, sama vendor kalau memang dibutuhin.
o|jadi lembur dong gue?
i|iya, gue udah koordinasi sama lead. jam kerja sama overtime-nya nanti dicatat HR. gue juga masuk besok.
o|anjir, weekend baru mau napas bentar udah dipanggil server 😭
i|welcome to IT, katanya suka troubleshooting wkwk.
o|troubleshooting iya, bukan berarti server boleh punya masalah tiap gue mau libur.
i|WKWKWK salahin servernya, jangan gue.
o|gue salahin dua-duanya sekalian. kirim detail incident sama status terakhir ke gue, jangan cuma alert doang.
i|done. gue update timeline incident, event log, sama service yang terdampak. nanti gue taruh di ticket biar dokumentasinya jelas.
o|oke. gue lanjut cek infra. kalau udah ada indikasi root cause, kita update di incident channel. jangan ada perubahan config tanpa dicatat dulu.
i|copy. kalau sampai jam 1 belum recover, kita eskalasi ke lead.
o|setuju. tapi kalau udah pulih, tetap monitor dan validasi service-nya normal. jangan cuma lihat status hijau terus dianggap beres.
i|siap, pak IT support 🫡
o|bacot. besok bawa kopi lu, gue nggak mau keluar duit buat orang yang ngajak lembur.
i|deal. asal lu jangan telat besok.
o|gue dateng. sekarang kerja dulu, debatnya senin aja.
i|noted. gue update kalau ada temuan baru.
o|gas. keep me posted.
` },

  { id: 'andrew', name: 'Andrew PPIC Staff', sub: 'last seen recently', src: `
#S 00:17
00:17 o|ndrew, lu masih melek?
00:17 i|teu sare, anjir. kenapa vy 😭
00:18 o|wkwkwk nanya server aja. sistem PPIC lu masih bisa diakses normal apa udah mulai ngadat?
00:18 i|NAH anjir, pantesan dari tadi loading mulu 💀 gue kira wifi kantor gue nuju mabok.
00:18 o|lah serius? error-nya dari kapan?
00:19 i|dari sekitar jam 11 lewat kayaknya. awalnya masih bisa masuk, cuma pas buka data material sama production schedule lama banget. sekarang kadang request timeout.
00:19 o|oke, berarti udah ada impact ke sistem lu juga. ada data yang gagal ke-save atau cuma lambat pas akses?
00:20 i|sejauh ini yang gue tau cuma lambat. tapi gue belum berani bilang aman, takut ada transaksi yang nyangkut. besok pagi gue cek lagi sama anak PPIC.
00:20 o|ulah asal refresh terus atuh wkwk 😭 cek dulu status transaksinya, jangan sampe malah double submit. kalau ada yang pending, catet timestamp sama nomor referensinya.
00:21 i|SIAP PAK ENGINEER 🫡
00:21 o|bacot. gue juga lagi mumet ini server dari tadi.
00:21 i|eh tapi bentar, kalau sistem PPIC ngadat gini, anak produksi shift 3 gimana? mereka masih jalan kan?
00:22 o|nah itu yang mau gue tanyain. anak-anak produksi yang lembur shift 3 malam ini masih bisa jalan normal? ada yang komplain sistem atau input datanya keganggu?
00:22 i|masih jalan, tadi gue sempet dikabarin sama leader produksi. cuma mereka agak kehambat pas mau cek jadwal sama kebutuhan material. untungnya beberapa data udah mereka pegang sebelum mulai shift.
00:23 o|oke, bagus kalau masih ada pegangan. tapi tolong pastiin ke leader-nya, jangan sampe mereka bikin pencatatan manual terus besok datanya beda sama sistem.
00:23 i|siap. kasian sih anak-anak, udah shift 3, lembur pula. jam segini mah hayang balik kabeh pasti 😭
00:23 o|WKWKWK saha nu teu hayang balik, Drew. gue aja pengen matiin laptop terus pura-pura ga punya kerjaan.
00:24 i|HAHAHAHAHA ulah kitu, vy. besok urang semua kena semprot kalau production report berantakan.
00:24 o|makanya bantu gue cek dampaknya dulu. kalau ada transaksi pending, jangan diulang sebelum statusnya jelas. gue lagi koordinasi sama security sama infra buat nyari penyebab server down-nya.
00:25 i|oke, gue hubungin leader produksi sekarang. gue minta mereka catet proses yang ketahan sama data yang belum masuk. nanti gue kirim rekap ke lu.
00:25 o|nah gitu. kalau ada proses yang beneran ke-stop, kabarin juga. biar kita bisa kasih update ke manager, jangan sampe informasi baru naik pas udah pagi.
00:26 i|siap, kawan seperjuangan. server error, manusia ikut error.
00:26 o|status manusia gue udah critical dari tadi, anjir.
00:26 i|WKWKWK kopi dulu atuh, vy.
00:27 o|kopi mah bisa, tidur yang ga bisa. besok sabtu gue disuruh masuk lagi jam 8 😭
00:27 i|LAH SAMA SIAPA YANG NYURUH LU LEMBUR SABTU 😭
00:28 o|server lu yang nyuruh, bukan gue.
00:28 i|anjir server sekarang punya kuasa atas hidup kita.
00:28 o|dah, fokus kerja. kirim rekapnya kalau udah dapet kabar. hatur nuhun, Drew.
00:29 i|siap, vy. lu juga jangan lupa istirahat bentar. ulah nepi ka tumbang gara-gara server.
00:29 o|siap, pak PPIC. kabarin kalau ada perubahan.
00:29 i|gas. semoga besok servernya sadar diri.
` },

  // Hanya tampilan (tidak bisa dibuka)
  { id: 'eiser',   name: 'Eiser',    open: false, pre: 'Siap bang', ago: 4, time: '22:18' },
  { id: 'evander', name: 'Evander',  open: false, pre: 'Oke, nanti gua kabarin', ago: 5, time: '17:51' },
  { id: 'itteam',  name: 'IT Team',  open: false, group: true, mute: true, pre: 'Deploy selesai ✅', ago: 8, time: '15:30' },
  { id: 'harvard', name: 'Harvard survivor', open: false, group: true, mute: true, pre: 'Tugas minggu ini udah dikumpulin?', ago: 12, time: '09:12' },
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
  telegram: { bg: 'linear-gradient(180deg,#3fb4f0,#1c8fd1)', svg:
    '<path d="M44.5 16.5 14.4 28.4c-1 .4-.9 1.8.1 2.1l7.4 2.3 2.9 9c.3.9 1.4 1.1 2 .4l4.1-4.1 7.8 5.7c.9.6 2 .1 2.3-.9l5.2-23.2c.3-1.2-.8-2.1-1.8-1.7zM23.5 32.6 40 22.4c.3-.2.5.2.3.4L26.7 35.4c-.5.4-.8 1-.9 1.7l-.6 3.6-1.7-8.1z" fill="#fff"/>' },
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
    { app: 'telegram', av: true, title: 'Baby', body: 'Abang kamu lembur sayang?', t: '2m lalu' },
    { app: 'telegram', av: true, title: 'Akatsudi', body: 'Maxton: Wkwkwk', t: '5m lalu' },
    { app: 'calendar', title: 'Kalender', body: '08 November — Mensiversary dengan Baby 🤍', t: 'Hari ini' },
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
const DOCK = ['call', 'browser', 'telegram', 'music'];
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
  telegram:  { label: 'Telegram',  build: buildTelegram },
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
      <div class="ig-cap"><b>${esc(CFG.username)}</b> ${cap}</div>
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
  const events = d => d.getDate() === 8 ? [{ t: 'Sepanjang hari', title: 'Mensiversary dengan Baby 🤍', sub: d.getMonth() === 10 ? 'Pengingat: 08 November' : 'Setiap tanggal 8' }] : [];
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
      (evs.length ? evs.map(e => `<div class="ev"><i></i><div><b>${esc(e.title)}</b><span>${e.t} · ${e.sub}</span></div></div>`).join('') : '<div class="ev-none">Tidak ada acara</div>');
  }
  root.addEventListener('click', e => {
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
   WEATHER (data asli dari Open-Meteo, lokasi Bandung)
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
  const temp = d => Math.round(23.5 + 4.5 * Math.sin((d.getHours() - 9) / 24 * 2 * Math.PI));
  return { off: true,
    current: { time: iso(t0), temperature_2m: temp(t0), apparent_temperature: temp(t0) + 2, relative_humidity_2m: 78, weather_code: 2, wind_speed_10m: 8, surface_pressure: 1009, visibility: 10000, is_day: +(t0.getHours() > 5 && t0.getHours() < 18) },
    hourly: { time: hrs.map(iso), temperature_2m: hrs.map(temp), weather_code: hrs.map(() => 2), is_day: hrs.map(d => +(d.getHours() > 5 && d.getHours() < 18)) },
    daily: { time: [...Array(10)].map((_, i) => iso(new Date(t0.getTime() + i * 864e5)).slice(0, 10)), weather_code: [2, 61, 63, 2, 3, 61, 2, 1, 2, 80], temperature_2m_max: [28, 27, 27, 29, 28, 26, 28, 29, 28, 27], temperature_2m_min: [19, 19, 20, 19, 19, 20, 19, 18, 19, 19], uv_index_max: [9, 7, 6, 9, 8, 6, 9, 10, 9, 8] } };
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
    <div class="wx-top"><h2>${esc(CFG.city.name)}</h2><div class="big">${Math.round(c.temperature_2m)}°</div>
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
  const PH = '<svg class="i" viewBox="0 0 24 24" style="fill:#fff;stroke:none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
  function dial(name) {
    const c = h(`<div class="calling"><div>${avatarOf(name, 110)}</div><h2>${esc(name)}</h2><p>calling mobile…</p><div class="end">${PH}</div></div>`);
    root.appendChild(c); let s = 0;
    const iv = setInterval(() => { if (++s === 3) $('p', c).textContent = 'berdering…'; }, 1000);
    $('.end', c).onclick = () => { clearInterval(iv); c.remove(); };
  }
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
      $$('.cl-row', B).forEach((r, i) => r.onclick = () => dial(list[i].name));
    }
    if (tab === 'fav') B.innerHTML = `<div class="cl-nav"><span class="blue">Edit</span><span></span><span class="blue" style="font-size:28px">+</span></div><div class="bigtitle">Favorites</div>
        <div class="cl-ct" data-n="Baby">${avatarOf('Baby', 40)}<span>Baby</span></div>`;
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
        if (e.target.closest('#kp-go') && num) dial(num);
      };
    }
    if (tab === 'vm') B.innerHTML = `<div class="cl-nav"><span></span><span></span><span></span></div><div class="bigtitle">Voicemail</div><div class="vm-empty">Tidak Ada Voicemail</div>`;
    if (tab !== 'keypad') B.onclick = e => { const c = e.target.closest('.cl-ct[data-n]'); if (c) dial(c.dataset.n); };
  }
  $('.tabbar', root).onclick = e => { const b = e.target.closest('button'); if (!b) return; $$('.tabbar button', root).forEach(x => x.classList.toggle('on', x === b)); tab = b.dataset.t; render(); };
  root._render = render;
  render();
}

/* =========================================================
   TELEGRAM
   ========================================================= */
ICP.x = '<path d="M18 6L6 18M6 6l12 12"/>';

/** Sabtu terbaru (jam 20:40 sudah lewat) — dipakai untuk "Jumat"/"Sabtu" di chat. */
function latestSat() {
  const n = new Date();
  for (let k = 0; k < 14; k++) {
    const d = new Date(n); d.setDate(d.getDate() - k); d.setHours(20, 40, 0, 0);
    if (d.getDay() === 6 && d <= n) return d;
  }
  return n;
}
/** Token hari: angka = N hari lalu · F = Jumat, S = Sabtu (boleh F-1 = Kamis) */
function atTok(tok, time) {
  const m = /^([FS])(-?\d+)?$/.exec(tok);
  if (!m) return at(+tok, time);
  const d = latestSat(); if (m[1] === 'F') d.setDate(d.getDate() - 1); if (m[2]) d.setDate(d.getDate() + parseInt(m[2], 10));
  const [H, M] = time.split(':').map(Number); d.setHours(H, M, 0, 0); return d;
}
function parseChat(c) {
  const msgs = []; let cur = null; const now = new Date();
  c.src.trim().split('\n').forEach(line => {
    line = line.trim(); if (!line) return;
    if (line[0] === '#') { const [a, t] = line.slice(1).split(' '); cur = atTok(a, t); return; }
    if (line[0] === '@') { const [H, M] = line.slice(1).split(':').map(Number); cur = new Date(cur); cur.setHours(H, M, 0, 0); return; }
    const tm = /^(\d\d):(\d\d) (.*)$/.exec(line);               // "00:17 o|teks" = jam eksplisit
    if (tm) { cur = new Date(cur); cur.setHours(+tm[1], +tm[2], 0, 0); line = tm[3]; }
    const i = line.indexOf('|'), who = line.slice(0, i), text = line.slice(i + 1);
    const t = cur > now ? new Date(now) : new Date(cur);
    msgs.push({ who, text, t, out: c.group ? who === 'G' : who === 'o', name: c.group ? (who === 'G' ? CFG.displayName : GROUP_NAMES[who]) : '' });
    cur = new Date(cur.getTime() + (text.length > 40 ? 2 : text.length % 2) * 60000);
  });
  c.msgs = msgs;
}
const lastOf = c => { const m = c.msgs[c.msgs.length - 1]; return { t: m.t, text: m.text, out: m.out, name: m.name }; };
CHATS.forEach(c => {
  if (c.src) parseChat(c);
  else c.msgs = [{ who: 'i', text: c.pre, t: at(c.ago, c.time), out: false, name: '' }];
  c.last = lastOf(c);
});
const chatById = id => CHATS.find(c => c.id === id);
function avatarSrc(name) {
  const k = String(name).toLowerCase();
  for (const n in AVATARS) if (n.toLowerCase() === k) return AVATARS[n];
  const al = AVATAR_ALIAS[name]; return al ? avatarSrc(al) : null;
}
/** Avatar: foto kalau ada, kalau tidak inisial berwarna */
function avatarOf(name, size) {
  const base = avatar(name, size), src = avatarSrc(name);
  if (!src) return base;
  return base.replace(/<\/div>$/, `<img class="av-img" src="${src}" alt="" onerror="this.remove()"></div>`);
}

const TG = { root: null, open: null, add: null, typing: null };
const STORY_SEEN = {}, STORY_LIKED = {};
const dayLabel = t => {
  const o = { day: 'numeric', month: 'long' };
  if (dayDiff(t, new Date()) < 7) o.weekday = 'long';
  if (t.getFullYear() !== new Date().getFullYear()) o.year = 'numeric';
  return cap(fmt(t, o));
};

/** Tambah pesan ke chat (data + tampilan yang sedang terbuka + daftar chat) */
function addMsg(c, text, out) {
  const m = { who: out ? 'o' : 'i', text, t: new Date(), out, name: '' };
  c.msgs.push(m); c.last = lastOf(c);
  if (!out && TG.open !== c.id) c.unread = (c.unread || 0) + 1;
  if (TG.open === c.id && TG.add) TG.add(m);
  renderChatList();
  return m;
}

function buildTelegram(root) {
  TG.root = root;
  root.innerHTML = `
    <div class="tg-nav"><span>Edit</span><b>Chats</b><span style="display:flex;gap:18px" data-act="new">${ic('compose')}</span></div>
    <div class="app-body" style="padding-bottom:0"><div id="tg-list"></div></div>
    <div class="tabbar tg-tabs"><button>${ic('user')}Contacts</button><button>${ic('phone')}Calls</button><button class="on">${ic('comment')}Chats</button><button>${ic('cog')}Settings</button></div>`;
  $('[data-act=new]', root).addEventListener('click', openContacts);
  $('#tg-list', root).addEventListener('click', e => {
    const st = e.target.closest('[data-s]'); if (st) return openStories(st.dataset.s);
    const r = e.target.closest('.tg-row'); if (!r) return;
    const c = chatById(r.dataset.id); if (c.open === false) return;
    openChat(c);
  });
  renderChatList();
}
function renderChatList() {
  if (!TG.root) return;
  const el = $('#tg-list', TG.root); if (!el) return;
  const list = CHATS.filter(c => !c.hidden || c.msgs.length).sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || b.last.t - a.last.t);
  el.innerHTML = `
    <div class="st-bar">${STORIES.map(s => `
      <div class="st-it" data-s="${s.id}">
        <div class="st-ring ${STORY_SEEN[s.id] ? 'seen' : ''}">${avatarOf(s.who, 58)}${s.id === 'me' ? '<i class="st-plus">+</i>' : ''}</div>
        <span>${esc(s.name)}</span></div>`).join('')}</div>
    <div class="tg-search">${ic('search')}Search for messages or users</div>
    ${list.map(c => {
      const l = c.last, tx = c.group && l.name && !l.out ? `<i>${esc(l.name)}</i><br>${esc(l.text)}` : esc(l.text);
      return `<div class="tg-row ${c.pinned ? 'pin' : ''}" data-id="${c.id}">${avatarOf(c.name, 56)}
        <div class="tx"><div class="tg-top"><b>${c.group ? ic('users') : ''}${esc(c.name)}</b>
          <span class="tg-time">${l.out ? ic('dcheck', 'ck') : ''}${listTime(l.t)}</span></div>
          <div class="tg-bot"><div class="tg-pre">${l.out && c.group ? '<i>You</i><br>' : ''}${tx}</div>
          ${c.unread ? `<span class="tg-bdg ${c.mute ? 'mute' : ''}">${c.unread}</span>` : c.pinned ? `<span class="tg-pinic">${ic('pin')}</span>` : ''}</div></div></div>`;
    }).join('')}`;
}

/* ---------- gelembung chat ---------- */
function bubble(m, group, prev) {
  const first = !prev || prev.out !== m.out || prev.name !== m.name || m.t - prev.t > 6e5 || prev.t.toDateString() !== m.t.toDateString();
  const sn = group && !m.out && first ? `<span class="sn" style="color:${NAME_COL[hash(m.name) % NAME_COL.length]}">${esc(m.name)}</span>` : '';
  const txt = esc(m.text).replace(/@(\w+)/g, '<span style="color:#2a7fd4">@$1</span>');
  const b = `<div class="bub ${m.out ? 'out' : 'in'} ${first ? 'first' : ''}">${sn}${txt}<span class="mt">${hhmm(m.t)}${m.out ? ic('dcheck') : ''}</span></div>`;
  if (group && !m.out) return `<div class="brow ${first ? 'first' : ''}"><div class="bav">${avatarOf(m.name, 34)}</div>${b}</div>`;
  return b;
}
function openChat(c) {
  const root = TG.root;
  const s = push(root, `
    <div class="tg-head"><div class="back" data-back>${ic('left')}</div><div class="hn"><b>${esc(c.name)}</b><span class="sub">${esc(c.sub || '')}</span></div>${avatarOf(c.name, 38)}</div>
    <div class="tg-msgs"></div>
    <div class="tg-input">${ic('clip')}<input placeholder="Message" autocomplete="off">${ic('mic', 'mic')}${ic('send', 'snd')}</div>`, 'tg-chat');
  const box = $('.tg-msgs', s), sub = $('.sub', s); let prev = null, day = '', tyEl = null, lastAv = null;
  const add = m => {
    if (tyEl) tyEl.remove();
    const k = m.t.toDateString();
    if (k !== day) { day = k; box.insertAdjacentHTML('beforeend', `<div class="tg-day">${esc(dayLabel(m.t))}</div>`); prev = null; }
    const cont = prev && prev.out === m.out && prev.name === m.name && m.t - prev.t <= 6e5 && prev.t.toDateString() === m.t.toDateString();
    box.insertAdjacentHTML('beforeend', bubble(m, c.group, prev)); prev = m;
    if (c.group && !m.out) { const rows = box.querySelectorAll('.brow'); if (cont && lastAv) lastAv.style.visibility = 'hidden'; lastAv = $('.bav', rows[rows.length - 1]); } else lastAv = null;
    if (tyEl) box.appendChild(tyEl);
    box.scrollTop = box.scrollHeight;
  };
  c.msgs.forEach(add);
  c.unread = 0; TG.open = c.id; TG.add = add;
  TG.typing = on => {   // indikator "Shabey is typing..."
    sub.classList.toggle('typing', on); sub.textContent = on ? 'Shabey is typing' : (c.sub || '');
    if (on && !tyEl) { tyEl = h('<div class="bub out ty"><i></i><i></i><i></i></div>'); box.appendChild(tyEl); box.scrollTop = box.scrollHeight; }
    if (!on && tyEl) { tyEl.remove(); tyEl = null; }
  };
  setTimeout(() => box.scrollTop = box.scrollHeight, 340);
  const inp = $('input', s), bar = $('.tg-input', s);
  inp.addEventListener('input', () => bar.classList.toggle('typing', !!inp.value.trim()));
  const send = () => { const v = inp.value.trim(); if (!v) return; inp.value = ''; bar.classList.remove('typing'); addMsg(c, v, true); };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });
  $('.snd', s).addEventListener('click', send);
  const back = s.back;
  s.back = () => { TG.open = null; TG.add = null; TG.typing = null; back(); renderChatList(); };
  if (c.id === 'baby' && BABY.pending) setTimeout(startBabyReply, 900);
  renderChatList();
  return s;
}

/* ---------- halaman kontak (New Message) ---------- */
function openContacts() {
  const root = TG.root;
  const s = push(root, `
    <div class="nav"><div class="back" data-back>${ic('left')}Chats</div><b style="font-size:17px">New Message</b><span style="width:60px"></span></div>
    <div class="searchbar">${ic('search')}<input id="ct-q" placeholder="Search" autocomplete="off" style="flex:1;background:none;border:0;outline:0;font-size:17px"></div>
    <div class="app-body ct-list"></div>`, 'tg-contacts');
  s.style.setProperty('--bg', '#fff');
  const list = $('.ct-list', s);
  const paint = q => {
    const items = TG_CONTACTS.filter(n => n.toLowerCase().includes(q.toLowerCase()));
    list.innerHTML = items.map(n => `<div class="ct-row" data-n="${esc(n)}">${avatarOf(n, 40)}<span>${esc(n)}</span></div>`).join('') || '<div class="ev-none">Tidak ditemukan</div>';
  };
  paint('');
  $('#ct-q', s).addEventListener('input', e => paint(e.target.value.trim()));
  list.addEventListener('click', e => {
    const r = e.target.closest('.ct-row'); if (!r) return;
    const name = r.dataset.n;
    let c = CHATS.find(x => x.name.toLowerCase() === name.toLowerCase() || (name === 'Noona kian' && x.id === 'kian') || (name === 'Miyuka' && x.id === 'miyuka'));
    if (!c) { c = { id: 'x-' + name, name, sub: 'last seen recently', msgs: [], hidden: true }; CHATS.push(c); c.last = { t: new Date(0), text: '', out: false, name: '' }; }
    s.back(); setTimeout(() => openChat(c), 120);
  });
}

/* ---------- STORY ---------- */
function openStories(startId) {
  const root = TG.root;
  let ui = Math.max(0, STORIES.findIndex(s => s.id === startId)), ii = 0, el0 = 0, paused = false, closed = false, last = 0, raf = 0;
  const v = h(`<div class="story-view">
    <div class="sv-img"><img alt=""></div><div class="sv-shade"></div>
    <div class="sv-top"><div class="sv-bars"></div>
      <div class="sv-head"><span class="sv-av"></span><b></b><small></small><span class="sv-x">${ic('x')}</span></div></div>
    <div class="sv-bottom"><input class="sv-in" placeholder="Reply privately…" autocomplete="off"><button class="sv-like" aria-label="Like">${ic('heart')}</button><button class="sv-snd" aria-label="Kirim">${ic('send')}</button></div>
    <div class="sv-toast"></div></div>`);
  root.appendChild(v); requestAnimationFrame(() => v.classList.add('in'));
  const toast = t => { const e = $('.sv-toast', v); e.textContent = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 1500); };
  function show() {
    const s = STORIES[ui], it = s.items[ii];
    STORY_SEEN[s.id] = true; el0 = 0;
    $('.sv-img img', v).src = it.img;
    $('.sv-av', v).innerHTML = avatarOf(s.who, 34); $('.sv-head b', v).textContent = s.who; $('.sv-head small', v).textContent = `${it.h} j lalu`;
    $('.sv-bars', v).innerHTML = s.items.map((_, k) => `<div class="bar"><i style="width:${k < ii ? 100 : 0}%"></i></div>`).join('');
    $('.sv-like', v).classList.toggle('liked', !!STORY_LIKED[s.id + ii]);
  }
  const next = () => { const s = STORIES[ui]; if (ii < s.items.length - 1) ii++; else if (ui < STORIES.length - 1) { ui++; ii = 0; } else return close(); show(); };
  const prev = () => { if (ii > 0) ii--; else if (ui > 0) { ui--; ii = 0; } show(); };
  function close() { if (closed) return; closed = true; cancelAnimationFrame(raf); v.classList.remove('in'); setTimeout(() => v.remove(), 260); renderChatList(); document.removeEventListener('keydown', onKey); }
  const onKey = e => { if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); if (e.key === 'Escape') { e.stopPropagation(); close(); } };
  document.addEventListener('keydown', onKey);
  function loop(ts) {
    if (closed) return;
    const dt = last ? Math.min(100, ts - last) : 0; last = ts;
    if (!paused) el0 += dt;
    const p = Math.min(1, el0 / STORY_MS), cur = $$('.sv-bars i', v)[ii]; if (cur) cur.style.width = (p * 100) + '%';
    if (p >= 1) next();
    raf = requestAnimationFrame(loop);
  }
  /* tap / slide */
  let px = 0, py = 0, down = false, held = false, holdT = null;
  v.addEventListener('pointerdown', e => {
    if (e.target.closest('.sv-bottom,.sv-x')) return;
    down = true; held = false; px = e.clientX; py = e.clientY;
    holdT = setTimeout(() => { held = true; paused = true; }, 260);
  });
  const up = e => {
    if (!down) return; down = false; clearTimeout(holdT);
    const dx = (e.clientX - px) / S, dy = (e.clientY - py) / S, still = Math.abs(dx) < 10 && Math.abs(dy) < 10;
    if (held) { held = false; paused = document.activeElement === $('.sv-in', v); if (still) return; }
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) return dx > 0 ? next() : prev();   // slide kanan = lanjut, kiri = kembali
    if (dy > 90) return close();
    if (still) { const r = v.getBoundingClientRect(); (e.clientX - r.left) / r.width < .33 ? prev() : next(); }   // tap kiri = kembali, tap kanan = lanjut
  };
  v.addEventListener('pointerup', up); v.addEventListener('pointercancel', () => { down = false; clearTimeout(holdT); paused = false; });
  $('.sv-x', v).addEventListener('click', close);
  const inp = $('.sv-in', v);
  inp.addEventListener('focus', () => paused = true); inp.addEventListener('blur', () => paused = false);
  const reply = () => { if (!inp.value.trim()) return; inp.value = ''; inp.blur(); toast('Balasan terkirim ✓'); };
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') reply(); });
  $('.sv-snd', v).addEventListener('click', reply);
  $('.sv-like', v).addEventListener('click', e => {
    const k = STORIES[ui].id + ii; STORY_LIKED[k] = !STORY_LIKED[k];
    e.currentTarget.classList.toggle('liked', STORY_LIKED[k]); if (STORY_LIKED[k]) toast('❤️ Disukai');
  });
  show(); raf = requestAnimationFrame(loop);
}

/* =========================================================
   NOTIFIKASI BANNER + TRIGGER OTOMATIS (chat & telepon)
   ========================================================= */
const BABY = { pending: false, replied: false };

/** Ikon notifikasi: foto kontak + lencana app kecil (kalau avatar=true), atau ikon app biasa */
function notifIcon(app, title, av) {
  return av ? `<div class="nav-av">${avatarOf(title, 38)}<span class="nbadge">${appIconHTML(app)}</span></div>` : appIconHTML(app);
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
  const c = chatById(id), tgIcon = () => $('#home [data-app="telegram"]');
  const openIt = () => { if (TG.open !== id) openChat(c); };
  if (currentApp === 'telegram') return openIt();
  const go = () => { openApp('telegram', tgIcon()); setTimeout(openIt, 480); };
  if (currentApp) { goHome(); setTimeout(go, 520); } else go();
}

function triggerBabyChat() {
  const c = chatById('baby');
  addMsg(c, 'abang:(', false);
  notify({ app: 'telegram', avatar: true, title: 'Baby', body: 'abang:(', onTap: () => gotoChat('baby') });
  setTimeout(() => {
    addMsg(c, 'kabarin akuu', false);
    notify({ app: 'telegram', avatar: true, title: 'Baby', body: 'kabarin akuu', onTap: () => gotoChat('baby') });
    BABY.pending = true;
    if (TG.open === 'baby') setTimeout(startBabyReply, 1200);   // chat sedang terbuka → langsung balas
  }, 1800);
}
function startBabyReply() {                                      // dipanggil saat roomchat Baby dibuka
  if (!BABY.pending || BABY.replied || TG.open !== 'baby') return;
  BABY.pending = false; BABY.replied = true;
  TG.typing && TG.typing(true);
  setTimeout(() => { TG.typing && TG.typing(false); addMsg(chatById('baby'), "I'll be home soon baby", true); }, 2600);
}

/* ---------- telepon masuk dari Baby ---------- */
const CALL_LOGS = CALLS.map(c => ({ ...c, d: at(c.ago, c.time) }));
const CALLSTATE = { active: false };
let ringIv = null;
const ring = on => { clearInterval(ringIv); if (on) { beep(2); ringIv = setInterval(() => beep(2), 2200); } };
const PHONE_SVG = '<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';

function incomingCall() {
  if (CALLSTATE.active) return; CALLSTATE.active = true;
  const L = $('#call-layer');
  L.innerHTML = `<div class="cl-bg"></div>
    <div class="ic-info"><div class="ic-av">${avatarOf('Baby', 120)}</div><div class="ic-name">Baby</div><div class="ic-sub">mobile</div></div>
    <div class="ic-bottom">
      <div class="ic-extra"><div>${ic('clock')}<span>Remind Me</span></div><div>${ic('comment')}<span>Message</span></div></div>
      <div class="ic-btns"><div><button class="cbtn red" id="ic-rej">${PHONE_SVG}</button><span>Decline</span></div>
      <div><button class="cbtn green" id="ic-acc">${PHONE_SVG}</button><span>Accept</span></div></div></div>`;
  L.classList.add('show'); ring(true);
  $('#ic-rej', L).onclick = () => { ring(false); CALL_LOGS.push({ name: 'Baby', type: 'missed', n: 1, d: new Date() }); closeCallLayer(); };
  $('#ic-acc', L).onclick = () => { ring(false); activeCall(); };
}
function closeCallLayer() { const L = $('#call-layer'); L.classList.remove('show'); setTimeout(() => { L.innerHTML = ''; CALLSTATE.active = false; }, 300); }
function activeCall() {
  const L = $('#call-layer'); let sec = 0, step = 0, done = false; const timers = [];
  L.innerHTML = `<div class="cl-bg"></div>
    <div class="ac-top"><div class="ic-av">${avatarOf('Baby', 96)}</div><div class="ac-name">Baby</div><div class="ac-time" id="ac-t">00:00</div></div>
    <div class="ac-cap" id="ac-cap"></div>
    <div class="ac-grid">${[['mic', 'mute'], ['keypad', 'keypad'], ['phone', 'speaker'], ['plus', 'add call'], ['reels', 'FaceTime'], ['users', 'contacts']].map(([i, t]) => `<div><b>${ic(i)}</b><span>${t}</span></div>`).join('')}</div>
    <div class="ac-end"><button class="cbtn red" id="ac-end">${PHONE_SVG}</button></div>`;
  const tick = setInterval(() => { sec++; $('#ac-t', L).textContent = `${pad(Math.floor(sec / 60))}:${pad(sec % 60)}`; }, 1000);
  function end() {
    if (done) return; done = true; clearInterval(tick); timers.forEach(clearTimeout);
    CALL_LOGS.push({ name: 'Baby', type: 'in', n: 1, d: new Date() });
    $('#ac-t', L).textContent = 'Call Ended'; setTimeout(closeCallLayer, 900);
  }
  $('#ac-end', L).onclick = end;
  const cap = $('#ac-cap', L);
  const say = () => {
    if (done) return;
    if (step >= CALL_SCRIPT.length) return void timers.push(setTimeout(end, 1500));
    const [who, text] = CALL_SCRIPT[step++];
    cap.insertAdjacentHTML('beforeend', `<div class="cap ${who === 'Baby' ? 'l' : 'r'}"><b>${who}</b>${esc(text)}</div>`);
    [...cap.children].slice(0, -3).forEach(e => e.remove());
    [...cap.children].forEach((e, i, a) => e.classList.toggle('old', i < a.length - 1));
    timers.push(setTimeout(say, 2300));
  };
  timers.push(setTimeout(say, 1200));
}

setTimeout(triggerBabyChat, TRIGGER.chat);
setTimeout(incomingCall, TRIGGER.call);


/* =========================================================
   MUSIC (gaya Apple Music) — pemutar SIMULASI (tanpa audio asli)
   State (lagu aktif, play/pause, shuffle, download) disimpan di closure,
   jadi tetap terjaga saat pindah tab / halaman / menutup aplikasi.
   ========================================================= */
function buildMusic(root) {
  const T = AM_TRACKS, PL = AM_PLAYLISTS[0], DUR = AM_SIM_DUR;
  const st = { order: PL.tracks.slice(), pos: 1, playing: false, started: false, shuffle: false, elapsed: 0, dl: 'none', tab: 'home' };
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

  /* ---------- logika pemutar (simulasi) ---------- */
  function setOrder(shuffle) {
    const c = cur(); st.shuffle = shuffle;
    if (shuffle) { const rest = PL.tracks.filter(i => i !== c).sort(() => Math.random() - .5); st.order = [c, ...rest]; st.pos = 0; }
    else { st.order = PL.tracks.slice(); st.pos = st.order.indexOf(c); }
  }
  function playTrack(i, play = true) { st.pos = st.order.indexOf(i); st.elapsed = 0; st.started = true; st.playing = play; sync(); }
  function next() { st.pos = (st.pos + 1) % st.order.length; st.elapsed = 0; st.started = true; sync(); }
  function prev() { if (st.elapsed > 3) st.elapsed = 0; else st.pos = (st.pos - 1 + st.order.length) % st.order.length, st.elapsed = 0; st.started = true; sync(); }
  function toggle() { st.playing = !st.playing; st.started = true; sync(); }
  function playPlaylist() {
    if (st.playing) return toggle();
    if (st.started) return toggle();
    if (st.shuffle) setOrder(true), st.pos = Math.floor(Math.random() * st.order.length); else st.pos = 0;
    st.elapsed = 0; st.started = true; st.playing = true; sync();
  }
  function toggleShuffle() { setOrder(!st.shuffle); sync(); toast(st.shuffle ? 'Shuffle On' : 'Shuffle Off'); }
  function download() {
    if (st.dl === 'busy') return;
    if (st.dl === 'done') { st.dl = 'none'; sync(); return toast('Download dihapus'); }
    st.dl = 'busy'; sync();
    setTimeout(() => { st.dl = 'done'; sync(); toast('Helloo berhasil diunduh (simulasi)'); }, 1600);
  }
  setInterval(() => { if (!st.playing) return; st.elapsed++; if (st.elapsed >= DUR) next(); else syncNp(); }, 1000);

  /* ---------- sinkronisasi tampilan ---------- */
  function sync() {
    const i = cur(), t = T[i];
    $('.am-mart', root).innerHTML = art(i);
    $('#am-mt', root).textContent = t.title; $('#am-ma', root).textContent = t.artist;
    $('#am-mpp', root).innerHTML = st.playing ? I.pause : I.play;
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
    $('.am-npbar i', np).style.width = (st.elapsed / DUR * 100) + '%';
    $('.t1', np).textContent = mmss(st.elapsed); $('.t2', np).textContent = '-' + mmss(DUR - st.elapsed);
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
      case 'heavy': { setOrder(true); st.pos = 0; st.elapsed = 0; st.started = true; st.playing = true; sync(); return toast('Heavy Rotation — Shuffle'); }
      case 'adduser': return toast('Undangan kolaborasi dikirim (simulasi)');
      case 'share': return toast('Tautan playlist disalin');
      case 'dmore': return menu(PL.name, [['Download', download], ['Shuffle Play', () => { setOrder(true); st.pos = 0; st.elapsed = 0; st.started = true; st.playing = true; sync(); }], ['Share Playlist…', () => toast('Tautan playlist disalin')]]);
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
