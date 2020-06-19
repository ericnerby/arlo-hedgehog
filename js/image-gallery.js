let slideIndex = 0;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Dot selectors
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
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