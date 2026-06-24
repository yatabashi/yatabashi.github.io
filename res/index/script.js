import { dailyRand } from "/res/rand.js"

function getLibDatStr(n) {
    const LIB = 7936;
    const MUS = 4372;
    const ARC = 102;

    const r = (n % (LIB + MUS + ARC)) + 1;
    let rISIL;
    if (r < LIB) {
        rISIL = `JP-1${r.toString().padStart(6, '0')}`;
    } else if (r == LIB) {
        rISIL = `JP-1${r.toString().padStart(6, '0')}`;
    } else if (r < LIB + MUS) {
        rISIL = `JP-2${(r - LIB).toString().padStart(6, '0')}`;
    } else if (r == LIB + MUS) {
        rISIL = `JP-2${(r - LIB).toString().padStart(6, '0')}`;
    } else if (r < LIB + MUS + ARC) {
        rISIL = `JP-3${(r - LIB - MUS).toString().padStart(6, '0')}`;
    } else { // r = LIB + MUS + ARC
        rISIL = `JP-3${(r - LIB - MUS).toString().padStart(6, '0')}`;
    }

    return [rISIL].concat(ISILTABLE[rISIL]);
}

function getInsertion(dat) {
    if (dat.length == 3) { // 欠番・廃館
        if (dat[2]) {
            let postDat = [dat[2]].concat(ISILTABLE[dat[2]]);
            return `${dat[0]} <del>${dat[1]}</del>`
                + `<br>→`
                + ` ${getInsertion(postDat)}`;
        } else {
            if (dat[1] == "[欠番]") {
                return `${dat[0]} ${dat[1]}`;
            } else {
                return `${dat[0]} <del>${dat[1]}</del>（廃館）`;
            }
        }
    } else {
        if (!dat[2] && !dat[5]) { // 住所なし、リンクなし
            return `<span>${dat[0]}</span> <span>${dat[1]}</span>`
        } else if (!dat[2] && dat[5]) { // 住所なし、リンクあり
            return `<span>${dat[0]}</span> <span><a href="${dat[5]}">${dat[1]}</a></span>`
        } else if (!dat[5]) { // 住所あり、リンクなし
            return `<span>${dat[0]}</span> <span>${dat[1]}</span> <span>（${dat[2]+dat[3]+dat[4]}）</span>`
        } else { // 住所あり、リンクあり
            return `<span>${dat[0]}</span> <span><a href="${dat[5]}">${dat[1]}</a></span> <span>（${dat[2]+dat[3]+dat[4]}）</span>`
        }
    }
}

let data = getLibDatStr(dailyRand());
document.getElementById('lib').innerHTML = getInsertion(data);
