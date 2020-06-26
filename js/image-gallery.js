// ----- Initial Setup ----- /

// assign selector buttons and dots container to variables
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let imageSelectors = document.querySelector('.imageSelectors');

// generate dots
(function() {
    // generate a dot for each slide when page loads
    let slides = document.getElementsByClassName("slides");
    for (let i=0; i<slides.length; i++) {
        let newDot = document.createElement('span');
        newDot.className = 'dot';
        newDot.dataset.index = i;
        imageSelectors.appendChild(newDot);
    }
})();

// initialize slide index and call the showSlides function to display the first image
let slideIndex = 0;
showSlides(slideIndex);

// ----- Event Listeners ----- /
prevButton.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
});
nextButton.addEventListener('click', () => {
    showSlides(slideIndex += 1);
});

imageSelectors.addEventListener('click', (event) => {
    slideIndex = event.target.dataset.index;
    showSlides(slideIndex);
});

// ----- Primary Functions ----- /

// this function is called when the page loads and when a slide selector of any kind is clicked
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { // Go to the first image if next is clicked on the last image
        slideIndex = 0;
    } else if (n < 0) { // Go to the last image if previous is clicked on the first image
        slideIndex = slides.length -1;
    }
    hideSlides(slides,dots)
    slides[slideIndex].style.display = "block"; // Display the selected slide
    dots[slideIndex].className += " active"; // Add active class to selected dot
}

function hideSlides(slides,dots) {
    for (let i = 0; i < slides.length; i++) { // Hide each slide in the collection
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) { // Remove active class from each dot
        dots[i].className = dots[i].className.replace(" active", "");
    }
}