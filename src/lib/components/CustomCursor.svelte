<script lang="ts">
	import { spring } from 'svelte/motion';

	const sx = spring(-100, { stiffness: 600, damping: 45 });
	const sy = spring(-100, { stiffness: 600, damping: 45 });
	let active = $state(false);
	let fine = $state(false);

	$effect(() => {
		// Coarse pointers (touch) keep the native cursor.
		if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
		fine = true;
		const onMove = (e: MouseEvent) => {
			sx.set(e.clientX);
			sy.set(e.clientY);
		};
		const on = () => (active = true);
		const off = () => (active = false);
		window.addEventListener('mousemove', onMove);
		const els = document.querySelectorAll('a, button, [role=button]');
		els.forEach((el) => {
			el.addEventListener('mouseenter', on);
			el.addEventListener('mouseleave', off);
		});
		return () => {
			window.removeEventListener('mousemove', onMove);
			els.forEach((el) => {
				el.removeEventListener('mouseenter', on);
				el.removeEventListener('mouseleave', off);
			});
		};
	});
</script>

{#if fine}
	<!-- Dot -->
	<div
		aria-hidden="true"
		class="fixed z-9999 bg-red rounded-full pointer-events-none"
		style="width: 8px; height: 8px; transform: translate({$sx}px, {$sy}px) translate(-50%, -50%);"
	></div>
	<!-- Ring -->
	<div
		aria-hidden="true"
		class="fixed z-9998 border rounded-full border-red/40 pointer-events-none"
		style="width: {active ? 40 : 24}px; height: {active ? 40 : 24}px; transform: translate({$sx}px, {$sy}px) translate(-50%, -50%); transition: width 0.2s ease, height 0.2s ease;"
	></div>
{/if}
