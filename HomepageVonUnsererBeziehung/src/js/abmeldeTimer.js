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
  var verbleibendeZeitInMillisekunden = timerLaufzeitInMillisekunden - zeitunterschiedInMillisekunden;

  if (verbleibendeZeitInMillisekunden > 0) {
    setTimeout(function () {
      console.log('Timer abgelaufen! Hier kannst du deine Funktion aufrufen.');
      // Füge hier den Code für deine gewünschte Funktion ein
    }, verbleibendeZeitInMillisekunden);
  } else {
    console.log('Der Timer läuft noch.');
  }
} else {
  console.log('Es wurde kein Datum und keine Zeit im localStorage gefunden.');
}


function abmelden() {
    alert("Die Zeit ist abgelaufen, du wirst nun abgemeldet und musst dich neu anmelden.")
    window.location.href = "../index.html";
}