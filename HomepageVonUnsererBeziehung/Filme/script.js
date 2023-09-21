title = document.getElementById("title");
filmeBox = document.getElementById("filmeBox");
filmDetails = document.getElementById("filmDetails");


nichtGegucktBtn = document.getElementById("nichtGegucktBtn");
gegucktBtn = document.getElementById("gegucktBtn");

nichtGegucktBox = document.getElementById("nichtGegucktBox");
gegucktBox = document.getElementById("gegucktBox");

filmDetailsImg = document.getElementById("filmDetailsImg");
filmTitle = document.getElementById("filmTitle");
platform = document.getElementById("platform");
dauer = document.getElementById("dauer");
altersfreigabe = document.getElementById("altersfreigabe");
veröffentlichungsdatum = document.getElementById("veröffentlichungsdatum");
kategorie = document.getElementById("kategorie");
gegucktDatum = document.getElementById("gegucktDatum");

zufallsgeneratorBtn = document.getElementById("zufallsgeneratorBtn");


//----------Zufallsgenerator----------
zufallsgeneratorBtn.onclick = function () {
    // Definiere deine Liste von Elementen
    const elemente = ["No Hard Feelings", "Transformers: Aufstieg der Bestien",
                    "The Flash", "Culpa Mia – Meine Schuld", "The Amazing Spider-Man", "The Amazing Spider-Man 2: Rise Of Electro",
                    "Jurassic World: Ein neues Zeitalter", "Chaos im Netz", "Cars", "Cars 2", "Cars 3", "Free Guy", "365 Tage",
                    "Miraculous: Ladybug & Cat Noir - Der Film", "Strange World", "Maze Runner 3: Die Auserwählten in der Todeszone",
                    "Mr. & Mrs. Smith", "Guardians of the Galaxy Vol. 3", "Kindsköpfe", "Kindsköpfe 2", "Avengers: Endgame",
                    "Mortal Kombat", "Spider-Man: Far From Home", "Spider-Man: Homecoming", "Sex Appeal", "Through my Window – Ich sehe nur dich",
                    "Through my Window – Über das Meer", "Baywatch", "Deadpool", "Deadpool 2", "After Passion", "After Truth", "After Love",
                    "After Everything", "Thor: Love and Thunder", "Five Nights at Freddy’s", "Taxi 4", "The Equalizer", "The Equalizer 2",
                    "The Equalizer 3 – The Final Chapter", "Titanic", "I, Robot", "Iron Man", "Iron Man 2", "Iron Man 3",
                    "Avatar – Aufbruch nach Pandora"];

    // Funktion, um ein zufälliges Element aus der Liste auszuwählen
    function zufallAuswaehlen() {
        const zufallsIndex = Math.floor(Math.random() * elemente.length);
        return elemente[zufallsIndex];
    }

    // Funktion, um das Ergebnis in das HTML-Dokument einzufügen
    function ergebnisAnzeigen() {
        const ergebnisElement = document.getElementById("zufallsgeneratorBtn");
        ergebnisElement.textContent = zufallAuswaehlen();
    }

    // Rufe die Funktion auf, um das Ergebnis beim Laden der Seite anzuzeigen
    ergebnisAnzeigen();
}
//----------Ende----------

//
const anzahlFilmeNichtGeguckt = nichtGegucktBox.children.length;
nichtGegucktBtn.textContent = "Nicht Geguckt (" + anzahlFilmeNichtGeguckt + ")";
if (anzahlFilmeNichtGeguckt >= 10) {
    nichtGegucktBtn.style.fontSize = "11px";
}

const anzahlFilmeGeguckt = gegucktBox.children.length;
gegucktBtn.textContent = "Geguckt (" + anzahlFilmeGeguckt + ")";
//


function menuBtn(selected) {
    if (selected == "nichtGeguckt") {
        nichtGegucktBtn.style.background = "#00b4d8";
        gegucktBtn.style.background = "#0096c7";

        nichtGegucktBox.style.display = "block";
        gegucktBox.style.display = "none";
    }
    else if (selected == "geguckt") {
        nichtGegucktBtn.style.background = "#0096c7";
        gegucktBtn.style.background = "#00b4d8";

        nichtGegucktBox.style.display = "none";
        gegucktBox.style.display = "block";
    }
    else {
        console.log("Error");
    }
}

