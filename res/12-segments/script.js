function createSquare(segments) {
    let svgTag = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgTag.setAttribute("version", "1.1");
    svgTag.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgTag.setAttribute("width", "80px");
    svgTag.setAttribute("height", "80px");
    svgTag.setAttribute("viewBox", "0 0 120 120");

    let gTag = document.createElementNS("http://www.w3.org/2000/svg", "g");
    gTag.setAttribute("stroke-width", "4");
    svgTag.appendChild(gTag);

    coords = [
        {x1: "20", y1: "20", x2: "60", y2: "20"}, 
        {x1: "60", y1: "20", x2: "100", y2: "20"}, 
        {x1: "20", y1: "20", x2: "20", y2: "60"}, 
        {x1: "60", y1: "20", x2: "60", y2: "60"}, 
        {x1: "100", y1: "20", x2: "100", y2: "60"}, 
        {x1: "20", y1: "60", x2: "60", y2: "60"}, 
        {x1: "60", y1: "60", x2: "100", y2: "60"}, 
        {x1: "20", y1: "60", x2: "20", y2: "100"}, 
        {x1: "60", y1: "60", x2: "60", y2: "100"}, 
        {x1: "100", y1: "60", x2: "100", y2: "100"}, 
        {x1: "20", y1: "100", x2: "60", y2: "100"}, 
        {x1: "60", y1: "100", x2: "100", y2: "100"}
    ]

    for (let i = 0; i < coords.length; i++) {
        let lineTag = document.createElementNS("http://www.w3.org/2000/svg", "line");
        lineTag.setAttribute("x1", coords[i].x1);
        lineTag.setAttribute("y1", coords[i].y1);
        lineTag.setAttribute("x2", coords[i].x2);
        lineTag.setAttribute("y2", coords[i].y2);
        lineTag.setAttribute("stroke", segments.includes(i + 1) ? "black" : "none");
        lineTag.setAttribute("stroke-linecap", "round");
        gTag.appendChild(lineTag);
    }

    return svgTag;
}

let ss = {
    s1: createSquare([3, 6, 7]), 
    s2: createSquare([3, 8, 11, 12]), 
    s3: createSquare([1, 3, 8, 9, 10, 12]), 
    s4: createSquare([8, 11, 12]), 
    s5: createSquare([1, 2]), 
    s6: createSquare([6, 7]), 
    s7: createSquare([11, 12]), 
    s8: createSquare([1, 6, 12]), 
    s9: createSquare([1, 3, 6, 9, 12]), 
};

Object.keys(ss).forEach(key => {
    ss[key].setAttribute("width", "1.8rem");
    ss[key].setAttribute("height", "1.8rem");
    ss[key].firstChild.setAttribute("stroke-width", "8");
    ss[key].setAttribute("style", "vertical-align: bottom;");

    ss[key].setAttribute("width", "1.8rem");
});

for (let [key, value] of Object.entries(ss)) {
    document.getElementById(key).appendChild(value);
}

for (let segments of segmentList) {
    let square = createSquare(segments);
    document.getElementById("svgs").appendChild(square);
}
