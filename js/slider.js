// ----- SLIDER -----

var slideIndex = 0;
var timeoutID;

var slides = [
    'images/slider/out1.jpg',
    'images/slider/in1.jpeg',
    'images/slider/in2.jpeg',
    'images/slider/in3.jpeg'
];

// initializeaza slider-ul
function launchSlider() {
    setSlider();
    setLegend();
}
// derularea slide-urilor in galerie
function setSlider() {
    var slider = document.getElementsByClassName("slide");
    if (slider && slider[0]) {
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slider[0].src = '../' + slides[slideIndex++];
        updateLegend(slideIndex);

        timeoutID = setTimeout(setSlider, 7000);
    }
}

// afisarea slide-ului precedent
function prevSlider() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }
    moveSlider();
}
// afisarea slide-ului urmator
function nextSlider() {
    moveSlider();
}
// anuleaza Timeout-ul setat si misca slide-ul
function moveSlider() {
    if (timeoutID) {
        clearTimeout(timeoutID);
    }
    setSlider();
}

// creeaza legenda slider-ului
function setLegend() {
    var legendObj = document.getElementsByClassName("legend");
    var legend = '';
    for (var i = 0; i< slides.length; i++) {
        legend += '<i class="fas fa fa-circle ' + (i==0 ? 'active' : '') + '"></i>';
    // parcurge array slides si concateneaza in variabila legend elementele i
    }
    if (legendObj && legendObj.length) {
        legendObj[0].innerHTML = legend;
    }
}
// actualizeaza clasa 'active' la elementele din legenda
function updateLegend(index) {
    var legendObj = document.getElementsByClassName("legend");
    var items = legendObj[0].getElementsByTagName('i');

    for (var i = 0; i< items.length; i++) {
        removeClass(items[i], ' active');
        if (i == (index -1)) {
            items[i].className += ' active';
        }
    }
}

// derularea slide-urilor in index.html
function setBgSlider() {
    var slider = document.getElementsByClassName("slideshow-container");
    if (slider && slider[0]) {
        slider[0].style.backgroundImage = 'url(' + slides[slideIndex++] + ')';
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        setTimeout(setBgSlider, 10000);
    }
}

setBgSlider();
