// =====================================================================
// 🌸 EDIT SEMUA TEKS & DATA DI FILE INI SAJA — tidak perlu sentuh komponen
// =====================================================================

export const profile = {
	recipientName: "Ayuningsih (Ayuu sayangg)",
	senderName: "Sagita Apriyana",
	specialDate: "24 Juni 2026",
	specialDateShort: "24 Juni",
	// Kode PIN gerbang masuk (boleh diganti string apapun berisi digit 0-9)
	secretPin: "240604",
};

export const hero = {
	eyebrow: "Hari Spesialmu",
	titleLine1: "Happy",
	titleLine2Accent: "Birthday",
	titleLine3: "Ayuu sayangg", // Menggunakan nama panggilan yang lebih manis untuk estetika judul utama
	subtitles: [
		"Hari paling indah di sepanjang tahun...",
		"Setiap tahun bersamamu adalah berkah luar biasa.",
		"Kamu adalah cahaya terhangat dalam hidupku.",
		"Semoga semua impian dan harapanmu terwujud. 🌸",
	],
};

export const bouquet = {
	eyebrow: "Hadiah Pertamaku",
	title: "Buket Bunga Digital",
	subtitle: "Setiap bunga menyimpan pesan kecil khusus untukmu",
	hint: "Sentuh setiap bunga untuk membaca pesannya 💕",
	flowers: [
		{ emoji: "🌺", message: "Kamu membuat hari yang biasa terasa luar biasa." },
		{ emoji: "🌹", message: "Senyumanmu adalah pemandangan terfavoritku di dunia." },
		{ emoji: "🌷", message: "Terima kasih sudah selalu sabar menemani aku." },
		{ emoji: "🌼", message: "Aku sangat kagum dengan ketulusan dan kebaikan hatimu." },
		{ emoji: "🌻", message: "Kehadiranmu selalu membawa kehangatan di mana pun kamu berada." },
		{ emoji: "💐", message: "Semoga kita bisa merayakan banyak tahun-tahun indah berikutnya bersama." },
	],
};

export const letter = {
	eyebrow: "Dari Lubuk Hatiku",
	title: "Surat Untukmu",
	date: profile.specialDate,
	greeting: "Selamat ulang tahun, sayangku ❤️",
	paragraphs: [
		"Hari ini dunia ngerayain orang paling spesial di hidup aku: kamu. Makasih udah mau bertahan sama aku di hari baik dan buruk. Makasih udah jadi rumah paling nyaman buat aku pulang, jadi tim hore nomor 1, jadi alasan aku percaya cinta itu nyata.",
		"Aku gak janji hidup kita bakal selalu mulus. Tapi aku janji, tiap kamu jatuh aku yang pertama ngulurin tangan. Tiap kamu bingung, aku temenin cari jalan. Tiap kamu ngerasa capek, pundak aku selalu ready.",
	],
	italicParagraph:
		"Di umur kamu yang baru ini, semoga semua doa yang kamu bisikin pas tiup lilin kejadian satu-satu. Sehat selalu, rezekinya lancar, mimpinya jadi kenyataan. Dan yang paling penting: semoga kamu tau kalau kamu dicintai, disayang, dan dipilih aku setiap hari.",
	closingParagraph:
		"I love you, sekarang dan nanti.",
	ps: "P.S. — Aku akan selalu ada untukmu, hari ini, esok, dan selamanya 🌸",
	signOff: "Dengan segenap cintaku,",
	signature: profile.senderName,
};

