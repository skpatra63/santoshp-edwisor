/**
 * 
 */

var generateEmail = (name,message) => {
	
	var emailMessage = "Hi "+name+"\n"+"This message is for you."+message+"\n"+"Thanks "+name+"\n"
	return emailMessage
}

var welcomeEmail = generateEmail("Santosh","Welcome to the edwisor.com")

alert(welcomeEmail)