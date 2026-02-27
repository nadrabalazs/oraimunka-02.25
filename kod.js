function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol() {
    let sorok = document.getElementsByTagName("tr");
    let vegosszeg = 0;
    for (let i = 1; i < sorok.length; i++) {
        let aktualisSor = sorok[i];
        let ar = Number(aktualisSor.getElementsByClassName("ar")[0].innerHTML);
        let db = Number(aktualisSor.getElementsByTagName("input")[0].value);
        let reszosszeg = ar * db;
        aktualisSor.getElementsByClassName("reszosszeg")[0].innerHTML = reszosszeg;
        vegosszeg += reszosszeg;
    }
    document.getElementById("osszertek").innerHTML = vegosszeg;
}