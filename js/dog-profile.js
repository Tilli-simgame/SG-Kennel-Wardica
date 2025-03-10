import { renderHeader, renderContentBox, renderFooter } from "./components.js"
import { getDogBySlug } from "./utils.js"
import { formatDate, getFormattedAge } from "./utils/date-utils.js"

// Dog Profile component
function renderDogProfile(dog) {
  if (!dog) return ""

  return `
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- First column - Photo (20% width) -->
        <div class="lg:w-1/5">
          ${renderContentBox(
            "Kuva",
            `
            <img 
              src="${dog.image}" 
              alt="${dog.name} ${dog.breed}"
              class="rounded-lg shadow-md w-full"
            />
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}
          
          ${renderContentBox(
            "Kuvagalleria",
            `
            <div class="grid grid-cols-2 gap-2">
              ${dog.gallery
                .map(
                  (photo, index) => `
                <img 
                  src="${photo}" 
                  alt="${dog.name} kuva ${index + 1}"
                  class="rounded-lg shadow-md w-full h-auto"
                />
              `,
                )
                .join("")}
            </div>
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}
        </div>

        <!-- Second column - Basic info, personality, and competition calendar (60% width) -->
        <div class="lg:w-3/5 text-xl lg:border-l lg:border-r border-blue-900 lg:px-8">
          ${renderContentBox(
            `${dog.name}n Profiili`,
            `
            <div class="grid grid-cols-2 gap-4 mb-4">
              <p><strong>Rotu:</strong> ${dog.breed}</p>
              <p><strong>Kutsumanimi:</strong> ${dog.nickname}</p>
              <p><strong>Syntymäaika:</strong> ${formatDate(dog.dob)}</p>
              <p><strong>Ikä:</strong> ${getFormattedAge(dog.dob)}</p>
              <p><strong>Sukupuoli:</strong> ${dog.gender}</p>
              <p><strong>Paino:</strong> ${dog.weight} kg</p>
            </div>
            <p class="mb-4"><strong>Kuvaus:</strong> ${dog.description}</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Luonne</h3>
              <p class="mb-2">${dog.personalityDescription}</p>
              <strong>Keskeiset piirteet:</strong>
              <ul class="list-disc list-inside">
                ${dog.personality.map((trait) => `<li>${trait}</li>`).join("")}
              </ul>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Sukupuu</h3>
              <p><strong>Isä:</strong> ${dog.pedigree.father}</p>
              <p><strong>Äiti:</strong> ${dog.pedigree.mother}</p>
              <strong>Merkittävät esivanhemmat:</strong>
              <ul class="list-disc list-inside">
                ${dog.pedigree.notable_ancestors.map((ancestor) => `<li>${ancestor}</li>`).join("")}
              </ul>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Koulutus ja saavutukset</h3>
              <strong>Sertifikaatit:</strong>
              <ul class="list-disc list-inside mb-2">
                ${dog.training.certifications.map((cert) => `<li>${cert}</li>`).join("")}
              </ul>
              <strong>Saavutukset:</strong>
              <ul class="list-disc list-inside">
                ${dog.training.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
              </ul>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-bold text-blue-900 mb-2">Kilpailukalenteri</h3>
              ${
                dog.competitions.length > 0
                  ? `
                <div class="overflow-x-auto">
                  <table class="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr class="bg-gray-100">
                        <th class="py-2 px-4 border-b text-left">Kilpailu</th>
                        <th class="py-2 px-4 border-b text-left">Päivämäärä</th>
                        <th class="py-2 px-4 border-b text-left">Sijainti</th>
                        <th class="py-2 px-4 border-b text-left">Tyyppi</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${dog.competitions
                        .map(
                          (competition, index) => `
                        <tr class="${index % 2 === 0 ? "bg-gray-50" : "bg-white"}">
                          <td class="py-2 px-4 border-b">${competition.name}</td>
                          <td class="py-2 px-4 border-b">${competition.date}</td>
                          <td class="py-2 px-4 border-b">${competition.location}</td>
                          <td class="py-2 px-4 border-b">${competition.type}</td>
                        </tr>
                      `,
                        )
                        .join("")}
                    </tbody>
                  </table>
                </div>
              `
                  : `
                <p>Ei tulevia kilpailuja aikataulutettu.</p>
              `
              }
            </div>            
          `,
            "text-2xl text-blue-900",
            "mt-4",
          )}
        </div>

        <!-- Third column - Health details, Daily Schedule, Grooming Needs, and Dietary Information (20% width) -->
        <div class="lg:w-1/5">
          ${renderContentBox(
            "Terveystiedot",
            `
            <div class="space-y-2">
              <p><strong>Lonkat:</strong> ${dog.health.hips}</p>
              <p><strong>Kyynärpäät:</strong> ${dog.health.elbows}</p>
              <p><strong>Selkäranka:</strong> ${dog.health.spinal}</p>
              <p><strong>Olkapäät:</strong> ${dog.health.shoulders}</p>
              ${
                dog.health.geneTests.length > 0
                  ? `
                <div>
                  <strong>Geenitestit:</strong>
                  <ul class="list-disc list-inside mt-2">
                    ${dog.health.geneTests.map((test) => `<li>${test}</li>`).join("")}
                  </ul>
                </div>
              `
                  : ""
              }
            </div>
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}

          ${renderContentBox(
            "Päiväohjelma",
            `
            <ul class="list-disc list-inside space-y-1">
              ${dog.dailySchedule.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}

          ${renderContentBox(
            "Turkinhoitotarpeet",
            `
            <ul class="list-disc list-inside space-y-1">
              ${dog.groomingNeeds.map((need) => `<li>${need}</li>`).join("")}
            </ul>
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}

          ${renderContentBox(
            "Ruokavaliotiedot",
            `
            <div class="space-y-2">
              <p><strong>Ruokatyyppi:</strong> ${dog.dietaryInformation.foodType}</p>
              ${
                dog.dietaryInformation.specialDiet
                  ? `
                <p><strong>Erikoisruokavalio:</strong> ${dog.dietaryInformation.specialDiet}</p>
              `
                  : ""
              }
              <p><strong>Ruokinta-aikataulu:</strong> ${dog.dietaryInformation.feedingSchedule}</p>
              <div>
                <strong>Herkut:</strong>
                <ul class="list-disc list-inside mt-1">
                  ${dog.dietaryInformation.treats.map((treat) => `<li>${treat}</li>`).join("")}
                </ul>
              </div>
            </div>
          `,
            "text-lg text-blue-900",
            "mt-4",
          )}
        </div>
      </div>

      <div class="mt-8">
        <a 
          href="/dogs" 
          data-link
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Takaisin kaikkiin koiriin
        </a>
      </div>
    </div>
  `
}

// Dog profile page layout
function renderDogProfilePage(slug) {
  const dog = getDogBySlug(slug)
  if (!dog) return null

  return `
    ${renderHeader()}
    ${renderDogProfile(dog)}
    ${renderFooter()}
  `
}

export { renderDogProfilePage }
