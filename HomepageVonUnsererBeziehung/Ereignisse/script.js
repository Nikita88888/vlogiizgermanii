passwordInput = prompt("Die Seite Ereignisse ist mit einem Password geschützt. Du musst den Master-key eintippen.")
if (passwordInput == "08062006" || passwordInput == "08.06.2006") {
    console.log("Masster-key ist Richtig.");
}
else {
    window.location.href = "../Home/index.html";
}