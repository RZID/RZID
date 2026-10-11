<script lang="ts">
	import PageTransition from '$lib/components/PageTransition.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import WorkSection from '$lib/components/WorkSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ProcessSection from '$lib/components/ProcessSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
</script>

<PageTransition>
	<HeroSection />
	<Marquee />
	<WorkSection />
	<ServicesSection />
	<ProcessSection />
	<AboutSection />
	<ContactSection />
</PageTransition>
