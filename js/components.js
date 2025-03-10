// Component functions

// Content Box component
function renderContentBox(title, content, titleClass = "text-lg text-blue-900", contentClass = "mt-4") {
  return `
    <div class="mb-6">
      <div class="mb-2">
        <h2 class="font-bold uppercase tracking-wider mb-2 ${titleClass}">${title}</h2>
        <div class="h-[10px] bg-blue-900"></div>
      </div>
      <div class="${contentClass}">
        ${content}
      </div>
    </div>
  `
}

// Header component
function renderHeader() {
  return `
    <header class="relative h-screen w-full overflow-hidden">
      <div class="absolute inset-0 bg-gray-800">
        <img 
          src="../assets/img/hero-img.jpeg" 
          alt="Kennel Wardican ulkokuva. Luotu AI:n avustuksella."
          class="object-cover w-full h-full"
        />
      </div>
      <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold uppercase tracking-wider mb-4 text-center px-4">
          Kennel Wardica
        </h1>
        <p class="text-2xl md:text-3xl mb-8 text-center px-4">Paimenkoirien kasvattaja</p>
        <button
          id="scroll-down-btn"
          class="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300 text-xl"
        >
          Lue lisää
        </button>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
        <div class="animate-bounce">
          <svg class="w-8 h-8 text-white" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </header>
  `
}

// Left Sidebar component
function renderLeftSidebar() {
  return `
    <aside class="w-full md:w-[20%] mb-8 md:mb-0 md:mr-4 text-base">
      ${renderContentBox(
        "Tervetuloa Kennel Wardicaan!",
        `
        <p>Kasvatamme käyttölinjaisia FCI1-roturyhmän koiria. Päärotumme ovat bordercollie ja australiankarjakoira.</p>
      `,
        "text-lg text-blue-900",
        "mt-4",
      )}

      ${renderContentBox(
        "Palvelumme",
        `
        <p>Tarjoamme ensiluokkaista hoitoa karvaisille ystävillesi. Palveluihimme kuuluvat:</p>
        <ul class="list-disc list-inside mt-2">
          <li>Lomahoito</li>
          <li>Päivähoito</li>
          <li>Trimmaus</li>
          <li>Koulutukset ja kurssit</li>
        </ul>
      `,
        "text-lg text-blue-900",
        "mt-4",
      )}
      
      ${renderContentBox(
        "Tilat",
        `
        <p>Kennelimme tarjoaa:</p>
        <ul class="list-disc list-inside mt-2">
          <li>Tilavat sisä-/ulkotilat</li>
          <li>Ilmastoitu ympäristö</li>
          <li>Mukavat makuupaikat</li>
          <li>Leikkialueet sosiaalistumiseen</li>
        </ul>
      `,
        "text-lg text-blue-900",
        "mt-4",
      )}
      
      ${renderContentBox(
        "Varaa nyt!",
        `
        <p>Haluatko tarjota lemmikillesi mahtavan oleskelun? Tee varaus tänään!</p>
        <button class="mt-4 bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded text-base">
          Tee varaus
        </button>
      `,
        "text-lg text-blue-900",
        "mt-4",
      )}
    </aside>
  `
}

// Right Sidebar component
function renderRightSidebar() {
  return `
    <aside class="w-full md:w-[10%] mb-8 md:mb-0 md:mr-4 text-base">
      ${renderContentBox(
        "Pikalinkit",
        `
        <ul class="space-y-2">
          <li><a href="/home" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">Etusivu</a></li>
          <li><a href="/services" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">Palvelut</a></li>
          <li><a href="/facilities" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">Tilat</a></li>
          <li><a href="/dogs" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">Koirat</a></li>
          <li><a href="/contact" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">Yhteystiedot</a></li>
        </ul>
        `,
        "text-lg text-blue-900",
        "mt-4",
      )}
    </aside>
  `
}

