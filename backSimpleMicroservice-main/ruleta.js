const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT3 = process.env.PORT3;

app.use(cors());

const nombres = [
  'pikachu',
  'ditto',
  'bulbasaur',
  'charmander',
  'squirtle',
  'jigglypuff',
  'eevee',
  'snorlax',
  'mewtwo',
  'meowth',
  'psyduck',
  'magikarp',
  'gyarados',
  'charizard',
  'blastoise',
  'venusaur',
  'dragonite',
  'gengar',
  'lapras',
  'arcanine',
];

app.get('/ruleta', async (req, res) => {
  try {
    const { data: { suma } } = await axios.get('http://localhost:4000/sum');
    const nombreSeleccionado = nombres[suma % nombres.length];

    res.json({ suma, nombreSeleccionado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el resultado de la ruleta' });
  }
});

app.listen(PORT3, () => {
    console.log(`Servidor de pokedex corriendo en http://localhost:${PORT3}`);
  });
  