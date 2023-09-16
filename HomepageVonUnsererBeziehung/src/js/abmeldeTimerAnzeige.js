if (localStorage.getItem("letzteAnmeldung") == null) {
    window.location.href = "../index.html";
}
else {
    console.log(localStorage.getItem("letzteAnmeldung"));
}


// Daten aus dem localStorage abrufen
var gespeicherteDatumUndZeit = localStorage.getItem('letzteAnmeldung');
console.log('Gespeicherte Datum und Zeit:', gespeicherteDatumUndZeit);

if (gespeicherteDatumUndZeit) {
  // Datum und Zeit aus dem gespeicherten String parsen
  var gespeichertesDatumUndZeit = new Date(gespeicherteDatumUndZeit);

  // Aktuelles Datum und Zeit abrufen
  var aktuellesDatumUndZeit = new Date();

  // Zeitdifferenz berechnen
  var zeitunterschiedInMillisekunden = aktuellesDatumUndZeit - gespeichertesDatumUndZeit;

  // Timer setzen, um nach einer bestimmten Zeit eine Funktion auszuführen
  var timerLaufzeitInMillisekunden = 20 * 60 * 1000; // 20 Minuten in Millisekunden

  if (zeitunterschiedInMillisekunden >= timerLaufzeitInMillisekunden) {
    // Timer abgelaufen! Hier kannst du deine Funktion aufrufen.
    console.log('Timer abgelaufen! Hier kannst du deine Funktion aufrufen.');
    // Füge hier den Code für deine gewünschte Funktion ein
    abmelden();
  } else {
    // Verbleibende Zeit berechnen
    var verbleibendeZeitInMillisekunden = timerLaufzeitInMillisekunden - zeitunterschiedInMillisekunden;

    setInterval(function () {
      if (verbleibendeZeitInMillisekunden > 0) {
        var verbleibendeMinuten = Math.floor(verbleibendeZeitInMillisekunden / 60000);
        var verbleibendeSekunden = Math.floor((verbleibendeZeitInMillisekunden % 60000) / 1000);

        // Verbleibende Zeit anzeigen
        var verbleibendeZeitElement = document.getElementById('verbleibendeZeit');
        var verbleibendeZeitText = 'Verbleibende Zeit: ' + verbleibendeMinuten + ' Min ' + verbleibendeSekunden + ' Sek';
        verbleibendeZeitElement.textContent = verbleibendeZeitText;

        verbleibendeZeitInMillisekunden -= 1000;
      }
    }, 1000);
  }
} else {
  console.log('Es wurde kein Datum und keine Zeit im localStorage gefunden.');
}




function abmelden() {
    alert("Die Zeit ist abgelaufen, du wirst nun abgemeldet und musst dich neu anmelden.")
    window.location.href = "../index.html";
}