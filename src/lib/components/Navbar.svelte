<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicInOut, sineInOut } from 'svelte/easing';
	import { get } from 'svelte/store';
	import { NAV_LINKS } from '$lib/data';

	const ROW = 53; // 6 + 40 + 6 padding + 1px divide border

	const stroke = {
		stroke: 'currentColor',
		'stroke-width': 1.5,
		fill: 'none',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	} as const;

	// Indicator — collapses to a dot, travels, then widens back out
	const y = tweened(0, { duration: 300, easing: sineInOut });
	const scaleX = tweened(1, { duration: 150, easing: cubicInOut });
	let prevIdx = 0;
	let chain: Promise<void> = Promise.resolve();

	function travel(nextIdx: number) {
		chain = chain.then(async () => {
			if (nextIdx === prevIdx) return;
			const delta = (nextIdx - prevIdx) * ROW;
			prevIdx = nextIdx;
			const base = get(y);
			await scaleX.set(0.1, { duration: 150, easing: cubicInOut });
			await y.set(base + delta, { duration: 300, easing: sineInOut });
			await scaleX.set(1, { duration: 150, easing: cubicInOut });
		});
	}

	let active = $state('home');

	// Scroll-spy: highlight the section crossing the viewport middle
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) active = entry.target.id;
				});
			},
			{ rootMargin: '-50% 0px -50% 0px' }
		);
		NAV_LINKS.forEach(({ to }) => {
			const el = document.getElementById(to.slice(1));
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	});

	$effect(() => {
		travel(NAV_LINKS.findIndex((l) => l.to.slice(1) === active));
	});
</script>

{#snippet icon(id: string)}
	{#if id === 'home'}
		<svg viewBox="0 0 24 24" {...stroke} class="w-5 h-5">
			<path d="m3 10.5 9-7.5 9 7.5" />
			<path d="M5 9.5V21h14V9.5" />
			<path d="M9 21v-6h6v6" />
		</svg>
	{:else if id === 'experience'}
		<svg viewBox="0 0 24 24" {...stroke} class="w-5 h-5">
			<rect x="3" y="7" width="18" height="14" rx="0" />
			<path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
		</svg>
	{:else if id === 'skills'}
		<svg viewBox="0 0 24 24" {...stroke} class="w-5 h-5">
			<rect x="3" y="4" width="18" height="16" rx="0" />
			<path d="m7 9 3 3-3 3" />
			<path d="M12 15h5" />
		</svg>
	{:else}
		<svg viewBox="0 0 24 24" {...stroke} class="w-5 h-5">
			<rect x="3" y="5" width="18" height="14" rx="0" />
			<path d="m3 7 9 6 9-6" />
		</svg>
	{/if}
{/snippet}

<nav
	aria-label="Section navigation"
	class="fixed top-1/2 right-4 sm:right-6 z-40 flex flex-col -translate-y-1/2 bg-bg/85 backdrop-blur-sm divide-y divide-white/6 border border-white/6 rounded-2xl"
	style="animation: rail-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both;"
>
	<!-- Active indicator — 2px underline under the icon, dot while travelling -->
	<span
		aria-hidden="true"
		class="bg-red w-5 h-0.5 rounded-full absolute left-4 top-[47px]"
		style={`transform: translateY(${$y}px) scaleX(${$scaleX});`}
	></span>

	{#each NAV_LINKS as link, i}
		{@const isActive = active === link.to.slice(1)}
		<a
			href={link.to}
			aria-label={link.label}
			class="flex group p-1.5 relative items-center justify-center outline-none rounded-xl focus-visible:bg-white/5"
			style={`animation: rail-item-in 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + i * 0.07}s both;`}
		>
			<!-- Icon -->
			<span
				class="hover-scale flex h-10 w-10 relative z-10 shrink-0 items-center justify-center transition-colors duration-200 {isActive
					? 'text-red'
					: 'text-white/40 group-hover:text-white'}"
				class:active-pop={isActive}
			>
				{@render icon(link.to.slice(1))}
			</span>
		</a>
	{/each}
</nav>

<style>
	@keyframes pop {
		0% {
			transform: scale(0.8);
		}
		60% {
			transform: scale(1.15);
		}
		100% {
			transform: scale(1);
		}
	}
	.active-pop {
		animation: pop 0.45s cubic-bezier(0.16, 1, 0.3, 1);
	}
	@media (hover: hover) {
		.hover-scale:hover {
			transform: scale(1.18);
		}
	}
</style>
