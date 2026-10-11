<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTENT, SERVICES } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].services);
	let visible = $state(false);
</script>

<section
	id="services"
	aria-label="Services"
	class="scroll-mt-20 border-t border-line bg-surface/60 py-20 sm:py-28"
>
	<div
		class="mx-auto max-w-6xl px-5 sm:px-8"
		use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
		style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 20}px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
	>
		<p class="font-mono text-[11px] tracking-[0.35em] text-accent uppercase">{t.eyebrow}</p>
		<div class="mt-3 flex flex-wrap items-end justify-between gap-6">
			<h2 class="max-w-xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
				{t.title}
			</h2>
			<p class="max-w-sm font-sans text-sm leading-relaxed text-muted">{t.sub}</p>
		</div>

		<div class="mt-12 grid gap-4 md:grid-cols-2">
			{#each SERVICES as s, i}
				<article
					class="rounded-2xl border border-line bg-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
					style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 16}px); transition: opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s;`}
				>
					<span class="font-mono text-[11px] text-faint">0{i + 1}</span>
					<h3 class="mt-2 font-display text-2xl font-bold text-ink">{s.title}</h3>
					<p class="mt-1 font-sans text-sm text-muted">{s.desc}</p>
					<ul class="mt-5 space-y-2 border-t border-line pt-5">
						{#each s.points as p}
							<li class="flex items-start gap-2.5 font-sans text-sm text-muted">
								<svg
									viewBox="0 0 24 24"
									class="mt-0.5 h-4 w-4 shrink-0 text-accent"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M5 13l4 4L19 7" />
								</svg>
								{p}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
