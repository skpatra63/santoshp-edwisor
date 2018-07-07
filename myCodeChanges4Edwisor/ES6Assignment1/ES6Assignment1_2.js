/**
 * 
 */

let bubble_sort = (...a) => {

	let swap
	let n = a.length-1	
	let x = a
	
	do
	{
		swap = false
		
		for(let i=0;i<n;i++)
		{
			if(x[i] < x[i+1])
			{
				const temp = x[i]
				x[i] = x[i+1]
				x[i+1] = temp
				swap = true
			}
		}	
		n--
	}
	while(swap);
	
	return x
}

let a = 8
let b = 2
let c = 5
let d = 78

let array = bubble_sort(a,b,c,d)
console.log(array)