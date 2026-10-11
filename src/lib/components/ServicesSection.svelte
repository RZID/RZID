<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTENT, SERVICES } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';
	import Icon from './Icon.svelte';

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
		<div class="mt-3">
			<h2 class="max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
				{t.title}
			</h2>
			<p class="mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted">{t.sub}</p>
		</div>

		<div class="mt-12 grid gap-4 md:grid-cols-2">
			{#each SERVICES as s, i}
				<article
					class="rounded-2xl border border-line bg-bg p-7 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_20px_50px_-30px_rgba(232,37,13,0.4)]"
					style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 16}px); transition: opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s;`}
				>
					<div class="flex items-center justify-between gap-3">
						<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"><Icon name={s.icon} class="h-5 w-5" /></span>
						<span class="font-mono text-[11px] tracking-widest text-faint">0{i + 1}</span>
					</div>
					<h3 class="mt-4 font-display text-2xl text-ink">{s.title}</h3>
					<p class="mt-1 font-sans text-sm text-muted">{s.desc}</p>
					<ul class="mt-5 space-y-2 border-t border-line pt-5">
						{#each s.points as p}
							<li class="flex items-start gap-2.5 font-sans text-sm text-muted">
								<Icon name="check" class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
								{p}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
