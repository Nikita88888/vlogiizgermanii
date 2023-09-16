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
    else if (passwordInput.value == "28062022" || passwordInput.value == "28.06.2022" || passwordInput.value == "08.06.2006" || passwordInput.value == "08062006") {
        anmeldungSpeichern();
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


function anmeldungSpeichern() {
    // Datum und Zeit abfragen
    var aktuellesDatumUndZeit = new Date();

    // Datum und Zeit in das gewünschte Format konvertieren
    var datumUndZeitAlsString = aktuellesDatumUndZeit.toLocaleString();

    // Daten im localStorage speichern
    localStorage.setItem('letzteAnmeldung', datumUndZeitAlsString);

    // Daten aus dem localStorage abrufen (optional)
    var gespeicherteDatumUndZeit = localStorage.getItem('letzteAnmeldung');
    console.log('Gespeicherte Datum und Zeit:', gespeicherteDatumUndZeit);
}