export const photoMemories = {
	eyebrow: "Kumpulan Memori Kita",
	title: "Galeri Foto Kenangan",
	subtitle: "Setiap foto menyimpan cerita indah kita",
	photos: [
		// Kategori 1: Senyum Manismu (beauty) - 8 Foto
		{
			src: "/photos/type1_1.jpeg",
			caption: "Senyummu, Duniaku ✨",
			backText: "Melihat senyum manis Ayuu itu bagaikan booster energi paling ampuh buat Sagita. Jangan pernah bosan tersenyum ya sayang! 💕",
			category: "beauty"
		},
		{
			src: "/photos/type1_2.jpeg",
			caption: "Cantik yang Sederhana 🌸",
			backText: "Ayuu selalu punya cara tersendiri untuk tampil memikat, bahkan dalam kesederhanaan. Sagita beruntung banget memiliki kamu. 🥰",
			category: "beauty"
		},
		{
			src: "/photos/type1_3.jpeg",
			caption: "Fokus ke Kamu Terus 📸",
			backText: "Kamera Sagita rasanya selalu otomatis fokus ke arah kamu. Habisnya, objek seindah kamu mana boleh sampai terlewatkan? 😉",
			category: "beauty"
		},
		{
			src: "/photos/type1_4.jpeg",
			caption: "Warm & Cozy Vibe ☕",
			backText: "Hari biasa pun terasa sangat hangat dan nyaman kalau ada kamu di dekatku. Terima kasih sudah selalu menemani ya Ayuu. ❤️",
			category: "beauty"
		},
		{
			src: "/photos/type1_5.jpeg",
			caption: "Mata Cantik Favoritku 👀",
			backText: "Ada kedamaian tersendiri setiap kali Sagita memandang matamu. Tatapan yang selalu menenangkan badai di kepalaku. 💫",
			category: "beauty"
		},
		{
			src: "/photos/type1_6.jpeg",
			caption: "Angin Sore & Dirimu 🍃",
			backText: "Suasana sore itu terasa berkali-kali lipat lebih indah karena ada Ayuu di sini. Semua momen bersamamu adalah favoritku. 🌟",
			category: "beauty"
		},
		{
			src: "/photos/type1_7.jpeg",
			caption: "Gaya Anggun Kesayanganku 💃",
			backText: "Gaya Ayuu yang satu ini benar-benar anggun dan memukau. Sagita cuma bisa tersenyum kagum melihat betapa cantiknya pacarku ini. 🥰",
			category: "beauty"
		},
		{
			src: "/photos/type1_8.jpeg",
			caption: "Momen Spesial yang Manis 🍯",
			backText: "Setiap detik bersamamu adalah catatan berharga yang akan selalu Sagita simpan di dalam hati terdalam. I love you, Ayuu. 💗",
			category: "beauty"
		},

		// Kategori 2: Kisah Kita (couple) - 5 Foto
		{
			src: "/photos/type3_3.jpeg",
			caption: "Momen Manis Berdua 🍯",
			backText: "Setiap detil kebersamaan kita adalah kenangan indah yang selalu ingin Sagita simpan selamanya di dalam ingatan. 🥰",
			category: "couple"
		},
		{
			src: "/photos/type3_4.jpeg",
			caption: "Senyum Bahagia Kita 😁",
			backText: "Melihat foto berdua kita selalu sukses membuat hari-hari Sagita yang sepi jadi penuh warna. I love you, Ayuu! 💗",
			category: "couple"
		},
		{
			src: "/photos/type3_5.jpeg",
			caption: "Partner Terbaikku 🤝",
			backText: "Bukan cuma pacar, kamu adalah sahabat terbaik tempatku berbagi semua cerita dan keluh kesah. Terima kasih ya sayang. 🌟",
			category: "couple"
		},
		{
			src: "/photos/type3_6.jpeg",
			caption: "Bersandar Nyaman 🤗",
			backText: "Di dekatmu, dunia rasanya melambat dan menyisakan kedamaian yang tak tergantikan. Tetap seperti ini ya. ❤️",
			category: "couple"
		},
		{
			src: "/photos/type3_7.jpeg",
			caption: "Petualangan Kita 🌍",
			backText: "Mari kita buat lebih banyak lagi cerita indah, tawa lepas, dan petualangan seru di hari-hari esok! 🚀💫",
			category: "couple"
		},

		// Kategori 3: Tingkah Lucumu (cute) - 4 Foto
		{
			src: "/photos/type2_1.jpeg",
			caption: "Pose Gemas Ayuu 🐱",
			backText: "Pose begini nih yang selalu sukses bikin Sagita gregetan karena kamu terlalu lucu! Tolong kurangi gemasnya sedikit ya! Haha. 😆",
			category: "cute"
		},
		{
			src: "/photos/type2_2.jpeg",
			caption: "Candid Gemes 🤫",
			backText: "Lagi asyik sendiri dan tertangkap kamera. Walaupun candid dan tanpa sadar, Ayuu tetap kelihatan imut tiada tanding! 🧡",
			category: "cute"
		},
		{
			src: "/photos/type3_1.jpeg",
			caption: "Senyum Lebar Ayuu 😁",
			backText: "Pose ceria begini nih yang selalu bikin Sagita gemes dan ikut tersenyum lebar. Happy terus ya sayang! 💕",
			category: "cute"
		},
		{
			src: "/photos/type3_2.jpeg",
			caption: "Tingkah Unik Favoritku 🤪",
			backText: "Ada-ada saja gayanya, tapi justru ini yang bikin Sagita jatuh cinta berkali-kali setiap harinya. Cute banget! 🥰",
			category: "cute"
		},
	],
};

