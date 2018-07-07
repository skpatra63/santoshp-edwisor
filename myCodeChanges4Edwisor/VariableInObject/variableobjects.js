/**
 * 
 */

let firstName = "Aditya"
let lastName = "Kumar"
	
let namePerson = {
		firstName,
		lastName,
		printFullName(){
			return firstName+" "+lastName
		}
}

console.log(namePerson.printFullName())