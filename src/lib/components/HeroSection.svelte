<script lang="ts">
	import { CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].hero);

	const ICONS = {
		pin: 'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0',
		stack:
			'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12 M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
		mail: 'm22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7',
		clock: 'M12 6v6l4 2'
	} as const;

	let jakartaTime = $state('');

	$effect(() => {
		const fmt = new Intl.DateTimeFormat(langState.current === 'id' ? 'id-ID' : 'en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			timeZone: 'Asia/Jakarta'
		});
		const tick = () => (jakartaTime = fmt.format(new Date()));
		tick();
		const id = setInterval(tick, 15000);
		return () => clearInterval(id);
	});
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
				class="enter-hero inline-flex -rotate-2 items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase"
			>
				<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
				{t.badge}
			</p>
			<h1
				class="enter-hero mt-6 font-display text-hero leading-[1.02] tracking-tight text-balance text-ink"
				style="animation-delay: 80ms;"
			>
				{t.titleA}<br />
				<span class="underline decoration-accent decoration-wavy underline-offset-[10px]">{t.titleB}</span>
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
					class="rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-white uppercase transition-[background-color,transform] duration-200 hover:bg-accent-hover active:scale-95"
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
			class="enter-hero h-fit rotate-1 rounded-2xl border border-line bg-surface p-6 transition-transform duration-300 hover:rotate-0"
			style="animation-delay: 300ms;"
			aria-label={t.cardTitle}
		>
			<div class="flex items-center gap-3">
				<span
					aria-hidden="true"
					class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-xl text-white transition-transform duration-300 hover:rotate-12"
					>R</span
				>
				<div class="min-w-0">
					<p class="font-sans text-sm font-semibold text-ink">Ramadhanu</p>
					<p
						class="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted uppercase"
					>
						<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
						{t.cardStatus}
					</p>
				</div>
			</div>
			<dl class="mt-5 space-y-4 border-t border-line pt-5">
				{#each t.card as c}
					<div class="flex items-start gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
						<span
							aria-hidden="true"
							class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
						>
							<svg
								viewBox="0 0 24 24"
								class="h-3.5 w-3.5"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								{#if c.icon === 'pin'}
									<path d={ICONS.pin} /><circle cx="12" cy="10" r="3" />
								{:else if c.icon === 'stack'}
									<path d={ICONS.stack} />
								{:else if c.icon === 'clock'}
									<circle cx="12" cy="12" r="10" /><path d={ICONS.clock} />
								{:else}
									<path d={ICONS.mail} /><rect width="20" height="16" x="2" y="4" rx="2" />
								{/if}
							</svg>
						</span>
						<div class="min-w-0">
							{#if c.icon === 'mail' && c.href}
								<dt class="sr-only">{c.label}</dt>
								<dd>
									<a
										href={c.href}
										class="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
									>
										<svg
											viewBox="0 0 24 24"
											class="h-4 w-4 shrink-0"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											aria-hidden="true"
										>
											<path d={ICONS.mail} /><rect
												width="20"
												height="16"
												x="2"
												y="4"
												rx="2"
											/>
										</svg>
										<span class="truncate">{c.value}</span>
									</a>
								</dd>
							{:else}
								<dt class="font-mono text-[10px] tracking-widest text-faint uppercase">{c.label}</dt>
								{#if c.icon === 'clock'}
									<dd class="mt-1 font-sans text-sm font-medium tabular-nums text-ink">
										{jakartaTime || '--:--'} <span class="text-faint">WIB</span>
									</dd>
								{:else if c.icon === 'stack'}
									<dd>
										<ul class="mt-1.5 flex flex-wrap gap-1.5">
											{#each c.value.split('·') as chip}
												<li
													class="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted"
												>
													{chip.trim()}
												</li>
											{/each}
										</ul>
									</dd>
								{:else}
									<dd class="mt-1 font-sans text-sm font-medium text-ink">{c.value}</dd>
								{/if}
							{/if}
						</div>
					</div>
				{/each}
			</dl>
		</aside>
	</div>
</section>
