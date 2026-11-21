document.addEventListener("DOMContentLoaded", () => {
    let quoteP = document.getElementById("quote");
    let h = (new Date()).getHours();

    if (0 <= h && h < 4) {
        quoteP.innerText = "遠く離れたビーチへ行かないか";
    } else if (4 <= h && h < 8) {
        quoteP.innerText = "朝日が昇る 私は旅する";
    } else if (8 <= h && h < 12) {
        quoteP.innerText = "阿耨多羅三藐三菩提のほとけたち 我が立つ杣に冥加有らせ給へ";
    } else if (12 <= h && h < 16) {
        quoteP.innerText = "知らない角とか曲がったりして迷子になろう";
    } else if (16 <= h && h < 20) {
        quoteP.innerHTML = "ベーグルを一口 満ち足りて街を出る";
    } else if (20 <= h && h < 24) {
        quoteP.innerText = "僕が旅に出る理由はだいたい百個くらいあって";
    }
});
