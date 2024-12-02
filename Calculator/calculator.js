// Event listener for the bill calculation form
document.getElementById('bill-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form
  const itemPrice = parseFloat(document.getElementById('item-price').value);
  const quantity = parseInt(document.getElementById('quantity').value);
  const age = parseInt(document.getElementById('age').value);

  // Calculate the total price
  let totalPrice = itemPrice * quantity;

  // Check if the customer is eligible for a discount
  if (age > 60) {
      const discount = totalPrice * 0.10; // 10% discount for elderly customers
      totalPrice -= discount; // Apply the discount
  }

  // Display the result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Total Bill: OMR ${totalPrice.toFixed(2)}`;
});