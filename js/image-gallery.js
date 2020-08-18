document.addEventListener("DOMContentLoaded", () => {

  // ----- Initial Setup ----- /

  // assign selector buttons, slides, and dots container to variables
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const imageSelectors = document.querySelector(".imageSelectors");
  const slides = document.getElementsByClassName("slides");

  //declare timer variable to be assigned in showSlides function
  let slideTimer;

  // generate a dot for each slide when page loads
  for (let i=0; i<slides.length; i++) {
    let newDot = document.createElement("span");
    newDot.classList.add("dot");
    newDot.dataset.index = i;
    imageSelectors.appendChild(newDot);
  }

  // initialize slide index and call the showSlides function to display the first image
  let slideIndex = 0;
  showSlides(slideIndex);

  // ----- Event Listeners ----- /
  prevButton.addEventListener("click", () => {
    showSlides(slideIndex -= 1);
  });
  nextButton.addEventListener("click", () => {
    showSlides(slideIndex += 1);
  });

  imageSelectors.addEventListener("click", (event) => {
    slideIndex = event.target.dataset.index;
    showSlides(slideIndex);
  });

  // ----- Primary Functions ----- /

  // this function is called when the page loads and when a slide selector of any kind is clicked
  function showSlides(n = (slideIndex += 1)) {
    clearTimeout(slideTimer); // clear timer so it can be reset at the end of the function
    let dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { // Go to the first image if next is clicked on the last image
      slideIndex = 0;
    } else if (n < 0) { // Go to the last image if previous is clicked on the first image
      slideIndex = slides.length -1;
    }
    hideSlides(dots)
    slides[slideIndex].style.display = "block"; // Display the selected slide
    dots[slideIndex].classList.add("active"); // Add active class to selected dot
    slideTimer = window.setTimeout(showSlides, 10000); // set timer to show next slide after 10 seconds
  }

  function hideSlides(dots) {
    for (let i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none"; // Hide each slide in the collection
      dots[i].classList.remove("active"); // Remove active class from each dot
    }
  }

});