const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(bodyParser.json());

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    console.log('Mensaje recibido:', message);
    res.json({ message: `Mensaje "${message}" recibido por el servidor!, Gracias` });
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});