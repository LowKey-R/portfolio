<script lang="ts">
	import Section from '../HomeSection.svelte';
	import NavigationButton from '../NavigationButton.svelte';
</script>

<style>
	video {
		width: inherit;
		box-shadow: 0px 4px 20px 1px rgba(0, 0, 0, 0.5);
	}
</style>

<Section title="Game Enthusiast" {...$$props}>
	<video playsinline autoplay muted loop slot="content">
		<source src="/mlbb.webm" type="video/webm" />
		<source src="/mlbb.mp4" type="video/mp4" />
	</video>
	<span slot="action">
		<NavigationButton href="/game" seoText="My Game Experience">more</NavigationButton>
	</span>
</Section>
