<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTENT, STEPS } from '$lib/content';
	import { langState } from '$lib/i18n.svelte';

	const t = $derived(CONTENT[langState.current].process);
	let visible = $state(false);
</script>

<section id="process" aria-label="Process" class="scroll-mt-20 py-20 sm:py-28">
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

		<ol
			class="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
		>
			{#each STEPS as s, i}
				<li
					class="bg-bg p-7"
					style={`opacity: ${visible ? 1 : 0}; transition: opacity 0.5s ease ${i * 0.1}s;`}
				>
					<span class="font-display text-4xl text-accent/30">0{i + 1}</span>
					<h3 class="mt-4 font-display text-xl text-ink">{s.title}</h3>
					<p class="mt-2 font-sans text-sm leading-relaxed text-muted">{s.desc}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
