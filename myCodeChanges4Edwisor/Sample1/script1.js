

var itemPurchased = window.prompt("Please tell us the number of items purchased")

if(itemPurchased > 3){
	alert("You have a Promo Code")
}
else if(itemPurchased == 3){
	alert("Purchase One more item and You will get a Promo Code")
}
else{
	alert("You are not eligible for Promo Code !!!")
}