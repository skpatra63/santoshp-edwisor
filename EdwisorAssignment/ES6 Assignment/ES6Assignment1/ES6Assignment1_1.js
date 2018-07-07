/**
 * 
 */

let allUsers = 
[	
	{	"email":"test@gmail.com",
		"password":"test"
	},
	{   
		"email":"admin@gmail.com",
		"password":"admin"
	}
]


let checkLogin = (allUsers,email="test@gmail.com",password="test") => {
	
	let isUserFound =false
	let passwordCorrect = false
	
	console.log(allUsers)

	
	for(currentUser of allUsers){
		
		console.log(currentUser)
				
		if(currentUser['email'] == email)
		{
			if(currentUser['password'] == password)
			{
				isUserFound =     true
				passwordCorrect = true
				break
			}
			else
			{
				isUserFound =     true
				passwordCorrect = false
				break
			}
		}
		else
			isUserFound =false
							
	}//end of for loop	
	
	
	if(isUserFound == true && passwordCorrect == true)
		alert('You are logged in')
	else if(isUserFound == true && passwordCorrect == false)
		alert('You have provided incorrect password')
	else
		alert('No User with this email id found')
}

checkLogin(allUsers)
