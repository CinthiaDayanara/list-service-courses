const mongoose = require('mongoose');

// Definir el esquema del curso
const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

// Exportar el modelo basado en el esquema
module.exports = mongoose.model('Course', CourseSchema);
