let shelf = "shelf-interests";

let numbers = [...Array(interests.length)].map((_, i) => i);

for (let i of numbers) {
    let book = interests[i];

    let elmBook = document.createElement("div");
    elmBook.className = "book";
    elmBook.open = "true";

    let elmTitle = document.createElement("p");
    elmTitle.className = "title";
    let titles = book[0].reduce((acc, val) => {
        if (acc) {
            return acc.concat(`<br>${val[0]} / ${val[1]}`);
        } else {
            return acc.concat(`${val[0]} / ${val[1]}`);
        }
    }, "")
    elmTitle.innerHTML = titles;
    elmBook.appendChild(elmTitle);

    let elmComment = document.createElement("p");
    elmComment.className = "comment";
    elmComment.innerHTML = book[1];
    elmBook.appendChild(elmComment);

    document.getElementById(shelf).appendChild(elmBook);
}
