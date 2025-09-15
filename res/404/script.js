const CHRS = "abcdefghijklmnopqrstuvwxyz0123456789-";
const randname = Array(Math.ceil(Math.random() * 20)).fill(undefined).map(() => CHRS[Math.floor(Math.random() * CHRS.length)]).join('');
document.getElementById('url').href = `${randname}.html`;
document.getElementById('url').textContent = `${randname}.html`;
