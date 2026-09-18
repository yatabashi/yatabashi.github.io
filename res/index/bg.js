let m = (new Date()).getMonth() + 1;

if (3 <= m && m < 6) {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/yumihari-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.75)";
} else if (6 <= m && m < 12) {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/yokaiti-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.8)";
// } else if (9 <= m && m < 12) {
//     document.getElementById("bg-img").style.backgroundImage = "url('/res/index/.jpg')";
//     document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.8)";
} else {  // 冬: 12月〜2月
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/kamiazimi-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.7)";
}
