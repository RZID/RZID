export interface Project {
	name: string;
	role: string;
	stack: string;
	outcome: string;
}

export interface Role {
	title: string;
	company: string;
	period: string;
	tag: string;
	bullets: string[];
}

export interface Service {
	title: string;
	desc: string;
	points: string[];
}

export interface Step {
	title: string;
	desc: string;
}

export const NAV_IDS = ['work', 'services', 'process', 'about', 'contact'] as const;

export const CLIENTS = ['Cara.sg', 'Affluent.sg', 'Airwallex', 'Breasy', 'Pinknode', 'Embreo'];

export const STACK_CHIPS = [
	'TypeScript',
	'NestJS',
	'React',
	'Next.js',
	'React Native',
	'AWS',
	'Docker'
];

export const CONTACTS = [
	{ label: 'Email', value: 'rdhanurzid@gmail.com', href: 'mailto:rdhanurzid@gmail.com' },
	{ label: 'GitHub', value: 'github.com/RZID', href: 'https://github.com/RZID' },
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/rama-ramadhanu',
		href: 'https://www.linkedin.com/in/rama-ramadhanu/'
	}
];

export const PROJECTS: Project[] = [
	{
		name: 'Cara.sg',
		role: 'Full-stack Engineer',
		stack: 'Next.js · NestJS · TypeScript',
		outcome:
			'Client platform shipped and kept stable through a monolith-to-microservices migration.'
	},
	{
		name: 'Affluent.sg',
		role: 'Full-stack Engineer',
		stack: 'React · Express · MySQL',
		outcome:
			'Estate-planning app delivered end to end, incl. data encryption and payment integration.'
	},
	{
		name: 'Airwallex',
		role: 'Backend Engineer',
		stack: 'NestJS · REST APIs',
		outcome: 'Payment flows integrated and hardened for production use.'
	},
	{
		name: 'Breasy Gym',
		role: 'Mobile Engineer',
		stack: 'React Native (Expo)',
		outcome: 'Cross-platform gym app for iOS and Android from one codebase.'
	},
	{
		name: 'Pinknode',
		role: 'Frontend Engineer',
		stack: 'React · Next.js',
		outcome: 'Production web frontend, built and shipped.'
	}
];

export const ROLES: Role[] = [
	{
		title: 'Software Engineer',
		company: 'Embreo PTE Ltd',
		period: 'Sep 2021 – Present',
		tag: 'Full-Time',
		bullets: [
			'Led a legacy production rewrite — monolith to microservices, without stopping the business',
			'Architected NestJS + TypeScript microservices behind Next.js apps',
			'Delivered an estate-planning app end to end: encryption + payment gateway',
			'Shipped cross-platform apps with React Native (Expo)',
			'RabbitMQ messaging + Redis caching for performance',
			'AWS + Linux deployments kept at 24/7 uptime'
		]
	},
	{
		title: 'Technical Mentor & Systems Consultant',
		company: 'SMK Negeri 12 Jakarta',
		period: 'Jun 2021 – Present',
		tag: 'Consulting',
		bullets: [
			'Mentor students to national dev certifications',
			'Run school servers at 24/7 availability',
			'Teach production-standard server care, hands on'
		]
	},
	{
		title: 'Software Engineer',
		company: 'Freelance',
		period: 'Aug 2019 – Feb 2020',
		tag: 'Freelance',
		bullets: [
			'Delivered client websites end to end: database to frontend',
			'Turned business requirements into production-ready sites'
		]
	}
];

export const SERVICES: Service[] = [
	{
		title: 'End-to-end product builds',
		desc: 'Web, mobile and backend under one owner.',
		points: [
			'Scope to deploy, one contact',
			'React/Next.js + NestJS/Node',
			'Docs & handover included'
		]
	},
	{
		title: 'Legacy rescue & rewrites',
		desc: 'Old system slowing you down?',
		points: [
			'Monolith → microservices',
			'Zero-downtime migration plan',
			'Tech debt you can measure'
		]
	},
	{
		title: 'Cross-platform mobile',
		desc: 'iOS + Android from one codebase.',
		points: ['React Native / Expo', 'Store release handled', 'OTA updates set up']
	},
	{
		title: 'Deploy & infra hardening',
		desc: 'Sleep through the night.',
		points: ['AWS / Docker / Linux', 'RabbitMQ + Redis performance', 'Monitoring & backups']
	}
];

