<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import MeshGradient from '$lib/components/MeshGradient.svelte';
	import GrainOverlay from '$lib/components/GrainOverlay.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { NAV_LINKS } from '$lib/data';

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
	<!-- ponytail: og:image dropped — no og-image.jpg in static/. Re-add with a real 1200x630 asset. -->
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Ramadhanu" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Ramadhanu — Software Engineer" />
	<meta name="twitter:description" content="5+ years building end-to-end products. NestJS, React, React Native, AWS, Docker." />
	<script type="application/ld+json">{@html JSON.stringify(jsonLd)}</script>
</svelte:head>

<div class="bg-bg min-h-screen">
	<MeshGradient />
	<GrainOverlay />

	<CustomCursor />
	<Navbar />
	<main>
		{@render children()}
	</main>
	<footer class="border-t border-white/6">
		<div class="px-6 mx-auto py-10 max-w-7xl sm:px-12 md:px-16">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<a
					href="#home"
					class="font-sans text-tag font-bold uppercase text-white/60 transition-colors tracking-widest hover:text-white"
				>
					RZID<span class="text-red">/</span>
				</a>
				<nav aria-label="Footer" class="flex flex-wrap gap-6">
					{#each NAV_LINKS as link}
						<a
							href={link.to}
							class="font-mono uppercase text-label text-white/25 transition-colors tracking-widest hover:text-white"
						>
							{link.label}
						</a>
					{/each}
				</nav>
				<a
					href="mailto:rdhanurzid@gmail.com"
					class="font-mono uppercase text-label text-white/25 transition-colors tracking-widest hover:text-white"
				>
					rdhanurzid@gmail.com
				</a>
			</div>
			<div class="flex pt-6 mt-8 items-center border-t justify-between border-white/6">
				<span class="text-tag font-mono uppercase text-white/20 tracking-widest">
					© {new Date().getFullYear()} Ramadhanu
				</span>
				<span class="flex items-center gap-2 text-tag font-mono uppercase text-white/20 tracking-widest">
					<span class="w-1.5 h-1.5 bg-red rounded-full animate-pulse"></span>
					Jakarta, ID
				</span>
			</div>
		</div>
	</footer>
</div>
