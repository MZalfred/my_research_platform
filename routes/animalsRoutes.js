// routes/animalsRoutes.js
const express = require('express');
const router = express.Router();

// Mock data for demonstration
let animals = [
  { id: 1, name: 'Elephant', species: 'Mammal' },
  { id: 2, name: 'Python', species: 'Reptile' }
];

// Routes for handling animals data
router.get('/animals', (req, res) => {
  res.json(animals);
});

router.post('/animals', (req, res) => {
  const { name, species } = req.body;
  const newAnimal = { id: animals.length + 1, name, species };
  animals.push(newAnimal);
  res.status(201).send(newAnimal);
});

router.get('/animals/:id', (req, res) => {
  const { id } = req.params;
  const animal = animals.find(animal => animal.id === parseInt(id));
  if (!animal) {
    res.status(404).send('Animal not found.');
  } else {
    res.send(animal);
  }
});

module.exports = router;
