const dog = {
  id: 2,
  name: "Silverpine Dancer Melody",
  nickname: "Bella",
  breed: "Bordercollie",
  dob: "13.03.2023",
  gender: "Narttu",
  image: "https://placehold.co/300x300?text=Bella",
  description: "Bella on nuori, temperamenttinen bordercollie, jolla on luontainen taipumus temppujen oppimiseen ja koiratanssiin. Hän on varsinainen esiintyjä, joka nauttii huomiosta.",
  weight: 16,
  personality: ["Leikkisä", "Sosiaalinen", "Esiintymishaluinen", "Herkkä"],
  personalityDescription:
    "Bella on koirapuiston supertähti, joka hurmaantuu uusista ihmisistä ja koirista. Hän oppii temppuja hämmästyttävän nopeasti ja nauttii esiintymisestä. Bellan herkkyys näkyy hänen kyvyssään aistia ihmisten tunteita - hän hakeutuu usein lohduttamaan surullisia ihmisiä. Äänille herkkänä hän pelkää ukkosta ja ilotulituksia.",
  health: {
    hips: "Hyvä",
    elbows: "Erinomainen",
    spinal: "Puhdas",
    shoulders: "Normaali",
    geneTests: ["Kantaja CEA:lle", "Puhdas TNS:stä", "Puhdas epilepsiageeneistä"],
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
    "https://placehold.co/200x200?text=Bella+1",
    "https://placehold.co/200x200?text=Bella+2",
    "https://placehold.co/200x200?text=Bella+3",
  ],
  dailySchedule: [
    "7:30 - Kevyt aamulenkki",
    "8:30 - Aamiainen",
    "10:00 - Temppuharjoitukset ja koordinaatioharjoitukset",
    "13:00 - Lounas ja lepohetki",
    "15:00 - Sosiaalistuminen koirapuistossa",
    "17:30 - Koiratanssiharjoitukset",
    "19:00 - Illallinen",
    "20:30 - Rauhallinen aika perheen kanssa",
  ],
  groomingNeeds: [
    "Päivittäinen harjaus kiillon ylläpitämiseksi",
    "Pesu näyttelyshampooilla ennen esiintymisiä",
    "Tassujen huolellinen trimmaus viikoittain",
    "Kynsien viilaus ja leikkaus viikoittain",
    "Korvien ja hampaiden säännöllinen puhdistus",
  ],
  dietaryInformation: {
    foodType: "Laadukas kuivaruoka pennuille ja nuorille koirille",
    specialDiet: "Lisätty omega-3 turkin kiiltoa varten",
    feedingSchedule: "Kolme pientä ateriaa päivässä",
    treats: ["Pehmeät koulutuspalkkiot", "Porkkanapalat", "Kuivatut kanasuikaleet esiintymispalkkioina"],
  },
}

export default dog

