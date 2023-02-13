import express from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const port = 3000;

const store = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: store });

app.get('/', (req, res) => {
  res.send('Welcome To Sprout Spot');
});

app.get('/plants', async (req, res) => {
  const plants = await prisma.plant.findMany();
  res.json(plants);
});

app.post('/plant', upload.single('image'), async (req, res) => {
  console.log(req.body)
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
  console.log(req.file);
  res.json(plant);
});

app.delete('/plant/:id', async (req, res) => {
  const { id } = req.params;
  const plant = await prisma.plant.delete({
    where: {
      id: Number(id)
    },
  });
  res.json(plant);
});

app.get('/plant/:id', async (req, res) => {
  const { id } = req.params;

  const plant = await prisma.plant.findUnique({
    where: { id: Number(id) },
  });
  res.json(plant);
});

app.listen(port, () => {
  console.log(`plant microservice listening on port ${port}`);
})
