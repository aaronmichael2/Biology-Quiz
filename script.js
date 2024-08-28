const quizQuestions = [
  {
    question: "What is the primary function of the mitochondria?",
    answers: {
      a: "Photosynthesis",
      b: "Cellular respiration",
      c: "Protein synthesis"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is not a part of the human digestive system?",
    answers: {
      a: "Liver",
      b: "Pancreas",
      c: "Lungs"
    },
    correctAnswer: "c"
  }
];

function buildQuiz() {
  const quizContainer = document.getElementById('quiz');
  const output = [];

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} : ${currentQuestion.answers[letter]}
        </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = document.querySelectorAll('.answers');
  let numCorrect = 0;

  quizQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainer.style.color = 'green';
    } else {
      answerContainer.style.color = 'red';
    }
  });

  document.getElementById('results').innerHTML = `${numCorrect} out of ${quizQuestions.length} correct`;
}

buildQuiz();
document.getElementById('submit').addEventListener('click', showResults);
