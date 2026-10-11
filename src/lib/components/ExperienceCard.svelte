<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { inView } from '$lib/inView';
	import type { Experience } from '$lib/data';

	let {
		exp,
		index,
		isOpen,
		onToggle
	}: {
		exp: Experience;
		index: number;
		isOpen: boolean;
		onToggle: () => void;
	} = $props();

	let visible = $state(false);

	function expand(node: Element, { duration = 400 } = {}) {
		const h = node.scrollHeight;
		return {
			duration,
			easing: cubicOut,
			css: (t: number) => `height: ${t * h}px; opacity: ${t}; overflow: hidden;`
		};
	}
</script>

<div
	use:inView={{ margin: '-60px', onEnter: () => (visible = true) }}
	style={`opacity: ${visible ? 1 : 0}; transform: translateY(${visible ? 0 : 32}px); transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s;`}
>
	<button onclick={onToggle} class="w-full text-left group" aria-expanded={isOpen}>
		<div
			class="flex py-7 border-t items-start duration-300 justify-between transition-colors {isOpen
				? 'border-red/40'
				: 'border-white/[0.07] hover:border-white/15'}"
		>
			<div class="flex items-start gap-6">
				<!-- Index -->
				<span class="w-6 mt-1.5 shrink-0 font-mono text-label text-white/20">
					{String(index + 1).padStart(2, '0')}
				</span>
				<div>
					<h3
						class="text-lg md:text-xl font-sans font-bold leading-tight transition-colors {isOpen
							? 'text-white'
							: 'text-white/70 group-hover:text-white'}"
					>
						{exp.title}
					</h3>
					<p class="mt-1 text-tag font-mono text-red/80 tracking-wide">{exp.company}</p>
				</div>
			</div>

			<div class="ml-4 flex gap-4 mt-0.5 shrink-0 items-center">
				<span class="hidden md:block font-mono text-label tracking-wide text-white/25">
					{exp.period}
				</span>
				<span
					class="py-1 px-2.5 border uppercase font-mono text-label tracking-widest transition-colors {isOpen
						? 'border-red/40 text-red bg-red/10'
						: 'border-white/10 text-white/30'}"
				>
					{exp.tag}
				</span>
				<!-- Expand icon -->
				<span
					class="text-lg font-light leading-none text-white/30 transition-all duration-300 group-hover:text-white {isOpen
						? 'rotate-45'
						: 'rotate-0'}"
				>
					+
				</span>
			</div>
		</div>
	</button>

	{#if isOpen}
		<div transition:expand class="overflow-hidden">
			<ul class="pl-8 md:pl-12 pb-8 space-y-3">
				{#each exp.bullets as b}
					<li class="flex gap-3 text-body items-start text-white/40 leading-relaxed">
						<span class="mt-1 shrink-0 text-label text-red/60">◆</span>
						{b}
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
