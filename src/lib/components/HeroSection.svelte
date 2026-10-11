<script lang="ts">
	import { CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';
	import Icon from './Icon.svelte';

	const t = $derived(CONTENT[langState.current].hero);

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
		class="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-14"
	>
		<div>
			<p
				class="enter-hero inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
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
			<div
				class="enter-hero mt-8 flex flex-wrap items-center gap-4"
				style="animation-delay: 240ms;"
			>
				<a
					href="#contact"
					class="rounded-full bg-accent px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-white uppercase transition-[background-color,box-shadow,translate,scale] duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_12px_30px_-12px_rgba(224,74,46,0.65)] active:translate-y-0 active:scale-95"
				>
					{t.primary}
				</a>
				<a
					href="#work"
					class="group inline-flex items-center gap-1.5 border-b border-line pb-0.5 font-mono text-xs tracking-widest text-muted uppercase transition-colors duration-200 hover:border-ink hover:text-ink"
				>
					{t.secondary}
					<Icon
						name="arrow"
						class="h-3.5 w-3.5 transition-[translate] duration-200 group-hover:translate-x-0.5"
					/>
				</a>
			</div>
		</div>

		<aside
			class="enter-hero h-fit rounded-2xl border border-line bg-surface p-6"
			style="animation-delay: 300ms;"
			aria-label={t.cardTitle}
		>
			<div class="flex items-center gap-3">
				<img
					src="/avatar-96.jpg"
					srcset="/avatar-96.jpg 1x, /avatar-192.jpg 2x"
					alt="Ramadhanu"
					width="44"
					height="44"
					loading="eager"
					fetchpriority="high"
					class="h-11 w-11 shrink-0 rounded-full border border-line object-cover"
				/>
				<div class="min-w-0">
					<p class="font-sans text-sm font-semibold text-ink">Ramadhanu</p>
					<p
						class="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-muted uppercase"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-accent"></span>
						{t.cardStatus}
					</p>
				</div>
			</div>
			<dl class="mt-5 space-y-4 border-t border-line pt-5">
				{#each t.card as c}
					<div class="flex items-start gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
						{#if !(c.icon === 'mail' && c.href)}
							<span
								aria-hidden="true"
								class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent"
							>
								<Icon name={c.icon} class="h-3.5 w-3.5" />
							</span>
						{/if}
						<div class="min-w-0 flex-1">
							{#if c.icon === 'mail' && c.href}
								<dt class="sr-only">{c.label}</dt>
								<dd>
									<a
										href={c.href}
										class="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
									>
										<Icon name="mail" class="h-4 w-4 shrink-0" />
										<span class="truncate">{c.value}</span>
									</a>
								</dd>
							{:else}
								<dt class="font-mono text-[10px] tracking-widest text-faint uppercase">
									{c.label}
								</dt>
								{#if c.icon === 'clock'}
									<dd class="mt-1 font-sans text-sm font-medium tabular-nums text-ink">
										{jakartaTime || '--:--'} <span class="text-faint">WIB</span>
									</dd>
								{:else if c.icon === 'stack'}
									<dd>
										<ul class="mt-1.5 flex flex-wrap gap-1.5">
											{#each c.value.split(',') as chip}
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
