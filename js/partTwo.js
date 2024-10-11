const container = document.querySelector(".container");
const buttonText = document.querySelector(".color")
const button = document.querySelector(".button");

function changeColorbackground() {
    container.classList.replace("container", "container-alt");
    buttonText.textContent = "darkblue";
}

container.addEventListener("click", changeColorbackground);
