<script lang="ts">
	import { inView } from '$lib/inView';
	import { CONTACT_LINKS } from '$lib/data';

	let visible = $state(false);
</script>

<section id="contact" aria-label="Contact" class="py-16 sm:py-24 lg:py-32 min-h-screen bg-bg">
	<div class="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 2xl:max-w-6xl">
		<div
			use:inView={{ margin: '0px', onEnter: () => (visible = true) }}
			class="mb-12 md:mb-20"
			style={`opacity: ${visible ? 1 : 0}; transition: opacity 0.8s ease;`}
		>
			<span class="font-mono uppercase text-label text-red/70 tracking-[0.4em]">04 / Connect</span>
			<!-- Big CTA heading -->
			<h2 class="mt-3 text-cta font-sans text-white leading-[0.9] font-extrabold">
				Let's build
				<br />
				<span class="text-white/20">something.</span>
			</h2>
			<p class="mt-8 max-w-sm font-sans text-prose text-white/35 leading-relaxed">
				Open to full-time roles, consulting, and interesting problems. I respond within 24 hours.
			</p>
		</div>

		<!-- Contact rows -->
		<div class="border-t border-white/[0.07]">
			{#each CONTACT_LINKS as link, i}
				<a
					href={link.href}
					target={link.href.startsWith('http') ? '_blank' : undefined}
					rel="noreferrer"
					class="py-5 flex group border-b duration-200 items-center justify-between transition-all border-white/[0.07] hover:border-white/15"
					style={`opacity: ${visible ? 1 : 0}; transform: translateX(${visible ? 0 : -16}px); transition: opacity 0.5s ease ${i * 0.09 + 0.3}s, transform 0.5s ease ${i * 0.09 + 0.3}s;`}
				>
					<span class="w-28 uppercase font-mono text-label text-white/20 tracking-[0.3em]">
						{link.label}
					</span>
					<span
						class="flex-1 text-sm font-sans text-center text-white/45 transition-colors group-hover:text-white"
					>
						{link.value}
					</span>
					<span class="text-tag font-mono text-red/0 transition-colors group-hover:text-red">↗</span>
				</a>
			{/each}
		</div>
	</div>
</section>
