<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTACTS, CONTENT } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].contact);
	let visible = $state(false);
</script>

<section id="contact" aria-label="Contact" class="scroll-mt-20 py-20 sm:py-28">
	<div
		class="mx-auto max-w-6xl px-5 sm:px-8"
		use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
		style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 20}px); transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
	>
		<div class="rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
			<p
				class="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-widest text-muted uppercase"
			>
				<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"></span>
				{t.availability}
			</p>
			<h2
				class="mx-auto mt-6 max-w-2xl font-display text-cta leading-[1.05] tracking-tight text-ink"
			>
				{t.titleA}<br />
				<span class="text-muted">{t.titleB}</span>
			</h2>
			<p class="mx-auto mt-6 max-w-md font-sans text-prose leading-relaxed text-muted">{t.sub}</p>
			<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
				<a
					href="mailto:rdhanurzid@gmail.com"
					class="bg-accent px-8 py-4 font-mono text-xs font-bold tracking-widest text-white uppercase transition-[background-color,transform] duration-200 hover:bg-accent-hover active:scale-95"
				>
					{t.primary}
				</a>
			</div>
			<div class="mx-auto mt-10 flex max-w-xl flex-wrap items-stretch justify-center gap-3">
				{#each CONTACTS as c}
					<a
						href={c.href}
						target={c.href.startsWith('http') ? '_blank' : undefined}
						rel="noreferrer"
						class="group flex-1 rounded-xl border border-line px-5 py-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/40"
					>
						<span class="block font-mono text-[10px] tracking-widest text-faint uppercase"
							>{c.label}</span
						>
						<span
							class="mt-1 block truncate font-sans text-sm font-medium text-ink transition-colors group-hover:text-accent"
						>
							{c.value}
						</span>
					</a>
				{/each}
			</div>
			<p class="mt-8 font-sans text-sm text-faint">{t.response}</p>
		</div>
	</div>
</section>
