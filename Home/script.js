fotosBtn = document.getElementById("fotosBtn");
filmeListeBtn = document.getElementById("filmeListeBtn");
unsereEreignisseBtn = document.getElementById("unsereEreignisseBtn");


fotosBtn.onclick = function () {
    if (confirm("Warnung. Die Website, auf die du weiter geleitet wirst lädt direkt viele Fotos und das verbraucht Mobile daten. Willst du wirklich fortfahren?")) {
        window.location.href = "../GemeinsameFotos/index.html";
    }
}

filmeListeBtn.onclick = function () {
    if (confirm("Warnung. Die Website, auf die du weiter geleitet wirst lädt direkt viele Fotos und das verbraucht Mobile daten. Willst du wirklich fortfahren?")) {
        window.location.href = "../Filme/index.html";
    }
}

unsereEreignisseBtn.onclick = function () {
    window.location.href = "../Ereignisse/index.html";
}


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