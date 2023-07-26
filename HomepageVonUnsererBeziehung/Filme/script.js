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