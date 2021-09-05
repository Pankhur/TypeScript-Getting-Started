interface Result {
	Playername: string;
	score: number;
	trophy: string;
}

interface Player {
	name: string;
	formatName: () => string;
}