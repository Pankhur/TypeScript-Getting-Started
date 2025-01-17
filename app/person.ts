import { Player } './interface'

export class Person implements Player {
	
	name: string;

	//optional
	age?:number;

	formatName() {
		return this.name.toUpperCase()
	}
}