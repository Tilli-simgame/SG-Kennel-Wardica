const dog = {
  id: 6,
  name: "Brightmoor Cosmic Drift",
  nickname: "Topi",
  breed: "Bordercollie",
  dob: "13.03.2017",
  gender: "Uros",
  image: "https://placehold.co/300x300?text=Topi",
  description: "Topi on nuori, lupaava harrastuskoira, joka osallistuu moniin eri koiralajeihin. Hän on erityisen innostunut nose workista ja jäljestämisestä.",
  weight: 17,
  personality: ["Utelias", "Innostuva", "Monipuolinen", "Leikkisä"],
  personalityDescription:
    "Topi on monipuolinen lahjakkuus, joka suhtautuu jokaiseen uuteen harrastukseen suurella innolla. Hänen nuoruutensa näkyy leikkisyydessä ja energisyydessä, mutta hänellä on myös yllättävä kyky keskittyä tehtäviin. Topi rakastaa oppimista ja hänen omistajansa kokeilee hänen kanssaan monia eri koiraharrastuksia löytääkseen Topin vahvuudet. Haju- ja etsintätehtävät ovat osoittautuneet hänen suosikeikseen.",
  health: {
    hips: "Ei vielä tutkittu",
    elbows: "Ei vielä tutkittu",
    spinal: "Puhdas",
    shoulders: "Normaali",
    geneTests: ["Puhdas CEA:sta", "Puhdas TNS:stä", "Geneettisesti monimuotoinen"],
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
    "https://placehold.co/200x200?text=Topi+1",
    "https://placehold.co/200x200?text=Topi+2",
    "https://placehold.co/200x200?text=Topi+3",
  ],
  dailySchedule: [
    "7:00 - Aamuvirittely ja lyhyt lenkki",
    "8:00 - Aamiainen",
    "9:30 - Hajutyöskentelyä tai jäljestämistä",
    "12:00 - Lounas ja lepohetki",
    "14:00 - Agility tutustuminen (ma), Toko (ke), Rally-toko (pe)",
    "16:00 - Leikkiaika ja sosiaalisia kohtaamisia",
    "18:00 - Illallinen",
    "19:30 - Rauhallisia aktivointitehtäviä ja temppuja",
  ],
  groomingNeeds: [
    "Pentuturkin huolellinen harjaus kahdesti viikossa",
    "Totuttelu kynsien leikkaukseen ja hampaiden hoitoon",
    "Pesu hellävaraisilla tuotteilla kerran kuukaudessa",
    "Korvien ja silmien säännöllinen tarkistus",
    "Tassujen huolto harrastusten mukaan",
  ],
  dietaryInformation: {
    foodType: "Korkealaatuinen kasvavan koiran ruoka",
    specialDiet: "Kehitystä tukeva, junioriformula",
    feedingSchedule: "Kolme ateriaa päivässä, asteittain siirtyminen aikuisten ruokailuun",
    treats: ["Pienet kuivatut lihakuutiot koulutukseen", "Laadukkaat puruluut hampaiden kehitykseen", "Aktivointileluissa pehmeät täytteet"],
  },
}

export default dog

