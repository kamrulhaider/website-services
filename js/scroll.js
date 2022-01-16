const backToTop = document.getElementById('back-to-top');
console.log(backToTop)
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});