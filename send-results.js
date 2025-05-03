const axios = require('axios');

async function sendResults( nameStudent, codeExercise ) {

  const data = {
    name: nameStudent,
    codeExercise: codeExercise,
    date: new Date().toISOString()
  };

  try {
    const response = await axios.post('https://dawm-c9533-default-rtdb.firebaseio.com/paoi2025.json', data); // Cambia por tu endpoint real
    console.log("Resultado enviado:", response.status);
  } catch (error) {
    console.error("Error al enviar resultado:", error.message);
  }
}

async function readCode( ) {

    let codeExercise = null;

    try {
        const packageJsonPath = path.join(process.cwd(), 'package.json');
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        codeExercise = await packageJson.code || null;
    } catch (error) {
        console.error("⚠️ No se pudo leer package.json:", error.message);
    } finally {
        return codeExercise;
    }
}

async function getGithubEmail() {

    let githubEmail = null;

    try {
        githubEmail = await execSync('git config user.email', { encoding: 'utf-8' }).trim() || null;
    } catch (error) {
        console.error("⚠️ No se pudo obtener el usuario de GitHub:", error.message);
    } finally {
        return githubEmail;
    }
}

module.exports = { readCode, sendResults, getGithubEmail };
