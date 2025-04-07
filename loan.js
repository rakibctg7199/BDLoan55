let selectedAmount = 0;
function selectLoan(amount) {
  selectedAmount = amount;
  document.getElementById('loanAmount').innerText = "Selected Loan: ৳" + amount;
}
function setDuration(months) {
  const total = selectedAmount + (selectedAmount * 0.02 * months);
  document.getElementById('totalPayable').innerText = "মোট পরিশোধযোগ্য: ৳" + total.toFixed(2);
}
function showDepositForm() {
  if (selectedAmount === 0) return alert("Please select a loan amount");
  document.getElementById('depositForm').style.display = 'block';
}
