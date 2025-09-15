rubyIsVisible = true;
brIsVisible = true;
IDCIsVisible = true;
showsVertically = true;

function switchRubyVisibility() {
    rubyIsVisible = !rubyIsVisible;
    for (let e of document.getElementById("text-container").getElementsByTagName("rt")) {
        e.hidden = !rubyIsVisible;
    }
    
    document.getElementById("rubySwitch").textContent = rubyIsVisible ? "ルビ非表示" : "ルビ表示";
}

function switchBrVisibility() {
    brIsVisible = !brIsVisible;
    for (let e of document.getElementById("text-container").getElementsByTagName("br")) {
        if (e.className == "weak") {
            e.hidden = !brIsVisible;
        }
    }
    
    document.getElementById("brSwitch").textContent = brIsVisible ? "改行非表示" : "改行表示";
    document.getElementById("text-container").style.maxHeight = brIsVisible ? null : "90%";
    document.getElementById("text-container").style.overflowY = brIsVisible ? null : "hidden";
    document.getElementById("text-container").style.whiteSpace = brIsVisible ? "nowrap" : "normal";
}

function switchIDCVisibility() {
    IDCIsVisible = !IDCIsVisible;
    for (let e of document.getElementById("text-container").getElementsByClassName("IDC")) {
        e.hidden = !IDCIsVisible;
    }
    
    document.getElementById("IDCSwitch").textContent = IDCIsVisible ? "異体字記述非表示" : "異体字記述表示";
}

function switchWritingMode() {
    showsVertically = !showsVertically;
    document.getElementById("text-container").style.writingMode = showsVertically ? "vertical-rl" : "horizontal-tb";
    document.getElementById("text-container").style.lineHeight = showsVertically ? null : "1.8rem";
    
    document.getElementById("wmSwitch").textContent = showsVertically ? "横書きで読む" : "縦書きで読む";
}

function limitRange(e) {
    if (Number(e.target.value) < Number(e.target.min)) {
        e.target.value = e.target.min;
    } else if (Number(e.target.value) > Number(e.target.max)) {
        e.target.value = e.target.max;
    }
}

document.getElementById("pageId").addEventListener("change", limitRange);

function getXinContainer(id) {
    container = document.getElementById("text-container");
    targetPage = document.getElementById(id);
    
    let containerRightToFrameRight = container.scrollLeft;
    let frameRightToframeLeft = -container.clientWidth;
    let screenLeftToTargetRight = targetPage.getBoundingClientRect().right;
    let screenLeftToFrameLeft = container.getBoundingClientRect().left;
    
    return containerRightToFrameRight
            + frameRightToframeLeft
            + (screenLeftToTargetRight - screenLeftToFrameLeft);
}

function jump() {
    if (showsVertically) {
        document.getElementById("text-container").scrollLeft = getXinContainer(`p${document.getElementById("pageId").value}`);
    } else {
        location.href = `#p${document.getElementById("pageId").value}`;
    }
}

function showLocation(e) {
    let currentPage = Number(document.getElementById("pageId").value);
    
    if ((FIRSTRIGHT) < e.target.scrollLeft) {
        // 先頭頁の右端に到達した
        currentPage = 1;
        document.getElementById("pageId").value = currentPage;
    } else if (e.target.scrollLeft <= (LASTRIGHT)) {
        // 末尾頁の右端に到達した
        currentPage = document.getElementById("text-container").children[0].childElementCount;
        document.getElementById("pageId").value = currentPage;
    } else if (getXinContainer(`p${currentPage}`) < e.target.scrollLeft) {
        // フレーム右端が前の頁に入った
        currentPage--;
        document.getElementById("pageId").value = currentPage;
        
        showLocation(e); // 一気に複数のページを移動していた場合のために再実行
    } else if (e.target.scrollLeft <= getXinContainer(`p${currentPage+1}`)) {
        // フレーム右端が後の頁に入った
        currentPage++;
        document.getElementById("pageId").value = currentPage;
        
        showLocation(e);
    }
}

document.getElementById("text-container").addEventListener("scroll", showLocation);


// テキストを生成
i = 1;

inserted = `<ol><li id=\"p${i}\">`;

for (let line of TEXT.split("\n")) {
    switch (line) {
        case "EOF":
            inserted += "</li></ol>";
            break;
        case "":
            i++;
            inserted += `<hr></li><li id=\"p${i}\">`;
            break;
        case "sep":
            inserted += "<hr>";
            break;
        case "flex":
            inserted += "<div class=\"flexbox\"><div>";
            break;
        case "flex:annot":
            inserted += "<div class=\"flexbox annot\"><div>";
            break;
        case "/":
            inserted += "</div><div>";
            break;
        case "/flex":
            inserted += "</div></div>";
            break;
        default:
            let suffix = "";
            
            if (line.slice(-1) == "：") {
                line = line.slice(0, -1);
                suffix = "";
            } else if (line.slice(-1) == "；") {
                line = line.slice(0, -1);
                suffix = "<br>";
            } else {
                suffix = "<br class=\"weak\">";
            }
            
            line = line.replace(/｜([^（]+)（([^）]+)）/g, "<ruby>$1<rt>$2</rt></ruby>")
                        .replace(/(.)（([^）]+)）/g, "<ruby>$1<rt>$2</rt></ruby>")
                        .replace(/＾(.)/g, "<sup>$1</sup>")
                        .replace(/＿(.)/g, "<sub>$1</sub>")
                        .replace(/［[^］]*］/g, "<span class=\"IDC\">$&</span>")
                        .replace(/＜([^＞]*)＞/g, (match, p1) =>
                            "<span class=\"block\">" +
                            p1.replaceAll("・", "<br>") +
                            "</span>"
                        )
                        .replace(/「([^・]*)・([^・]*)・([^・]*)・([^・]*)・([^」]*)」/g,
                                "<span class=\"diamond\">" +
                                    "<span>$1</span>" +
                                    "<span>$2<br>$5<br>$4</span>" +
                                    "<span>$3</span>" +
                                "</span>"
                        );
            
            inserted += line + suffix;
    }
}

document.getElementById("text-container").innerHTML = inserted;

// スクロールを0にする
document.getElementById("text-container").scrollLeft = 0;

// 先頭頁のrightを記録
const FIRSTRIGHT = document.getElementById("text-container").children[0].firstElementChild.getBoundingClientRect().right
                    - document.getElementById("text-container").getBoundingClientRect().right;

// 末尾頁のrightを記録
const LASTRIGHT = document.getElementById("text-container").children[0].lastElementChild.getBoundingClientRect().right
                    - document.getElementById("text-container").getBoundingClientRect().right;

// コマ番号inputのmaxを設定
document.getElementById("pageId").max = document.getElementById("text-container").children[0].childElementCount;

// デフォルトで異体字記述を非表示
switchIDCVisibility();
