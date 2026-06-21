const CHOSEONG = {
    // 字母
    "g": "&#x1100;", "gg": "&#x1101;", "n": "&#x1102;", "d": "&#x1103;", 
    "dd": "&#x1104;", "r": "&#x1105;", "m": "&#x1106;", "b": "&#x1107;", 
    "bb": "&#x1108;", "s": "&#x1109;", "ss": "&#x110a;", "'": "&#x110b;", 
    "j": "&#x110c;", "jj": "&#x110d;", "c": "&#x110e;", "k": "&#x110f;", 
    "t": "&#x1110;", "p": "&#x1111;", "h": "&#x1112;", "ng": "&#x1113;", 
    "nn": "&#x1114;", "nd": "&#x1115;", "nb": "&#x1116;", "dg": "&#x1117;", 
    "rn": "&#x1118;", "rr": "&#x1119;", "rh": "&#x111a;", "r'": "&#x111b;", 
    "mb": "&#x111c;", "m'": "&#x111d;", "bg": "&#x111e;", "bn": "&#x111f;", 
    "bd": "&#x1120;", "bs": "&#x1121;", "bsg": "&#x1122;", "bsd": "&#x1123;", 
    "bsb": "&#x1124;", "bss": "&#x1125;", "bsj": "&#x1126;", "bj": "&#x1127;", 
    "bc": "&#x1128;", "bt": "&#x1129;", "bp": "&#x112a;", "b'": "&#x112b;", 
    "bb'": "&#x112c;", "sg": "&#x112d;", "sn": "&#x112e;", "sd": "&#x112f;", 
    "sr": "&#x1130;", "sm": "&#x1131;", "sb": "&#x1132;", "sbg": "&#x1133;", 
    "sss": "&#x1134;", "s'": "&#x1135;", "sj": "&#x1136;", "sc": "&#x1137;", 
    "sk": "&#x1138;", "st": "&#x1139;", "sp": "&#x113a;", "sh": "&#x113b;", 
    "s1": "&#x113c;", "ss1": "&#x113d;", "s2": "&#x113e;", "ss2": "&#x113f;", 
    "z": "&#x1140;", "'g": "&#x1141;", "'d": "&#x1142;", "'m": "&#x1143;", 
    "'b": "&#x1144;", "'s": "&#x1145;", "'z": "&#x1146;", "\'\'": "&#x1147;", 
    "'j": "&#x1148;", "'c": "&#x1149;", "'t": "&#x114a;", "'p": "&#x114b;", 
    "q": "&#x114c;", "j'": "&#x114d;", "j1": "&#x114e;", "jj1": "&#x114f;", 
    "j2": "&#x1150;", "jj2": "&#x1151;", "ck": "&#x1152;", "ch": "&#x1153;", 
    "c1": "&#x1154;", "c2": "&#x1155;", "pb": "&#x1156;", "p'": "&#x1157;", 
    "hh": "&#x1158;", "x": "&#x1159;", "gd": "&#x115a;", "ns": "&#x115b;", 
    "nj": "&#x115c;", "nh": "&#x115d;", "dr": "&#x115e;", "*": "&#x115f;", 

    // 字母拡張A
    "dm": "&#xa960;", "db": "&#xa961;", "ds": "&#xa962;", "dj": "&#xa963;", 
    "rg": "&#xa964;", "rgg": "&#xa965;", "rd": "&#xa966;", "rdd": "&#xa967;", 
    "rm": "&#xa968;", "rb": "&#xa969;", "rbb": "&#xa96a;", "rb'": "&#xa96b;", 
    "rs": "&#xa96c;", "rj": "&#xa96d;", "rk": "&#xa96e;", "mg": "&#xa96f;", 
    "md": "&#xa970;", "ms": "&#xa971;", "bst": "&#xa972;", "bk": "&#xa973;", 
    "bh": "&#xa974;", "ssb": "&#xa975;", "'r": "&#xa976;", "'h": "&#xa977;", 
    "jjh": "&#xa978;", "tt": "&#xa979;", "ph": "&#xa97a;", "hs": "&#xa97b;", 
    "xx": "&#xa97c;", 
}

