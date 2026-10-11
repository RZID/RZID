<script lang="ts">
	import { createScramble } from '$lib/scramble.svelte';
	import { scrollY } from '$lib/scrollY';
	import TerminalCard from './TerminalCard.svelte';

	const name = createScramble('RAMADHANU');
	const reduce = $state(
		typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
	const yOffset = $derived(reduce ? 0 : Math.min($scrollY / 700, 1) * 120);
	const opacity = $derived(reduce ? 1 : 1 - Math.min($scrollY / 500, 1));

	$effect(() => {
		// ponytail: single mount, no replay path. Add hover-replay only if requested.
		if (reduce) return;
		const t = setTimeout(() => name.start(), 300);
		return () => {
			clearTimeout(t);
			name.stop();
		};
	});
</script>

<section
	id="home"
	aria-label="Introduction"
	class="flex pb-24 bg-bg flex-col relative scanlines justify-end min-h-screen overflow-hidden"
>
	<!-- Large background index number — decorative -->
	<div
		aria-hidden="true"
		class="z-0 top-1/2 absolute -right-8 text-deco font-sans md:right-4 lg:right-8 select-none leading-none font-extrabold -translate-y-1/2 text-white/2.5 pointer-events-none"
	>
		01
	</div>

	<!-- Floating ember particles -->

	<!-- Thin vertical red line accent -->
	<div
		aria-hidden="true"
		class="w-px top-0 left-4 bottom-0 absolute sm:left-6 md:left-10 lg:left-16 origin-top bg-red/30"
		style="animation: scale-y 1.2s cubic-bezier(0.16,1,0.3,1) 0.1s both;"
	></div>

	<div
		class="z-10 px-8 w-full sm:px-12 md:px-20 lg:px-28 xl:px-36 relative mx-auto max-w-7xl 2xl:max-w-352"
		style={`transform: translateY(${yOffset}px); opacity: ${opacity};`}
	>
		<div class="grid gap-12 items-end lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
			<!-- Text block -->
			<div>
				<!-- Eyebrow -->
				<div
					class="flex items-center gap-3 mb-6 md:mb-8"
					style="animation: fade-in-x 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both;"
				>
					<span class="w-1.5 h-1.5 bg-red rounded-full animate-pulse"></span>
					<span class="font-mono uppercase text-label text-white/40 tracking-[0.35em]">
						Software Engineer · Jakarta, ID
					</span>
				</div>

				<!-- Main heading -->
				<div class="overflow-hidden mb-4">
					<h1
						class="font-sans text-hero text-white font-extrabold leading-[0.88] tracking-tight lg:text-[clamp(4rem,7vw,7rem)]"
						style="animation: rise 1.1s cubic-bezier(0.16,1,0.3,1) 0.15s both;"
					>
						{name.out}
					</h1>
				</div>

				<!-- Subtitle row -->
				<div
					class="flex gap-8 mt-6 md:mt-10 flex-col md:flex-row md:items-end justify-between"
					style="animation: fade-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.9s both;"
				>
					<p
						class="max-w-sm font-sans text-prose font-light text-white/40 leading-relaxed lg:max-w-md"
					>
						I build production-grade systems — microservices, cross-platform apps, and the
						infrastructure that keeps them alive. Five years, zero compromises.
					</p>

					<div class="flex items-center gap-5 shrink-0">
						<a
							href="mailto:rdhanurzid@gmail.com"
							class="px-6 py-3 group bg-red text-tag relative font-sans font-bold uppercase text-white overflow-hidden tracking-widest transition-transform duration-150 hover:bg-red-hover active:scale-95"
						>
							Hire me
						</a>
						<a
							href="https://github.com/RZID"
							target="_blank"
							rel="noreferrer"
							class="pb-0.5 text-tag border-b font-mono uppercase text-white/35 tracking-widest transition-colors hover:text-white border-transparent hover:border-white/30"
						>
							GitHub ↗
						</a>
					</div>
				</div>

				<!-- Stats row -->
				<div
					class="flex pt-8 mt-10 gap-8 border-t md:pt-10 md:mt-14 sm:gap-10 lg:gap-16 border-white/[0.07]"
					style="animation: fade-in-y 0.7s cubic-bezier(0.16,1,0.3,1) 1.1s both;"
				>
					{#each [{ num: '5+', label: 'Years shipped' }, { num: '3', label: 'Active roles' }, { num: '∞', label: 'Stacks mastered' }] as stat}
						<div>
							<div
								class="text-2xl sm:text-3xl lg:text-4xl font-sans text-white leading-none font-extrabold"
							>
								{stat.num}
							</div>
							<div class="mt-1.5 uppercase font-mono text-label text-white/30 tracking-widest">
								{stat.label}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Live terminal -->
			<div class="w-full">
				<TerminalCard />
			</div>
		</div>
	</div>

	<!-- Scroll cue — hidden on mobile to reduce clutter -->
	<div
		aria-hidden="true"
		class="gap-2 hidden sm:flex flex-col absolute right-10 bottom-10 items-center"
		style="animation: fade-in 0.8s ease 1.6s both;"
	>
		<div
			class="w-px h-10 from-red/50 bg-linear-to-b to-transparent"
			style="animation: cue-bounce 1.6s ease-in-out infinite;"
		></div>
		<span
			class="mt-3 text-2xs font-mono uppercase rotate-90 origin-center text-white/20 tracking-[0.3em]"
		>
			Scroll
		</span>
	</div>
</section>