export const timeline = {
	eyebrow: "Perjalanan Kita",
	title: "Kenangan yang Kita Tulis Bersama",
	items: [
		{
			icon: "✨",
			tag: "Awal Mula Kisah",
			title: "Pertama Kali Bertemu",
			text: "Hari di mana dunia terasa berputar sedikit lebih cepat dan segalanya terasa berbeda dari sebelumnya.",
		},
		{
			icon: "💬",
			tag: "Momen Magis",
			title: "Percakapan Pertama Kita",
			text: "Kata-kata pertama yang terucap, tawa pertama yang dibagikan — awal dari ribuan kisah yang kita tulis bersama.",
		},
		{
			icon: "🌿",
			tag: "Kenangan Indah",
			title: "Jalan-Jalan Pertama Berdua",
			text: "Petualangan kecil yang terasa seperti perjalanan ke tempat terbaik di bumi, sederhana saja karena kamu ada di sana.",
		},
		{
			icon: "😄",
			tag: "Momen Berharga",
			title: "Tawa yang Tak Pernah Usai",
			text: "Momen saat kita tertawa sampai perut sakit dan aku menyadari ini adalah perasaan yang ingin kujaga selamanya.",
		},
		{
			icon: "🌙",
			tag: "Kenangan Manis",
			title: "Keheningan yang Indah Bersamamu",
			text: "Kesunyian yang nyaman di sampingmu terasa lebih hangat daripada seribu kata yang pernah terucap.",
		},
		{
			icon: "🎂",
			tag: "Hari Ini",
			title: "Hari Ulang Tahunmu yang Spesial",
			text: "Merayakan kamu, perjalanan hidupmu, dan semua keajaiban yang telah kamu bawa ke dalam hidupku.",
		},
	],
};

export const playlist = {
	eyebrow: "Lagu Kita",
	title: "Playlist Spesial",
	subtitle: "Lagu-lagu yang selalu mengingatkanku padamu",
	tracks: [
		{ title: "Surat Cinta Untuk Starla", artist: "Virgoun", src: "/audio/surat-cinta-untuk-starla.mp3" },
		{ title: "Jangan Paksa Rindu (Beda)", artist: "Ifan Seventeen", src: "/audio/jangan-paksa-rindu.mp3" },
		{ title: "Kesempurnaan Cinta", artist: "Rizky Febian", src: "/audio/kesempurnaan-cinta.mp3" },
	],
};

export const gratitudeJar = {
	eyebrow: "Dari Hatiku Untukmu",
	title: "Alasan Aku Bersyukur Mengenalmu",
	hint: "Kocok botolnya dan ambil satu pesan 📋",
	buttonLabel: "🫙 Kocok Botol",
	notes: [
		"Aku bersyukur memilikimu karena sejak kamu hadir, hari-hariku terasa lebih indah dan penuh kebahagiaan 🍃✨",
		"Kamu bukan hanya wanita yang kucintai, tetapi juga alasan mengapa banyak hal terasa lebih indah 🌹💫",
		"Kamu wanita yang selalu ada, baik saat aku senang maupun ketika aku berada di titik terendahku 🤝❤️",
		"Bersamamu, aku belajar bahwa kebahagiaan bisa datang dari hal-hal sederhana, seperti percakapan singkat atau perhatian kecil darimu 💬🌸",
		"Karena semua itu, aku selalu bersyukur memilikimu, terima kasih sudah menjadi bagian terindah dalam hidupku 💗✨",
	],
};

export const closing = {
	eyebrow: "Dengan segenap hatiku",
	titleLine1: "Semoga hidupmu",
	titleAccent: "selalu dipenuhi",
	titleLine2: "dengan bunga-bunga",
	message: `Selamat ulang tahun, Ayuu sayangg. Semoga hari-harimu selalu dipenuhi dengan cinta, kebahagiaan, dan semua hal indah yang layak kamu dapatkan. Aku selalu bersyukur memiliki kamu di hidupku.`,
	footer: "Dengan cinta yang tak pernah habis 💕",
};

export const modal = {
	emoji: "🎂",
	title: "Happy Birthday!",
	subtitle: `Semesta ngerayain hari lahirnya Ayuu sayangg 🌸`,
	buttonLabel: "Tutup ✕",
};
