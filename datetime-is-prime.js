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

function createGraph(n) {
    if (n) {
        let style = `
    .bg {
        width: calc(100% / ${n});
    }
    
`;

        for (let i = 0; i < n; i++) {
            style += `    #bg${i} { left: calc(${i} * 100% / ${n}); }
`;
        }
        
        style += '</style>';
        
        document.querySelector('style').insertAdjacentHTML('beforeend', style);
        
        for (let i = 0; i < n; i++) {
            let elm = document.createElement('div');
            elm.id = 'bg'+i;
            elm.className = 'bg';
            
            if (i) {
                document.getElementById('bg'+(i-1)).after(elm);
            } else {
                document.body.prepend(elm);
            }
        }
    }
}

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get('r') == 'pf11n') {
        document.title = '素因数分解時計 - yatabashi';
    }
    
    const n = Math.min(Number(params.get('n')), 100);
    
    createGraph(n);
    
    let r = (new Array(n)).fill(0);
    
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
            
            if (params.get('r') == 'pf11n') {
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
            
            for (let i = 0; i < r.length - 1; i++) {
                r[i] = r[i+1];
            }
            
            r[r.length - 1] = Math.log10(lpf) / Math.log10(datetime);
            
            for (let i = 0; i < r.length; i++) {
                document.getElementById('bg'+i).style.height = (document.documentElement.clientHeight * r[i])+"px";
            }
        }
        
        setTimeout(updateClock, 100);
    }, 100);
}