

function startGame() {

	var message = document.getElementById('messages')
	message!.innerText = " Hello Typescript"				//exclamation is aded to check if null


	
	let showName: string | undefined = getInput('playername')						//strict type declaration to prevent other type 
	logName(showName)



	//Optional
    test();													//Default initialised parameter, function can be called with or without param
    test("hi");

    //Union 
    let receipt: number | string							//Union operator for variable declaration with multiple type
    receipt = 1
    receipt = "order1"
   // receipt = true 											//this will give compilation error as boolean can't be assign to receipt variable


   	//Type annotation function
    postScore(2,showName)
    postScore(-5,showName)

    //Arrow function

    let arrow = x => x * x

    let result = arrow(4)
    console.log(`Result - ${result}`)

    let sumf = (a,b) => a + b
    sumf(2,3)

    let anonymous = () => console.log("anonymous")
    anonymous()

    test_arrow()
    test_arrow("hi")

    filterFunc()

	}

	function logName(name:string = "Default name") {
	console.log(`Name of the person : ${name}`)

 	let value: any = 5
	let myname: string = (<number>value).toFixed(4)
	console.log("my name " + myname)

	}

	function test(value:string = "TEEST") {					//Type annotation "value:string" to function
		console.log(`Default value: ${value}`)
	}

    //  Function name = (param) => return statement
    let test_arrow = (value?: string): void => console.log(`Arrow function returns: ${value}`)


	function getInput(elementID: string): string | undefined {												//Type annotation to function parameter example
		const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

		if (inputElement.value == '') {
			return undefined
		} else {
			return inputElement.value
		}
	}

	function postScore(score: number, name?: string): void {


		if (score < 0) {
			console.error(`Score: ${score}`)
		} 

		const element: HTMLElement | null = document.getElementById('postedScores')				//Type annotation to function parameter example
		element.innerText = `${score}  - ${name}`

		
	}

	function filterFunc(): void {

		let orginal_arr: number[] = [2,10,5,6]
		let high_arr: number[]

		//filter function takes 3 param (elements of original array, index and complete original array)
		high_arr = orginal_arr.filter((element,index,array) => {
			if (element > 5) {
				console.log(true)
			} else {
				console.log(false)
			}
		})

	}


	//Implementing  interfaces with object litreals
// 	let result: Result = {
// 		Playername: "Kohli",
// 		score: 100,
// 		trophy: "no"
// 	}

// 	let player: Player = {
// 		name: "Kohli",
// 		formatName: () => "Player name: ${name}"
// 	}
	

// //Implementing class
// let class_object: Person = new Person();
// class_object.name = 'elon musk'
// console.log("Class result: " + class_object.formatName())
