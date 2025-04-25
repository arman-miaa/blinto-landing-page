const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");
const navAuth = document.querySelector(".nav-auth");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
  navAuth.classList.add("active");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navAuth.classList.remove("active");
  closeBtn.classList.remove("active");
});

// Add this to your existing app.js file
document.addEventListener('DOMContentLoaded', function() {
  const scrollTopButton = document.getElementById('scrollTop');
  
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopButton.style.opacity = '1';
      } else {
        scrollTopButton.style.opacity = '0';
      }
    });
  }
});

// Add this to your existing app.js file
document.addEventListener('DOMContentLoaded', function() {
  // Get all FAQ question elements
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  // Add click event listener to each question
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      // Get the parent FAQ item
      const faqItem = this.parentElement;
      
      // Get the answer element
      const answer = faqItem.querySelector('.faq-answer');
      
      // Check if this item is already active
      const isActive = faqItem.classList.contains('active');
      
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('show');
      });
      
      // If the clicked item wasn't active, open it
      if (!isActive) {
        faqItem.classList.add('active');
        answer.classList.add('show');
      }
    });
  });
});