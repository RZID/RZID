<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].hero);
	let visible = $state(false);
</script>

<section
	id="home"
	aria-label="Introduction"
	class="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
	></div>

	<div
		use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
		class="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14"
		style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 18}px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
	>
		<div>
			<p
				class="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase"
			>
				<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
				{t.badge}
			</p>
			<h1 class="mt-6 font-display text-hero leading-[1.02] font-bold tracking-tight text-ink">
				{t.titleA}<br />
				<span class="text-accent">{t.titleB}</span>
			</h1>
			<p class="mt-6 max-w-xl font-sans text-prose leading-relaxed text-muted">
				{t.sub}
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href="mailto:rdhanurzid@gmail.com"
					class="bg-accent px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-accent-hover active:scale-95"
				>
					{t.primary}
				</a>
				<a
					href="#work"
					class="border-b border-line pb-0.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:border-ink hover:text-ink"
				>
					{t.secondary} →
				</a>
			</div>
			<dl class="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
				{#each t.stats as s}
					<div>
						<dt class="sr-only">{s.label}</dt>
						<dd class="font-display text-3xl font-bold text-ink sm:text-4xl">{s.num}</dd>
						<dd class="mt-1 font-mono text-[10px] tracking-widest text-faint uppercase">
							{s.label}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<aside
			class="h-fit rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24"
			aria-label={t.cardTitle}
		>
			<p class="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">{t.cardTitle}</p>
			<div class="mt-4 space-y-4">
				{#each t.card as c}
					<div class="border-b border-line pb-4 last:border-0 last:pb-0">
						<p class="font-mono text-[10px] tracking-widest text-faint uppercase">{c.label}</p>
						<p class="mt-1 font-sans text-sm font-medium text-ink">{c.value}</p>
					</div>
				{/each}
			</div>
		</aside>
	</div>
</section>
