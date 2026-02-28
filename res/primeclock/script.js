function getPrimenessAndLeastPrimeFactor(n) {
    if (n % 2 == 0) {
        return [(n == 2), 2];
    } else if (n % 3 == 0) {
        return [(n == 3), 3];
    }

    let bound = Math.sqrt(n);

    for (let i = 5; i <= bound; i += 6) {
        if (n % i == 0) {
            return [false, i];
        } else if (n % (i + 2) == 0) {
            return [false, i + 2];
        }
    }

    return [true, n];
}

function getDatetime() {
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    let hour = now.getHours().toString().padStart(2, '0');
    let minute = now.getMinutes().toString().padStart(2, '0');
    let second = now.getSeconds().toString().padStart(2, '0');

    return year+month+day+hour+minute+second;
}


const typeForm = document.getElementById("typeform");
const typeSetters = document.getElementsByName("type");

for (let setter of typeSetters) {
    setter.addEventListener('change', () => typeForm.type.value);
}


setTimeout(function updateClock() {
    let datetime = getDatetime();

    let clock = document.getElementById('clock');

    if (clock.textContent != datetime) {
        clock.textContent = datetime;

        // バックグラウンドでの実行後は履歴が乱れうる

        let result = document.getElementById('result');

        const v = getPrimenessAndLeastPrimeFactor(datetime);
        const isPrime = v[0];
        const lpf = v[1];

        if (typeForm.type.value == 'fc') {
            let finished = isPrime;
            let dividend = datetime;
            let divisor = lpf;
            let tpfn = lpf;

            while (!finished) {
                const v = getPrimenessAndLeastPrimeFactor(dividend/divisor);
                finished = v[0];
                dividend = dividend/divisor;
                divisor = v[1];
                lpf ??= divisor;

                tpfn = tpfn + "×" + divisor;
            }

            let factorization = {};
            tpfn.split("×").forEach((factor) => {
                factorization[factor] = (factorization[factor] ?? 0) + 1;
            })

            result.innerText = "= ";
            for (let factor in factorization) {
                result.innerHTML = result.innerHTML + factor + (factorization[factor] == 1 ? "" : `<sup>${factorization[factor]}</sup>`) + "×";
            }

            result.innerHTML = result.innerHTML.slice(0, -1);
        } else {
            result.textContent = isPrime ? 'は素数です。' : `は ${lpf} で割り切れます。`;
        }
    }

    setTimeout(updateClock, 100);
}, 100);
