<script lang="ts">
	const SCRIPT = [
		{ cmd: 'whoami', out: 'ramadhanu — full stack software engineer' },
		{ cmd: 'cat ./location', out: 'jakarta barat, id — based in jakarta' },
		{ cmd: 'cat ./experience --years', out: '5+ years · microservices · mobile · infra' },
		{ cmd: 'npm run deploy', out: '● online — open for full-time & consulting' }
	] as const;

	let lines = $state<{ cmd: string; out: string }[]>([]);
	let current = $state('');

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			lines = [...SCRIPT];
			return;
		}

		let idx = 0;
		let timers: ReturnType<typeof setTimeout>[] = [];
		const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
		let cancelled = false;

		const type = () => {
			if (cancelled) return;
			const line = SCRIPT[idx];
			let i = 0;
			const step = () => {
				if (cancelled) return;
				if (i <= line.cmd.length) {
					current = line.cmd.slice(0, i);
					i += 1;
					later(step, 26 + Math.random() * 42);
				} else {
					lines = [...lines, line];
					idx += 1;
					current = '';
					later(() => {
						if (idx >= SCRIPT.length) {
							// Hold the full output on screen, then reset from the top
							later(() => {
								lines = [];
								idx = 0;
								later(type, 700);
							}, 5000);
						} else {
							later(type, 700);
						}
					}, 420);
				}
			};
			step();
		};

		later(type, 800);
		return () => {
			cancelled = true;
			timers.forEach(clearTimeout);
		};
	});
</script>

<div
	class="border rounded-xl bg-surface/80 border-white/8 backdrop-blur-sm shadow-[0_24px_64px_-24px_rgba(0,0,0,0.8)]"
	style="animation: rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.7s both;"
>
	<!-- Window chrome -->
	<div class="flex items-center gap-2 px-4 py-3 border-b border-white/6">
		<span class="w-2.5 h-2.5 rounded-full bg-red/70"></span>
		<span class="w-2.5 h-2.5 rounded-full bg-white/15"></span>
		<span class="w-2.5 h-2.5 rounded-full bg-white/15"></span>
		<span class="ml-3 font-mono text-2xs uppercase text-white/25 tracking-[0.25em]">
			ramadhanu@rzidinc
		</span>
	</div>

	<!-- Terminal body (decorative typing — hidden from screen readers) -->
	<div class="px-4 py-4 font-mono text-body leading-relaxed min-h-44" aria-hidden="true">
		{#each lines as l}
			<div class="text-white/90">
				<span class="text-red/80 select-none">$</span>
				{l.cmd}
			</div>
			<div class="mb-2 text-white/45">{l.out}</div>
		{/each}

		{#if current}
			<div class="text-white/90">
				<span class="text-red/80 select-none">$</span>
				{current}
				<span class="terminal-cursor text-red" aria-hidden="true">▮</span>
			</div>
		{:else if !lines.length}
			<div class="text-white/90">
				<span class="text-red/80 select-none">$</span>
				<span class="terminal-cursor text-red" aria-hidden="true">▮</span>
			</div>
		{/if}
	</div>
</div>
