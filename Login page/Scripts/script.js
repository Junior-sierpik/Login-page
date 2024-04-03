function togglePasswordVisibility () {
  const passwordField = document.getElementById("passwordField");
  const toggleButton = document.getElementById("toggleButton");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    toggleButton.textContent = "Hide password";
  } else {
  passwordField.type = "password";
  toggleButton.textContent = "Show password";
  }
}

document.querySelector(".login-button").addEventListener("click", function(event){
  event.preventDefault();
  window.location.href = "/login-page.html"
})