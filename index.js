/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

const reviews = [
  {
    author: "John Doe",
    text: "This product changed my life! Highly recommend.",
  },
  {
    author: "Jane Smith",
    text: "Fantastic quality and great customer service.",
  },
  {
    author: "Michael Johnson",
    text: "I wasn't satisfied with my purchase, but the support team was very helpful.",
  },
];

// Function to render customer reviews
const renderReviews = () => {
  const reviewsList = document.getElementById("reviewsList");
  reviews.forEach((review) => {
    const listItem = document.createElement("li");
    listItem.classList.add("customer-reviews__item");
    listItem.innerHTML = `
      <span class="customer-reviews__author">${review.author}</span>
      <p class="customer-reviews__text">${review.text}</p>
    `;
    reviewsList.appendChild(listItem);
  });
};

// Call the renderReviews function to populate the reviews
renderReviews();