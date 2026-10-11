<script lang="ts">
	import { CLIENTS } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';
	import { CONTENT } from '$lib/content';

	const t = $derived(CONTENT[langState.current]);

	// Eight identical copies: one half (four) always covers ultrawide
	// viewports, so the -50% loop never shows a gap.
	const loop: string[] = Array(8).fill(CLIENTS).flat();
</script>

<div aria-label={t.logos} role="region" class="overflow-hidden border-y border-line bg-surface/60">
	<div class="mx-auto max-w-6xl px-5 py-8 sm:px-8">
		<p class="text-center font-mono text-[10px] tracking-[0.35em] text-faint uppercase">
			{t.logos}
		</p>
		<div class="marquee mt-5 overflow-hidden">
			<ul class="marquee-track flex w-max items-center" aria-label={t.logos}>
				{#each loop as c, i}
					<li
						aria-hidden={i >= CLIENTS.length ? 'true' : undefined}
						class="shrink-0 px-5 font-display text-lg tracking-tight text-muted transition-colors hover:text-ink"
					>
						{c}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
