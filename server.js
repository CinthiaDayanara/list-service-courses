const express = require('express');
const mongoose = require('mongoose');
const courseRoutes = require('./routes/courseRoutes'); // Asegúrate de que la ruta sea correcta
const app = express();
const port = 5009;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/courses_db', {
});

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/', courseRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
