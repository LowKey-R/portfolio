import Me from './Me.svelte';
import Game from './Game.svelte';
import Freelance from './Freelance.svelte';
import Developer from './Developer.svelte';
import Contact from './Contact.svelte';

export type Section = {
	component: any;
	title: string;
	prefix?: string;
};

const sections: Section[] = [
	{ component: Me, title: 'About' },
	{ component: Developer, prefix: 'a', title: 'Experience' },
	{ component: Game, prefix: 'a', title: 'Game' },
	{ component: Freelance, prefix: 'a', title: 'Freelance' },
	{ component: Contact, title: 'Contact' }
];

export default sections;
