import { dogData, slugify } from "./data.js"
import { renderHeader, renderLeftSidebar, renderRightSidebar, renderContentBox, renderFooter } from "./components.js"
import { calculateAge, getFormattedAge } from "./utils/date-utils.js"

// Dog Listing component
function renderDogListing() {
  return `
    <main class="w-full md:w-[70%] md:ml-4 text-base">
      <div id="dog-listing-container">
        ${renderContentBox(
          "Meidän ihanat koiramme",
          `
          <div class="mb-4 flex flex-wrap gap-4">
            <div>
              <label for="breed-filter" class="block text-sm font-medium text-gray-700 mb-1">Suodata rodun mukaan:</label>
              <select
                id="breed-filter"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Kaikki rodut</option>
                ${[...new Set(dogData.map((dog) => dog.breed))]
                  .sort()
                  .map((breed) => `<option value="${breed}">${breed}</option>`)
                  .join("")}
              </select>
            </div>
            <div>
              <label for="age-filter" class="block text-sm font-medium text-gray-700 mb-1">Suodata iän mukaan:</label>
              <select
                id="age-filter"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Kaikki iät</option>
                <option value="0-2">0-2 vuotta</option>
                <option value="3-5">3-5 vuotta</option>
                <option value="6+">6+ vuotta</option>
              </select>
            </div>
            <div>
              <label for="gender-filter" class="block text-sm font-medium text-gray-700 mb-1">Suodata sukupuolen mukaan:</label>
              <select
                id="gender-filter"
                class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option value="">Kaikki sukupuolet</option>
                <option value="Uros">Uros</option>
                <option value="Narttu">Narttu</option>
              </select>
            </div>
            <div class="flex items-end">
              <button
                id="clear-filters-btn"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Tyhjennä suodattimet
              </button>
            </div>
          </div>
          <p class="mb-4 text-sm">
            Tapaa meidän ihanat koirat, jotka tällä hetkellä asuvat Kennel Wardicassa. Jokaisella on ainutlaatuinen persoonallisuus ja he saavat parasta mahdollista hoitoa!
          </p>
          <div id="dogs-grid" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            ${dogData
              .map(
                (dog) => `
              <a 
                href="/dogs/${slugify(dog.name)}" 
                data-link
                class="block border border-blue-200 rounded-lg p-2 hover:shadow-md transition-shadow duration-300 hover:bg-blue-50"
              >
                <img 
                  src="${dog.image}" 
                  alt="${dog.name} ${dog.breed}"
                  class="rounded-lg mb-1 mx-auto w-20 h-20 object-cover"
                />
                <h3 class="text-base font-bold text-blue-900 mb-1 truncate">${dog.name} "${dog.nickname}"</h3>
                <p class="text-xs truncate"><strong>Rotu:</strong> ${dog.breed}</p>
                <p class="text-xs"><strong>Ikä:</strong> ${getFormattedAge(dog.dob)}</p>
                <p class="text-xs"><strong>Sukupuoli:</strong> ${dog.gender}</p>
                <p class="text-xs truncate"><strong>Luonne:</strong> ${dog.personality.join(", ")}</p>
              </a>
            `,
              )
              .join("")}
          </div>
        `,
          "text-2xl text-blue-900",
          "mt-4",
        )}
      </div>
    </main>
  `
}

// Dogs page layout
function renderDogsPage() {
  return `
    ${renderHeader()}
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      ${renderLeftSidebar()}
      ${renderRightSidebar()}
      <div class="w-[2px] bg-blue-900 hidden md:block"></div>
      ${renderDogListing()}
    </div>
    ${renderFooter()}
  `
}

// Update the filterDogs function in initDogListingFilters
function initDogListingFilters() {
  const breedFilter = document.getElementById("breed-filter")
  const ageFilter = document.getElementById("age-filter")
  const genderFilter = document.getElementById("gender-filter")
  const clearFiltersBtn = document.getElementById("clear-filters-btn")
  const dogsGrid = document.getElementById("dogs-grid")

  if (!breedFilter || !ageFilter || !genderFilter || !clearFiltersBtn || !dogsGrid) return

  // Filter function
  function filterDogs() {
    const breedValue = breedFilter.value
    const ageValue = ageFilter.value
    const genderValue = genderFilter.value

    // Filter dogs
    const filteredDogs = dogData.filter((dog) => {
      const breedMatch = breedValue === "" || dog.breed === breedValue
      const genderMatch = genderValue === "" || dog.gender === genderValue

      // Get age in years for filtering
      const dogAgeInfo = calculateAge(dog.dob)
      const dogAgeYears = dogAgeInfo.years

      let ageMatch = true
      if (ageValue === "0-2") ageMatch = dogAgeYears >= 0 && dogAgeYears <= 2
      if (ageValue === "3-5") ageMatch = dogAgeYears >= 3 && dogAgeYears <= 5
      if (ageValue === "6+") ageMatch = dogAgeYears >= 6

      return breedMatch && ageMatch && genderMatch
    })

    // Update grid
    dogsGrid.innerHTML = filteredDogs
      .map(
        (dog) => `
      <a 
        href="/dogs/${slugify(dog.name)}" 
        data-link
        class="block border border-blue-200 rounded-lg p-2 hover:shadow-md transition-shadow duration-300 hover:bg-blue-50"
      >
        <img 
          src="${dog.image}" 
          alt="${dog.name} ${dog.breed}"
          class="rounded-lg mb-1 mx-auto w-20 h-20 object-cover"
        />
        <h3 class="text-base font-bold text-blue-900 mb-1 truncate">${dog.name} "${dog.nickname}"</h3>
        <p class="text-xs truncate"><strong>Rotu:</strong> ${dog.breed}</p>
        <p class="text-xs"><strong>Ikä:</strong> ${getFormattedAge(dog.dob)}</p>
        <p class="text-xs"><strong>Sukupuoli:</strong> ${dog.gender}</p>
        <p class="text-xs truncate"><strong>Luonne:</strong> ${dog.personality.join(", ")}</p>
      </a>
    `,
      )
      .join("")

    // Re-attach event listeners to links
    document.querySelectorAll("a[data-link]").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const path = link.getAttribute("href")
        window.location.hash = path
      })
    })
  }

  // Add event listeners
  breedFilter.addEventListener("change", filterDogs)
  ageFilter.addEventListener("change", filterDogs)
  genderFilter.addEventListener("change", filterDogs)

  // Clear filters
  clearFiltersBtn.addEventListener("click", () => {
    breedFilter.value = ""
    ageFilter.value = ""
    genderFilter.value = ""
    filterDogs()
  })
}

export { renderDogsPage, initDogListingFilters }

