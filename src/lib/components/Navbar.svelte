<script lang="ts">
	import { CONTENT } from '$lib/content';
	import { langState, setLang } from '$lib/i18n.svelte';
	import { themeState, toggleTheme } from '$lib/theme.svelte';
	import Icon from './Icon.svelte';

	const t = $derived(CONTENT[langState.current]);
	const links = $derived([
		{ id: 'work', label: t.nav.work },
		{ id: 'services', label: t.nav.services },
		{ id: 'process', label: t.nav.process },
		{ id: 'about', label: t.nav.about },
		{ id: 'contact', label: t.nav.contact }
	]);

	let active = $state('work');
	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 24);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		const observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) active = e.target.id;
			},
			{ rootMargin: '-40% 0px -55% 0px' }
		);
		for (const l of links) {
			const el = document.getElementById(l.id);
			if (el) observer.observe(el);
		}
		return () => {
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
	});
</script>

{#snippet themeIcon()}
	<Icon name={themeState.current === 'dark' ? 'sun' : 'moon'} class="h-4 w-4" />
{/snippet}

<header
	class="fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 {scrolled
		? 'border-line bg-bg/85 backdrop-blur-md'
		: 'border-transparent'}"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
		<a href="#top" class="font-mono text-sm font-bold tracking-widest text-ink">
			RZID<span class="text-accent">/</span>
		</a>

		<nav aria-label="Sections" class="hidden items-center gap-7 md:flex">
			{#each links as l}
				<a
					href="#{l.id}"
					aria-current={active === l.id ? 'true' : undefined}
					class="font-mono text-[11px] tracking-[0.2em] uppercase transition-colors {active === l.id
						? 'text-accent'
						: 'text-faint hover:text-ink'}"
				>
					{l.label}
				</a>
			{/each}
		</nav>

		<div class="hidden items-center gap-2 md:flex">
			<div
				role="group"
				aria-label="Language"
				class="rounded-full border border-line p-0.5 font-mono text-[11px]"
				>
				{#each ['en', 'id'] as l}
					<button
						onclick={() => setLang(l as 'en' | 'id')}
						aria-pressed={langState.current === l}
						class="tap rounded-full px-2.5 tracking-widest uppercase transition-colors {langState.current ===
						l
							? 'bg-accent text-white'
							: 'text-faint hover:text-ink'}"
					>
						{l}
					</button>
				{/each}
			</div>
			<button
				onclick={toggleTheme}
				aria-label={themeState.current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				class="tap rounded-full border border-line text-muted transition-colors hover:text-ink"
			>
				{@render themeIcon()}
			</button>
			<a
				href="#contact"
				class="ml-1 rounded-full bg-accent px-4 py-2 font-mono text-[11px] font-bold tracking-widest text-white uppercase transition-colors hover:bg-accent-hover"
			>
				{t.nav.hire}
			</a>
		</div>

		<button
			class="tap flex items-center justify-center text-ink md:hidden"
			onclick={() => (open = !open)}
			aria-expanded={open}
			aria-label={open ? t.nav.close : t.nav.menu}
		>
			{#if open}
				<Icon name="x" class="h-5 w-5" />
			{:else}
				<Icon name="list" class="h-5 w-5" />
			{/if}
		</button>
	</div>

	{#if open}
		<div class="border-t border-line bg-bg/95 backdrop-blur-md md:hidden">
			<nav aria-label="Sections mobile" class="space-y-1 px-5 py-4">
				{#each links as l}
					<a
						href="#{l.id}"
						onclick={() => (open = false)}
						class="block py-2.5 font-display text-2xl {active === l.id
							? 'text-accent'
							: 'text-ink'}"
					>
						{l.label}
					</a>
				{/each}
				<div class="flex items-center gap-3 pt-3">
					<div
						role="group"
						aria-label="Language"
						class="flex rounded-full border border-line p-0.5 font-mono text-[11px]"
					>
						{#each ['en', 'id'] as l}
							<button
								onclick={() => setLang(l as 'en' | 'id')}
								aria-pressed={langState.current === l}
								class="tap rounded-full px-3 tracking-widest uppercase {langState.current === l
									? 'bg-accent text-white'
									: 'text-faint'}"
								>
								{l === 'en' ? 'EN' : 'ID'}
							</button>
						{/each}
					</div>
					<button
						onclick={toggleTheme}
						aria-label="Toggle theme"
						class="tap rounded-full border border-line text-muted"
					>
						{@render themeIcon()}
					</button>
					<a
						href="#contact"
						class="flex-1 rounded-full bg-accent px-4 py-2.5 text-center font-mono text-[11px] font-bold tracking-widest text-white uppercase"
					>
						{t.nav.hire}
					</a>
				</div>
			</nav>
		</div>
	{/if}
</header>
