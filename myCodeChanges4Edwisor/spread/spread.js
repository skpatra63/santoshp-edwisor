/**
 * 
 */

let sum = (x,y,z) =>{
	
	console.log(x)
	console.log(y)
	console.log(z)
	return x+y+z
}

let numbers = [1,2,3]

//console.log(sum(...numbers))

let a = [56,89]
let b = [67,90,89]
let c =[...a,...b]
console.log(c)