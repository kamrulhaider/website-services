function openNav() {
    let sidenav = document.getElementById("mySidebar"),
        main = document.getElementById("main");
    main.style.marginLeft = main.style.marginLeft === "0px" ? "200px" : "0px";
    sidenav.style.width = sidenav.style.width === "0px" ? "200px" : "0px";
}

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}