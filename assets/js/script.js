let amount = 0;
let i = 0;
function addMedicine() {
  const medicineName = document.querySelector("#medicineName").value;
  const quantity = parseInt(document.querySelector("#quantity").value);
  const price = parseFloat(document.querySelector("#price").value);
  if (medicineName === "") {
    alert("Please enter a valid medicine name.");
    return;
  }

  if (!quantity || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  } else if (!price || price <= 0) {
    alert("Please enter a valid price.");
    return;
  }

  const totalPrice = quantity * price;
  amount += totalPrice;

  const table = document.querySelector("#medicineList");
  const row = document.createElement("tr");
  i += 1;
  row.innerHTML = `
    <td>${i}</td>
    <td>${medicineName}</td>
    <td>${quantity}</td>
    <td>₹${price.toFixed(2)}</td>
    <td>₹${totalPrice.toFixed(2)}</td>
    <td><button onclick="removeMedicine(this, ${totalPrice})">Remove</button></td>
  `;
  table.appendChild(row);
  updateTotals();
  // reset input fields
  document.querySelector("#medicineName").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#price").value = "";
}

function updateTotals() {
  const taxRate = 0.02;
  const tax = amount * taxRate;
  const totalAmount = amount + tax;
  document.querySelector("#amount").innerText = amount.toFixed(2);
  document.querySelector("#tax").innerText = tax.toFixed(2);
  document.querySelector("#totalamt").innerText = totalAmount.toFixed(2);
}

function removeMedicine(button, price) {
  const row = button.parentElement.parentElement;
  row.remove();
  amount -= price;
  i -= 1;
  updateTotals();
}
