for (let mjr of Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ")) {
    let tr = document.createElement("tr");

    for (let mnr of Array.from("* abcdefghijklmnopqrstuvwxyz")) {
        let td = document.createElement("td");
        td.id = mjr+mnr;
        // td.textContent = "";
        tr.appendChild(td);
    }

    document.getElementById("table").appendChild(tr);
}

let syms = "H*HeLiBeB*C*N*O*F*NeNaMgAlSiP*S*ClArK*CaScTiV*CrMnFeCoNiCuZnGaGeAsSeBrKrRbSrY*ZrNbMoTcRuRhPdAgCdInSnSbTeI*XeCsBaLaCePrNdPmSmEuGdTbDyHoErTmYbLuHfTaW*ReOsIrPtAuHgTlPbBiPoAtRnFrRaAcThPaU*NpPuAmCmBkCfEsFmMdNoLrRfDbSgBhHsMtDsRgCnNhFlMcLvTsOg".match(/../g);

for (let sym of syms) {
    document.getElementById(sym).style = "background-color: black;"
}
