<script lang="ts">
	import ExperienceCard from './ExperienceCard.svelte';
	import { inView } from '$lib/inView';
	import { ACHIEVEMENTS, EDUCATION, EXPERIENCES } from '$lib/data';

	let openIdx = $state<number | null>(0);
	let headVisible = $state(false);
	let eduVisible = $state(false);
	let achVisible = $state(false);
</script>

<section
	id="experience"
	aria-label="Work experience"
	class="py-16 sm:py-24 lg:py-32 min-h-screen bg-bg relative overflow-hidden"
>
	<!-- Ghost index — the hero's motif, continued -->
	<div
		aria-hidden="true"
		class="z-0 top-24 absolute -right-8 text-deco font-sans md:right-4 lg:right-8 select-none leading-none font-extrabold text-white/2.5 pointer-events-none"
		style="animation: ghost-float 9s ease-in-out infinite alternate; transition: transform 0.5s ease-out;"
	>
		02
	</div>

	<div class="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 relative z-10 2xl:max-w-6xl">
		<!-- Section header -->
		<div
			use:inView={{ margin: '0px', onEnter: () => (headVisible = true) }}
			class="flex mb-10 md:mb-16 items-end justify-between"
			style={`opacity: ${headVisible ? 1 : 0}; transition: opacity 0.8s ease;`}
		>
			<div>
				<span class="uppercase font-mono text-label text-red/70 tracking-[0.4em]">02 / Work</span>
				<h2
					class="mt-2 text-3xl sm:text-4xl md:text-5xl font-sans text-white leading-none font-extrabold"
				>
					Experience
				</h2>
			</div>
			<p
				class="hidden md:block max-w-45 text-tag font-mono text-right tracking-wide text-white/20 leading-relaxed"
			>
				Click each role to expand details
			</p>
		</div>

		<!-- Accordion -->
		<div>
			{#each EXPERIENCES as exp, i}
				<ExperienceCard
					{exp}
					index={i}
					isOpen={openIdx === i}
					onToggle={() => (openIdx = openIdx === i ? null : i)}
				/>
			{/each}
			<!-- Bottom border -->
			<div class="border-t border-white/[0.07]"></div>
		</div>

		<!-- Education + achievements -->
		<div class="grid gap-10 mt-20 md:grid-cols-2 md:gap-16">
			<div
				use:inView={{ margin: '0px', onEnter: () => (eduVisible = true) }}
				style={`opacity: ${eduVisible ? 1 : 0}; transform: translateY(${eduVisible ? 0 : 20}px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
			>
				<span class="uppercase font-mono text-label text-white/25 tracking-[0.4em]">Education</span>
				<div class="mt-4 border-t border-white/[0.07]">
					{#each EDUCATION as e, i}
						<div
							class="flex py-4 border-b items-baseline gap-4 justify-between border-white/[0.07]"
							style={`opacity: ${eduVisible ? 1 : 0}; transform: translateY(${eduVisible ? 0 : 12}px); transition: opacity 0.5s ease ${i * 0.08 + 0.25}s, transform 0.5s ease ${i * 0.08 + 0.25}s;`}
						>
							<div>
								<p class="text-body font-sans text-white/70 leading-tight">{e.program}</p>
								<p class="mt-1 font-mono text-label text-white/30">{e.school}</p>
							</div>
							<span class="shrink-0 font-mono text-label text-white/20">{e.period}</span>
						</div>
					{/each}
				</div>
			</div>

			<div
				use:inView={{ margin: '0px', onEnter: () => (achVisible = true) }}
				style={`opacity: ${achVisible ? 1 : 0}; transform: translateY(${achVisible ? 0 : 20}px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);`}
			>
				<span class="uppercase font-mono text-label text-white/25 tracking-[0.4em]"
					>Achievements</span
				>
				<div class="mt-4 border-t border-white/[0.07]">
					{#each ACHIEVEMENTS as a, i}
						<div
							class="flex py-4 border-b gap-3 items-start border-white/[0.07]"
							style={`opacity: ${achVisible ? 1 : 0}; transform: translateY(${achVisible ? 0 : 12}px); transition: opacity 0.5s ease ${i * 0.08 + 0.25}s, transform 0.5s ease ${i * 0.08 + 0.25}s;`}
						>
							<span class="mt-1 shrink-0 text-label text-red/60">◆</span>
							<p class="text-body font-sans text-white/70 leading-relaxed">{a}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
