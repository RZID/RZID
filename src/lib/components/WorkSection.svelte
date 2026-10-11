<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTENT, PROJECTS, ROLES } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].work);
	let headVisible = $state(false);
	let rolesVisible = $state(false);
	let openIdx = $state<number | null>(0);

	function reveal(visible: boolean) {
		return `opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 20}px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);`;
	}
</script>

<section id="work" aria-label="Work" class="relative scroll-mt-20 py-20 sm:py-28">
	<div class="mx-auto max-w-6xl px-5 sm:px-8">
		<div
			use:inView={{ margin: '0px', onEnter: () => (headVisible = true) }}
			style={reveal(headVisible)}
		>
			<div class="mt-3">
				<h2 class="max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl">
					{t.title}
				</h2>
				<p class="mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted">{t.sub}</p>
			</div>
		</div>

		<!-- Selected projects -->
		<div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each PROJECTS as p, i}
				{@const v = headVisible}
				<article
					class="group rounded-2xl border border-line bg-surface p-6 transition-[transform,border-color,box-shadow] duration-300 hover:rotate-0 hover:border-accent/40 hover:shadow-[0_20px_50px_-20px_rgba(232,37,13,0.25)] {i %
						2 ===
					0
						? '-rotate-1'
						: 'rotate-1'}"
					style={`opacity: ${v ? 1 : 0}; transform: translateY(${v ? 0 : 16}px); transition: opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s;`}
				>
					<div class="flex items-start justify-between gap-3">
						<h3 class="font-display text-xl text-ink">{p.name}</h3>
						<span
							class="shrink-0 -rotate-2 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-widest text-faint uppercase transition-transform group-hover:rotate-0"
						>
							{p.role}
						</span>
					</div>
					<p class="mt-2 font-mono text-[11px] tracking-wide text-accent">{p.stack}</p>
					<p class="mt-3 font-sans text-sm leading-relaxed text-muted">{p.outcome}</p>
				</article>
			{/each}
		</div>

		<!-- Roles accordion -->
		<div
			use:inView={{ margin: '0px', onEnter: () => (rolesVisible = true) }}
			class="mt-16"
			style={reveal(rolesVisible)}
		>
			<div class="flex items-center justify-between gap-4">
				<h3 class="font-display text-2xl text-ink">{t.rolesTitle}</h3>
				<p class="hidden font-mono text-[11px] tracking-widest text-faint uppercase sm:block">
					{t.hint}
				</p>
			</div>
			<div class="mt-4 border-t border-line">
				{#each ROLES as r, i}
					<div class="border-b border-line">
						<button
							onclick={() => (openIdx = openIdx === i ? null : i)}
							aria-expanded={openIdx === i}
							aria-controls={`role-panel-${i}`}
							id={`role-button-${i}`}
							class="group flex w-full items-start justify-between gap-4 py-5 text-left"
						>
							<div class="flex items-start gap-5">
								<span class="mt-1 w-6 shrink-0 font-mono text-[11px] text-faint">
									{String(i + 1).padStart(2, '0')}
								</span>
								<div>
									<p
										class="font-display text-lg text-ink transition-colors group-hover:text-accent"
									>
										{r.title}
									</p>
									<p class="mt-0.5 font-mono text-[11px] tracking-wide text-muted">{r.company}</p>
								</div>
							</div>
							<div class="flex shrink-0 items-center gap-3">
								<span class="hidden font-mono text-[11px] text-faint sm:block">{r.period}</span>
								<span
									class="rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase transition-colors {openIdx ===
									i
										? 'border-accent/40 bg-accent/10 text-accent'
										: 'border-line text-faint'}"
								>
									{r.tag}
								</span>
								<span
									aria-hidden="true"
									class="text-xl font-light text-faint transition-transform duration-300 group-hover:text-ink {openIdx ===
									i
										? 'rotate-45'
										: ''}"
								>
									+
								</span>
							</div>
						</button>
						{#if openIdx === i}
							<div id={`role-panel-${i}`} role="region" aria-labelledby={`role-button-${i}`}>
								<ul class="space-y-2.5 pb-6 pl-11">
								{#each r.bullets as b}
									<li class="flex items-start gap-3 font-sans text-sm leading-relaxed text-muted">
										<span aria-hidden="true" class="mt-0.5 shrink-0 text-[11px] text-accent">◆</span
										>
										{b}
									</li>
								{/each}
							</ul>
							<p class="pb-6 pl-11 font-mono text-[11px] text-faint sm:hidden">{r.period}</p>
						</div>
					{/if}
					</div>
				{/each}
			</div>
			<p class="mt-5 font-mono text-[11px] tracking-widest text-faint uppercase">
				{t.stackLabel}: TypeScript · NestJS · React · Next.js · React Native · AWS · Docker
			</p>
		</div>
	</div>
</section>
