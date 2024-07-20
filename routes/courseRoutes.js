const express = require('express');
const router = express.Router();
const Course = require('../models/course'); // Verifica que esta ruta sea correcta

// Ruta para obtener todos los cursos
router.get('/api/courses', async (req, res) => {
  try {
    // Obtener todos los cursos de la base de datos
    const courses = await Course.find();

    if (courses.length === 0) {
      return res.status(404).json({ message: 'No courses found' });
    }

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener los cursos',
      details: error.message
    });
  }
});

module.exports = router;
