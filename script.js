const hamburgerOpen = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger_close");
const sidebar = document.getElementById("sidebar");

hamburgerOpen.addEventListener("click", () => {
    console.log("added");
    sidebar.classList.add("open");
});

hamburgerClose.addEventListener("click", () => {
    console.log("removed");
    sidebar.classList.remove("open");
});
