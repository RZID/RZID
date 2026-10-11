<script lang="ts">
	import { themeState } from '$lib/theme.svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let spotlightX = $state(0);
	let spotlightY = $state(0);

	$effect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});

	// Smoothly follow mouse
	$effect(() => {
		// ponytail: static glow when reduced-motion; rAF loop skipped entirely. Upgrade to CSS-only drift only if a designer asks.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let raf = 0;
		const tick = () => {
			raf = requestAnimationFrame(tick);
			if (document.hidden || themeState.current === 'light') return;
			spotlightX += (mouseX - spotlightX) * 0.05;
			spotlightY += (mouseY - spotlightY) * 0.05;
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

<div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
	{#if themeState.current === 'dark'}
		<!-- Primary Spotlight (fixed container = viewport coords, no scroll offset) -->
		<div
			class="absolute h-[100vmax] w-[100vmax] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-opacity duration-1000"
			style="
			left: {spotlightX}px;
			top: {spotlightY}px;
			background: radial-gradient(circle at center, rgba(232, 37, 13, 0.04) 0%, transparent 40%);
		"
		></div>

		<!-- Fixed Mesh Gradients -->
		<div
			class="absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-red/5 opacity-30 blur-[120px]"
		></div>
		<div
			class="absolute top-[60%] -right-[10%] h-[50%] w-[50%] rounded-full bg-red/5 opacity-20 blur-[100px]"
		></div>
	{:else}
		<div
			class="absolute -top-[10%] right-[-15%] h-[40%] w-[45%] rounded-full bg-accent/[0.07] blur-[120px]"
		></div>
	{/if}
</div>
