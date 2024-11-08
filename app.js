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


/*Section 3*/

let targetSaving = 0;
let targetYear = 0;
let interestRate = 0;

const target = document.getElementById('target');
const targetPlusButton = document.getElementById('target-plus-button');
const targetMinusButton = document.getElementById('target-minus-button');

const targetSavingYear = document.getElementById('target-year');
const targetYearPlusButton = document.getElementById('target-year-plus-button');
const targetYearMinusButton = document.getElementById('target-year-minus-button');

const interest = document.getElementById('interest');
const interestPlusButton = document.getElementById('interest-plus-button');
const interestMinusButton = document.getElementById('interest-minus-button');

const saving = document.getElementById('saving');

const addTargetSaving = () => {
    targetSaving += 10000;
    target.innerHTML = targetSaving;
}

const minusTargetSaving = () => {
    targetSaving -= 10000;
    target.innerHTML = targetSaving;
}

const addTargetYear = () => {
    targetYear ++;
    targetSavingYear.innerHTML = targetYear;
}

const minusTargetYear = () => {
    targetYear --;
    targetSavingYear.innerHTML = targetYear;
}

const addInterestRate = () => {
    interestRate += 0.0025
    interest.innerHTML = (interestRate * 100).toFixed(2);
}

const minusInterestRate = () => {
    interestRate -= 0.0025
    interest.innerHTML = (interestRate * 100).toFixed(2);
}

targetPlusButton.addEventListener('click', addTargetSaving);
targetMinusButton.addEventListener('click', minusTargetSaving);

targetYearPlusButton.addEventListener('click', addTargetYear);
targetYearMinusButton.addEventListener('click', minusTargetYear);

interestPlusButton.addEventListener('click', addInterestRate);
interestMinusButton.addEventListener('click', minusInterestRate);


