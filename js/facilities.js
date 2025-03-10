import { renderHeader, renderLeftSidebar, renderRightSidebar, renderContentBox, renderFooter } from "./components.js"

// Facilities page content
function renderFacilitiesContent() {
  return `
    <main class="w-full md:w-[70%] md:ml-4 text-[20px]">
      ${renderContentBox(
        "Tilat",
        `
        <h1 class="text-4xl font-bold mb-4 text-blue-900">Huippuluokan tilat lemmikkisi hyvinvointiin</h1>
        <p class="mb-6">
          Kennel Wardica on suunniteltu tarjoamaan lemmikillesi turvallinen, mukava ja virikkeellinen ympäristö. 
          Olemme investoineet huippuluokan tiloihin varmistaaksemme, että jokainen lemmikki saa parasta mahdollista hoitoa.
        </p>
        
        <div class="mb-8">
          <img 
            src="../assets/img/facilities-training.jpg" 
            alt="Kennel Wardican tilat" 
            class="w-full h-auto rounded-lg shadow-md mb-4"
          />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          ${renderFacilitySection(
            "Sisätilat",
            "../assets/img/facilities-indoors.jpg",
            `
            <p class="mb-4">Modernit ja ilmastoidut sisätilat tarjoavat lemmikillesi mukavan ympäristön säästä riippumatta.</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Ilmastoidut ja lämmitetyt huoneet</li>
              <li>Äänieristetyt tilat stressin minimoimiseksi</li>
              <li>Pehmeät ja mukavat makuualustat</li>
              <li>Erilliset alueet eri kokoisille lemmikeille</li>
              <li>Puhdas ja hygieeninen ympäristö</li>
              <li>24/7 valvonta turvakameroin</li>
            </ul>
            `,
          )}
          
          ${renderFacilitySection(
            "Ulkotilat",
            "../assets/img/facilities-outdoors.jpg",
            `
            <p class="mb-4">Laajat ulkoilualueet tarjoavat runsaasti tilaa liikkumiseen, leikkimiseen ja tutkimiseen.</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Yli 2 hehtaaria aidattua ulkoilualuetta</li>
              <li>Erilliset alueet pienille ja suurille koirille</li>
              <li>Luonnollinen maasto tutkimista varten</li>
              <li>Varjoisat alueet kuumina päivinä</li>
              <li>Agility-esteitä ja leikkivälineitä</li>
              <li>Turvallinen uima-allas kesäkaudella</li>
            </ul>
            `,
          )}
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          ${renderFacilitySection(
            "Erikoistilat",
            "../assets/img/facilities-trimming.jpg",
            `
            <p class="mb-4">Tarjoamme erikoistiloja lemmikkien erityistarpeisiin ja -aktiviteetteihin.</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Koulutusalue sisällä ja ulkona</li>
              <li>Huone trimmauspalveluille</li>
              <li>Sosiaalistumisalue ryhmäaktiviteeteille</li>
              <li>Yksityiset huoneet erityistä huomiota vaativille lemmikeille</li>
            </ul>
            `,
          )}
          
          ${renderFacilitySection(
            "Turvallisuus",
            "../assets/img/facilities-reception.jpg",
            `
            <p class="mb-4">Lemmikkisi turvallisuus on meille ensisijaisen tärkeää.</p>
            <ul class="list-disc list-inside space-y-2">
              <li>Ympärivuorokautinen henkilökunnan läsnäolo</li>
              <li>Kattava kameravalvonta</li>
              <li>Palohälytysjärjestelmä ja automaattinen sammutusjärjestelmä</li>
              <li>Varavoimageneraattori sähkökatkojen varalta</li>
              <li>Turvalliset ja karkaamisen estävät aidat</li>
              <li>Ensiapuvälineet ja koulutettu henkilökunta hätätilanteita varten</li>
              <li>Nopea pääsy eläinlääkäripalveluihin</li>
            </ul>
            `,
          )}
        </div>
        
        <h2 class="text-3xl font-bold mb-4 text-blue-900">Päivittäinen aikataulu</h2>
        <p class="mb-4">Kennelissämme noudatetaan säännöllistä päiväohjelmaa, joka takaa lemmikeille tasapainoisen ja stressittömän oleskelun.</p>
        
        <div class="overflow-x-auto mb-8">
          <table class="min-w-full bg-white border border-gray-300">
            <thead>
              <tr class="bg-blue-100">
                <th class="py-2 px-4 border-b text-left">Aika</th>
                <th class="py-2 px-4 border-b text-left">Aktiviteetti</th>
                <th class="py-2 px-4 border-b text-left">Kuvaus</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="py-2 px-4 border-b">6:00 - 8:00</td>
                <td class="py-2 px-4 border-b">Aamutoimet</td>
                <td class="py-2 px-4 border-b">Aamukävely, aamiainen ja lyhyt leikkituokio</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">8:00 - 10:00</td>
                <td class="py-2 px-4 border-b">Ulkoiluaika</td>
                <td class="py-2 px-4 border-b">Ohjattu ulkoilu ryhmissä tai yksilöllisesti</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border-b">10:00 - 12:00</td>
                <td class="py-2 px-4 border-b">Aktiviteetit</td>
                <td class="py-2 px-4 border-b">Koulutus, leikki tai sosiaalistuminen</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">12:00 - 14:00</td>
                <td class="py-2 px-4 border-b">Lepoaika</td>
                <td class="py-2 px-4 border-b">Rauhallinen aika ja kevyt välipala</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border-b">14:00 - 16:00</td>
                <td class="py-2 px-4 border-b">Iltapäivän aktiviteetit</td>
                <td class="py-2 px-4 border-b">Ulkoilu, leikki tai erityisaktiviteetit</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">16:00 - 18:00</td>
                <td class="py-2 px-4 border-b">Illallisaika</td>
                <td class="py-2 px-4 border-b">Illallinen ja lyhyt ulkoilu</td>
              </tr>
              <tr class="bg-white">
                <td class="py-2 px-4 border-b">18:00 - 20:00</td>
                <td class="py-2 px-4 border-b">Iltatoimet</td>
                <td class="py-2 px-4 border-b">Rauhallinen aika, helliminen ja iltakävely</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">20:00 - 6:00</td>
                <td class="py-2 px-4 border-b">Yöaika</td>
                <td class="py-2 px-4 border-b">Lepoaika, säännölliset tarkastukset yön aikana</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mb-4">
          Huomaa, että aikataulu on suuntaa-antava ja sitä mukautetaan kunkin lemmikin yksilöllisten tarpeiden mukaan. 
          Voit myös pyytää erityisjärjestelyjä lemmikillesi tarpeen mukaan.
        </p>
      `,
        "text-3xl text-blue-900",
        "mt-4",
      )}
    </main>
  `
}

// Helper function to render a facility section
function renderFacilitySection(title, imageUrl, content) {
  return `
    <div class="border border-blue-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src="${imageUrl}" 
        alt="${title}" 
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <h3 class="text-xl font-bold text-blue-900 mb-2">${title}</h3>
        <div class="text-base">
          ${content}
        </div>
      </div>
    </div>
  `
}

// Facilities page layout
function renderFacilitiesPage() {
  return `
    ${renderHeader()}
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      ${renderLeftSidebar()}
      ${renderRightSidebar()}
      <div class="w-[2px] bg-blue-900 hidden md:block"></div>
      ${renderFacilitiesContent()}
    </div>
    ${renderFooter()}
  `
}

export { renderFacilitiesPage }

