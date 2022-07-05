export type Project = {
	title: string;
	description: string;
	link: string;
	key: string;
	github?: string;
	tools: [string, string | undefined][];
	novideo?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Rakkigusu Rarity',
		key: 'rakkigusu',
		link: 'https://rarity.rakkigusu.app/',
		description: `
    Rarity Website for <em><b>Rakkigusu NFT</b></em>.
    <br/>
    <br/>
    One of feature in Rakkigusu NFT Website.
    <br/>
    Worked remotely with an Organization named Abstract Labs.
    `,
		tools: [
			['Typescript', 'https://www.typescriptlang.org/'],
			['React', 'https://reactjs.org/'],
			['Near', 'https://near.org/'],
			['Vercel', 'https://vercel.com']
		]
	}
];

// map each project key to it's index
export const projectMap: Record<string, number> = projects.reduce(
	(map, project, i) => ({ ...map, [project.key]: i }),
	{}
);
