const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-form-submit');
const loginErrorMsg = document.getElementById('login-error-msg');

// When the login button is clicked, the following code is executed
loginButton.addEventListener('click', (e) => {
  // Prevent the default submission of the form
  e.preventDefault();
  // Get the values input by the user in the form fields
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if ((username === 'kayi' && password === "25maret'21") || (username === 'dindy' && password === "25maret'21")) {
    // If the credentials are valid, show an alert box and reload the page
    alert('Yay, bisa masuk');
    location.replace('https://rakaiseto.github.io/welcome.html');
  } else {
    // Otherwise, make the login error message show (change its oppacity)
    alert('Salah passwordnya');
  }
});
