let m = (new Date()).getMonth();

if (2 <= m && m < 11) {  // 春〜秋: 3月〜11月
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/yumihari-180.jpg')";
} else {  // 冬: 12月〜2月
    document.getElementById("bg-img").style.backgroundImage = "url('/res/index/kamiazimi-180.jpg')";
}
