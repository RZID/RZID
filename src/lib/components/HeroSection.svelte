<script lang="ts">
	import { CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].hero);
</script>

<section id="home" aria-label="Introduction" class="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -top-32 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
	></div>

	<div
		class="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14"
	>
		<div>
			<p
				class="enter-hero inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase"
			>
				<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
				{t.badge}
			</p>
			<h1
				class="enter-hero mt-6 font-display text-hero leading-[1.02] tracking-tight text-balance text-ink"
				style="animation-delay: 80ms;"
			>
				{t.titleA}<br />
				<span class="text-accent">{t.titleB}</span>
			</h1>
			<p
				class="enter-hero mt-6 max-w-xl font-sans text-prose leading-relaxed text-muted"
				style="animation-delay: 160ms;"
			>
				{t.sub}
			</p>
			<div class="enter-hero mt-8 flex flex-wrap items-center gap-4" style="animation-delay: 240ms;">
				<a
					href="#contact"
					class="bg-accent px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-white uppercase transition-[background-color,transform] duration-200 hover:bg-accent-hover active:scale-95"
				>
					{t.primary}
				</a>
				<a
					href="#work"
					class="group inline-flex items-center gap-1.5 border-b border-line pb-0.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors duration-200 hover:border-ink hover:text-ink"
				>
					{t.secondary}
					<svg
						viewBox="0 0 24 24"
						class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M5 12h14M13 6l6 6-6 6" />
					</svg>
				</a>
			</div>
			<dl
				class="enter-hero mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
				style="animation-delay: 300ms;"
			>
				{#each t.stats as s}
					<div>
						<dt class="sr-only">{s.label}</dt>
						<dd class="font-display text-3xl text-ink tabular-nums sm:text-4xl">{s.num}</dd>
						<dd class="mt-1 font-mono text-[10px] tracking-widest text-faint uppercase">
							{s.label}
						</dd>
					</div>
				{/each}
			</dl>
		</div>

		<aside
			class="enter-hero h-fit rounded-2xl border border-line bg-surface p-6"
			style="animation-delay: 300ms;"
			aria-label={t.cardTitle}
		>
			<p class="font-mono text-[10px] tracking-[0.3em] text-faint uppercase">{t.cardTitle}</p>
			<dl class="mt-4 space-y-4">
				{#each t.card as c}
					<div class="border-b border-line pb-4 last:border-0 last:pb-0">
						<dt class="font-mono text-[10px] tracking-widest text-faint uppercase">{c.label}</dt>
						{#if c.href}
							<dd><a href={c.href} class="mt-1 inline-block font-sans text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent">{c.value}</a></dd>
						{:else}
							<dd class="mt-1 font-sans text-sm font-medium text-ink">{c.value}</dd>
						{/if}
					</div>
				{/each}
			</dl>
		</aside>
	</div>
</section>