const JUNGSEONG = {
    // 字母
    "*": "&#x1160;", "a": "&#x1161;", "ai": "&#x1162;", "ia": "&#x1163;", 
    "iai": "&#x1164;", "e": "&#x1165;", "ei": "&#x1166;", "ie": "&#x1167;", 
    "iei": "&#x1168;", "o": "&#x1169;", "oa": "&#x116a;", "oai": "&#x116b;", 
    "oi": "&#x116c;", "io": "&#x116d;", "u": "&#x116e;", "ue": "&#x116f;", 
    "uei": "&#x1170;", "ui": "&#x1171;", "iu": "&#x1172;", "y": "&#x1173;", 
    "yi": "&#x1174;", "i": "&#x1175;", "ao": "&#x1176;", "au": "&#x1177;", 
    "iao": "&#x1178;", "iaio": "&#x1179;", "eo": "&#x117a;", "eu": "&#x117b;", 
    "ey": "&#x117c;", "ieo": "&#x117d;", "ieu": "&#x117e;", "oe": "&#x117f;", 
    "oei": "&#x1180;", "oiei": "&#x1181;", "oo": "&#x1182;", "ou": "&#x1183;", 
    "ioia": "&#x1184;", "ioiai": "&#x1185;", "ioie": "&#x1186;", "ioo": "&#x1187;", 
    "ioi": "&#x1188;", "ua": "&#x1189;", "uiai": "&#x118a;", "uey": "&#x118b;", 
    "uiei": "&#x118c;", "uu": "&#x118d;", "iua": "&#x118e;", "iue": "&#x118f;", 
    "iuei": "&#x1190;", "iuie": "&#x1191;", "iuiei": "&#x1192;", "iuu": "&#x1193;", 
    "iui": "&#x1194;", "yu": "&#x1195;", "yy": "&#x1196;", "yiu": "&#x1197;", 
    "Ia": "&#x1198;", "iia": "&#x1199;", "Io": "&#x119a;", "Iu": "&#x119b;", 
    "iy": "&#x119c;", "i@": "&#x119d;", "@": "&#x119e;", "@e": "&#x119f;", 
    "@u": "&#x11a0;", "@i": "&#x11a1;", "@@": "&#x11a2;", "ay": "&#x11a3;", 
    "iau": "&#x11a4;", "ieia": "&#x11a5;", "oia": "&#x11a6;", "oiai": "&#x11a7;", 


    // 字母拡張B
    "oie": "&#xd7b0;", "ooi": "&#xd7b1;", "ioa": "&#xd7b2;", "ioai": "&#xd7b3;", 
    "ioe": "&#xd7b4;", "uie": "&#xd7b5;", "uii": "&#xd7b6;", "iuai": "&#xd7b7;", 
    "iuo": "&#xd7b8;", "ya": "&#xd7b9;", "ye": "&#xd7ba;", "yei": "&#xd7bb;", 
    "yo": "&#xd7bc;", "iiau": "&#xd7bd;", "iiai": "&#xd7be;", "iie": "&#xd7bf;", 
    "iiei": "&#xd7c0;", "Ioi": "&#xd7c1;", "iio": "&#xd7c2;", "iiu": "&#xd7c3;", 
    "ii": "&#xd7c4;", "@a": "&#xd7c5;", "@ei": "&#xd7c6;", 
    
    // 拗音化しうる母音の前で ㅣ の形で表れる i は大文字 I で書かれる。ただし #x1197 は衝突する字母が存在しないため小文字 i での入力を受け入れる（実装上は yiu でデータを持ち、入力に含まれる yIu を yiu に変換している）。
    // #x1197 ᆗ : 衝突しない
    // #x1198 ᆘ : #x1163 ᅣ と衝突
    // #x119a ᆚ : #x116d ᅭ と衝突
    // #x119b ᆛ : #x1172 ᅲ と衝突
    // #xd7c1 ퟁ : #x1188 ᆈ と衝突
}

