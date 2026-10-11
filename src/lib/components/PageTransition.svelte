<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	function page(node: Element, { delay = 0, duration = 450 } = {}) {
	return {
		delay,
		duration,
		easing: cubicOut,
		// Opacity only: animating blur() is a paint-heavy filter the GPU can't composite.
		css: (t: number) => `opacity: ${t};`
	};
}
</script>

<div transition:page>{@render children()}</div>
