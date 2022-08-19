function getValueOfElementField(elementFieldID) {
	const elementField = document.getElementById(elementFieldID);
	const elementFieldValueString = elementField.innerText;
	const elementFieldValueNumber = parseFloat(elementFieldValueString);
	return elementFieldValueNumber;
}

function setTextElementByID(elementID, elementValue) {
	const element = document.getElementById(elementID);
	element.innerText = elementValue;
}

function updateSubTotal() {
	let subTotal = 0;
	let prices = document.getElementsByClassName('price');
	for (const price of prices) {
		let productTotalPriceString = price.innerText;
		let productTotalPriceNumber = parseFloat(productTotalPriceString);
		subTotal += productTotalPriceNumber;
	}
	subTotal = parseFloat(subTotal.toFixed(2));
	setTextElementByID(`sub-total`, subTotal);
	return subTotal;
}
function calculateTax(subTotal) {
	let tax = subTotal * 0.1;
	tax = parseFloat(tax.toFixed(2));
	setTextElementByID(`tax`, tax);
	return tax;
}
function calculateTotalCost(subTotal, tax) {
	let totalCost = subTotal + tax;
	totalCost = parseFloat(totalCost.toFixed(2));
	setTextElementByID(`total`, totalCost);
	return totalCost;
}
function updateQuantity(inputFieldID, isIncreasing) {
	const inputField = document.getElementById(inputFieldID);
	let inputFieldValueString = inputField.value;
	let inputFieldNumber = parseInt(inputFieldValueString);
	if (isIncreasing) {
		inputFieldNumber++;
	} else {
		inputFieldNumber--;
	}

	if (inputFieldNumber < 0) {
		inputFieldNumber = 0;
	}
	inputField.value = inputFieldNumber;
	return inputFieldNumber;
}

function updatePrice(priceElementID, unitPriceFieldID, quantity) {
	const unitPriceField = document.getElementById(unitPriceFieldID);
	const unitPriceString = unitPriceField.innerText;
	let unitPriceNumber = parseFloat(unitPriceString);

	let total = parseFloat((unitPriceNumber * quantity).toFixed(2));
	setTextElementByID(priceElementID, total);
	return total;
}
