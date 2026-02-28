document.addEventListener("DOMContentLoaded", () => {
    const codeElements = Array.from(document.getElementsByTagName("pre"))
                             .map(pre => pre.getElementsByTagName("code")[0]);

                             console.log(codeElements);

    for (let codeElement of codeElements) {
        if (codeElement.classList.contains("code-ln")) {
            codeElement.innerHTML = codeElement.innerHTML.replace(/^/gm, '<span class="ln"></span>');
        } else if (codeElement.classList.contains("code-bgn")) {
            codeElement.innerHTML = codeElement.innerHTML.replace(/^/gm, '<span class="bgn"></span>');
        }
    }
});
