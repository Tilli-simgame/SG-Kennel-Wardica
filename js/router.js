// Simple client-side router with hash-based routing
class Router {
  constructor() {
    this.routes = {}
    this.currentRoute = ""

    // Initial navigation based on hash
    this.navigateToCurrentHash()
  }

  // Add a route
  addRoute(path, callback) {
    this.routes[path] = callback
    return this
  }

  // Add a parameterized route (like #/dogs/:slug)
  addParamRoute(pathPattern, callback) {
    const pattern = new RegExp("^" + pathPattern + "$")
    this.routes[pathPattern] = { pattern, callback }
    return this
  }

  // Get the current route from hash
  getRouteFromHash() {
    const hash = window.location.hash
    if (!hash || hash === "#") {
      return "/home"
    }
    return hash.substring(1) // Remove the # character
  }

  // Navigate to a route
  navigate(path) {
    // Update the hash without the # prefix
    window.location.hash = path
  }

  // Navigate based on current hash
  navigateToCurrentHash() {
    const path = this.getRouteFromHash()
    this.handleRoute(path)
  }

  // Handle the current route
  handleRoute(path) {
    this.currentRoute = path

    // Check for exact route match
    if (this.routes[path]) {
      this.routes[path]()
      return
    }

    // Check for parameterized routes
    for (const route in this.routes) {
      if (typeof this.routes[route] === "object" && this.routes[route].pattern) {
        const match = path.match(this.routes[route].pattern)
        if (match) {
          // Extract parameters
          const params = match.slice(1)
          this.routes[route].callback(...params)
          return
        }
      }
    }

    // No route found - show 404
    this.notFound()
  }

  // Handle links
  handleLinks() {
    document.querySelectorAll("a[data-link]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const path = link.getAttribute("href")
        this.navigate(path)
      })
    })
  }

  // 404 page
  notFound() {
    document.getElementById("app").innerHTML = `
      <div class="container mx-auto px-4 py-8 text-center">
        <h1 class="text-4xl font-bold mb-4">404 - Sivua ei löytynyt</h1>
        <p class="mb-4">Valitettavasti etsimääsi sivua ei löytynyt.</p>
        <a href="/home" data-link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Takaisin etusivulle
        </a>
      </div>
    `
    this.handleLinks()
  }
}

export { Router }