const JONGSEONG = {
    // 字母
    "g": "&#x11a8;", "gg": "&#x11a9;", "gs": "&#x11aa;", "n": "&#x11ab;", 
    "nj": "&#x11ac;", "nh": "&#x11ad;", "d": "&#x11ae;", "r": "&#x11af;", 
    "rg": "&#x11b0;", "rm": "&#x11b1;", "rb": "&#x11b2;", "rs": "&#x11b3;", 
    "rt": "&#x11b4;", "rp": "&#x11b5;", "rh": "&#x11b6;", "m": "&#x11b7;", 
    "b": "&#x11b8;", "bs": "&#x11b9;", "s": "&#x11ba;", "ss": "&#x11bb;", 
    "'": "&#x11bc;", "j": "&#x11bd;", "c": "&#x11be;", "k": "&#x11bf;", 
    "t": "&#x11c0;", "p": "&#x11c1;", "h": "&#x11c2;", "gr": "&#x11c3;", 
    "gsg": "&#x11c4;", "ng": "&#x11c5;", "nd": "&#x11c6;", "ns": "&#x11c7;", 
    "nz": "&#x11c8;", "nt": "&#x11c9;", "dg": "&#x11ca;", "dr": "&#x11cb;", 
    "rgs": "&#x11cc;", "rn": "&#x11cd;", "rd": "&#x11ce;", "rdh": "&#x11cf;", 
    "rr": "&#x11d0;", "rmg": "&#x11d1;", "rms": "&#x11d2;", "rbs": "&#x11d3;", 
    "rbh": "&#x11d4;", "rb'": "&#x11d5;", "rss": "&#x11d6;", "rz": "&#x11d7;", 
    "rk": "&#x11d8;", "rx": "&#xx11d9;", "mg": "&#x11da;", "mr": "&#x11db;", 
    "mb": "&#x11dc;", "ms": "&#x11dd;", "mss": "&#x11de;", "mz": "&#x11df;", 
    "mc": "&#x11e0;", "mh": "&#x11e1;", "m'": "&#x11e2;", "br": "&#x11e3;", 
    "bp": "&#x11e4;", "bh": "&#x11e5;", "b'": "&#x11e6;", "sg": "&#x11e7;", 
    "sd": "&#x11e8;", "sr": "&#x11e9;", "sb": "&#x11ea;", "z": "&#x11eb;", 
    "'g": "&#x11ec;", "'gg": "&#x11ed;", "\'\'": "&#x11ee;", "'k": "&#x11ef;", 
    "q": "&#x11f0;", "qs": "&#x11f1;", "qz": "&#x11f2;", "pb": "&#x11f3;", 
    "p'": "&#x11f4;", "hn": "&#x11f5;", "hr": "&#x11f6;", "hm": "&#x11f7;", 
    "hb": "&#x11f8;", "x": "&#x11f9;", "gn": "&#x11fa;", "gb": "&#x11fb;", 
    "gc": "&#x11fc;", "gk": "&#x11fd;", "gh": "&#x11fe;", "nn": "&#x11ff;", 

    // 字母拡張B
    "nr": "&#xd7cb;", 
    "nc": "&#xd7cc;", "dd": "&#xd7cd;", "ddb": "&#xd7ce;", "db": "&#xd7cf;", 
    "ds": "&#xd7d0;", "dsg": "&#xd7d1;", "dj": "&#xd7d2;", "dc": "&#xd7d3;", 
    "dt": "&#xd7d4;", "rgg": "&#xd7d5;", "rgh": "&#xd7d6;", "rrk": "&#xd7d7;", 
    "rmh": "&#xd7d8;", "rbd": "&#xd7d9;", "rbp": "&#xd7da;", "rq": "&#xd7db;", 
    "rxh": "&#xd7dc;", "r'": "&#xd7dd;", "mn": "&#xd7de;", "mnn": "&#xd7df;", 
    "mm": "&#xd7e0;", "mbs": "&#xd7e1;", "mj": "&#xd7e2;", "bd": "&#xd7e3;", 
    "brp": "&#xd7e4;", "bm": "&#xd7e5;", "bb": "&#xd7e6;", "bsd": "&#xd7e7;", 
    "bj": "&#xd7e8;", "bc": "&#xd7e9;", "sm": "&#xd7ea;", "sb'": "&#xd7eb;", 
    "ssg": "&#xd7ec;", "ssd": "&#xd7ed;", "sz": "&#xd7ee;", "sj": "&#xd7ef;", 
    "sc": "&#xd7f0;", "st": "&#xd7f1;", "sh": "&#xd7f2;", "zb": "&#xd7f3;", 
    "zb'": "&#xd7f4;", "qm": "&#xd7f5;", "qh": "&#xd7f6;", "jb": "&#xd7f7;", 
    "jbb": "&#xd7f8;", "jj": "&#xd7f9;", "ps": "&#xd7fa;", "pt": "&#xd7fb;", 
}

