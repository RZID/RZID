<script lang="ts">
	import { scrollY } from '$lib/scrollY';

	let progress = $state(0);

	$effect(() => {
		const update = () => {
			const doc = document.documentElement;
			progress = $scrollY / Math.max(1, doc.scrollHeight - window.innerHeight);
		};
		update();
		const unsub = scrollY.subscribe(update);
		window.addEventListener('resize', update);
		return () => {
			unsub();
			window.removeEventListener('resize', update);
		};
	});
</script>

<div aria-hidden="true" class="fixed top-0 right-0 left-0 z-40 h-0.5 bg-white/5">
	<div class="h-full w-full bg-red origin-left" style="transform: scaleX({progress});"></div>
</div>
