<script lang="ts">
	import { CLIENTS } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';
	import { CONTENT } from '$lib/content';

	const t = $derived(CONTENT[langState.current]);
</script>

<div aria-label={t.logos} class="border-y border-line bg-surface/60">
	<div class="mx-auto max-w-6xl px-5 py-8 sm:px-8">
		<p class="text-center font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
			{t.logos}
		</p>
		<div class="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
			{#each CLIENTS as c}
				<span
					class="font-display text-lg font-bold tracking-tight text-muted transition-colors hover:text-ink"
				>
					{c}
				</span>
			{/each}
		</div>
	</div>
</div>
