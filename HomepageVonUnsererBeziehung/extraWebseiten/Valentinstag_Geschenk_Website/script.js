wlswsz_text = document.getElementById("wlswsz_text");

setInterval(function() {
    // Hier kommt der Code, den du jede Sekunde ausführen möchtest
    // Zum Beispiel:
    wieLangeSindWirSchonZusammen();
  }, 1000);

function wieLangeSindWirSchonZusammen() {
    // Setze das Startdatum und die Startuhrzeit im Format "YYYY-MM-DD HH:MM:SS"
    const startDateTime = "2022-06-28 21:20:00";

    // Trenne das Startdatum und die Startuhrzeit voneinander
    const [startDate, startTime] = startDateTime.split(' ');

    // Teile die Startuhrzeit in Stunden, Minuten und Sekunden auf
    const [startHour, startMinute, startSecond] = startTime.split(':').map(Number);

    // Berechne das Startdatum und die Startuhrzeit als Datum-Objekt
    const start = new Date(startDate);
    start.setHours(startHour);
    start.setMinutes(startMinute);
    start.setSeconds(startSecond);

    // Berechne die Zeitdifferenz zwischen dem Startdatum und der Startuhrzeit und dem aktuellen Datum und der aktuellen Uhrzeit
    const currentDate = new Date();
    const diff = currentDate.getTime() - start.getTime();

    // Berechne die Zeitdifferenz in Jahren, Monaten, Tagen, Stunden, Minuten und Sekunden
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const remainingDays = days % 30;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    // Gib die Zeitdifferenz aus
    // console.log(years + " Jahre, " + remainingMonths + " Monate, " + remainingDays + " Tage, " + remainingHours + " Stunden, " + remainingMinutes + " Minuten und " + remainingSeconds + " Sekunden sind seit " + startDateTime + " vergangen.");
    wlswsz_text.innerHTML = years + " Jahre, " + remainingMonths + " Monate, " + remainingDays + " Tage, " + `<br>` + remainingHours + " Stunden, " + remainingMinutes + " Minuten und " + `<br>` + remainingSeconds + " Sekunden";
}
