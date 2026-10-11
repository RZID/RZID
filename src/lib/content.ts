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
	icon: 'package' | 'wrench' | 'mobile' | 'cloud';
	title: string;
	desc: string;
	points: string[];
}

export interface Step {
	title: string;
	desc: string;
}

export const CLIENTS = ['Cara.sg', 'Affluent.sg', 'JebHealth', 'LVE Gym', 'Pinknode', 'Embreo'];

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
		stack: 'Next.js, NestJS, TypeScript',
		outcome:
			'Dementia Singapore membership app (10K+ installs): Safe Return and missing-person alerts for caregivers, rewards partners, Mandarin support. Shipped through a monolith-to-microservices migration.'
	},
	{
		name: 'Affluent.sg',
		role: 'Full-stack Engineer',
		stack: 'React, Express, MySQL',
		outcome:
			'Wills and estate-planning platform for Singapore families (wills, LPA, advance care directives, CPF nominations). Delivered end to end with encrypted client data and payment integration.'
	},
	{
		name: 'JebHealth',
		role: 'Backend Engineer',
		stack: 'NestJS, REST APIs',
		outcome:
			'HealthTech marketplace (SG, MY, TH, VN) plus Health-FinTech cards with Airwallex and Visa (Helix Health Card, J World Card): backend payment flows integrated and hardened for production.'
	},
	{
		name: 'LVE Gym',
		role: 'Mobile Engineer',
		stack: 'React Native (Expo)',
		outcome:
			'Booking app for LVE boutique gyms (circuit training Pandan Valley, combat Boat Quay): class schedules, packs, personal training. iOS and Android from one Expo codebase, through store release.'
	},
	{
		name: 'Pinknode',
		role: 'Frontend Engineer',
		stack: 'React, Next.js',
		outcome: 'Dashboard for a Polkadot node-as-a-service: API usage analytics and account management, built and shipped to production.'
	}
];

export const ROLES: Role[] = [
	{
		title: 'Software Engineer',
		company: 'Embreo PTE Ltd',
		period: 'Sep 2021 - Present',
		tag: 'Full-Time',
		bullets: [
			'Led a legacy production rewrite: monolith to microservices, without stopping the business',
			'Architected NestJS + TypeScript microservices behind Next.js apps',
			'Delivered an estate-planning app end to end: encryption + payment gateway',
			'Shipped cross-platform apps with React Native (Expo)',
			'RabbitMQ messaging + Redis caching for performance',
			'AWS + Linux deployments, with monitoring and docs'
		]
	},
	{
		title: 'Technical Mentor & Systems Consultant',
		company: 'SMK Negeri 12 Jakarta',
		period: 'Jun 2021 - Present',
		tag: 'Consulting',
		bullets: [
			'Mentor students to national dev certifications',
			'Keep school servers running day to day',
			'Teach production-standard server care, hands on'
		]
	},
	{
		title: 'Software Engineer',
		company: 'Freelance',
		period: 'Aug 2019 - Feb 2020',
		tag: 'Freelance',
		bullets: [
			'Delivered client websites end to end: database to frontend',
			'Turned business requirements into production-ready sites'
		]
	}
];

export const SERVICES: Service[] = [
	{
		icon: 'package',
		title: 'Product builds, start to finish',
		desc: 'You bring the idea, I carry it to launch.',
		points: ['Single contact from scope to deploy', 'I fit into how you work', 'Docs so your team can take over']
	},
	{
		icon: 'wrench',
		title: 'Legacy rescue & rewrites',
		desc: 'For systems that got slow and fragile.',
		points: [
			'Monolith → microservices',
			'Zero-downtime migration plan',
			'Tech debt you can measure'
		]
	},
	{
		icon: 'mobile',
		title: 'Cross-platform mobile',
		desc: 'iOS + Android from one codebase.',
		points: ['One codebase, both app stores', 'I handle the store release', 'Updates without waiting on review']
	},
	{
		icon: 'cloud',
		title: 'Deploy & infra hardening',
		desc: 'Deploys and servers you stop thinking about.',
		points: ['Deploy pipeline your team can run', 'Performance fixes that stick', 'Monitoring and backups included']
	}
];

