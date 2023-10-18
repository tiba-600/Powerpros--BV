var show_menuo = document.querySelector(".meno");
var logo_bars = document.querySelector(".logo-bars");
logo_bars.addEventListener('click', togle_event);

function togle_event() {
    console.log("hello");
    show_menuo.classList.toggle("togle");
}