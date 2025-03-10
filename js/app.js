import { Router } from "./router.js"
import { renderHomePage } from "./home.js"
import { renderDogsPage, initDogListingFilters } from "./dogs.js"
import { renderDogProfilePage } from "./dog-profile.js"
import { renderServicesPage } from "./services.js"
import { renderFacilitiesPage } from "./facilities.js"
import { initScrollDownButton } from "./utils.js"

// Initialize the router
const router = new Router()

// Add routes
router.addRoute("/home", () => {
  document.getElementById("app").innerHTML = renderHomePage()
  initScrollDownButton()
  router.handleLinks()
})

router.addRoute("/dogs", () => {
  document.getElementById("app").innerHTML = renderDogsPage()
  initScrollDownButton()
  initDogListingFilters()
  router.handleLinks()
})

// Add the services route
router.addRoute("/services", () => {
  document.getElementById("app").innerHTML = renderServicesPage()
  initScrollDownButton()
  router.handleLinks()
})

// Add the facilities route
router.addRoute("/facilities", () => {
  document.getElementById("app").innerHTML = renderFacilitiesPage()
  initScrollDownButton()
  router.handleLinks()
})

router.addParamRoute("/dogs/([^/]+)", (slug) => {
  const dogProfileHtml = renderDogProfilePage(slug)
  if (dogProfileHtml) {
    document.getElementById("app").innerHTML = dogProfileHtml
    initScrollDownButton()
    router.handleLinks()
  } else {
    router.notFound()
  }
})

// Default route
router.addRoute("/", () => {
  router.navigate("/home")
})

// Handle initial page load
document.addEventListener("DOMContentLoaded", () => {
  // Handle hash changes
  window.addEventListener("hashchange", () => {
    router.navigateToCurrentHash()
  })

  // Initial navigation
  router.navigateToCurrentHash()
})

