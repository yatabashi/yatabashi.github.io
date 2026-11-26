let m = (new Date()).getMonth() + 1;

if (3 <= m && m < 6) {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/yumihari-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.78)";
    document.getElementById("bg-img").style.backgroundPositionX = "40%"
} else if (6 <= m && m < 9) {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/yokaiti-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.84)";
    document.getElementById("bg-img").style.backgroundPositionX = "60%"
} else if (9 <= m && m < 12) {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/inaba-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.82)";
    document.getElementById("bg-img").style.backgroundPositionX = "80%"
} else {
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/kamiazimi-blur.jpg')";
    document.getElementById("bg-overlay").style.backgroundColor = "rgba(255, 252, 249, 0.72)";
    document.getElementById("bg-img").style.backgroundPositionX = "20%"
}
