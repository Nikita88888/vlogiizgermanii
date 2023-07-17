fotosBtn = document.getElementById("fotosBtn");
dreiUndZwanzig_btn = document.getElementById("dreiUndZwanzig_btn");
dreiUndZwanzig_text = document.getElementById("dreiUndZwanzig_text");

fotosBtn.onclick = function () {
    window.location.href = "../GemeinsameFotos/index.html";
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


document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        location.reload()
    } else if (document.visibilityState === "visible") {
        location.reload()
    }
});