function filmDetailsAnzeigen(film) {
    if (film == "Elemental") {
        filmDetailsImg.src = "src/preview/Elemental.jpg";
        filmTitle.textContent  = "Elemental";
        platform.textContent  = "Im Kino";
        dauer.textContent  = "1h 42min";
        altersfreigabe.textContent  = "FSK 0";
        veröffentlichungsdatum.textContent  = "2023";
        kategorie.textContent  = "Animation/Komödie";
        gegucktDatum.remove();
    }
    else if (film == "No Hard Feelings") {
        filmDetailsImg.src = "src/preview/NoHardFeelings.jpg";
        filmTitle.textContent  = "No Hard Feelings";
        platform.textContent  = "Im Kino";
        dauer.textContent  = "1h 43min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2023";
        kategorie.textContent  = "Komödie";
        gegucktDatum.remove();
    }
    else if (film == "Transformers: Aufstieg der Bestien") {
        filmDetailsImg.src = "src/preview/Transformers_AufstiegDerBestien.jpg";
        filmTitle.textContent  = "Transformers: Aufstieg der Bestien";
        platform.textContent  = "Im Kino";
        dauer.textContent  = "2h 7min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2023";
        kategorie.textContent  = "Action/Sci-Fi";
        gegucktDatum.remove();
    }
    else if (film == "The Flash") {
        filmDetailsImg.src = "src/preview/TheFlash.jpg";
        filmTitle.textContent  = "The Flash";
        platform.textContent  = "Im Kino";
        dauer.textContent  = "2h 24min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2023";
        kategorie.textContent  = "Action/Fantasy";
        gegucktDatum.remove();
    }
    else if (film == "Culpa Mía - Meine Schuld") {
        filmDetailsImg.src = "src/preview/CulpaMía-MeineSchuld.jpg";
        filmTitle.textContent  = "Culpa Mía - Meine Schuld";
        platform.textContent  = "Zu Hause";
        dauer.textContent  = "1h 30min";
        altersfreigabe.textContent  = "FSK 16";
        veröffentlichungsdatum.textContent  = "2023";
        kategorie.textContent  = "Drama";
        gegucktDatum.remove();
    }
    else if (film == "Venom: Let There Be Carnage") {
        filmDetailsImg.src = "src/preview/Venom_LetThereBeCarnage.jpg";
        filmTitle.textContent  = "Venom: Let There Be Carnage";
        platform.textContent  = "Auf Netflix";
        dauer.textContent  = "1h 37min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2021";
        kategorie.textContent  = "Action/Sci-Fi";
        gegucktDatum.remove();
    }
    else if (film == "The Amazing Spider-Man") {
        filmDetailsImg.src = "src/preview/TheAmazingSpider-Man.jpg";
        filmTitle.textContent  = "The Amazing Spider-Man";
        platform.textContent  = "Auf Netflix";
        dauer.textContent  = "2h 16min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2012";
        kategorie.textContent  = "Action/Abenteuer";
        gegucktDatum.remove();
    }
    else if (film == "The Amazing Spider-Man 2: Rise Of Electro") {
        filmDetailsImg.src = "src/preview/TheAmazingSpider-Man2_RiseOfElectro.jpg";
        filmTitle.textContent  = "The Amazing Spider-Man 2: Rise Of Electro";
        platform.textContent  = "Auf Netflix";
        dauer.textContent  = "2h 22min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2014";
        kategorie.textContent  = "Action/Abenteuer";
        gegucktDatum.remove();
    }
    else if (film == "Jurassic World: Ein neues Zeitalter") {
        filmDetailsImg.src = "src/preview/JurassicWorld_EinNeuesZeitalter.jpg";
        filmTitle.textContent  = "Jurassic World: Ein neues Zeitalter";
        platform.textContent  = "Zu Hause";
        dauer.textContent  = "2h 26min";
        altersfreigabe.textContent  = "FSK 12";
        veröffentlichungsdatum.textContent  = "2022";
        kategorie.textContent  = "Action/Sci-Fi";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }
    else if (film == "name") {
        filmDetailsImg.src = "src/preview";
        filmTitle.textContent  = "name";
        platform.textContent  = "text";
        dauer.textContent  = "zeit";
        altersfreigabe.textContent  = "FSK";
        veröffentlichungsdatum.textContent  = "jahr";
        kategorie.textContent  = "text";
        gegucktDatum.remove();
    }

    // title.style.display = "none";
    // filmeBox.style.display = "none";
    // filmDetails.style.display = "block";

    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // });
}