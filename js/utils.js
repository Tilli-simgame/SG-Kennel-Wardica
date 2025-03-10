// Utility functions

// Import from data.js
import { slugify as dataSlugify, getDogBySlug as dataGetDogBySlug } from "./data.js"

// Re-export the functions from data.js
export const slugify = dataSlugify
export const getDogBySlug = dataGetDogBySlug

// Initialize scroll down button
function initScrollDownButton() {
  const scrollDownBtn = document.getElementById("scroll-down-btn")
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      })
    })
  }
}

export { initScrollDownButton }

