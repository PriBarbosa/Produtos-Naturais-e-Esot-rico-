
function mostrarAlerta() {
    alert("Descubra os melhores produtos naturais para seu bem-estar!");
}

window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}