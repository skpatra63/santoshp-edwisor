/**
 * 
 */

let customers = [{
	'cutomerId':'123',
	'signedUpdate':'02-01-2018'
	},
	{
	'cutomerId':'456',
	'signedUpdate':'03-03-2018'
	}
]

for(customer of customers){
	for(index in customer)
		console.log(customer[index])
}