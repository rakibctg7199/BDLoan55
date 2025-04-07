function register() {
  const username = document.getElementById('username').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  if (!/\d/.test(username)) return alert("Username must contain a digit");
  if (!/^\d{11}$/.test(phone)) return alert("Phone must be 11 digits");
  if (!/^\d{6}$/.test(password)) return alert("Password must be 6 digits");
  if (localStorage.getItem(phone)) return alert("Phone already registered");
  localStorage.setItem(phone, JSON.stringify({ username, password }));
  alert("Registration successful!");
}
