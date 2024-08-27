const carouselButton = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const informations = document.querySelectorAll(".information");

carouselButton.forEach((button, indice) => {
    button.addEventListener('click', () => {

        disableSelectedButton();

        markSelectedButton(button);

        hideActiveImage();

        showBackgroundImage(indice);

        hideActiveInformation();

        showInformation(indice);

    });
});

function markSelectedButton(button) {
    button.classList.add("selected");
}

function showInformation(indice) {
    informations[indice].classList.add("active");
}

function hideActiveInformation() {
    const activeInformation = document.querySelector(".active.information");
    activeInformation.classList.remove("active");
}

function showBackgroundImage(indice) {
    images[indice].classList.add("active");
}

function hideActiveImage() {
    const activeImage = document.querySelector(".active");
    activeImage.classList.remove("active");
}

function disableSelectedButton() {
    const buttonSelected = document.querySelector(".selected");
    buttonSelected.classList.remove("selected");
}
