<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GrainOverlay from '$lib/components/GrainOverlay.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';

	let { children }: { children: Snippet } = $props();

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ramadhanu',
		url: 'https://www.rzidinc.com',
		email: 'rdhanurzid@gmail.com',
		jobTitle: 'Software Engineer',
		description:
			'Software Engineer with 5+ years experience in Node.js, React, NestJS, and cloud infrastructure.',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Jakarta Barat',
			addressRegion: 'DKI Jakarta',
			addressCountry: 'ID'
		},
		sameAs: [
			'https://github.com/RZID',
			'https://www.linkedin.com/in/rama-ramadhanu/',
			'https://www.rzidinc.com'
		],
		knowsAbout: [
			'JavaScript',
			'TypeScript',
			'Node.js',
			'NestJS',
			'React',
			'React Native',
			'Next.js',
			'AWS',
			'Docker',
			'Redis',
			'RabbitMQ',
			'PostgreSQL',
			'Linux',
			'Microservices',
			'REST API'
		]
	};
</script>

<svelte:head>
	<title>Ramadhanu — Software Engineer, Jakarta</title>
	<meta name="description" content="Ramadhanu is a Software Engineer with 5+ years of experience building scalable microservices, cross-platform apps, and production infrastructure. Based in Jakarta, Indonesia." />
	<meta name="keywords" content="Software Engineer, NestJS, React, React Native, Node.js, TypeScript, Jakarta, Microservices" />
	<meta name="author" content="Ramadhanu" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.rzidinc.com" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.rzidinc.com" />
	<meta property="og:title" content="Ramadhanu — Software Engineer" />
	<meta property="og:description" content="5+ years building end-to-end products. NestJS, React, React Native, AWS, Docker. Based in Jakarta." />
	<meta property="og:image" content="https://www.rzidinc.com/og-image.jpg" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Ramadhanu" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Ramadhanu — Software Engineer" />
	<meta name="twitter:description" content="5+ years building end-to-end products. NestJS, React, React Native, AWS, Docker." />
	<meta name="twitter:image" content="https://www.rzidinc.com/og-image.jpg" />
	<script type="application/ld+json">{@html JSON.stringify(jsonLd)}</script>
</svelte:head>

<div class="bg-bg min-h-screen">
	<GrainOverlay />
	<CustomCursor />
	<Navbar />
	<main>
		{@render children()}
	</main>
	<footer class="px-6 py-8 border-t sm:px-8 md:px-16 md:py-10 border-white/6">
		<div class="flex mx-auto max-w-7xl items-center 2xl:max-w-7xl justify-between">
			<span class="text-tag font-mono uppercase text-white/20 tracking-widest">
				© {new Date().getFullYear()} Ramadhanu
			</span>
			<span class="text-tag font-mono uppercase text-white/10 tracking-widest">
				Jakarta, ID
			</span>
		</div>
	</footer>
</div>
