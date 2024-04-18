const express = require('express');

const app = express();
const PORT4 = process.env.PORT4 || 2000;



app.get('/nombrerandom', (req, res) => {
const nombres = ['Marcelo', 'Diego', 'Ricardo', 'Guillermo', 'Lionel', 'Mirta', 'Charly', 'Rodrigo', 'Angel', 'Diego'];
const apellido1 = ['Tinelli', 'Peretti', 'Darín', 'Francella', 'Messi', 'Legrand', 'García', 'De la serna', 'Di María', 'Maradona','Fort'];
    try {
        const nombreAleatorio = `${nombres[Math.floor(Math.random() * nombres.length)]} ${apellido1[Math.floor(Math.random() * apellido1.length)]}`;
        res.json({ nombre: nombreAleatorio });
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error al generar los números aleatorios" });
    }
});

app.listen(PORT4, () => {
    console.log(`Server is running on port ${PORT4}`);
});