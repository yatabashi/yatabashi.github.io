const hokkaidoPoints = urls.hokkaido.match(/(?<=M=)\d+(?=&)/)[0];

const subprefMunis = {
    isikari: [0, 16, 23, 30, 32, 33, 35, 36], 
    osima: [1, 34, 37, 38, 39, 40, 41, 42, 43, 44, 45], 
    hiyama: [46, 47, 48, 49, 50, 51, 52], 
    siribesi: [2, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71], 
    sorati: [8, 9, 14, 15, 17, 21, 24, 25, 26, 27, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85], 
    kamikawa: [3, 19, 20, 28, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], 
    rumoi: [11, 105, 106, 107, 108, 109, 110, 111], 
    soya: [13, 112, 113, 114, 115, 116, 117, 118, 119, 120], 
    okhotsk: [7, 10, 18, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135], 
    iburi: [4, 12, 29, 31, 136, 137, 138, 139, 140, 141, 142], 
    hidaka: [143, 144, 145, 146, 147, 148, 149], 
    tokati: [6, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167], 
    kusiro: [5, 168, 169, 170, 171, 172, 173, 174], 
    nemuro: [22, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184]
};
const subprefs = Object.keys(subprefMunis);

// 北海道の振興局ごとのURLを取得
for (let subpref of subprefs) {
    let result = "";

    for (let i = 0; i < hokkaidoPoints.length; i++) {
        if (subprefMunis[subpref].includes(i)) {
            result += hokkaidoPoints[i];
        } else {
            result += "0";
        }
    }

    urls[subpref] = urls.hokkaido.replace(hokkaidoPoints, result);
}

// URLを割り当て
for (let pref of Object.keys(urls)) {
    // 振興局ごとのリンクに対応するためには short_urls ではなく urls を使わなければならない
    document.getElementById(pref).href = urls[pref];
    document.getElementById(pref).setAttribute("target", "_blank");
}

// 達成率等を計算
let data = {};

for (let pref of Object.keys(urls)) {
    const points = urls[pref].match(/(?<=M=)\d+(?=&)/)[0];
    const size = subprefs.includes(pref) ? subprefMunis[pref].length : points.length;
    const sum = Array.from(points).reduce((sum, point) => sum + Number(point), 0);
    const way = (points.match(/[12345]/g) ?? []).length;
    const visited = (points.match(/[345]/g) ?? []).length;
    data[pref] = {size: size, sum: sum, way: way, visited: visited};
}

// 都道府県別合計について計算
let totalDat = Object.keys(data).reduce(
    (acc, pref) => {
        if (pref == "zenkoku" || subprefs.includes(pref)) {
            return acc;
        } else {
            return {size: acc.size + data[pref].size, 
                    sum: acc.sum + data[pref].sum, 
                    way: acc.way + data[pref].way, 
                    visited: acc.visited + data[pref].visited};
        }
    }, {size: 0, sum: 0, way: 0, visited: 0});

data.total = totalDat;

// データを挿入
// const calc = code => Function('data', `return ${code}`)(data);
// const calc = code => Function(`return data => ${code}`)()(data);

const rows = ["zenkoku", "total", "hokkaido", "isikari", "osima", "hiyama", "siribesi", "sorati", "kamikawa", "rumoi", "soya", "okhotsk", "iburi", "hidaka", "tokati", "kusiro", "nemuro", "aomori", "iwate", "miyagi", "akita", "yamagata", "hukusima", "ibaraki", "totigi", "gunma", "saitama", "tiba", "tokyo", "kanagawa", "niigata", "toyama", "isikawa", "hukui", "yamanasi", "nagano", "gihu", "sizuoka", "aiti", "mie", "siga", "kyoto", "osaka", "hyogo", "nara", "wakayama", "tottori", "simane", "okayama", "hirosima", "yamaguti", "tokusima", "kagawa", "ehime", "koti", "hukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagosima", "okinawa"];
let i = 0;

