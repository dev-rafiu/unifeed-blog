// **selectors**
const header = document.querySelector(".main-header");
const menuBtn = document.querySelector(".menu-btn");
// const closeBtn = document.querySelector(".close-btn");

// **event listeners**
menuBtn.addEventListener("click", () => {
  header.classList.toggle("show-nav");
});
