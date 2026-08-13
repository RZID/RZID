<script lang="ts">
	import { scrollY } from '$lib/scrollY';

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
		const tick = () => {
			spotlightX += (mouseX - spotlightX) * 0.05;
			spotlightY += (mouseY - spotlightY) * 0.05;
			requestAnimationFrame(tick);
		};
		const raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	});
</script>

<div
	aria-hidden="true"
	class="fixed inset-0 z-0 pointer-events-none overflow-hidden"
>
	<!-- Primary Spotlight -->
	<div
		class="absolute w-[100vmax] h-[100vmax] -translate-x-1/2 -translate-y-1/2 opacity-40 transition-opacity duration-1000"
		style="
			left: {spotlightX}px; 
			top: {spotlightY + $scrollY}px;
			background: radial-gradient(circle at center, rgba(232, 37, 13, 0.04) 0%, transparent 40%);
		"
	></div>

	<!-- Fixed Mesh Gradients -->
	<div
		class="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] bg-red/5 opacity-30"
	></div>
	<div
		class="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[100px] bg-red/5 opacity-20"
	></div>
</div>
