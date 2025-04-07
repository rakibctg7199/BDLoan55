function login() {
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const userData = JSON.parse(localStorage.getItem(phone));
  if (!userData || userData.password !== password) return alert("Invalid credentials");
  alert("Login successful!");
}
