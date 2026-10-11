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

	// Spotlight follows the cursor, then the loop stops at rest and wakes on
	// the next mousemove, so no perpetual rAF burn, paused when the tab hides.
	$effect(() => {
		// ponytail: static glow when reduced-motion; rAF loop skipped entirely. Upgrade to CSS-only drift only if a designer asks.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		let raf = 0;
		const tick = () => {
			raf = requestAnimationFrame(tick);
			if (document.hidden || themeState.current === 'light') return;
			const dx = mouseX - spotlightX;
			const dy = mouseY - spotlightY;
			if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2) {
				cancelAnimationFrame(raf);
				raf = 0;
				return;
			}
			spotlightX += dx * 0.08;
			spotlightY += dy * 0.08;
		};
		const wake = () => {
			if (!raf) raf = requestAnimationFrame(tick);
		};
		window.addEventListener('mousemove', wake);
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener('mousemove', wake);
			if (raf) cancelAnimationFrame(raf);
		};
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
			class="animate-drift absolute -top-[20%] -left-[10%] h-[60%] w-[60%] rounded-full bg-accent/5 opacity-30 blur-[120px]"
		></div>
		<div
			class="animate-drift absolute top-[60%] -right-[10%] h-[50%] w-[50%] rounded-full bg-accent/5 opacity-20 blur-[100px]"
			style="animation-delay: -9s;"
		></div>
	{:else}
		<div
			class="absolute -top-[10%] right-[-15%] h-[40%] w-[45%] rounded-full bg-accent/[0.07] blur-[120px]"
		></div>
	{/if}
</div>
