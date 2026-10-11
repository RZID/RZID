export interface InViewOptions {
	margin?: string;
	onEnter: () => void;
}

export function inView(node: Element, options: InViewOptions) {
	// ponytail: no IntersectionObserver (very old browser) → reveal now. Add a polyfill only if analytics show demand.
	if (typeof IntersectionObserver === 'undefined') {
		options.onEnter();
		return {};
	}
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					options.onEnter();
					observer.disconnect();
				}
			}
		},
		{ rootMargin: options.margin }
	);
	observer.observe(node);
	return {
		destroy() {
			observer.disconnect();
		}
	};
}
