// se apeleaza functia la incarcarea paginii in browser
function onload() {
    getYear();
    console.log('page loaded');
    // setScrollListener();
}

// se apeleaza functia la incarcarea paginii Programare
function onloadFormular() {
    getYear();
    setPhoneListener();
}

// functia pentru afisarea meniului din hamburger-menu
function toggleMenu(value) {
    var menu_items = document.getElementById("menu_items");
    if (menu_items) {
        var isHidden = menu_items.style.display === "none" || menu_items.style.display === "";
        menu_items.style.display = isHidden ? "block" : "none";
    }
}

// functia pentru afisarea data, luna si anul curent in Footer
function getYear() {
    var d = new Date(),
        date = d.getDate(),
        mon = d.getMonth(),
        yr = d.getFullYear();
    var days = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
    // document.getElementById("year").innerHTML = ((date < 10) ? '0' + date : date) + "/" +
    document.getElementById("year").innerHTML = ('0' + date).slice(-2) + "/" +
        // (((mon + 1) < 10) ? '0' + (mon + 1) : (mon + 1)) + "/" + yr + " " + days[d.getDay()];
        ('0' + (mon + 1)).slice(-2) + "/" + yr + " " + days[d.getDay()];
}

// functia care valideaza numarul de telefon introdus in formularul pentru programare
function setPhoneListener() {
    document.getElementById("phone_input").addEventListener("input",
        function (event) {
            var phone = event.target.value;
            var mesaj = (/^(0)(6|7|2)[0-9]{7}$/.test(phone)) ? ("Număr valid") : ("Nu este corect numărul de telefon!");
            document.getElementById("txt").innerHTML = mesaj;
        });
}

// elimina clasa css a unui element din DOM
function removeClass(obj, className) {
    if (obj && obj.className) {
        obj.className = obj.className.replace(className, '');
    }
}

// afiseaza rubrica 'Alte informatii'
function info() {
    var inf = document.getElementById("info");
    var hidden = inf.style.display === "none" || inf.style.display === "";
    inf.style.display = hidden ? "block" : "none";
}