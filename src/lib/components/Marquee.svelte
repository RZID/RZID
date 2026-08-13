<script lang="ts">
	import { SKILL_TAGS } from '$lib/data';
</script>

<div aria-hidden="true" class="marquee overflow-hidden border-y bg-bg border-white/6">
	<div class="marquee-track flex w-max items-center gap-10 whitespace-nowrap py-3">
		{#each [...SKILL_TAGS, ...SKILL_TAGS] as tag}
			<span class="flex items-center gap-10 font-mono text-label uppercase text-white/25 tracking-[0.3em]">
				{tag}
				<span class="text-red/60">◆</span>
			</span>
		{/each}
	</div>
</div>
