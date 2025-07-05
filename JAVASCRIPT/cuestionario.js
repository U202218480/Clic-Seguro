// Función para cambiar de pregunta
function nextQuestion(questionNumber) {
    // Ocultar todas las preguntas
    const questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.style.display = 'none');

    // Mostrar la siguiente pregunta según el número
    const nextQuestion = document.getElementById('question' + questionNumber);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}



// Función para cambiar de pregunta
function nextQuestion(questionNumber) {
    // Ocultar todas las preguntas
    const questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.style.display = 'none');

    // Mostrar la siguiente pregunta según el número
    const nextQuestion = document.getElementById('question' + questionNumber);
    if (nextQuestion) {
        nextQuestion.style.display = 'block';
    }
}

// Función para mostrar la pantalla de agradecimiento
function showThanks() {
    // Ocultar las preguntas
    const questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.style.display = 'none');
    
    // Mostrar el mensaje de agradecimiento
    document.getElementById('thanksMessage').style.display = 'block';
}

// Función para finalizar la encuesta y redirigir al inicio
function endSurvey() {
    // Ocultar todo el contenido y mostrar solo el mensaje final de gracias
    document.getElementById('thanksMessage').style.display = 'none';
    
    // Redirigir a la página de inicio (index.html)
    window.location.href = "index.html";  // Cambia la URL si tu página de inicio tiene otro nombre
}