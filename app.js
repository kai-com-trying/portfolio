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