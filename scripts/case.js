// console.log('Connected')

const casePlusBtn = document.getElementById(`btn-case-plus`);
const caseMinusBtn = document.getElementById(`btn-case-minus`);
const caseQuantityField = document.getElementById(`case-quantity-field`);

casePlusBtn.addEventListener('click', function (event) {
	const newCaseQuantity = updateQuantity(`case-quantity-field`, true);
	const caseTotalPrice = updatePrice(
		`case-total-price`,
		`single-case-price`,
		newCaseQuantity
	);
	const subTotal = updateSubTotal();
	const tax = calculateTax(subTotal);
	const totalCost = calculateTotalCost(subTotal, tax);
});

caseMinusBtn.addEventListener('click', function (event) {
	const newCaseQuantity = updateQuantity(`case-quantity-field`, false);
	const caseTotalPrice = updatePrice(
		`case-total-price`,
		`single-case-price`,
		newCaseQuantity
	);
	const subTotal = updateSubTotal();
	const tax = calculateTax(subTotal);
	const totalCost = calculateTotalCost(subTotal, tax);
});
