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
    
    const questions = document.querySelectorAll('.question-container');
    questions.forEach(q => q.style.display = 'none');
    
   
    document.getElementById('thanksMessage').style.display = 'block';
}

// Función para finalizar la encuesta y redirigir al inicio
function endSurvey() {
   
    document.getElementById('thanksMessage').style.display = 'none';
    
    // Redirigir a la página de inicio
    window.location.href = "index.html";  
}