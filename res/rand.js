function today() {
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');

    return Number(year+month+day);
}

export function dailyRand(day = today()) {
    let x = 123456789;
    let y = 362436069;
    let z = 521288629;
    let w = Number(day);

    function xorshift() {
        const t = x ^ (x << 11);
        x = y; y = z; z = w;
        w = (w^(w>>19))^(t^(t>>8));
    };

    for (let i = 0; i < 32; i++) {
        xorshift();
    }

    return w;
}
