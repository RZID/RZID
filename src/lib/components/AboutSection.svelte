<script lang="ts">
	import { inView } from '$lib/inView';
	import { CAPABILITIES, CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].about);
	let visible = $state(false);
</script>

<section
	id="about"
	aria-label="About"
	class="scroll-mt-20 border-t border-line bg-surface/60 py-20 sm:py-28"
>
	<div
		class="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
		use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
		style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 20}px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
	>
		<div>
			<h2 class="font-display text-4xl tracking-tight text-ink sm:text-5xl">
				{t.title}
			</h2>
			{#each t.bio as p}
				<p class="mt-6 max-w-xl font-sans text-prose leading-relaxed text-muted">{p}</p>
			{/each}
			<dl class="mt-8 space-y-4 border-t border-line pt-8">
				{#each t.facts as f}
					<div class="grid gap-1 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4">
						<dt class="font-mono text-[11px] tracking-widest text-faint uppercase">{f.label}</dt>
						<dd class="font-sans text-sm text-ink">{f.value}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="rounded-2xl border border-line bg-bg p-7 lg:sticky lg:top-24">
			<p class="font-mono text-[11px] tracking-[0.3em] text-faint uppercase">{t.capTitle}</p>
			<div class="mt-5 space-y-6">
				{#each CAPABILITIES as c}
					<div>
						<p class="font-display text-base text-ink">{c.title}</p>
						<div class="mt-2.5 flex flex-wrap gap-2">
							{#each c.items as item}
								<span
									class="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/40 hover:text-ink"
								>
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