const JAMO = [CHOSEONG, JUNGSEONG, JONGSEONG];
const MODERN = [
    "&#x1100;", "&#x1101;", "&#x1102;", "&#x1103;", "&#x1104;", "&#x1105;", "&#x1106;", "&#x1108;", "&#x1109;", "&#x110a;", "&#x110b;", "&#x110c;", "&#x110d;", "&#x110e;", "&#x110f;", "&#x1110;", "&#x1111;", "&#x1112;", 
    "&#x1161;", "&#x1162;", "&#x1163;", "&#x1164;", "&#x1165;", "&#x1166;", "&#x1168;", "&#x1169;", "&#x116a;", "&#x116b;", "&#x116c;", "&#x116d;", "&#x116e;", "&#x116f;", "&#x1170;", "&#x1171;", "&#x1172;", "&#x1173;", "&#x1174;", "&#x1175;", 
    "&#x11a8;", "&#x11a9;", "&#x11aa;", "&#x11ab;", "&#x11ac;", "&#x11ad;", "&#x11ae;", "&#x11af;", "&#x11b0;", "&#x11b1;", "&#x11b2;", "&#x11b3;", "&#x11b4;", "&#x11b5;", "&#x11b6;", "&#x11b8;", "&#x11b9;", "&#x11ba;", "&#x11bb;", "&#x11bc;", "&#x11bd;", "&#x11be;", "&#x11bf;", "&#x11c0;", "&#x11c1;", "&#x11c2;", 
    ""
]  // 1100..1112, 1160..1175, 11a8..11c2