// Main Content component
function renderMainContent() {
  return `
    <main class="w-full md:w-[70%] md:ml-4 text-[20px]">
      ${renderContentBox(
        "Tervetuloa Kennel Wardicaan!",
        `
        <h1 class="text-4xl font-bold mb-4 text-blue-900">Lemmikkisi koti kodin ulkopuolella</h1>
        <p class="mb-4">
          Kennel Wardicassa ymmärrämme, että lemmikkisi ovat enemmän kuin vain eläimiä – ne ovat perhettä. 
          Siksi olemme luoneet turvallisen, mukavan ja hauskan ympäristön karvakaverillesi silloin, kun et voi olla paikalla.
        </p>
        
        <h2 class="text-3xl font-bold mb-2 text-blue-900">Palvelumme</h2>
        <p class="mb-4">
          Tarjoamme laajan valikoiman palveluita pitääksemme lemmikkisi onnellisina ja terveinä. Tutustu
          <a href="/services" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">täydelliseen palveluluetteloomme</a> tai katso kohokohdat alta:
        </p>
        
        <h3 class="text-2xl font-bold mb-2 text-blue-900">Palvelun kohokohdat</h3>
        <ul class="list-disc list-inside mb-4">
          <li>24/7 valvottu hoito</li>
          <li>Päivittäinen liikunta ja leikkiaika</li>
          <li>Trimmauspalvelut</li>
          <li>Eläinlääkäripalvelut tarvittaessa</li>
        </ul>
        
        <h4 class="text-xl font-bold mb-2 text-blue-900">Majoitusvaihtoehdot</h4>
        <ol class="list-decimal list-inside mb-4">
          <li>Peruskennel</li>
          <li>Luksussviitti</li>
          <li>Kissahuoneistot</li>
          <li>Erityistarpeiden majoitus</li>
        </ol>
        
        <h5 class="text-lg font-bold mb-2 text-blue-900">Tilat</h5>
        <div class="mb-4">
          <img 
            src="https://placehold.co/500x300?text=Kennel+Facilities" 
            alt="Kennel Wardican tilat" 
            class="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          />
          <p class="text-sm text-center mt-2 italic">Huippumoderni kenneltilamme</p>
        </div>
        
        <h6 class="text-base font-bold mb-2 text-blue-900">Miksi valita Paws & Claws?</h6>
        <ul class="list-none mb-4">
          <li>✓ Kokenut ja välittävä henkilökunta</li>
          <li>✓ Suuret sisä- ja ulkoleikkialueet</li>
          <li>✓ Räätälöidyt hoitosuunnitelmat jokaiselle lemmikille</li>
          <li>✓ Webbikamera-pääsy tarkistaa lemmikkisi milloin tahansa</li>
        </ul>
        
        <p class="mb-4">
          Huippumoderni tilamme tarjoaa tilavat majoitustilat, runsaasti leikkiaikaa ja ympärivuorokautista hoitoa rakastavalta henkilökunnaltamme. 
          Oletpa lomalla, työmatkalla tai tarvitset vain päivän lemmikkihoitoa, olemme täällä varmistamassa, että lemmikkilläsi on fantastinen aika.
        </p>
        
        <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
          <p class="font-bold">Uusi palveluilmoitus!</p>
          <p>Tarjoamme nyt liikkuvia trimmauspalveluita. <a href="/services" data-link class="underline hover:bg-blue-200 transition-colors duration-300 px-1 rounded">Lue lisää täältä</a>.</p>
        </div>
        
        <p>
          Älä vain usko sanaamme – tule katsomaan itse! <a href="#" class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded font-bold">Varaa kierros</a> tiloihimme 
          ja näe, miksi lemmikit rakastavat oleskelua Kennel Wardicassa.
        </p>
      `,
        "text-3xl text-blue-900",
        "mt-4",
      )}
    </main>
  `
}

// Footer component
function renderFooter() {
  const currentYear = new Date().getFullYear()
  return `
    <footer class="bg-blue-900 text-white py-6 mt-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Kennel Wardica</h3>
            <p class="text-sm">VIRTUAALIKOIRIEN KASVATTAJA</p>
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm">&copy; ${currentYear} Kennel Wardica. virtuaali+wardica@proton.me</p>
            <p class="text-xs mt-1">Kaikki sivuilla on mielikuvitusta!</p>
          </div>
        </div>
      </div>
    </footer>
  `
}

export { renderContentBox, renderHeader, renderLeftSidebar, renderRightSidebar, renderMainContent, renderFooter }

