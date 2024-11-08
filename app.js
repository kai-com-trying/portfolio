/*Section 1*/

const image = document.getElementById('image')

const showMika = () => {
    image.src = "./resources/mika2.JPG"
}

const showPfp = () => {
    image.src = "./resources/pfp.jpg"
}

image.addEventListener ('mousedown', showMika);
image.addEventListener ('mouseup', showPfp);
image.addEventListener ('mouseleave', showPfp);

/*Section 2*/

// Select all image containers
const secTwoImgContainers = document.querySelectorAll('.image-container');

// Loop through each image container and add the event listeners
secTwoImgContainers.forEach((container) => {
    const overlayText = container.querySelector('.overlay'); // Select the overlay within the current container

    const overlayAppear = () => {
        overlayText.style.display = 'block';
    };

    const overlayDisappear = () => {
        overlayText.style.display = 'none';
    };

    container.addEventListener('mouseover', overlayAppear);
    container.addEventListener('mouseout', overlayDisappear);
});
