<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import { inView } from '$lib/inView';
	import { EXPERIENCES } from '$lib/data';

	let openIdx = $state<number | null>(0);
	let visible = $state(false);
</script>

<section
	id="experience"
	aria-label="Work experience"
	class="py-16 sm:py-24 lg:py-32 min-h-screen bg-bg"
>
	<div class="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 2xl:max-w-6xl">
		<!-- Section header -->
		<div
			use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
			class="flex mb-10 md:mb-16 items-end justify-between"
			style={`opacity: ${visible ? 1 : 0}; transition: opacity 0.8s ease;`}
		>
			<div>
				<span class="uppercase font-mono text-label text-red/70 tracking-[0.4em]">02 / Work</span>
				<h2 class="mt-2 text-3xl sm:text-4xl md:text-5xl font-sans text-white leading-none font-extrabold">
					Experience
				</h2>
			</div>
			<p class="hidden md:block max-w-45 text-tag font-mono text-right tracking-wide text-white/20 leading-relaxed">
				Click each role to expand details
			</p>
		</div>

		<!-- Accordion -->
		<div>
			{#each EXPERIENCES as exp, i}
				<ExperienceCard
					exp={exp}
					index={i}
					isOpen={openIdx === i}
					onToggle={() => (openIdx = openIdx === i ? null : i)}
				/>
			{/each}
			<!-- Bottom border -->
			<div class="border-t border-white/[0.07]"></div>
		</div>
	</div>
</section>