export const STEPS: Step[] = [
	{
		title: 'Discover',
		desc: 'We agree on the outcome, scope and risks — in days, with a fixed first milestone.'
	},
	{
		title: 'Build',
		desc: 'Working software from week one. Weekly demos, no black box.'
	},
	{
		title: 'Harden',
		desc: 'Security, payments, speed and monitoring — production-grade before launch.'
	},
	{
		title: 'Handover',
		desc: 'Docs, deploy pipeline and training. Your team owns it after me.'
	}
];

export const CAPABILITIES = [
	{
		title: 'Backend',
		items: ['NestJS / Node.js', 'REST APIs', 'Microservices', 'RabbitMQ', 'Redis']
	},
	{
		title: 'Frontend & Mobile',
		items: ['React', 'Next.js', 'React Native (Expo)']
	},
	{
		title: 'Infra & Data',
		items: ['AWS', 'Docker', 'Linux', 'PostgreSQL / MySQL', 'CI/CD']
	}
];

interface Copy {
	nav: {
		work: string;
		services: string;
		process: string;
		about: string;
		contact: string;
		hire: string;
		menu: string;
		close: string;
	};
	hero: {
		badge: string;
		titleA: string;
		titleB: string;
		sub: string;
		primary: string;
		secondary: string;
		stats: { num: string; label: string }[];
		cardTitle: string;
		card: { label: string; value: string }[];
	};
	logos: string;
	work: {
		eyebrow: string;
		title: string;
		sub: string;
		stackLabel: string;
		rolesTitle: string;
		hint: string;
	};
	services: { eyebrow: string; title: string; sub: string };
	process: { eyebrow: string; title: string; sub: string };
	about: {
		eyebrow: string;
		title: string;
		bio: string[];
		facts: { label: string; value: string }[];
		capTitle: string;
	};
	contact: {
		eyebrow: string;
		titleA: string;
		titleB: string;
		sub: string;
		availability: string;
		primary: string;
		response: string;
	};
	footer: { tagline: string; back: string };
}