function review() {
    // 0. 入力を正規化
    let text = document.querySelector('textarea').value;

    text = text.replace(/v/g, "b'")
                .replace(/vv/g, "bb'")
                .replace(/f/g, "p'")
                .replace(/w/g, "m'")
                .replace(/l/g, "r")
                .replace(/yIu/g, "yiu")
                .replace(/A/g, "@")

    // 1. 後ろからJamo列に変換
    let mode = 2;  // 0: CHOSEONG, 1: JUNGSEONG, 2: JONGSEONG
    let inJamoReversed = [];

    for (let i = text.length - 1; i >= 0; i--) {
        // 1-1-1. 空白が表れたときは空白を入れてパス
        if (text[i] == " ") {
            inJamoReversed.push(" ");
            console.log("SPACE")
            continue;
        }

        // 1-1-1-2. 改行が表れたときは改行を入れてパス
        if (text[i] == "\n") {
            inJamoReversed.push("\n");
            console.log("RETURN")
            continue;
        }

        // 1-1-1-2. 改行が表れたときは改行を入れてパス
        if (text[i] == "H") {
            inJamoReversed.push("&#x302e;");
            console.log("HIGH")
            continue;
        }
        if (text[i] == "R") {
            inJamoReversed.push("&#x302f;");
            console.log("RISING")
            continue;
        }

        // 1-1-2. ピリオドが表れたときは mode = 2; としてパス
        if (text[i] == ".") {
            mode = 2;
            console.log("BOUNDARY")
            continue;
        }

        // 1-1-3. mode == 2; のときに中声が表れたら mode = 1;
        // 入力は「初中終」「初中」のいずれかの繰り返しなので、後ろから読むとき「初」の前は「終」「中」のいずれかが出てくる。中声が表れたときは終声をスキップ
        if (mode == 2 && Object.keys(JUNGSEONG).includes(text[i])) {
            inJamoReversed.push("");
            console.log("JUNGSEONG")
            mode = 1;
        }

        // 1-2. 末尾3→2→1文字が有効か確認
        let match, len;
        // 末尾5文字が有効か確認
        if (match = JAMO[mode][text.substring(i-4, i+1)]) {
            len = 5;
        } else {
            // 末尾4文字が有効か確認
            if (match = JAMO[mode][text.substring(i-3, i+1)]) {
                len = 4;
            } else {
                // 末尾3文字が有効か確認
                if (match = JAMO[mode][text.substring(i-2, i+1)]) {
                    len = 3;
                } else {
                    // 末尾2文字が有効か確認
                    if (match = JAMO[mode][text.substring(i-1, i+1)]) {
                        len = 2;
                    } else {
                        // 末尾1文字が有効か確認
                        if (match = JAMO[mode][text[i]]) {
                            len = 1;
                        } else {
                            match = text[i];
                            len = 1;
                        }
                    }
                }
            }
        }
        console.log(i, text[i], mode, ">", match, len)

        // 1-3. Jamo列に追加
        inJamoReversed.push(match ?? text[i]);

        // 1-4-1. 読んだ長さに応じてインデックスを調整
        i = i - (len - 1);

        // 1-4-2. モードを切り替え
        if (mode == 0) {
            mode = 2;
        } else {
            mode--;
        }
    }

    // 2. Jamo列の反転配列を取得
    console.log(inJamoReversed.toReversed())

    let inJamo = inJamoReversed.toReversed();

    // 3. 長さ3ずつ読んで可能（古ハングルを含まない）ならSyllableに変換し、Syllable列に追加
    let inSyllable = "";

    const OFFSET = 0xAC00;
    let syllableCodePoint = OFFSET;
    mode = 0;
    for (let i = 0; i < inJamo.length; i++) {
        // 3-0-1. 空白を処理
        if (inJamo[i] == " ") {
            inSyllable += " ";
            continue;
        }

        // 3-0-2. 改行を処理
        if (inJamo[i] == "\n") {
            inSyllable += "\n";
            continue;
        }

        // 3-0-3. 傍点を処理
        if (inJamo[i] == "&#x302e;") {
            inSyllable += String.fromCodePoint(0x302e);
            continue;
        }
        if (inJamo[i] == "&#x302f;") {
            inSyllable += String.fromCodePoint(0x302f);
            continue;
        }

        if (MODERN.includes(inJamo[i]) &&
            MODERN.includes(inJamo[i+1]) &&
            MODERN.includes(inJamo[i+2])) {
            // 3-1. 初声を加算
            syllableCodePoint += (parseInt(inJamo[i].substring(3), 16) - 0x1100) * 588;

            // 3-2. 中声を加算
            syllableCodePoint += (parseInt(inJamo[i+1].substring(3), 16) - 0x1161) * 28;

            // 3-3. 終声があれば加算
            if (inJamo[i+2]) {
                syllableCodePoint += (parseInt(inJamo[i+2].substring(3), 16) - 0x11A7);
            }

            inSyllable += String.fromCodePoint(syllableCodePoint);
            syllableCodePoint = OFFSET;
        } else {
            inSyllable += String.fromCodePoint(parseInt(inJamo[i].substring(3), 16));
            inSyllable += String.fromCodePoint(parseInt(inJamo[i+1].substring(3), 16));
            if (inJamo[i+2]) {
                inSyllable += String.fromCodePoint(parseInt(inJamo[i+2].substring(3), 16));
            }
        }

        console.log(inSyllable);
        i = i + 2;
    }

    // 4. 出力
    document.getElementById('review').innerText = inSyllable;
}

function showHideCopier() {
    if (document.querySelector('textarea').value == "") {
        document.getElementById("copier").disabled = true;
    } else {
        document.getElementById("copier").disabled = false;
    }
}

function copy() {
    navigator.clipboard.writeText(document.getElementById("review").textContent);
    document.getElementById("copier").textContent = "コピーされました";
    setTimeout(() => {
        document.getElementById("copier").textContent = "出力をコピー"
    }, 2000);
}

const textarea = document.querySelector('textarea');

// textarea.focus();

textarea.addEventListener("input", (e) => {
    review();
    showHideCopier();
});

review();
showHideCopier();
