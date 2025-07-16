let yesCount = 0;
let noCount = 0;

// Función que se llama cuando el usuario responde
function nextQuestion(questionNumber, answer) {
  if (answer === "Sí") {
    yesCount++;
  } else {
    noCount++;
  }

  // Ocultar todas las preguntas
  const questions = document.querySelectorAll(".question-container");
  questions.forEach((q) => (q.style.display = "none"));

  // Mostrar la siguiente pregunta según el número
  const nextQuestion = document.getElementById("question" + questionNumber);
  if (nextQuestion) {
    nextQuestion.style.display = "block";
  }

  // Si es la última pregunta (por ejemplo, la 15), mostrar la pantalla de agradecimiento
  if (questionNumber === 16) {
    showThanks();
  }
}

// Función para mostrar la pantalla final de agradecimiento con el overlay
function showThanks() {
    const overlay = document.getElementById('overlay');
    const overlayMessage = document.getElementById('overlayMessage');
    const riskLevel = document.getElementById('riskLevel');
    const riskMessage = document.getElementById('riskMessage');

    // Cambiar los estilos y los mensajes dependiendo del número de respuestas "Sí"
    if (yesCount >= 11 && yesCount <= 16) {
        overlay.classList.add('red-overlay');
        riskImage.src = "Iconos e imagenes/verde1.png";
        riskLevel.innerHTML = "Riesgo Alto";  // Mensaje de riesgo alto
        riskMessage.innerHTML = "Tu situación presenta un alto riesgo. Has recibido mensajes inapropiados o manipulativos que podrían ser un intento de grooming. Te recomendamos pedir ayuda y responder el cuestionario adicional.";
    } else if (yesCount >= 6 && yesCount <= 10) {
        overlay.classList.add('yellow-overlay');
        riskImage.src = "Iconos e imagenes/ambar.png";
        riskLevel.innerHTML = "Riesgo Moderado";  // Mensaje de riesgo moderado
        riskMessage.innerHTML = "Precaución. Considera tomar medidas. Es posible que tu situación necesite atención.";
    } else if (yesCount <= 5) {
        overlay.classList.add('green-overlay');
        riskImage.src = "Iconos e imagenes/rojo.png";
        riskLevel.innerHTML = "Riesgo Bajo";  // Mensaje de riesgo bajo
        riskMessage.innerHTML = "¡Bien! Estás tomando buenas decisiones. Sigue así.";
    }

    overlay.style.display = 'flex';  // Mostrar el overlay
}

// Función para cerrar el overlay y continuar con la encuesta
function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';  // Ocultar el overlay

    // Si deseas seguir mostrando la pantalla final de agradecimiento
    document.getElementById('thanksMessage').style.display = 'block';
}

// Función para finalizar la encuesta y redirigir al inicio
function endSurvey() {
    window.location.href = "index.html";  // Redirige a la página de inicio
}