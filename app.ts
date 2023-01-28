import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/plants', async (req, res) => {
  const plants = await prisma.plant.findMany();
  res.json(plants);
});

app.post('/plant', async (req, res) => {
  const {
    name,
    family,
    genus,
    species,
    commonName,
    location,
    climate,
    soilType,
    waterRequirements,
    lightRequirements,
    propagationMethod,
    uses,
    description
  } = req.body;
  const plant = await prisma.plant.create({
    data: {
      name,
      family,
      genus,
      species,
      commonName,
      location,
      climate,
      soilType,
      waterRequirements,
      lightRequirements,
      propagationMethod,
      uses,
      description
    }
  });
  res.json(plant);
});

app.listen(port, () => {
  console.log(`plant microservice listening on port ${port}`);
})
