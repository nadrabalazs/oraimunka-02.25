function nagyitKep(melyikKep) {
    document.getElementById("nagykep").src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let hanyDarabotSzeretne = Number(prompt("Hány darabot szeretne?"));
    if (hanyDarabotSzeretne > 0) 
    {
        let kosarbanUjTermek = document.createElement("li");
        kosarbanUjTermek.textContent = hanyDarabotSzeretne + " db " + melyikTermek;
        document.getElementById("kosar").appendChild(kosarbanUjTermek);
    }
}
