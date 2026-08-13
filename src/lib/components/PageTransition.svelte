<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();

	function page(node: Element, { delay = 0, duration = 450 } = {}) {
		return {
			delay,
			duration,
			easing: cubicOut,
			css: (t: number) => `opacity: ${t}; filter: blur(${(1 - t) * 4}px);`
		};
	}
</script>

<div transition:page>{@render children()}</div>