export const CONTENT: Record<'en' | 'id', Copy> = {
	en: {
		nav: {
			work: 'Work',
			services: 'Services',
			process: 'Process',
			about: 'About',
			contact: 'Contact',
			hire: 'Hire me',
			menu: 'Menu',
			close: 'Close'
		},
		hero: {
			badge: 'Available for full-time & consulting',
			titleA: 'I build software',
			titleB: 'that stays up.',
			sub: 'Full-stack engineer, 5 years in production: web apps, mobile apps and the backend behind them. Fintech, property, fitness — from legacy rescues to end-to-end builds. Remote worldwide · hybrid in Jabodetabek.',
			primary: 'Hire me',
			secondary: 'See selected work',
			stats: [
				{ num: '5+', label: 'Years in production' },
				{ num: '6', label: 'Client apps shipped' },
				{ num: '24h', label: 'Response time' }
			],
			cardTitle: 'At a glance',
			card: [
				{ label: 'Based', value: 'Jakarta · remote worldwide' },
				{ label: 'Open to', value: 'Full-time & consulting' },
				{ label: 'Reply', value: 'Within 24 hours' }
			]
		},
		logos: 'Trusted in production at',
		work: {
			eyebrow: 'Selected work',
			title: 'Real products, real users.',
			sub: 'Closed-source client work — named with role and stack. Details shared on a call.',
			stackLabel: 'Stack',
			rolesTitle: 'Roles',
			hint: 'Tap a role to expand'
		},
		services: {
			eyebrow: 'Services',
			title: 'What you can hire me for.',
			sub: 'Four fixed-shape offers. Pick one, or combine them.'
		},
		process: {
			eyebrow: 'Process',
			title: 'Boring process, exciting results.',
			sub: 'You always know what happens next.'
		},
		about: {
			eyebrow: 'About',
			title: 'Engineer, mentor, owner.',
			bio: [
				"I'm Ramadhanu — a full-stack engineer with 5 years in production systems: microservices, cross-platform apps and the infrastructure under them.",
				'I also mentor students at SMK Negeri 12 Jakarta and keep school servers running. Same deal for clients: it works, it stays up, and your team can run it.'
			],
			facts: [
				{ label: 'Location', value: 'Jakarta · remote worldwide · hybrid Jabodetabek' },
				{ label: 'Experience', value: '5+ years, Embreo PTE Ltd (2021–present)' },
				{ label: 'Education', value: 'B.Sc. Computer Science, in progress (evening program)' },
				{ label: 'Mentoring', value: 'SMK Negeri 12 Jakarta — national certifications' }
			],
			capTitle: 'Capabilities'
		},
		contact: {
			eyebrow: 'Contact',
			titleA: "Let's build",
			titleB: 'something that lasts.',
			sub: 'Open to full-time roles and consulting. Tell me the outcome you want — I reply within 24 hours.',
			availability: 'Available now',
			primary: 'Email me',
			response: 'Prefer LinkedIn? Find me below — same 24h promise.'
		},
		footer: { tagline: 'Built with SvelteKit · on Cloudflare', back: 'Back to top' }
	},
	id: {
		nav: {
			work: 'Karya',
			services: 'Layanan',
			process: 'Proses',
			about: 'Tentang',
			contact: 'Kontak',
			hire: 'Rekrut Saya',
			menu: 'Menu',
			close: 'Tutup'
		},
		hero: {
			badge: 'Terbuka untuk full-time & consulting',
			titleA: 'Software yang jadi —',
			titleB: 'dan tetap jalan.',
			sub: 'Full-stack engineer, 5 tahun di production: aplikasi web, aplikasi mobile, dan backend di belakangnya. Fintech, properti, fitness — dari rescue sistem legacy sampai build end-to-end. Remote ke seluruh dunia · hybrid Jabodetabek.',
			primary: 'Rekrut Saya',
			secondary: 'Lihat karya',
			stats: [
				{ num: '5+', label: 'Tahun di production' },
				{ num: '6', label: 'Aplikasi klien rilis' },
				{ num: '24j', label: 'Waktu respons' }
			],
			cardTitle: 'Sekilas',
			card: [
				{ label: 'Basis', value: 'Jakarta · remote global' },
				{ label: 'Terbuka', value: 'Full-time & consulting' },
				{ label: 'Balasan', value: 'Dalam 24 jam' }
			]
		},
		logos: 'Dipercaya di production oleh',
		work: {
			eyebrow: 'Karya pilihan',
			title: 'Produk nyata, dipakai orang.',
			sub: 'Project klien closed-source — tercantum nama, peran, dan stack. Detail dibahas saat call.',
			stackLabel: 'Stack',
			rolesTitle: 'Peran',
			hint: 'Ketuk peran untuk detail'
		},
		services: {
			eyebrow: 'Layanan',
			title: 'Yang bisa Anda hire.',
			sub: 'Empat penawaran jelas. Pilih satu, atau gabungkan.'
		},
		process: {
			eyebrow: 'Proses',
			title: 'Proses membosankan, hasil menarik.',
			sub: 'Anda selalu tahu langkah berikutnya.'
		},
		about: {
			eyebrow: 'Tentang',
			title: 'Engineer, mentor, owner.',
			bio: [
				'Saya Ramadhanu — full-stack engineer dengan 5 tahun di sistem production: microservices, aplikasi cross-platform, dan infrastruktur di bawahnya.',
				'Saya juga membimbing siswa SMK Negeri 12 Jakarta dan menjaga server sekolah tetap jalan. Prinsip yang sama untuk klien: berfungsi, tetap menyala, dan tim Anda bisa menjalankannya.'
			],
			facts: [
				{ label: 'Lokasi', value: 'Jakarta · remote global · hybrid Jabodetabek' },
				{ label: 'Pengalaman', value: '5+ tahun, Embreo PTE Ltd (2021–sekarang)' },
				{ label: 'Pendidikan', value: 'S1 Ilmu Komputer, berjalan (kelas malam)' },
				{ label: 'Mentoring', value: 'SMK Negeri 12 Jakarta — sertifikasi nasional' }
			],
			capTitle: 'Kemampuan'
		},
		contact: {
			eyebrow: 'Kontak',
			titleA: 'Mari bangun',
			titleB: 'yang tahan lama.',
			sub: 'Terbuka untuk full-time dan consulting. Ceritakan hasil yang Anda mau — saya balas dalam 24 jam.',
			availability: 'Tersedia sekarang',
			primary: 'Email saya',
			response: 'Lebih suka LinkedIn? Lihat di bawah — janji 24 jam sama.'
		},
		footer: { tagline: 'Dibangun dengan SvelteKit · di Cloudflare', back: 'Kembali ke atas' }
	}
};
