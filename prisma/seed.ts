import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let plants = [
  {
    name: 'Tulipa gesneriana',
    family: 'Liliaceae',
    genus: 'tulipa',
    species: 'gesneriana',
    commonName: 'tulip',
    location: 'Europe and Asia',
    climate: 'Temperate',
    soilType: 'Well-drained',
    waterRequirements: 'Medium',
    lightRequirements: 'Full sun to partial shade',
    propagationMethod: 'Bulbs',
    uses: 'Ornamenta',
    description: 'A perennial plant with bright and colorful flowers.'
  },
  {
    name: 'Aloe vera',
    family: 'Asphodelaceae',
    genus: 'Aloe',
    species: 'Aloe vera',
    commonName: 'Aloe vera',
    location: 'Bright, indirect light',
    climate: 'Tropical, subtropical',
    soilType: 'Well-draining, sandy loam',
    waterRequirements: 'Regular watering, once a week',
    lightRequirements: 'Bright, indirect light',
    propagationMethod: 'Offsets',
    uses: 'Ornamental, Medicinal',
    description: 'Aloe vera is a succulent plant that is known for its medicinal properties and ability to thrive in dry conditions.'
  },
  {
    name: 'Begonia Maculata',
    family: 'Begoniaceae',
    genus: 'Begonia',
    species: 'Begonia Maculata',
    commonName: 'Polka Dot Begonia',
    location: 'Southeast Brazil',
    climate: 'Tropical, subtropical',
    soilType: 'Well-draining, humus-rich soil',
    waterRequirements: 'Regular watering, once a week',
    lightRequirements: 'Indirect light',
    propagationMethod: 'Stem cuttings in water or soil',
    uses: 'Ornamental',
    description: 'Begonia Maculata, also known as the Spotted Begonia, is a tropical plant known for its spotted leaves and vibrant red undersides.',
    imagePath: "images/begonia_maculata.png"
  },
  {
    name: 'Alocasia Polly',
    family: 'Araceae',
    genus: 'Alocasia',
    species: 'Alocasia Polly',
    commonName: 'Elephant Ear Plant',
    location: 'Indirect light',
    climate: 'Tropical, subtropical',
    soilType: 'Well-draining, humus-rich soil',
    waterRequirements: 'Regular watering, once a week',
    lightRequirements: 'Indirect light',
    propagationMethod: 'Rhizome division',
    uses: 'Ornamental',
    description: 'Alocasia Polly, also known as the Elephant Ear Plant, is a tropical plant known for its large, arrow-shaped leaves and vibrant green color.'
  },
  {
    name: "Anthurium warocqueanum",
    family: "Araceae",
    genus: "Anthurium",
    species: "Anthurium warocqueanum",
    commonName: "Queen Anthuriun",
    location: "Indoor, indirect bright light",
    climate: "Tropical",
    soilType: "Well-draining soil, low in organic matter",
    waterRequirements: "Moderate watering, once or twice a week",
    lightRequirements: "Indoor, bright, indirect light",
    propagationMethod: "division",
    uses: "Ornamental",
    description: "Anthurium warocqueanum, also known as Queen Anthurium, is a tropical plant known for its striking, dark green foliage and shiny, white veins. It is often grown as a houseplant due to its unique appearance and fulfilling challenge of care.",
    imagePath: "images/anthurium_warocqueanum.png",
  },
  {
    name: "Anthurium crystalinum",
    family: "Araceae",
    genus: "Anthurium",
    species: "crystalinum",
    commonName: "Crystal anthurium",
    location: "Central and South America",
    climate: "Tropical",
    soilType: "Well-drained, rich in organic matter",
    waterRequirements: "Moderate, keep soil evenly moist but not soggy",
    lightRequirements: "Bright indirect light, avoid direct sun exposure",
    propagationMethod: "Stem cuttings or division of rhizomes",
    uses: "Ornamental plant for indoor or greenhouse cultivation",
    description: "Anthurium crystalinum is a perennial herb with large, velvety, dark green leaves that have prominent white veins. The leaves can grow up to 60 cm long and have a heart-shaped base. The inflorescence consists of a greenish-white spathe and a cream-colored spadix. The fruits are red berries that contain one or two seeds each.",
    imagePath: "images/anthurium_crystalinum.png"
  }
]

async function main () {
  for (let plant of plants) {
    await prisma.plant.create({ data: plant });
    console.log(plant);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
