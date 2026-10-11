<script lang="ts">
	import '../app.css';
	import type { Snippet } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import MeshGradient from '$lib/components/MeshGradient.svelte';
	import GrainOverlay from '$lib/components/GrainOverlay.svelte';
	import ScrollProgress from '$lib/components/ScrollProgress.svelte';
	import { CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';
	import { initTheme } from '$lib/theme.svelte';
	import { initLang } from '$lib/i18n.svelte';
	import { onMount } from 'svelte';

	let { children }: { children: Snippet } = $props();
	const t = $derived(CONTENT[langState.current]);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Ramadhanu',
		url: 'https://www.rzidinc.com',
		email: 'rdhanurzid@gmail.com',
		jobTitle: 'Full Stack Software Engineer',
		description:
			'Curious engineer with 5 years building web, mobile and backend. Remote worldwide, hybrid in Jabodetabek.',
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

	onMount(() => {
		initTheme();
		initLang();
	});
</script>

<svelte:head>
	<title>Ramadhanu, Curious Engineer Who Writes Code (Remote)</title>
	<meta
		name="description"
		content="Curious engineer, 5 years building web, mobile and backend. Fintech, property, fitness. Open to full-time roles and consulting. Remote worldwide, hybrid in Jabodetabek."
	/>
	<meta
		name="keywords"
		content="Full Stack Engineer, hire developer, NestJS, React, React Native, Node.js, TypeScript, remote developer Indonesia, consulting"
	/>
	<meta name="author" content="Ramadhanu" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://www.rzidinc.com" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.rzidinc.com" />
	<meta property="og:title" content="Ramadhanu, Full-Stack Engineer for Hire" />
	<meta
		property="og:description"
		content="Curious engineer, 5 years building web, mobile, backend. Open to full-time and consulting."
	/>
	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Ramadhanu" />
	<meta property="og:image" content="https://www.rzidinc.com/og-dark.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Ramadhanu, Full-Stack Engineer for Hire" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://www.rzidinc.com/og-dark.png" />
	<meta name="twitter:title" content="Ramadhanu, Full-Stack Engineer for Hire" />
	<meta
		name="twitter:description"
		content="Curious engineer, 5 years building web, mobile, backend."
	/>
	<script type="application/ld+json">{@html JSON.stringify(jsonLd)}</script>
</svelte:head>

<div id="top" class="min-h-dvh bg-bg text-ink">
	<a href="#main" class="skip-link">Skip to content</a>
	<MeshGradient />
	<GrainOverlay />

	<ScrollProgress />
	<Navbar />
	<main id="main">
		{@render children()}
	</main>
	<footer class="border-t border-line">
		<div class="mx-auto max-w-6xl px-5 py-12 sm:px-8">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<a href="#top" class="font-mono text-sm font-bold tracking-widest text-ink">
					RZID<span class="text-accent">/</span>
				</a>
				<nav aria-label="Footer" class="flex flex-wrap gap-x-6 gap-y-2">
					<a href="#work" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">{t.nav.work}</a>
					<a href="#services" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">{t.nav.services}</a>
					<a href="#process" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">{t.nav.process}</a>
					<a href="#about" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">{t.nav.about}</a>
					<a href="#contact" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">{t.nav.contact}</a>
				</nav>
				<a
					href="mailto:rdhanurzid@gmail.com"
					class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink"
				>
					rdhanurzid@gmail.com
				</a>
			</div>
			<div class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
				<span class="font-mono text-[11px] tracking-widest text-faint uppercase">
					© {new Date().getFullYear()} Ramadhanu · {t.footer.tagline}
				</span>
				<a href="#top" class="font-mono text-[11px] tracking-widest text-faint uppercase transition-colors hover:text-ink">
					{t.footer.back} ↑
				</a>
			</div>
		</div>
	</footer>
</div>
