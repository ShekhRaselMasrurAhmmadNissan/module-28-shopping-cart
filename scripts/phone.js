// console.log('Connected')

const phonePlusBtn = document.getElementById(`btn-phone-plus`);
const phoneMinusBtn = document.getElementById(`btn-phone-minus`);
const phoneQuantityField = document.getElementById(`phone-quantity-field`);

phonePlusBtn.addEventListener('click', function (event) {
	const newPhoneQuantity = updateQuantity(`phone-quantity-field`, true);
	const phoneTotalPrice = updatePrice(
		`phone-total-price`,
		`single-phone-price`,
		newPhoneQuantity
	);
	const subTotal = updateSubTotal();
	const tax = calculateTax(subTotal);
	const totalCost = calculateTotalCost(subTotal, tax);
});

phoneMinusBtn.addEventListener('click', function (event) {
	const newPhoneQuantity = updateQuantity(`phone-quantity-field`, false);
	const phoneTotalPrice = updatePrice(
		`phone-total-price`,
		`single-phone-price`,
		newPhoneQuantity
	);
	const subTotal = updateSubTotal();
	const tax = calculateTax(subTotal);
	const totalCost = calculateTotalCost(subTotal, tax);
});
