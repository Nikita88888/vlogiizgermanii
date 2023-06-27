passwordInput = document.getElementById("PasswordInput");
passwordBtn = document.getElementById("PasswordBtn");

passwordBtn.onclick = function () {
    if (passwordInput.value == "") {
        passwordInput.style.border = "2px solid #9d0208";
        passwordInput.style.background = "#d00000";
        passwordInput.placeholder = "Das Eingabefeld ist Leer";
    }
    else if (passwordInput.value != "28062022") {
        passwordInput.style.border = "2px solid #9d0208";
        passwordInput.style.background = "#d00000";
        passwordInput.placeholder = "Das Passwort ist falsch";
        passwordInput.value = "";
    }
    else if (passwordInput.value == "28062022") {
        passwordInput.style.border = "2px solid #70e000";
        passwordInput.style.background = "#38b000";
        passwordInput.placeholder = "Das Passwort ist richtig";
        passwordInput.value = "";
        window.location.href = "Home/index.html";
    }
};

passwordInput.addEventListener('input', function(event) {
    passwordInput.style.border = "2px solid #00b4d8";
    passwordInput.style.background = "#0096c7";
    passwordInput.placeholder = "Passwort";
});