for (let table of [document.getElementById("table1"), document.getElementById("table2")]) {
    const trs = Object.values(table.children[0].children).slice(1);
    for (let tr of trs) {
        let td1 = document.createElement("td");
        td1.textContent = data[rows[i]].sum;
        // td1.textContent = `data.${rows[i]}.sum`;

        let td2 = document.createElement("td");
        td2.textContent = data[rows[i]].way;
        let td3 = document.createElement("td");
        td3.textContent = data[rows[i]].visited;

        let td4 = document.createElement("td");
        td4.textContent = data[rows[i]].size;

        let td5 = document.createElement("td");
        td5.textContent = `${Math.floor(1000 * data[rows[i]].way / data[rows[i]].size) / 10}%`;
        // td2.textContent = `\`\${Math.floor(1000 * data.${rows[i]}.way/data.${rows[i]}.size) / 10}%\``;
        let td6 = document.createElement("td");
        td6.textContent = `${Math.floor(1000 * data[rows[i]].visited / data[rows[i]].size) / 10}%`;
        // td3.textContent = `\`\${Math.floor(1000 * data.${rows[i]}.visited/data.${rows[i]}.size) / 10}%\``;

        tr.append(td1, td2, td3, td4, td5, td6);

        // for (let cell of tr.children) {
        //     if (cell.tagName == "TD") {
        //         cell.textContent = calc(cell.textContent);
        //     }
        // }

        i++;
    }
}


// 北海道の振興局を表示・非表示
document.getElementById("showsSubpref").addEventListener("change", (e) => {
    let hokkaidoLi = document.getElementsByClassName("hokkaido")[0];

    if (!e.target.checked) {
        document.getElementById("subprefs").hidden = true;

        for (let subpref of subprefs) {
            document.getElementById(subpref+"Tr").hidden = true;
        }
    } else {
        document.getElementById("subprefs").hidden = false;

        for (let subpref of subprefs) {
            document.getElementById(subpref+"Tr").hidden = false;
        }
    }
});


// 表のソート
let selectedCol = 0;
let sortType = 0;

for (let sorter of document.getElementsByClassName("sorter")) {
    sorter.parentElement.style.cursor = "pointer";
    sorter.style.userSelect = "none";

    sorter.parentElement.addEventListener("click", () => {
        if (selectedCol == Number(sorter.id[3])) {
            sortType = sortType + 1 > 2 ? 0 : sortType + 1;
        } else {
            sortType = 1;
            selectedCol = Number(sorter.id[3]);
        }

        switch (sortType) {
            case 0:
                sorter.innerHTML = `<use href="#arrow_drop_updown">`
                document.getElementById("table2").className = "borderControlled";
                break;
            case 1:
                sorter.innerHTML = `<use href="#arrow_drop_up">`
                document.getElementById("table2").className = "";
                break;
            case 2:
                sorter.innerHTML = `<use href="#arrow_drop_down">`
                document.getElementById("table2").className = "";
                break;
        }

        for (let e of document.getElementsByClassName("sorter")) {
            if (selectedCol != Number(e.id[3])) {
                e.innerHTML = `<use href="#arrow_drop_updown">`
            }
        }

        const sorted = 
            [document.getElementById("table2").children[0].children[0]].concat(
            Object.values(document.getElementById("table2").children[0].children).slice(1).sort((a, b) => {
                // if (a.children[selectedCol].textContent == "NaN") {
                //     return 1
                // } else if (b.children[selectedCol].textContent == "NaN") {
                //     return -1
                // }

                const aNumber = Number(a.children[selectedCol].textContent.replace("%", ""));
                const bNumber = Number(b.children[selectedCol].textContent.replace("%", ""));

                if (sortType == 0) {
                    return Number(a.children[0].textContent) - Number(b.children[0].textContent);
                } else if (sortType == 1) {
                    return bNumber - aNumber;
                } else if (sortType == 2) {
                    return aNumber - bNumber;
                }
            }));

        for (let tr of sorted) {
            document.getElementById("table2").children[0].appendChild(tr);
        }
    });
}
