const axios = require('axios');

async function enviarResultado( nameStudent, codeExercise ) {
  const data = {
    name: nameStudent,
    codeExercise: codeExercise,
    date: new Date().toISOString()
  };

  try {
    const response = await axios.post('https://dawm-c9533-default-rtdb.firebaseio.com/homeworks.json', data); // Cambia por tu endpoint real
    console.log("Resultado enviado:", response.status);
  } catch (error) {
    console.error("Error al enviar resultado:", error.message);
  }
}

module.exports = enviarResultado;
