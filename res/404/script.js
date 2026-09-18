document.addEventListener("DOMContentLoaded", () => {
    let quoteP = document.getElementById("quote");
    let h = (new Date()).getHours();

    if (0 <= h && h < 8) {
        quoteP.innerText = "阿耨多羅三藐三菩提のほとけたち\u200b我が立つ杣に冥加有らせ給へ";
    } else if (8 <= h && h < 16) {
        quoteP.innerText = "Đây là quê hương của chúng tôi.";
    } else if (16 <= h && h < 24) {
        quoteP.innerText = "知らない角とか曲がったりして迷子になろう";
    }
});
