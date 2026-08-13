import { readable } from 'svelte/store';

export const scrollY = readable(0, (set) => {
	if (typeof window === 'undefined') return;
	const onScroll = () => set(window.scrollY);
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
	return () => window.removeEventListener('scroll', onScroll);
});
