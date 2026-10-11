<script lang="ts">
	import { ICONS, type IconName } from '$lib/icons';

	let { name, class: cls = 'h-4 w-4' }: { name: IconName; class?: string } = $props();
</script>

<svg viewBox="0 0 256 256" aria-hidden="true" class={cls} fill="currentColor">
	<path d={ICONS[name]} />
</svg>
