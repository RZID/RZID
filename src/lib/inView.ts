export interface InViewOptions {
	margin?: string;
	onEnter: () => void;
}

export function inView(node: Element, options: InViewOptions) {
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
