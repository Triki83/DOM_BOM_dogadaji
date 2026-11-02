
const unos = document.getElementById("unos");
const prikaz = document.getElementById("prikaz");
const poruka = document.getElementById("poruka");

const adresa = document.getElementById("adresa");
const sirina = document.getElementById("sirina");


unos.addEventListener("input", function() {
    prikaz.textContent = unos.value;
});


unos.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        poruka.textContent = "Uspjesno si unio tekst!";
    }
});


adresa.textContent = "Adresa stranice: " + window.location.pathname;


function prikaziSirinu() {
    sirina.textContent = "Sirina prozora: " + window.innerWidth + " px";
}

prikaziSirinu();


window.addEventListener("resize", function() {
    prikaziSirinu();
});
