hljs.addPlugin({
    'after:highlightElement': ({ el, result, _ }) => {
        let classes = el.outerHTML.match(/<code[^>]*>/)[0].match(/(?<=class=")[^"]*/)[0].split(" ");

        if (classes.includes("code-ln")) {
            el.innerHTML = result.value.replace(/^/gm, '<span class="ln"></span>');
        } else if (classes.includes("code-bgn")) {
            el.innerHTML = result.value.replace(/^/gm, '<span class="bgn"></span>');
        }
    }
});

hljs.configure({languages: []});
hljs.highlightAll();
