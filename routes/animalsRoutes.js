const express = require('express');
const router = express.Router();

// Mock data: Pretend this is our little database for now
let animals = [
  { id: 1, name: 'Elephant', species: 'Mammal' },
  { id: 2, name: 'Python', species: 'Reptile' }
];

// GET all animals
router.get('/animals', (req, res) => {
  res.json(animals);
});

// POST a new animal
router.post('/animals', (req, res) => {
  const { name, species } = req.body;
  const newAnimal = { id: animals.length + 1, name, species };
  animals.push(newAnimal);
  res.status(201).send(newAnimal);
});

// GET an animal by ID
router.get('/animals/:id', (req, res) => {
  const { id } = req.params;
  const animal = animals.find(animal => animal.id === parseInt(id));
  if (!animal) {
    return res.status(404).send('Animal not found.');
  }
  res.send(animal);
});

module.exports = router;
