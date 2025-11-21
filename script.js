const option = document.getElementById("uebergabeOption");
const abholfeld = document.getElementById("abholadresseFeld");
const form = document.getElementById("spendenForm");
const output = document.getElementById("bestaetigung");

// PLZ der Geschäftsstelle
const PLZ_GESCHAEFTSSTELLE = "12345";

option.addEventListener("change", () => {
    if (option.value === "abholung") {
        abholfeld.classList.remove("d-none");
    } else {
        abholfeld.classList.add("d-none");
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const art = document.getElementById("kleidungsart").value;
    const gebiet = document.getElementById("krisengebiet").value;
    const now = new Date().toLocaleString("de-DE");

    let ortAngabe = "Geschäftsstelle";

    if (option.value === "abholung") {
        const plz = document.getElementById("plz").value;

        if (plz.substring(0, 2) !== PLZ_GESCHAEFTSSTELLE.substring(0, 2)) {
            alert("Die Abholadresse liegt nicht im Zustellbereich!");
            return;
        }

        const strasse = document.getElementById("strasse").value;
        const ort = document.getElementById("ort").value;
        ortAngabe = `${strasse}, ${plz} ${ort}`;
    }

    output.classList.remove("d-none");
    output.innerHTML = `
        <strong>Ihre Spende wurde erfolgreich registriert!</strong><br>
        Art der Kleidung: ${art}<br>
        Krisengebiet: ${gebiet}<br>
        Datum/Uhrzeit: ${now}<br>
        Ort: ${ortAngabe}
    `;
});
