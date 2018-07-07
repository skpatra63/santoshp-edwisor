
let generateEmail = (firstName,lastName,message) => {
	
	let emailMessage = `Hi ${firstName+" "+lastName}\n 
						This is the message that we have for you\n
						${message}\n
						copyright @edwisor 2018`
	return emailMessage
}

console.log(generateEmail("Santosh","Patra","Welcome to edwisor"))