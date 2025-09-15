const input = document.getElementById("input");
const output = document.getElementById("output");
const radixSetters = document.getElementsByName("radix");

function getRadix() {
    for (let setter of radixSetters) {
        if (setter.checked) {
            return Number(setter.value)
        }
    }
}

function render(input) {
    const val = Number(input.value);
    const xval = val.toString(16).padStart(3, "0").toUpperCase();

    output.textContent = val.toString(getRadix());
    document.body.style.backgroundColor = "#".concat(xval)
}

input.addEventListener('input', e => {
    render(e.target)
})

for (let setter of radixSetters) {
    setter.addEventListener('change', e => {
        render(input)
    })
}

render(input)
