// Main data file that imports from individual dog files
import dogs from "./data/dogs/index.js"

// Export the dog data array
const dogData = dogs

// Helper function to convert dog name to URL slug
function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-")
}

// Function to get dog by slug
function getDogBySlug(slug) {
  return dogData.find((dog) => slugify(dog.name) === slug)
}

// Export the variables and functions
export { dogData, slugify, getDogBySlug }

