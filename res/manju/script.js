let last_input = "";

function review() {
    let text = document.querySelector('textarea').value;

    text = text.replace(/ū/g, "v")
                .replace(/U/g, "v")
                .replace(/š/g, "x")
                .replace(/S/g, "x")
                .replace(/R/g, "z")

    const manju_table = {"a": "ᠠ", "e": "ᡝ", "i": "ᡳ", "o": "ᠣ", "u": "ᡠ", "v": "ᡡ", 
                            "n": "ᠨ", "k": "ᡴ", "g": "ᡤ", "h": "ᡥ", "b": "ᠪ", "p": "ᡦ", 
                            "s": "ᠰ", "x": "ᡧ", "t": "ᡨ", "d": "ᡩ", "l": "ᠯ", "m": "ᠮ", 
                            "c": "ᠴ", "j": "ᠵ", "y": "ᠶ", "r": "ᡵ", "f": "ᡶ", "w": "ᠸ", 
                            "K": "ᠺ", "G": "ᡬ", "H": "ᡭ", "z": "ᡰ", "C": "ᡱ", "J": "ᡷ", 
                            "I": " ᡳ", ",": "᠈", ".": "᠉", "-": "᠊", 
                            "'": "᠇"};

    const manju_text = (() => {
        let tp = "";

        for (let i = 0; i < text.length; i++) {
            const table_3 = {"tsy": "ᡮᡟ"};

            if (Object.keys(table_3).includes(text[i-2]+text[i-1]+text[i])) {
                tp = tp.slice(0, -1) + table_3[text[i-2]+text[i-1]+text[i]];
            } else {
                const table_2 = {"ng": "ᠩ", "ts": "ᡮ", "dz": "ᡯ", "sy": "ᠰᡟ", "cy": "ᡱᡳ", "jy": "ᡷᡳ"};

                if (Object.keys(table_2).includes(text[i-1]+text[i])) {
                    tp = tp.slice(0, -1) + table_2[text[i-1]+text[i]];
                } else {
                    tp += manju_table[text[i]] ?? text[i];
                }
            }
        }

        return tp;
    })();

    document.getElementById('review-manju').innerText = manju_text;
}

function showHideCopier() {
    if (document.querySelector('textarea').value == "") {
        document.getElementById("copier").hidden = true;
    } else {
        document.getElementById("copier").hidden = false;
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("review-manju").textContent);
    document.getElementById("copier").textContent = "コピーされました";
    setTimeout(() => {
        document.getElementById("copier").textContent = "出力をコピー"
    }, 2000);
}

function changeDirection() {
    if (document.getElementById("direction").checked) {
        document.getElementById("review").classList.remove("horizontal");
        document.getElementById("review").classList.add("vertical");
        document.getElementById("review").classList.add("vert");
    } else {
        document.getElementById("review").classList.remove("vertical");
        document.getElementById("review").classList.remove("vert");
        document.getElementById("review").classList.add("horizontal");
    }
}

function tryApplyingFont() {

}

const textarea = document.querySelector('textarea');

// textarea.focus();

textarea.addEventListener("input", (e) => {
    last_input = e.data;

    review();
    showHideCopier();
});

review();
showHideCopier();
changeDirection();
