function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
  
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("password-error").innerHTML = "";
    document.getElementById("password2-error").innerHTML = "";
  
    let isValid = true;
  
    if (username === "") {
      document.getElementById("name-error").innerHTML = "Username is required*";
      isValid = false;
    }
  
    if (email === "") {
      document.getElementById("email-error").innerHTML = "Email is reequired*";
      isValid = false;
    }
  
    if (password === "") {
      document.getElementById("password-error").innerHTML = "Password is required*";
      isValid = false;
    }
  
    if (password !== password2) {
      document.getElementById("password2-error").innerHTML = "Passwords do not match";
      isValid = false;
    }
  
    return isValid;
  }