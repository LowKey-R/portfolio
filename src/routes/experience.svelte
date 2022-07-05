<script context="module">
	export const prerender = true;
</script>

<script>
	import PageSection from 'components/PageSection.svelte';
	import Pill from 'components/Pill.svelte';

	const languages = [
		'Javascript',
		'Typescript',
		'Python',
		'PHP',
		'Java',
		'C/C++',
		'SQL',
		'NoSQL',
		'Dart'
	];
	const libs = [
		['React', 'https://reactjs.org/'],
		['Node.js', 'https://nodejs.org/en/'],
		['Svelte', 'https://svelte.dev/'],
		['Flutter', 'https://flutter.dev/'],
		['And so many more...', undefined]
	];
	const tools = [
		['Git', 'https://git-scm.com/'],
		['NPM', 'https://www.npmjs.com/'],
		['Yarn', 'https://classic.yarnpkg.com/en/'],
		['Figma', 'https://www.figma.com/'],
		['Vercel', 'https://vercel.com/'],
		['After Photoshop', 'https://www.adobe.com/products/photoshop.html'],
		['MacOs', undefined],
		['Windows', undefined],
		['Linux', undefined]
	];
</script>

<style>
	h1 {
		font-size: 3rem;
		font-weight: 500;
	}

	p {
		font-weight: 300;
		font-size: 1rem;
	}

	hr {
		border-top: none;
		border-color: #aaa;
		max-width: 30rem;
		text-align: left;
		margin-left: 0;
		margin-bottom: 2rem;
	}
</style>

<svelte:head>
	<title>Experience</title>
	<meta name="description" content="Rifky Abdul Hanan's developer experience / resume" />
</svelte:head>

<h1>Experience</h1>

<PageSection
	heading="PT. Jerbee Indonesia"
	subHeading="Internship"
	detail="End of June 2018 — September 2018"
>
	<p>
		Due to the need to fulfill the assessment from the school, I did an internship for 3 months at PT. Jerbee Indonesia.
		As a platform engineer my main responsibilities consist of building out tools and architecture
		to optimize and support the workflow of teams across our core SAAS applications.
	</p>
	<p>
		From here I began to explore and learn more about programming because this is also my first experience in practical work.
	</p>
	<p><b>Technologies</b>: SQL · Flutter · HTML</p>
</PageSection>
<PageSection
	heading="Lontarlab"
	subHeading="Junior Programmer"
	detail="April 2019 — July 2020"
>
	<p>
	Started working as a Junior Programmer which at that time I started looking for new work experience in a team at Lontarlab.
	</p>
	<p>
		Focusing more on the front-end engineer designing the front view of a mobile application.
	</p>
	<p><b>Technologies</b>: Git · Firebase · Cloud Firestore · Google Cloud Platform (GCP) · Flutter · Trello</p>
</PageSection>
<PageSection
	subHeading="Senior Programmer"
	detail="July 2020 — June 2022"
>
	<p>
		Full stack developer on several large scale customer facing applications with a focus on
		creating easy to use and intuitive experiences to reduce user frustration and call volume.
	</p>
	<p>
		My work involved multiple different technologies including: javascript, node, flutter, gcp,
		firestore, cloud function, and trello for Project Management.
	</p>
	<p><b>Technologies</b>: GitHub · Python · React.js · React.ts · Git · Firebase · Cloud Firestore · Google Cloud Platform (GCP) · SQL · Flutter · Trello · Java</p>
</PageSection>
<PageSection
	subHeading="UI/UX Designer"
	detail="July 2020 — June 2022"
>
	<p>
		Appointed and mandated more as a developer of UI/UX innovation in Thawaf products at Lontarlab
	</p>
	<p><b>Technologies</b>: Mobile Design · Figma · Adobe Photoshop</p>
</PageSection>
<PageSection
	subHeading="Head of Application Development"
	detail="July 2020 — Present"
>
	<p>
		Being Head of Application Development for Thawaf Application in Lontarlab
	</p>
	<p><b>Skills</b>: Software Project Management · Scrum · Software Development</p>
</PageSection>

<hr />

<h1>Skills</h1>
<PageSection heading="Languages">
	{#each languages as text}
		<Pill {text} />
	{/each}
</PageSection>
<PageSection heading="Frameworks/Libraries">
	{#each libs as l}
		<Pill text={l[0]} href={l[1]} />
	{/each}
</PageSection>
<PageSection heading="Tool/Applications">
	{#each tools as t}
		<Pill text={t[0]} href={t[1]} />
	{/each}
</PageSection>

<hr />

<h1>Education</h1>

<PageSection
	heading="Sekolah Tinggi Teknologi"
	subHeading="Bachelor's in Software Engineering"
	detail="Kota Bandung"
/>
<PageSection
	heading="SMK Negeri 2 Kota Sukabumi"
	subHeading="High School"
	detail="Kota Sukabumi"
/>
<PageSection
	heading="SMP Negeri 8 Kota Sukabumi"
	subHeading="Junior High School"
	detail="Kota Sukabumi"
/>
<PageSection
	heading="SD Negeri Lamping 3"
	subHeading="Elementary School"
	detail="Kota Sukabumi"
/>

