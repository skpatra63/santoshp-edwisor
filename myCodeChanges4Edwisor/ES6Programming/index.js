/**
 * 1- Block Scope
 * 2- const keyword
 * 3- Arrow function
 * 4- Default Parameters
 */

//console.log(carPrice)
//let carPrice = 20000

//let x =1
//for(let x=0;x<10;x++)
//{
//	console.log(x)
//}
//console.log('x='+x)

//const test = 20
//
////test = 10
//console.log(test)

//let oldUser = true
//
//const discountPercentage = 10
//
//if(oldUser == true){
//	const discountPercentage = 20
//	console.log("oldUser discountPercentage ="+discountPercentage)
//}
//console.log("normal User discountPercentage ="+discountPercentage)



let multiply = (x=2,y=9) =>{
	console.log(x)
	console.log(y)
	return (x*y)
}

console.log(multiply())



