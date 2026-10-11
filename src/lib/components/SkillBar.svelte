<script lang="ts">
	import { inView } from '$lib/inView';
	import type { Skill } from '$lib/data';

	let { skill, index }: { skill: Skill; index: number } = $props();

	let visible = $state(false);
</script>

<div
	use:inView={{ margin: '-30px', onEnter: () => (visible = true) }}
	class="group flex items-center gap-5"
>
	<span class="w-5 shrink-0 font-mono text-label text-white/20">
		{String(index + 1).padStart(2, '0')}
	</span>
	<div class="flex-1 flex items-center gap-4">
		<span
			class="w-28 sm:w-36 md:w-44 lg:w-52 text-sm shrink-0 font-sans text-white/55 transition-colors group-hover:text-white"
		>
			{skill.label}
		</span>
		<div class="h-px flex-1 relative bg-white/6 overflow-hidden">
			<div
				class="absolute inset-y-0 left-0 bg-red"
				style="height: 1px; width: {visible
					? skill.level
					: 0}%; transition: width 1.4s cubic-bezier(0.16,1,0.3,1) {index * 0.06 + 0.15}s;"
			></div>
		</div>
		<span class="w-8 shrink-0 font-mono text-label text-right text-white/20">
			{skill.level}
		</span>
	</div>
</div>
