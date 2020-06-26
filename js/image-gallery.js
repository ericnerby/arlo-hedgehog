// ----- Select Buttons ----- /
const prevButton = document.getElementsByClassName("prev");
const nextButton = document.getElementsByClassName("next");
const imageSelectors = document.querySelectorAll(".dot");

// ----- Event Listeners ----- /
prevButton.addEventListener('click', () => {
    plusSlides(-1);
});
nextButton.addEventListener('click', () => {
    plusSlides(1);
});

let slideIndex = 0;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot selectors

function generateDotSelectors(slides) {
    let container = document.querySelector('.imageSelectors');
    for (let i=0; i<slides.length; i++) {
        let newDot = document.createElement('span');
        newDot.innerHTML = `<span class="dot" id="selector${i}"></span>`;
        container.appendChild(newDot);
    }
    let dots = document.getElementsByClassName("dot");
    return dots;
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = generateDotSelectors(slides);
    if (n >= slides.length) { // Go to the first image if next is clicked on the last image
        slideIndex = 0
    } else if (n < 0) { // Go to the last image if previous is clicked on the first image
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) { // Hide each slide in the collection
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) { // Remove active class from each dot
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block"; // Display the selected slide
    dots[slideIndex].className += " active"; // Add active class to selected dot
}