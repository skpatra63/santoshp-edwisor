/**
 * 
 */

let allUserAddress = []

let storeUserAddres = (userId,...addressToStore) => {
	
	console.log(userId)
	console.log(addressToStore)

	allUserAddress.push({userId:userId,userAddress:addressToStore})
	console.log(allUserAddress)
}

let firstAddress = {
		"streetAddress":"some streetAddress",
		"city":"New Delhi",
		"state":"Delhi",
		"pincode":"214066",
		"country":"India"
}
let secondAddress = {
		"streetAddress":"some other streetAddress",
		"city":"Mumbai",
		"state":"Maharastra",
		"pincode":"560066",
		"country":"India"
}
storeUserAddres("SantoshKumarPatra63",firstAddress,secondAddress)