const data = [
    {
        "table": document.getElementById('gtq'),
        "file": GTQLIST
    },
    {
        "table": document.getElementById('xgtq'),
        "file": XGTQLIST
    }
]

for (let set of data) {
    let inner = '';
    
    let tag = 'th';
    set.file.map((row) => {
        inner += '<tr>';
        row.map((item) => {
            inner += `<${tag}>${item}</${tag}>`
        });
        inner += '</tr>';
        
        tag = 'td';
    })
    
    set.table.insertAdjacentHTML('afterbegin', inner);
}

for (let table of document.getElementsByClassName('bridges')) {
    for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        
        if (i == 0) {
            let cell = row.insertCell(-1);
            cell.outerHTML = "<th colspan=\"3\">リンク</th>"
        } else {
            const lat = row.cells[5].firstChild.data.slice(0, -1);
            const lon = row.cells[6].firstChild.data.slice(0, -1);
            
            let gsi = row.insertCell(-1);
            gsi.innerHTML = `<a href="https://maps.gsi.go.jp/#16/${lat}/${lon}">地理院</a>`;
            
            let mapion = row.insertCell(-1);
            mapion.innerHTML = `<a href="https://www.mapion.co.jp/m2/${lat},${lon},16">Mapion</a>`;
            
            let google = row.insertCell(-1);
            google.innerHTML = `<a href="https://www.google.com/maps/place/${lat},${lon}">Google</a>`;
        }
        
        if (i == 0) {
            continue;
        }
        
        if (row.cells[1].innerHTML.includes('ﾀﾆﾀﾞ')) {
            row.bgColor = '#F5E6A9';
        } else if (row.cells[1].innerHTML.includes('ﾀﾆﾀ')) {
            row.bgColor = '#FFDAD5';
        } else if (row.cells[1].innerHTML.includes('ﾀﾝﾀﾞ')) {
            row.bgColor = '#B8F3D2';
        } else if (row.cells[1].innerHTML.includes('ﾔﾀﾞ')) {
            row.bgColor = '#EEE0FD';
        } else if (row.cells[1].innerHTML.includes('ﾔﾀ')) {
            row.bgColor = '#B4EFFD';
        } else {
            row.bgColor = '#E5E5E5';
        }
    }
}
