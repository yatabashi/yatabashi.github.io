const canvas = document.getElementById("outputcanvas");
const ctx = canvas.getContext("2d");

const dlbutton = document.getElementById("dld");

function ers() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dlbutton.disabled = true;
}

function rnd() {
    ers();

    let font = document.getElementById("font").value;
    ctx.font = `200 640px 'Noto ${font} JP'`;
    // ctx.font = `100 640px 'Noto Sans JP'`;

    for (let chr of [...input.value]) {
        ctx.fillText(chr, 0, 560);
    }

    dlbutton.disabled = false;
}

function dld() {
	let link = document.createElement("a");
	link.href = canvas.toDataURL("image/png");
	link.download = "test.png";
	link.click();
}

document.getElementById("font").addEventListener("change", () => {
    document.getElementById("input").classList.toggle('serif');
})
