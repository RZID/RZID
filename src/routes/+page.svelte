<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import ExperienceSection from '$lib/components/ExperienceSection.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<PageTransition>
	<HeroSection />
	<Marquee />
	<ExperienceSection />
	<SkillsSection />
	<ContactSection />
</PageTransition>
