function getTodaysNumber() {
    function now() {
        let now = new Date();
        let year = now.getFullYear().toString();
        let month = (now.getMonth() + 1).toString().padStart(2, '0');
        let day = now.getDate().toString().padStart(2, '0'); 
        
        return Number(year+month+day);
        
        // let hour = now.getHours().toString().padStart(2, '0');
        // let minute = now.getMinutes().toString().padStart(2, '0');
        // let second = now.getSeconds().toString().padStart(2, '0');                    
        // let milli = now.getMilliseconds().toString();
        // console.log(year+month+day+hour+minute+second+milli);
        // return Number(year+month+day+hour+minute+second+milli);
    }
    
    let x = 123456789;
    let y = 362436069;
    let z = 521288629;
    let w = now();
    
    function xorshift() {
        const t = x ^ (x << 11);
        x = y; y = z; z = w;
        w = (w^(w>>19))^(t^(t>>8));
    };
    
    for (let i = 0; i < 32; i++) {
        xorshift();
    }
    
    return w;
}

function getLibDatStr(n) {
    const LIB = 7936;
    const MUS = 4372;
    const ARC = 102;
    
    const r = (n % (LIB + MUS + ARC)) + 1;
    let rISIL, nextISIL;
    if (r < LIB) {
        rISIL = `JP-1${r.toString().padStart(6, '0')}`;
        nextISIL = `JP-1${(r + 1).toString().padStart(6, '0')}`;
    } else if (r == LIB) {
        rISIL = `JP-1${r.toString().padStart(6, '0')}`;
        nextISIL = `JP-2${(1).toString().padStart(6, '0')}`;
    } else if (r < LIB + MUS) {
        rISIL = `JP-2${(r - LIB).toString().padStart(6, '0')}`;
        nextISIL = `JP-2${(r - LIB + 1).toString().padStart(6, '0')}`;
    } else if (r == LIB + MUS) {
        rISIL = `JP-2${(r - LIB).toString().padStart(6, '0')}`;
        nextISIL = `JP-3${(1).toString().padStart(6, '0')}`;
    } else if (r < LIB + MUS + ARC) {
        rISIL = `JP-3${(r - LIB - MUS).toString().padStart(6, '0')}`;
        nextISIL = `JP-3${(r - LIB - MUS + 1).toString().padStart(6, '0')}`;
    } else { // r = LIB + MUS + ARC
        rISIL = `JP-3${(r - LIB - MUS).toString().padStart(6, '0')}`;
        nextISIL = `JP-1${(1).toString().padStart(6, '0')}`;
    }
    
    return (new RegExp(`^${rISIL}.*$`, 'm')).exec(ISIL)[0];
}

function parsed(s) {
    let result = [""];
    let k = 0;
    let betweenQuotes = false;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "\"") {
            betweenQuotes = !betweenQuotes;
        } else {
            if (s[i] == "," && !betweenQuotes) {
                k++;
                result[k] = "";
            } else {
                result[k] += s[i];
            }
        }
    }
    
    return result;
}

window.onload = () => {
    const dat = parsed(getLibDatStr(getTodaysNumber()));
    // 値に改行文字を含む場合その手前まで (JP-1007833)
    
    function getInsertion(dat) {
        if (dat.length == 3) { // 欠番・廃館
            if (dat[2]) {
                let postDat = parsed((new RegExp(`^${dat[2]}.*$`, 'm')).exec(ISIL)[0]);
                return `${dat[0]} <span class="del">${dat[1]}</span>`
                       + `<br>→`
                       + ` ${getInsertion(postDat)}`;
            } else {
                if (dat[1] == "[欠番]") {
                    return `${dat[0]} ${dat[1]}`;
                } else {
                    return `${dat[0]} <span class="del">${dat[1]}</span>（廃館）`;
                }
            }
        } else {
            if (!dat[2] && !dat[5]) { // 住所なし、リンクなし
                return `${dat[0]} ${dat[1]}（住所不明）`
            } else if (!dat[2] && dat[5]) { // 住所なし、リンクあり
                return `${dat[0]} <a href="${dat[5]}">${dat[1]}</a>（住所不明）`
            } else if (!dat[5]) { // 住所あり、リンクなし
                return `${dat[0]} ${dat[1]}（${dat[2]+dat[3]+dat[4]}）`
            } else { // 住所あり、リンクあり
                return `${dat[0]} <a href="${dat[5]}">${dat[1]}</a>（${dat[2]+dat[3]+dat[4]}）`
            }
        }
    }
    
    document.getElementById('lib').innerHTML = getInsertion(dat);
}
