/**
 * 
 */

//login functionality

var users = [
	{
		'email':'santoshkumarpatra@gmail.com',
		'password':'santosh63',
		'firstName':'Santosh',
		'lastName':'Patra',
		'mobileNumber':9742577187,
		'isverified':true,
		'isPaid':false
	},
	{
		'email':'rashmitasahu555@gmail.com',
		'password':'truptyashokdada',
		'firstName':'Rashmita',
		'lastName':'Sahu',
		'mobileNumber':8147250589,
		'isverified':true,
		'isPaid':true
	},
	{
		'email':'nikhilagarwal@efi.com',
		'password':'testpassword',
		'firstName':'Nikhil',
		'lastName':'Agarwal',
		'mobileNumber':9742577187,
		'isverified':true,
		'isPaid':true
	},
]


var checkLogin = function(email,password,allUsers){
	
	var isUserFound = false
	var passwordProtect = false
	
	for(currentUser in allUsers){
		
		console.log(currentUser)
		
		if(allUsers[currentUser]['email'] == email){
			if(allUsers[currentUser]['password'] == password){
				isUserFound = true
				passwordProtect = true
				break
			}
			else{
				isUserFound = true
				passwordProtect = false
				break				
			}
		}
		else{
			isUserFound = false
		}			
	}
	
	if(isUserFound == true && passwordProtect == true)
	{
		alert("You are logged in.")
	}
	else if(isUserFound == true && passwordProtect == false)
	{
		alert("Please Provide the Correct Password")
	}
	else
	{
		alert("No user with this email found")	
	}
}


var email = prompt("Please enter the email")
var password = prompt("Please enter the password")
checkLogin(email,password,users)


