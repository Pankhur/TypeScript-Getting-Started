export interface Result {
	Playername: string;
	score: number;
	trophy: string;
}

export interface Player {
	name: string;
	formatName: () => string;
}