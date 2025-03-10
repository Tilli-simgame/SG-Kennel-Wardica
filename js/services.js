import { renderHeader, renderLeftSidebar, renderRightSidebar, renderContentBox, renderFooter } from "./components.js"

// Services page content
function renderServicesContent() {
  return `
    <main class="w-full md:w-[70%] md:ml-4 text-[20px]">
      ${renderContentBox(
        "Palvelumme",
        `
        <h1 class="text-4xl font-bold mb-4 text-blue-900">Kattavat palvelut lemmikeille</h1>
        <p class="mb-6">
          Kennel Wardica tarjoaa laajan valikoiman palveluita, jotka on suunniteltu pitämään lemmikkisi onnellisena, terveenä ja hyvin hoidettuna. 
          Kaikki palvelumme toteutetaan ammattitaitoisen ja välittävän henkilökuntamme toimesta.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          ${renderServiceCard(
            "Lomahoito",
            "../assets/img/services-holidaycare.jpg",
            `
            <p>Tarjoamme turvallisen ja mukavan majoituksen koirallesi. Jokainen koira saa oman tilavan kennelin, säännölliset ulkoiluajat ja paljon huomiota henkilökunnaltamme.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Ilmastoitu sisätila</li>
              <li>Pehmeä makuualusta</li>
              <li>Säännölliset ruokinta-ajat</li>
              <li>Vähintään 3 ulkoilukertaa päivässä</li>
              <li>Leikkiaika muiden koirien kanssa (haluttaessa)</li>
            </ul>
            <p class="mt-2"><strong>Hinta:</strong> alkaen 35€/vrk</p>
            `,
          )}

          ${renderServiceCard(
            "Päivähoito",
            "../assets/img/services-daycare.jpg",
            `
            <p>Päivähoitopalvelumme on täydellinen ratkaisu, kun olet töissä tai muuten poissa kotoa päivän ajan. Lemmikkisi saa seuraa, liikuntaa ja huolenpitoa.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Joustava tuonti- ja hakuaika</li>
              <li>Ohjatut leikkituokiot</li>
              <li>Lepo- ja aktiivisuusajat</li>
              <li>Ruokinta omistajan ohjeiden mukaan</li>
              <li>Päivittäinen raportti omistajalle</li>
            </ul>
            <p class="mt-2"><strong>Hinta:</strong> alkaen 20€/päivä</p>
            `,
          )}
          
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          
          ${renderServiceCard(
            "Trimmauspalvelut",
            "../assets/img/facilities-trimming.jpg",
            `
            <p>Ammattitaitoiset trimmaajamme huolehtivat lemmikkisi turkista. Tarjoamme täyden valikoiman trimmauspalveluita kaikille roduille ja turkkilaaduille.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Pesu ja föönaus</li>
              <li>Kynsien leikkaus</li>
              <li>Korvien puhdistus</li>
              <li>Rotukohtainen trimmaus</li>
              <li>Turkin selvitys ja harjaus</li>
            </ul>
            <p class="mt-2"><strong>Hinta:</strong> alkaen 45€ (riippuen koosta ja rodusta)</p>
            `,
          )}

          ${renderServiceCard(
            "Koulutuspalvelut",
            "../assets/img/services-training.jpg",
            `
            <p>Tarjoamme erilaisia koulutuspalveluita auttaaksemme sinua ja lemmikkiäsi elämään harmonisempaa elämää yhdessä.</p>
            <ul class="list-disc list-inside mt-2">
              <li>Perustottelevaisuuskoulutus</li>
              <li>Pentujen sosialisointi</li>
              <li>Käytösongelmien korjaus</li>
              <li>Yksilölliset koulutussuunnitelmat</li>
              <li>Ryhmäkoulutukset</li>
            </ul>
            <p class="mt-2"><strong>Hinta:</strong> alkaen 60€/tunti (yksityistunnit)</p>
            `,
          )}
        </div>
        
        <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-6" role="alert">
          <p class="font-bold">Erikoispalvelut</p>
          <p>Tarjoamme myös räätälöityjä palveluita erityistarpeisille lemmikeille. Ota yhteyttä keskustellaksesi lemmikkisi yksilöllisistä tarpeista.</p>
        </div>
      `,
        "text-3xl text-blue-900",
        "mt-4",
      )}
    </main>
  `
}

// Helper function to render a service card
function renderServiceCard(title, imageUrl, content) {
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

// Services page layout
function renderServicesPage() {
  return `
    ${renderHeader()}
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      ${renderLeftSidebar()}
      ${renderRightSidebar()}
      <div class="w-[2px] bg-blue-900 hidden md:block"></div>
      ${renderServicesContent()}
    </div>
    ${renderFooter()}
  `
}

export { renderServicesPage }

