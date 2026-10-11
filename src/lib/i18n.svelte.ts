// i18n: EN default, ID when the browser says so, manual toggle, persisted.
// Stored under 'rzid-lang' so the choice survives visits instead of re-detecting.
export type Lang = 'en' | 'id';

const KEY = 'rzid-lang';

export const langState = $state<{ current: Lang }>({ current: 'en' });

function detect(): Lang {
	if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('id'))
		return 'id';
	return 'en';
}

export function initLang() {
	let l: Lang = 'en';
	try {
		const saved = localStorage.getItem(KEY);
		l = saved === 'en' || saved === 'id' ? saved : detect();
	} catch {
		l = detect();
	}
	langState.current = l;
	document.documentElement.lang = l === 'id' ? 'id' : 'en';
}

export function setLang(l: Lang) {
	langState.current = l;
	try {
		localStorage.setItem(KEY, l);
	} catch {
		// ponytail: private-mode storage failure keeps the in-memory choice. No fallback UI needed.
	}
	document.documentElement.lang = l === 'id' ? 'id' : 'en';
}
