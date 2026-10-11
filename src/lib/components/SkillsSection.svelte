<script lang="ts">
	import SkillBar from './SkillBar.svelte';
	import { inView } from '$lib/inView';
	import { SKILL_TAGS, SKILLS } from '$lib/data';

	let visible = $state(false);
	let tagsVisible = $state(false);
</script>

<section
	id="skills"
	aria-label="Technical skills"
	class="py-16 sm:py-24 lg:py-32 min-h-screen bg-surface relative overflow-hidden"
>
	<!-- Ghost index -->
	<div
		aria-hidden="true"
		class="z-0 top-24 absolute -right-8 text-deco font-sans md:right-4 lg:right-8 select-none leading-none font-extrabold text-white/2.5 pointer-events-none"
		style="animation: ghost-float 9s ease-in-out infinite alternate; transition: transform 0.5s ease-out;"
	>
		03
	</div>

	<div class="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 2xl:max-w-6xl">
		<div
			use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
			class="mb-10 md:mb-16"
			style={`opacity: ${visible ? 1 : 0}; transition: opacity 0.8s ease;`}
		>
			<span class="uppercase font-mono text-label text-red/70 tracking-[0.4em]">03 / Arsenal</span>
			<h2 class="mt-2 text-3xl sm:text-4xl md:text-5xl font-sans text-white leading-none font-extrabold">
				Skills
			</h2>
		</div>

		<!-- Skill bars -->
		<div class="space-y-5 mb-20">
			{#each SKILLS as s, i}
				<SkillBar skill={s} index={i} />
			{/each}
		</div>

		<!-- Divider -->
		<div class="border-t border-white/6 mb-12"></div>

		<!-- Tag grid -->
		<div use:inView={{ margin: '0px', onEnter: () => (tagsVisible = true) }} class="flex flex-wrap gap-2">
			{#each SKILL_TAGS as tag, i}
				<span
					class="px-3 py-1.5 border uppercase font-mono text-label transition-all cursor-default tracking-widest text-white/30 border-white/[0.07] hover:border-red/40 hover:text-white/60"
					style={`opacity: ${tagsVisible ? 1 : 0}; transition: opacity 0.5s ease ${i * 0.03 + 0.5}s;`}
				>
					{tag}
				</span>
			{/each}
		</div>
	</div>
</section>
