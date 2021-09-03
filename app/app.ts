function startGame() {

	var message = document.getElementById('messages')
	message!.innerText = " Hello Typescript"				//exclamation is aded to check if null


	
	let showName: string = "Pankhur"						//strict type declaration to prevent other type 
	logName(showName)



    test();													//Default initialised parameter, function can be called with or without param
    test("hi");

    let receipt: number | string							//Union operator for variable declaration with multiple type
    receipt = 1
    receipt = "order1"
   // receipt = true 											//this will give compilation error as boolean can't be assign to receipt variable

	}

	function logName(name) {
	console.log(`Name of the person : ${name}`)

 	let value: any = 5
	let myname: string = (<number>value).toFixed(4)
	console.log("my name " + myname)

	}

	function test(value:string = "TEEST") {					//Type annotation "value:string" to function
		console.log(`Default value: ${value}`)
	}
