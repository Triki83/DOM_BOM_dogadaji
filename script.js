
let broj = 0;


const prikaz = document.getElementById("broj");

const povecaj = document.getElementById("povecaj");
const smanji = document.getElementById("smanji");
const reset = document.getElementById("reset");


function prikaziBroj() {
    prikaz.textContent = broj;
}


povecaj.addEventListener("click", function() {
    broj++;
    prikaziBroj();
});


smanji.addEventListener("click", function() {
    broj--;
    prikaziBroj();
});


reset.addEventListener("click", function() {
    broj = 0;
    prikaziBroj();
});
