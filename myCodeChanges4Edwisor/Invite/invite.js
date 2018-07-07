/**
 * 
 */

let allPeopleWantedToInvite = []

let pushToPartyList = (...people) => {
	
	let newPeopleArray = people
	
	allPeopleWantedToInvite = allPeopleWantedToInvite.concat(newPeopleArray)
	console.log(allPeopleWantedToInvite)
	return allPeopleWantedToInvite
}

pushToPartyList("Santosh","Rashmita","Saransh")
pushToPartyList("Jyoti","Ashok","Trupti")