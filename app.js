/* =========================================================
   Shabey's iPhone — app.js
   Customized for Buyer: Shabey
   ========================================================= */
'use strict';

/* =========================================================
   DATA — SHABEY'S CONFIG
   ========================================================= */
const CFG = {
  passcode: '2112',
  displayName: 'Shanna Habey',
  username: 'morfeme',
  city: { name: 'Canary Wharf', region: 'London', lat: 51.5054, lon: -0.0235, tz: 'Europe/London' },
};

const IG = {
  avatar: 'assets/avatar.jpg',
  posts: 6, followers: '1.079', following: 930,
  bio: ['rosewater قمر noun begins @ivoiwre ♥'],
  items: [
    { img: 'assets/assets-posts-/post-1.jpg', caption: 'yuh 👺',                       ago: 2, likes: '1.284' },
    { img: 'assets/assets-posts-/post-2.jpg', caption: 'huh abis anuin server',        ago: 6, likes: '962'   },
    { img: 'assets/assets-posts-/post-3.jpg', caption: 'my sweetness baby @hagiel',    ago: 11, likes: '2.310' },
  ],
};

const PHOTOS = [
  { m: 0, imgs: ['assets/assets-photos-/2026-01-1.jpg'] },
  { m: 1, imgs: ['assets/assets-photos-/2026-02-1.jpg'] },
  { m: 2, imgs: ['assets/assets-photos-/2026-03-1.jpg'] },
  { m: 3, imgs: ['assets/assets-photos-/2026-04-1.jpg'] },
  { m: 4, imgs: ['assets/assets-photos-/2026-05-1.jpg'] },
  { m: 5, imgs: ['assets/assets-photos-/2026-06-1.jpg'] },
  { m: 6, imgs: ['assets/assets-photos-/2026-07-1.jpg'] },
  { m: 7, imgs: ['assets/assets-photos-/2026-08-1.jpg'] },
  { m: 8, imgs: ['assets/assets-photos-/2026-09-1.jpg', 'assets/assets-photos-/2026-09-2.jpg'] },
  { m: 9, imgs: ['assets/assets-photos-/2026-10-1.jpg', 'assets/assets-photos-/2026-10-2.jpg', 'assets/assets-photos-/2026-10-3.jpg'] },
];

const MUSIC = [
  { title: 'penyangkalan',      artist: '', file: 'assets/assets-music-/01.mp3', spotify: '3GdN5n6p34yFMd12WKq8jL' },
  { title: 'Hope',              artist: '', file: 'assets/assets-music-/02.mp3', spotify: '2ZRo7axmMPeSVUvDbGkJah' },
  { title: 'My Friends',        artist: '', file: 'assets/assets-music-/03.mp3', spotify: '1GiP26gz7ODqQ8dxweTPo7' },
  { title: 'CRZY',              artist: '', file: 'assets/assets-music-/04.mp3', spotify: '2jlVG4zVT1HEeuZJlfnQt5' },
  { title: "you're gonna go far", artist: '', file: 'assets/assets-music-/05.mp3', spotify: '4nHJcUtNSUVjXRnjdP29Bk' },
];

const MAILS = [
  { from: 'Gojek', ago: 0, time: '02:14', unread: true, subj: 'Pesanan GoFood kamu sudah sampai 🛵',
    pre: 'Terima kasih sudah memesan! Yuk beri rating untuk driver dan restoran, dapatkan poin GoPay Coins untuk pesanan berikutnya.' },
  { from: 'GitHub', ago: 1, time: '21:37', unread: true, subj: '[GitHub] A new sign-in to your account',
    pre: 'Hey morfeme! We noticed a new sign-in to your GitHub account from Canary Wharf, London. If this was you, you can ignore this email.' },
  { from: 'Telegram', ago: 3, time: '19:05', unread: false, subj: 'Login baru di akun Telegram kamu',
    pre: 'Seseorang masuk ke akun Telegram kamu dari perangkat baru. Jika itu bukan kamu, segera akhiri sesi di Pengaturan › Perangkat.' },
];

