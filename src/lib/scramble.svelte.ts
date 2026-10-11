const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%';

export function createScramble(text: string) {
	let out = $state(text);
	let timer: ReturnType<typeof setInterval> | null = null;

	function stop() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	function start() {
		if (timer) return;
		let i = 0;
		timer = setInterval(() => {
			out = text
				.split('')
				.map((ch, idx) => {
					if (ch === ' ') return ' ';
					if (idx < i) return text[idx];
					return CHARS[Math.floor(Math.random() * CHARS.length)];
				})
				.join('');
			if (i >= text.length) {
				stop();
			}
			i += 0.6;
		}, 28);
	}

	return {
		get out() {
			return out;
		},
		start,
		stop
	};
}
