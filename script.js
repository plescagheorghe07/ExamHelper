function checkWindowSize() {
    var content = document.getElementById("header");
    if (content.offsetWidth < 750) {
        content.style.justifyContent = "center"; // Schimbă align-ul la "center" dacă lățimea ferestrei e mai mică decât 6000px
    } 
    else {
        content.style.justifyContent = "space-between";
    }
}

// Verifică dimensiunea ferestrei la încărcarea paginii
window.addEventListener("load", checkWindowSize);

// Verifică dimensiunea ferestrei și la redimensionare
window.addEventListener("resize", checkWindowSize);