const NOTES = [
  { id: 'n1', title: 'Coding website', ago: 1, time: '22:10', mono: true, body:
`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Portfolio</title>
  <style>
    body { background:#fff0f3; color:#2d1520; }
    h1   { font-family: monospace; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <button id="btn">Klik aku</button>
  <script>
    document.getElementById('btn')
      .addEventListener('click', () => alert('halo 👋'));
  </script>
</body>
</html>` },
  { id: 'n2', title: 'Alamat cafe London', ago: 5, time: '16:42', body:
`Alamat cafe London

1. Biscuiteers Boutique
   21 Notting Hill Gate

2. Peggy Porschen Cakes
   Ebury St, Belgravia

3. Elan Cafe
   Brompton Rd, Knightsbridge

4. Farm Girl Cafe
   Portobello Rd` },
  { id: 'n3', title: 'kangen baby', ago: 0, time: '-190m', body: 'kangen baby' },
];

const CALLS = [
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

const GROUP_NAMES = { M: 'Maxton', J: '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑', E: 'Eiser Kendrick', G: 'me' };

const STORIES = [
  { id: 'me',      name: 'My Story', who: 'Shanna',   items: [
    { img: 'assets/assets-stories-/me-1.jpg', h: 1 }, { img: 'assets/assets-stories-/me-2.jpg', h: 3 },
    { img: 'assets/assets-stories-/me-3.jpg', h: 5 }, { img: 'assets/assets-stories-/me-4.jpg', h: 8 } ] },
  { id: 'baby',    name: 'Baby',     who: 'Baby',    items: [
    { img: 'assets/assets-stories-/baby-1.jpg', h: 2 }, { img: 'assets/assets-stories-/baby-2.jpg', h: 4 }, { img: 'assets/assets-stories-/baby-3.jpg', h: 6 } ] },
  { id: 'maxton',  name: 'Maxton',   who: 'Maxton',  items: [{ img: 'assets/assets-stories-/maxton-1.jpg', h: 3 }] },
  { id: 'evander', name: 'Evander',  who: 'Evander', items: [{ img: 'assets/assets-stories-/evander-1.jpg', h: 5 }] },
  { id: 'eiser',   name: 'Eiser',    who: 'Eiser',   items: [{ img: 'assets/assets-stories-/eiser-1.jpg', h: 9 }] },
];
const STORY_MS = 5000;

const AVATARS = {
  'Shanna': 'assets/assets-avatars-/gravy.jpg',
  'Baby': 'assets/assets-avatars-/baby.jpg',
  'Maxton': 'assets/assets-avatars-/maxton.jpg',
  'Keenan': 'assets/assets-avatars-/keenan.jpg',
  'Miyuka': 'assets/assets-avatars-/miyuka.jpg',
  'Noona Kian': 'assets/assets-avatars-/kian.jpg',
  'Akatsudi': 'assets/assets-avatars-/akatsudi.jpg',
  'Eiser': 'assets/assets-avatars-/eiser.jpg',
  'Evander': 'assets/assets-avatars-/evander.jpg',
  'Dito': 'assets/assets-avatars-/dito.jpg',
  'Jason BEM FTI': 'assets/assets-avatars-/jason.jpg',
  'Kevin HIMA TI': 'assets/assets-avatars-/kevin.jpg',
  'Zayn Cybersecurity': 'assets/assets-avatars-/zayn.jpg',
  'Andrew PPIC Staff': 'assets/assets-avatars-/andrew.jpg',
  'IT Team': 'assets/assets-avatars-/itteam.jpg',
  'Harvard survivor': 'assets/assets-avatars-/harvard.jpg',
};
const AVATAR_ALIAS = { '𝐉 – 𝐄𝐕𝐀𝐍𝐃𝐄𝐑': 'Evander', 'Eiser Kendrick': 'Eiser', 'Shanna Habey': 'Shanna', 'miyuka dedoll': 'Miyuka' };

const FAST = /[?&]fast\b/.test(location.search);
const TRIGGER = { chat: FAST ? 2000 : 60000, call: FAST ? 25000 : 300000 };
const CALL_SCRIPT = [
  ['Baby', 'sayang hati hatii'], ['Shanna', 'iyaa sayang'], ['Shanna', 'Kenapa call'], ['Baby', 'gapapa call aja'],
  ['Baby', 'I love you'], ['Shanna', 'i love you more'], ['Shanna', 'Udah ya aku matiin'], ['Baby', 'huum'],
];

const TG_CONTACTS = ['Baby', 'Keenan', 'Maxton', 'Eiser', 'Evander', 'Miyuka', 'Noona kian', 'Adrian Manager IT', 'Rayhan Network Engineer', 'Calvin System Admin', 'Revan IT Support', 'Ethan Programmer', 'Zayn Cybersecurity', 'Farel Operator Produksi', 'Keith Leader Produksi', 'Andrew PPIC Staff', 'Raka Supervisor Produksi', 'Bryan Maintenance Engineer', 'Jordan QC Inspector', 'Michael Manager PPIC', 'Arvin Akuntansi', 'Devin Production Planner', "Rafan TI'23", 'Kevin HIMA TI', 'Jason BEM FTI', "Elvano TI'22", 'Nathan Aslab TI', "Darren HIMA'23", 'Kenzo Panitia IT Fest', 'alam', 'akim', 'amaila sheaby', 'amani laekasih', 'amaraa eunoia', 'amayinn whitney s', 'amiliona ayacha', 'anaire', 'anaireè hierarchy', 'barbie ello', 'bimielle', 'callā guimaraes', 'chanriel novaiere', 'charina r', 'chloe', 'citah', 'dalf', 'darcie amethyste', 'djoernst vermond', 'ejipa', 'emma beibelle', 'evaniessence', 'feeny vacquez', 'gabriel', 'gamas marshal', 'genevieve eve', 'gisara sylveraine', 'gladies sabina', 'haidar ali', 'haikal', 'halevi seraphin', 'halbert', 'hasca', 'haury honey isabelle', 'havel pratama', 'hazëllio lillouth', 'helianth elour', 'hejrson', 'herga', 'hillary h', 'hikaru', 'hyven solstice', 'illiana elsher', 'jacob', 'james edward', 'jarc', 'jearth', 'jeje', 'jenerice', 'jordan', 'josean', 'khaalèd winston', 'khade rhae', 'khairo', 'kindi', 'kindi vältzh', 'lieselottie c', 'louise', 'lucienne m', 'lupi', 'madavin', 'maddox edric vale', 'mahesa', 'marson aitah', 'markliox ryver a', 'mayeen adek persija side', 'micaa lowent', 'miyuka dedoll', 'morve lumio', 'morthiel', 'ocean arutala', 'raden', 'raze', 'rekal', 'reyhan denandra', 'samuel j', 'shane', 'stevanno', 'vjeesc', 'willy', 'yvonné dolgëz'];

const CHATS = [
  { id: 'baby', name: 'Baby', pinned: true, sub: 'last seen recently', unread: 1, src: `
#F 14:32
i|Sayang, udah sampai?
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
i|Shanna sekarang kesibukannya apaa?
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
J|Maxton, anjir
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
i|Fak pulennya shanna
i|Menarik banget
i|Shanna like gravitasi
o|Ikr
i|Anjg
` },
  { id: 'jason', name: 'Jason BEM FTI', sub: 'last seen recently', src: `
#F-1 16:05
i|sha, lu udah free belom?
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
i|anjir tumben lu ngomong panjang sha
o|bacot. lu yg ngajak rapat malah gue yg briefing 😭
i|WKWKWK yaudah ketemu jam 8. jangan ngilang lu
o|santai. gue bawa laptop sekalian, kita mapping kebutuhan lapangan sama pembagian PIC. kirim rundown sementara ke gue sebelum konsol
i|siap, korlap dadakan 🫡
o|belom jadi korlap udah dikasih
