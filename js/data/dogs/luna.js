const dog = {
  id: 1,
  name: "Evermist Twilight Harmony",
  nickname: "Luna",
  breed: "Bordercollie",
  dob: "13.03.2024",
  gender: "Narttu",
  image: "https://placehold.co/300x300?text=Luna",
  description: "Luna on tarkkaavainen ja älykäs bordercollie, joka loistaa paimennus- ja agilitykilpailuissa. Hänellä on voimakas työmoraali ja keskittymiskyky.",
  weight: 18,
  personality: ["Älykäs", "Tarkkaavainen", "Työorientoitunut", "Lempeä"],
  personalityDescription:
    "Luna on poikkeuksellisen älykäs ja intuitiivinen koira. Hän osaa lukea omistajaansa täydellisesti ja toimii usein ennen kuin komentoja on edes annettu. Vaikka Luna on työorientoitunut ja energinen ulkona, kotona hän on rauhallinen ja tasapainoinen seuralainen.",
  health: {
    hips: "Erinomainen",
    elbows: "Normaali",
    spinal: "Puhdas",
    shoulders: "Erinomainen",
    geneTests: ["Puhdas CEA:sta", "Puhdas TNS:stä", "Puhdas MDR1:stä"],
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
    "https://placehold.co/200x200?text=Luna+1",
    "https://placehold.co/200x200?text=Luna+2",
    "https://placehold.co/200x200?text=Luna+3",
  ],
  dailySchedule: [
    "5:30 - Aamuinen paimennusharjoitus",
    "7:00 - Aamiainen",
    "9:00 - Ongelmanratkaisutehtäviä",
    "12:00 - Kevyt lounas ja lepo",
    "15:00 - Agilityharjoitus tai pitkä lenkki",
    "18:00 - Illallinen",
    "19:30 - Aktivointilelut ja aivojumppa",
    "21:00 - Rauhoittuminen ja iltarutiinit",
  ],
  groomingNeeds: [
    "Harjaa turkki joka toinen päivä",
    "Trimmaa tassukarvat kuukausittain",
    "Tarkista ja puhdista korvat viikoittain",
    "Pesut vain tarvittaessa, yleensä 3-4 kertaa vuodessa",
    "Säännöllinen kynsien leikkaus 2-3 viikon välein",
  ],
  dietaryInformation: {
    foodType: "Korkealaatuinen raakaruoka ja kuivaruoka",
    specialDiet: "Runsasproteiininen, urheilukoirille suunniteltu",
    feedingSchedule: "Kahdesti päivässä, annosmäärä aktiivisuustason mukaan",
    treats: ["Kuivatut kanafileet", "Paimennusharjoituksissa lampaan sisäelimet", "Kotitekoisia maksapalkkioita"],
  },
}

export default dog

