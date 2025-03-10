const dog = {
  id: 3,
  name: "Whispering Creek Melody",
  nickname: "Wilma",
  breed: "Bordercollie",
  dob: "13.03.2022",
  gender: "Narttu",
  image: "https://placehold.co/300x300?text=Wilma",
  description: "Wilma on kokenut terapiakoira, joka työskentelee sairaaloissa ja vanhainkodeissa. Vahva intuition ja erinomainen itsehillintä tekevät hänestä täydellisen terapiatyöhön.",
  weight: 19,
  personality: ["Rauhallinen", "Empaattinen", "Kärsivällinen", "Intuitiivinen"],
  personalityDescription:
    "Wilma on poikkeuksellisen empaattinen koira, jolla on luontainen kyky tunnistaa avun tarpeessa olevat ihmiset. Hänen läsnäolonsa tuo rauhaa ja lohtua. Vaikka Wilma on työtehtävissä vakaa ja ammattimainen, kotioloissa hän osaa rentoutua ja nauttia perheen kanssa vietetystä ajasta. Hän on erityisen hyvä lasten ja vanhusten kanssa.",
  health: {
    hips: "Hyvä",
    elbows: "Hyvä",
    spinal: "Lievä spondyloosi",
    shoulders: "Normaali",
    geneTests: ["Puhdas CEA:sta", "Puhdas MDR1:stä", "Puhdas DM:stä"],
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
    "https://placehold.co/200x200?text=Wilma+1",
    "https://placehold.co/200x200?text=Wilma+2",
    "https://placehold.co/200x200?text=Wilma+3",
  ],
  dailySchedule: [
    "6:30 - Rauhallinen aamulenkki",
    "8:00 - Aamiainen",
    "9:30 - Terapiavierailu sairaalassa (3 päivänä viikossa)",
    "12:30 - Lounas ja lepo",
    "15:00 - Vierailu vanhainkodissa (2 päivänä viikossa)",
    "17:00 - Kevyt lenkki",
    "18:30 - Illallinen",
    "20:00 - Rauhallinen aika perheen kanssa, hieronta ja venyttely",
  ],
  groomingNeeds: [
    "Huolellinen harjaus ennen terapiakäyntejä",
    "Säännölliset pesut hajustamattomalla shampoolla",
    "Tassujen, kynsien ja korvien säännöllinen huolto",
    "Hampaiden pesu kolme kertaa viikossa",
    "Antistaattinen käsittely turkin puhtaana pitämiseksi",
  ],
  dietaryInformation: {
    foodType: "Seniorikoirille tarkoitettu erikoisruoka",
    specialDiet: "Nivelten terveyttä tukeva, omega-3 lisät",
    feedingSchedule: "Kaksi pientä ateriaa päivässä, tarkat ruoka-ajat",
    treats: ["Kuivatut kalannahkapalat", "Kotitekoiset maksapasteijat", "Nivelterveyttä tukevat ravintolisät"],
  },
}

export default dog

