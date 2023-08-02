isClicked = false;

function button() {

    isClicked = !isClicked;

    var toggleDiv = document.getElementById("_toggle");
    var menuDiv = document.getElementsByClassName("menu")[0];

    if (isClicked) {
        // toggleDiv.style.background = "url('img/close.png')";
        toggleDiv.classList.add("active");
        menuDiv.style.transform = "translateX(0%)";
        toggleDiv.style.transform = "translateX(-240px)";

    } else {
        console.log("here");
        // toggleDiv.style.background = "url('img/menbut.png')";
        toggleDiv.classList.remove("active");
        menuDiv.style.transform = "translateX(100%)";
        toggleDiv.style.transform = "translateX(0vw)";
    }

}