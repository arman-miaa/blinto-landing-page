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
