window.addEventListener('DOMContentLoaded', function(){
    document.getElementById("siga-year-selector").value = 0;
    document.getElementById("siga-1931").style.opacity = 1;
    document.getElementById("siga-1961").style.opacity = 0;
    document.getElementById("siga-1972").style.opacity = 0;
    document.getElementById("siga-2026").style.opacity = 0;

    document.getElementById("siga-admin-year-selector").value = 0;
    document.getElementById("siga-admin-1931").style.opacity = 1;
    document.getElementById("siga-admin-1961").style.opacity = 0;
    document.getElementById("siga-admin-2026").style.opacity = 0;

    let siga_datalist = document.getElementById("siga-vals");
    if (window.getComputedStyle(siga_datalist).height == "0px") {
        document.getElementById("siga-vals-alt").style.display = "flex";
    }

    let siga_admin_datalist = document.getElementById("siga-admin-vals");
    if (window.getComputedStyle(siga_admin_datalist).height == "0px") {
        document.getElementById("siga-admin-vals-alt").style.display = "flex";
    }
});

document.getElementById("siga-year-selector").oninput = () => {
    switch (document.getElementById("siga-year-selector").value) {
        case "0": {
            document.getElementById("siga-1931").style.opacity = 1;
            document.getElementById("siga-1961").style.opacity = 0;
            document.getElementById("siga-1972").style.opacity = 0;
            document.getElementById("siga-2026").style.opacity = 0;
            break;
        }

        case "1": {
            document.getElementById("siga-1931").style.opacity = 0;
            document.getElementById("siga-1961").style.opacity = 1;
            document.getElementById("siga-1972").style.opacity = 0;
            document.getElementById("siga-2026").style.opacity = 0;
            break;
        }

        case "2": {
            document.getElementById("siga-1931").style.opacity = 0;
            document.getElementById("siga-1961").style.opacity = 0;
            document.getElementById("siga-1972").style.opacity = 1;
            document.getElementById("siga-2026").style.opacity = 0;
            break;
        }

        case "3": {
            document.getElementById("siga-1931").style.opacity = 0;
            document.getElementById("siga-1961").style.opacity = 0;
            document.getElementById("siga-1972").style.opacity = 0;
            document.getElementById("siga-2026").style.opacity = 1;
            break;
        }
    }
};

document.getElementById("siga-admin-year-selector").oninput = () => {
    switch (document.getElementById("siga-admin-year-selector").value) {
        case "0": {
            document.getElementById("siga-admin-1931").style.opacity = 1;
            document.getElementById("siga-admin-1961").style.opacity = 0;
            document.getElementById("siga-admin-2026").style.opacity = 0;
            break;
        }

        case "1": {
            document.getElementById("siga-admin-1931").style.opacity = 0;
            document.getElementById("siga-admin-1961").style.opacity = 1;
            document.getElementById("siga-admin-2026").style.opacity = 0;
            break;
        }

        case "2": {
            document.getElementById("siga-admin-1931").style.opacity = 0;
            document.getElementById("siga-admin-1961").style.opacity = 0;
            document.getElementById("siga-admin-2026").style.opacity = 1;
            break;
        }
    }
};
