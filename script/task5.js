window.addEventListener("click", function (event) {
    const clickedPlace = document.getElementById("place");

    if (event.target === clickedPlace) {
        console.log(true);
    } else {
        console.log(false);
    }
});