export const STEPS: Step[] = [
	{
		title: 'Discover',
		desc: 'We sketch the goal, the scope, and one small first milestone. That takes days.'
	},
	{
		title: 'Build',
		desc: 'Working software from week one, with a demo every week.'
	},
	{
		title: 'Harden',
		desc: 'Security, payments, speed and monitoring, all production-grade before launch.'
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
		cardTitle: string;
		cardStatus: string;
		card: { label: string; value: string; href?: string; icon: 'pin' | 'clock' | 'stack' | 'mail' }[];
	};
	logos: string;
	work: {
		title: string;
		sub: string;
		stackLabel: string;
		rolesTitle: string;
		hint: string;
	};
	services: { title: string; sub: string };
	process: { title: string; sub: string };
	about: {
		title: string;
		bio: string[];
		facts: { label: string; value: string }[];
		capTitle: string;
	};
	contact: {
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
			titleA: 'Curious human,',
						titleB: 'happens to write code.',
			sub: "I'm Ramadhanu. I pull things apart to see how they work, then build software from what I learn: web, mobile, backend. Five years in, still curious. Remote worldwide, hybrid in Jabodetabek.",
			primary: 'Hire me',
			secondary: 'See selected work',
			cardTitle: 'At a glance',
			cardStatus: 'Available now',
			card: [
				{ label: 'Based', value: 'Jakarta, GMT+7', icon: 'pin' },
				{ label: 'Local time', value: '', icon: 'clock' },
				{ label: 'I make', value: 'web, mobile, backend', icon: 'stack' },
				{
					label: 'Email',
					value: 'rdhanurzid@gmail.com',
					href: 'mailto:rdhanurzid@gmail.com',
					icon: 'mail'
				}
			]
		},
		logos: "Folks I've worked with",
		work: {
				title: 'Work that shipped to real users.',
			sub: 'Most of my work lives behind closed doors, so here is what I can share. Ask me anything on a call.',
			stackLabel: 'Stack',
			rolesTitle: 'Roles',
			hint: 'Tap a role to expand'
		},
		services: {
			title: 'Things I can help with.',
			sub: 'Four ways to work together. Mix and match.'
		},
		process: {
			title: 'Boring process, exciting results.',
			sub: 'You always know what happens next.'
		},
		about: {
			title: 'Tinkerer, builder, mentor.',
			bio: [
				"I'm Ramadhanu. I got into code out of curiosity: how does this thing actually work? Five years later I build microservices, mobile apps, and the servers they run on.",
				'I also mentor students at SMK Negeri 12 Jakarta and keep the school servers alive. With clients it is the same deal: I join your team, learn how you work, and leave things your team can run.' 
			],
			facts: [
				{ label: 'Location', value: 'Jakarta, remote worldwide, hybrid Jabodetabek' },
				{ label: 'Experience', value: '5+ years, Embreo PTE Ltd (2021-present)' },
				{ label: 'Education', value: 'B.Sc. Computer Science, in progress (evening program)' },
				{ label: 'Mentoring', value: 'SMK Negeri 12 Jakarta, national certifications' }
			],
			capTitle: 'My toolbox'
		},
		contact: {
			titleA: 'Something to build,',
			titleB: 'or a team to grow?',
			sub: 'I take consulting projects and full-time roles. Tell me what is on your mind, I reply within 24 hours.',
			availability: 'Available now',
			primary: 'Email me',
			response: 'More of a LinkedIn person? I am below. Same 24h reply.'
		},
		footer: { tagline: 'Jakarta, GMT+7. Replies within 24 hours', back: 'Back to top' }
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
			titleA: 'Orang yang penasaran,',
			titleB: 'kebetulan bisa ngoding.',
			sub: 'Saya Ramadhanu. Suka bongkar cara kerja sesuatu, lalu bikin software dari situ: web, mobile, backend. Lima tahun, masih penasaran. Remote global, hybrid Jabodetabek.',
			primary: 'Rekrut Saya',
			secondary: 'Lihat karya',
			cardTitle: 'Sekilas',
			cardStatus: 'Tersedia sekarang',
			card: [
				{ label: 'Basis', value: 'Jakarta, GMT+7', icon: 'pin' },
				{ label: 'Waktu lokal', value: '', icon: 'clock' },
				{ label: 'Saya bikin', value: 'web, mobile, backend', icon: 'stack' },
				{
					label: 'Email',
					value: 'rdhanurzid@gmail.com',
					href: 'mailto:rdhanurzid@gmail.com',
					icon: 'mail'
				}
			]
		},
		logos: 'Yang pernah kerja sama',
		work: {
				title: 'Kerjaan yang sampai ke pengguna.',
			sub: 'Sebagian besar kerjaan saya tertutup, jadi ini yang bisa saya bagikan. Tanya apa saja saat call.',
			stackLabel: 'Stack',
			rolesTitle: 'Peran',
			hint: 'Ketuk peran untuk detail'
		},
		services: {
			title: 'Yang bisa saya bantu.',
			sub: 'Empat cara kerja sama. Boleh digabung.'
		},
		process: {
			title: 'Proses membosankan, hasil menarik.',
			sub: 'Anda selalu tahu langkah berikutnya.'
		},
		about: {
			title: 'Ngoprek, bangun, mentor.',
			bio: [
				'Saya Ramadhanu. Awalnya cuma penasaran: ini sebenarnya cara kerjanya gimana? Lima tahun kemudian saya bangun microservices, aplikasi mobile, dan server di bawahnya.' ,
				'Saya juga membimbing siswa SMK Negeri 12 Jakarta dan menjaga server sekolah tetap hidup. Ke klien sama: saya gabung tim Anda, pelajari cara kerja Anda, dan meninggalkan hal yang bisa dijalankan tim Anda.' 
			],
			facts: [
				{ label: 'Lokasi', value: 'Jakarta, remote global, hybrid Jabodetabek' },
				{ label: 'Pengalaman', value: '5+ tahun, Embreo PTE Ltd (2021-sekarang)' },
				{ label: 'Pendidikan', value: 'S1 Ilmu Komputer, berjalan (kelas malam)' },
				{ label: 'Mentoring', value: 'SMK Negeri 12 Jakarta, sertifikasi nasional' }
			],
			capTitle: 'Kotak perkakas'
		},
		contact: {
			titleA: 'Ada yang mau dibikin,',
			titleB: 'atau tim yang butuh orang?',
			sub: 'Saya terima project consulting dan full-time. Ceritakan yang ada di pikiran, saya balas dalam 24 jam.',
			availability: 'Tersedia sekarang',
			primary: 'Email saya',
			response: 'Lebih suka LinkedIn? Saya ada di bawah. Tetap balas 24 jam.'
		},
		footer: { tagline: 'Jakarta, GMT+7. Balas dalam 24 jam', back: 'Kembali ke atas' }
	}
};
