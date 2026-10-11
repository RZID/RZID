// Theme: system default, manual toggle, persisted. Applied as data-theme on <html>
// (app.html sets it pre-paint to avoid a flash; this module owns runtime toggles).
export type Theme = 'light' | 'dark';

function initial(): Theme {
	if (typeof window === 'undefined') return 'dark';
	const saved = localStorage.getItem('theme');
	if (saved === 'light' || saved === 'dark') return saved;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const themeState = $state<{ current: Theme }>({ current: 'dark' });

function apply() {
	document.documentElement.dataset.theme = themeState.current;
	document
		.querySelector('meta[name="theme-color"]')
		?.setAttribute('content', themeState.current === 'dark' ? '#0c0c0c' : '#fafaf8');
}

export function initTheme() {
	themeState.current = initial();
	apply();
}

export function toggleTheme() {
	themeState.current = themeState.current === 'dark' ? 'light' : 'dark';
	localStorage.setItem('theme', themeState.current);
	apply();
}
