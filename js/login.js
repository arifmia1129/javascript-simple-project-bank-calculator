document.getElementById("log-in-button").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("password");
    const userPassword = passwordField.value;

    if (userEmail == "vtti@gmail.com" && userPassword == "password") {
        window.location.href = "banking.html";
    }
    else {
        document.getElementById("hidden-text").style.display = "block";
    }

})