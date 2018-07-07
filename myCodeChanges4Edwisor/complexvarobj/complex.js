/**
 * 
 */

let actualPrice = 50000
let discountPercentage = 10 

let priceOfProduct = {
		actualPrice,
		discountPercentage,
		calculateFinalPrice(){
			return actualPrice - ((actualPrice*discountPercentage)/100)
		}
}

console.log(priceOfProduct)
console.log(priceOfProduct.calculateFinalPrice())