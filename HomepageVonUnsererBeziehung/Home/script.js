fotosBtn = document.getElementById("fotosBtn");
filmeListeAnschauenBtn = document.getElementById("filmeListeAnschauenBtn");

dreiUndZwanzig_btn = document.getElementById("dreiUndZwanzig_btn");
dreiUndZwanzig_text = document.getElementById("dreiUndZwanzig_text");

neunUndDreißig_btn = document.getElementById("neunUndDreißig_btn");
neunUndDreißig_text = document.getElementById("neunUndDreißig_text");

vierundvierzig_btn = document.getElementById("vierundvierzig_btn");
vierundvierzig_text = document.getElementById("vierundvierzig_text");

fünfundvierzig_btn = document.getElementById("fünfundvierzig_btn");
fünfundvierzig_text = document.getElementById("fünfundvierzig_text");

sechsundvierzig_btn = document.getElementById("sechsundvierzig_btn");
sechsundvierzig_text = document.getElementById("sechsundvierzig_text");

siebenundvierzig_btn = document.getElementById("siebenundvierzig_btn");
siebenundvierzig_text = document.getElementById("siebenundvierzig_text");


fotosBtn.onclick = function () {
    if (confirm("Warnung. Die Website, auf die du weiter geleitet wirst lädt direkt viele Fotos und das verbraucht Mobile daten. Willst du wirklich fortfahren?")) {
        window.location.href = "../GemeinsameFotos/index.html";
    }
}

filmeListeAnschauenBtn.onclick = function () {
    if (confirm("Warnung. Die Website, auf die du weiter geleitet wirst lädt direkt viele Fotos und das verbraucht Mobile daten. Willst du wirklich fortfahren?")) {
        window.location.href = "../Filme/index.html";
    }
}

dreiUndZwanzig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit einer Sicherheitsfrage blockiert, um den Text anzuzeigen, muss die Frage beantwortet werden.")) {
        dreiUndZwanzig_password_input_value = prompt("Wann haben wir die eine Sache in Spanien zum ersten Mal gemacht?")
        if (dreiUndZwanzig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (dreiUndZwanzig_password_input_value == "14.07.2023" || dreiUndZwanzig_password_input_value == "14072023") {
            alert("Das Password ist Richtig.")
            dreiUndZwanzig_btn.style.display = "none";
            dreiUndZwanzig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

neunUndDreißig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit dem Master Key geschlossen. Füge den Master Key ein, um den Text anzuzeigen.")) {
        neunUndDreißig_password_input_value = prompt("Master Key eingeben:")
        if (neunUndDreißig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (neunUndDreißig_password_input_value == "08.06.2006" || neunUndDreißig_password_input_value == "08062006") {
            alert("Das Password ist Richtig.")
            neunUndDreißig_btn.style.display = "none";
            neunUndDreißig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

vierundvierzig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit dem Master Key geschlossen. Füge den Master Key ein, um den Text anzuzeigen.")) {
        vierundvierzig_password_input_value = prompt("Master Key eingeben:")
        if (vierundvierzig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (vierundvierzig_password_input_value == "08.06.2006" || vierundvierzig_password_input_value == "08062006") {
            alert("Das Password ist Richtig.")
            vierundvierzig_btn.style.display = "none";
            vierundvierzig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

fünfundvierzig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit dem Master Key geschlossen. Füge den Master Key ein, um den Text anzuzeigen.")) {
        fünfundvierzig_password_input_value = prompt("Master Key eingeben:")
        if (fünfundvierzig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (fünfundvierzig_password_input_value == "08.06.2006" || fünfundvierzig_password_input_value == "08062006") {
            alert("Das Password ist Richtig.")
            fünfundvierzig_btn.style.display = "none";
            fünfundvierzig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

sechsundvierzig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit dem Master Key geschlossen. Füge den Master Key ein, um den Text anzuzeigen.")) {
        sechsundvierzig_password_input_value = prompt("Master Key eingeben:")
        if (sechsundvierzig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (sechsundvierzig_password_input_value == "08.06.2006" || sechsundvierzig_password_input_value == "08062006") {
            alert("Das Password ist Richtig.")
            sechsundvierzig_btn.style.display = "none";
            sechsundvierzig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

siebenundvierzig_btn.onclick = function () {
    if (confirm("Dieser Text ist mit dem Master Key geschlossen. Füge den Master Key ein, um den Text anzuzeigen.")) {
        siebenundvierzig_password_input_value = prompt("Master Key eingeben:")
        if (siebenundvierzig_password_input_value == "") {
            alert("Das Eingabefeld ist Leer.")
        }
        else if (siebenundvierzig_password_input_value == "08.06.2006" || siebenundvierzig_password_input_value == "08062006") {
            alert("Das Password ist Richtig.")
            siebenundvierzig_btn.style.display = "none";
            siebenundvierzig_text.style.display = "block";
        }
        else {
            alert("Das Password ist Falsch.")
        }
    }
}

//----------Reloader----------

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        location.reload()
    } else if (document.visibilityState === "visible") {
        location.reload()
    }
});

//----------Ende----------


//----------zusammenSeitTimer----------

// Funktion, um zu überprüfen, ob ein Jahr ein Schaltjahr ist
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Funktion, um den Countup-Timer zu berechnen und anzuzeigen
function updateCountup() {
    // Dein gewünschtes Startdatum (Jahr, Monat (0-basiert), Tag, Stunde, Minute, Sekunde)
    const startDate = new Date("2022-06-28T21:20:00");

    // Aktuelles Datum und Zeit
    const now = new Date();

    // Differenz zwischen dem aktuellen Zeitpunkt und dem Startdatum in Millisekunden
    const timeDiff = now - startDate;

    // Berechnung der vergangenen Jahre, Monate, Tage, Stunden, Minuten und Sekunden
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Negative Werte in der Zeitdifferenz müssen angepasst werden
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const lastMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
        const daysInLastMonth = lastMonthDate.getDate();
        days = daysInLastMonth - startDate.getDate() + now.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }


    // Annahme: years, months, days, hours, minutes, seconds sind definierte Variablen

    const zusammenSeitText = `Zusammen seit: ${years} Jahre, ${months} Monate, ${days} Tage, ${hours} Stunden, ${minutes} Minuten, ${seconds} Sekunden`;

    // Hier fügen wir nach jedem Komma einen Zeilenumbruch <br> hinzu
    const zusammenSeitFormatted = zusammenSeitText
      .replace(/,/g, ",<br>")
      .replace(/:/g, ":<br>");

    document.getElementById("zusammenSeitTimer").innerHTML = zusammenSeitFormatted;
}

// Timer wird alle 1 Sekunde aktualisiert
setInterval(updateCountup, 1000);

//----------Ende----------