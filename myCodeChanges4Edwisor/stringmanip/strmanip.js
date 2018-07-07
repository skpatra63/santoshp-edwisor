/**
 * string special functions
 */

var myString="This is a very big sentence and you can learn about it."
	
var indexOfBig = myString.indexOf("big")

var asubString = myString.slice(indexOfBig,indexOfBig+3)


var replacedString = myString.replace("big sentence","short sentence")

//alert(myString.toUpperCase())
//alert(myString.toLowerCase())

var anotherString=" Are you ready?"
	
//alert(myString.concat(anotherString))
	
var sentenceToarray = myString.split(" ")

alert(sentenceToarray)
alert(Array.isArray(sentenceToarray))