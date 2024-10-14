/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

 const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');

    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');

  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};

window.addEventListener('keydown', handleFirstTab);

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

const alterStyles = (isVisible) => {
  backToTopButton.style.visibility = isVisible ? "visible" : "hidden";
  backToTopButton.style.opacity = isVisible ? 1 : 0;
  backToTopButton.style.transform = isVisible ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  isBackToTopRendered = window.scrollY > 700;
  alterStyles(isBackToTopRendered);
});

// Review data
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
  reviewsList.innerHTML = ""; // Clear existing reviews
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

// Handle form submission
const reviewForm = document.getElementById("reviewForm");
reviewForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const reviewText = document.getElementById("reviewText").value;

  // Add new review to the reviews array
  reviews.push({
    author: "New Reviewer", // Placeholder for the author
    text: reviewText,
  });

  // Clear the textarea
  document.getElementById("reviewText").value = "";

  // Re-render the reviews
  renderReviews();
});

// Call the renderReviews function to populate the reviews once DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderReviews();
});