document.getElementById("burger").addEventListener("click", (e) => {
    let article = e.target;

    if (article === null) {
        return;
    }

    let burgerMenu = document.getElementById("burger-nav");
    let display = burgerMenu.style.display;

    console.log(display);

    if (display === "" || display === "none") {
        burgerMenu.style.display = "block";
    } else {
        burgerMenu.style.display = "none";
    }
});