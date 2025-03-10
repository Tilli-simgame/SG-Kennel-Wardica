const dog = {
  id: 5,
  name: "Thundercrest Braveheart",
  nickname: "Reino",
  breed: "Bordercollie",
  dob: "13.03.2022",
  gender: "Uros",
  image: "https://placehold.co/300x300?text=Reino",
  description: "Reino on ammattipaimenkoira, joka työskentelee päivittäin lammasfarmilla. Hänen paimennustaitonsa ja luontainen vaistonsa ovat poikkeuksellisia.",
  weight: 22,
  personality: ["Määrätietoinen", "Itsenäinen", "Työteliäs", "Hiljainen"],
  personalityDescription:
    "Reino on vanhan koulukunnan työkoira, joka viihtyy parhaiten lampaiden parissa maaseudun rauhassa. Hän on itsenäinen ajattelija, joka osaa ratkaista paimennustilanteessa eteen tulevia ongelmia ilman ohjausta. Reino on erittäin keskittymiskykyinen ja pystyy työskentelemään pitkiä päiviä väsymättä. Kotioloissa hän on yllättävän rauhallinen ja tyytyy makaamaan nuotion äärellä.",
  health: {
    hips: "Hyvä",
    elbows: "Hyvä",
    spinal: "Puhdas",
    shoulders: "Normaali",
    geneTests: ["Puhdas CEA:sta", "Puhdas epilepsiageeneistä", "Kantaja CL:lle"],
  },
  competitions: [
    { name: "NIMI", date: "2024-01-22", location: "PAIKKA", type: "LAJI" }
  ],
  pedigree: {
    father: "EVM",
    mother: "EVM",
    notable_ancestors: ["EVM", "EVM"],
  },
  training: {
    certifications: ["-", "-"],
    achievements: ["-", "-"],
  },
  gallery: [
    "https://placehold.co/200x200?text=Reino+1",
    "https://placehold.co/200x200?text=Reino+2",
    "https://placehold.co/200x200?text=Reino+3",
  ],
  dailySchedule: [
    "5:00 - Herätys ja aamiainen",
    "5:30 - Lampaiden kokoaminen laitumelta",
    "8:00 - Laumaa vartioiden laidun",
    "12:00 - Lounastauko",
    "13:00 - Lampaiden siirto toiselle laitumelle",
    "16:00 - Vahtiminen ja eläinlääkärin avustaminen",
    "18:30 - Iltatoimet ja lampaiden kokoaminen",
    "20:00 - Illallinen ja lepo",
  ],
  groomingNeeds: [
    "Työkoiran käytännöllinen turkinhoito kerran viikossa",
    "Tassujen tarkistus päivittäin piikkien ja haavojen varalta",
    "Pesu vain tarvittaessa työkoiran luonnollisen suojan säilyttämiseksi",
    "Kynsien luonnollinen kuluminen kovassa maastossa",
    "Punkki- ja loistarkastukset päivittäin",
  ],
  dietaryInformation: {
    foodType: "Korkean energiatason työkoiran ruoka",
    specialDiet: "Runsasrasvainen talvisin, kevyempi kesäisin",
    feedingSchedule: "Aamiainen ja tukeva illallinen, energiapatukat päivän mittaan",
    treats: ["Kuivattu lampaankeuhko", "Maatilan omat luomulihapalat", "Tilanteen mukaan energiapatukoita"],
  },
}

export default dog

