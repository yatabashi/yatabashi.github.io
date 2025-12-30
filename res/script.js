document.addEventListener("DOMContentLoaded", () => {
    for (let a of document.getElementsByTagName("a")) {
        if (
            (
                !a.href.includes("https:") && 
                !a.href.includes("http:")
            ) ||
            a.href.includes("https://yatabashi.github.io")
           ) {
            continue
        }

        a.setAttribute("target", "_blank");
    }
});
