document.addEventListener("DOMContentLoaded", () => {
    let quoteP = document.getElementById("quote");
    let h = (new Date()).getHours();

    if (0 <= h && h < 6) {
        quoteP.innerText = "遠く離れたビーチに行かないか";
    } else if (6 <= h && h < 12) {
        quoteP.innerText = "阿耨多羅三藐三菩提のほとけたち\u200b我が立つ杣に冥加有らせ給へ";
    } else if (12 <= h && h < 18) {
        quoteP.innerText = "知らない角とか曲がったりして迷子になろう";
    } else if (18 <= h && h < 24) {
        quoteP.innerText = "Ku yàgg dox, yàgg gis.";
    }
});
