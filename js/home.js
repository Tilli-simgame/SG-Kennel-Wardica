import { renderHeader, renderLeftSidebar, renderRightSidebar, renderContentBox, renderFooter } from "./components.js"

// Home page content
function renderHomeContent() {
  return `
    <main class="w-full md:w-[70%] md:ml-4 text-[20px]">
      ${renderContentBox(
        "Kennel Wardica",
        `
        <h1 class="text-4xl font-bold mb-4 text-blue-900">Bordercollien & Australiankarjakoirien kasvattaja</h1>
        
        <p class="mb-4">
          Kennel Wardican tavoitteena on tuottaa korkealaatuisia paimenkoiria, jotka soveltuvat niin perhe- kuin työkoiriksi. Luonne, terveys ja koulutettavuus ovat kolme tärkeintä ominaisuutta, joihin keskityn. Valitsen huolellisesti jalostusohjelmaani ottamani koirat tuodakseni yhteen parhaat ominaisuudet tarjotakseni perheille uskollisia ja rakastavia kumppaneita. Tuon aktiivisesti koiria myös ulkomailta laajentaakseni koirien sukuja. Jos etsit älykkyyttä ja kauneutta, olet tullut oikeaan paikkaan.
        </p>
        
        <p class="mb-6">
          Yrityksenä Kennel Wardica on luonut nimeään kasvattamalla kauniita bordercollieta ja australiankarjakoiria, sekä nyt myös oheistoimintaa ja palveluita tarjoamalla. Silti olemme tehneet elinikäisen sitoumuksen mennä paljon tuota mainetta pidemmälle. Emme etsi tunnustusta – kasvatamme perhettä. Tämä tarkoittaa, että kaikki pentumme syntyvät kotiin, joka on täynnä kiintymystä ja aitoa huolenpitoa. Tämä tarkoittaa myös sitä, että luovutamme koiramme vain omistajille, joihin voimme lujasti luottaa ja jotka voivat antaa elinikäisen sitoumuksen.
        </p>
        
        <div class="mb-6">
          <img 
            src="../assets/img/group-of-our-dogs.jpg" 
            alt="Kennel Wardican koirat" 
            class="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full mb-2"
          />
          <p class="text-sm text-center mt-2 italic">Kennel Wardican koirat nauttivat ulkoilusta tiloissamme</p>
        </div>
        
        <h2 class="text-3xl font-bold mb-2 text-blue-900">Meillä on Bordercollie ja Australiankarjakoira pentuja myynnissä</h2>
        <p class="mb-4">
          Suuri osa pennun toivottamisesta perheeseen on valmistautuminen pitkäaikaiseen sitoutumiseen. Jos olet päättänyt, että bordercollie tai australiankarjakoira on rotusi perheellesi, pyrimme tuottamaan parhaat mahdolliset koirat sinulle.
        </p> 
        
        <p class="mb-6">
          Loppujen lopuksi tiedämme, että parhaan pennun kasvattaminen perustuu hoitomme terveeseen ja lämpimään luonteeseen. Tämä on yksi syistä, miksi päätimme rakentaa uuden, huippumodernin kenneltilan, johon liittyy sisäkoulutusareena. 18 hehtaarin maa-alueella sijaitseva kennelimme tarjoaa erinomaisen valon ja tilan koirien ja pentujen liikkumiseen. Jokainen osasto on yksilöllisesti ohjattu tarjoamaan oikean lämmityksen tai ilmastoinnin ja ilmanvaihdon. Turvakamerat mahdollistavat toiminnan seurannan ja pitävät ne turvassa, vaikka emme olisi kotona.
        </p>
        
        <h2 class="text-3xl font-bold mb-2 text-blue-900">Kennel Wardica</h2>
        
        <div class="mb-6">
          <img 
            src="../assets/img/outdoor-training.jpg" 
            alt="Kennel Wardican kouluttajat" 
            class="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full mb-2"
          />
          <p class="text-sm text-center mt-2 italic">Ammattitaitoiset kouluttajamme pitävät huolen koiriemme koulutuksesta ja taitojen hiomisesta.</p>
        </div>
        
        <p class="mb-4">
          Osallistumme seuraavien järjestöjen ja liittojen toimintaan:
        </p>
        
        <ul class="list-disc list-inside mb-4 ml-4">
          <li><a href="http://vmkl.arkku.net/" class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">vMKL</a> - Virtuaalimaailman Kennelliitto</li>
          <li><a href="https://kultsu.net/virt/vfci/" class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">VFCI</a> - Virtuaalikoiramaailman kattojärjestö</li>
          <li>VBCY - Virtuaalinen Bordercollieyhdistys</li>
          <li><a href="https://lilyswan.net/vpkk/index.php" class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">vPKY</a> - Virtuaalinen paimenkoirayhdistys</li>
        </ul>
        
        <p class="mb-4">
          Lisäksi suoritamme säännöllisiä terveystarkastuksia mm:
        </p>
        
        <ul class="list-disc list-inside mb-6 ml-4">
          <li>Lonkka- ja kyynärkuvaukset</li>
          <li>DNA-testit</li>
        </ul>
        
        <p class="mb-4">
          Kennel Wardica on ylpeä voidessaan kertoa, että jatkamme ihanteellisen sekoituksen jalostamista työ- ja lemmikkikoirasta. Vuosien ajan olemme pitäneet parasta huolta bordercollieistamme ja australiankarjakoiristamme, koska ymmärrämme, kuinka paljon onnea ja hyötyä nämä rodut voivat tuoda kotiin.
        </p>
        
        <p class="mb-4">
          Jos etsit tervettä, uskollista ja varsin viehättävää koiraa, suosittelemme tutustumaan <a href="/dogs" data-link class="text-blue-600 hover:bg-blue-100 hover:underline transition-colors duration-300 px-1 rounded">"Koirat"-välilehteen</a>. Siellä tapaat nykyiset koiramme. Voit vapaasti napsauttaa mitä tahansa kuvaa tarkastellaksesi sitä lähemmin.
        </p>
        
        <p class="text-right font-bold text-xl text-blue-900">
          — Kennel Wardica
        </p>
      `,
        "text-3xl text-blue-900",
        "mt-4",
      )}
    </main>
  `
}

// Home page layout
function renderHomePage() {
  return `
    ${renderHeader()}
    <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row">
      ${renderLeftSidebar()}
      ${renderRightSidebar()}
      <div class="w-[2px] bg-blue-900 hidden md:block"></div>
      ${renderHomeContent()}
    </div>
    ${renderFooter()}
  `
}

export { renderHomePage }

