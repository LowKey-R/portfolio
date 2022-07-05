export type Video = {
	title: string;
	description: string;
	videoId: number;
	key: string;
};

export const videos: Video[] = [
	{
		title: 'Mobile Legends: Bang Bang',
		key: 'mlbb',
		videoId: 726938372,
		description: `
		A Montage video of Fanny Hero in Mobile Legends: Bang Bang.
      <br>
    `
	},
];

// map each project key to it's index
export const videoMap: Record<string, number> = videos.reduce(
	(map, project, i) => ({ ...map, [project.key]: i }),
	{}
);
