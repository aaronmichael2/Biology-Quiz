const quizQuestions = [
  {
    question: "Which type of mutation occurs when one nucleotide base is replaced by another?",
    answers: {
      a: "Deletion",
      b: "Insertion",
      c: "Substitution",
      d: "Frameshift"
    },
    correctAnswer: "c",
    explanation: "A substitution mutation involves the replacement of one nucleotide base with another, which may result in a different amino acid in the protein sequence."
  },
  {
    question: "What is the role of restriction enzymes in recombinant DNA technology?",
    answers: {
      a: "To join DNA fragments together",
      b: "To cut DNA at specific sequences",
      c: "To replicate DNA",
      d: "To insert DNA into host cells"
    },
    correctAnswer: "b",
    explanation: "Restriction enzymes recognize specific DNA sequences and cut the DNA at these sites, allowing for the manipulation and recombination of DNA fragments."
  },
  {
    question: "Which method is commonly used to amplify small amounts of DNA for analysis?",
    answers: {
      a: "Gel electrophoresis",
      b: "Polymerase Chain Reaction (PCR)",
      c: "Gene cloning",
      d: "Southern blotting"
    },
    correctAnswer: "b",
    explanation: "Polymerase Chain Reaction (PCR) is a technique used to make millions of copies of a specific DNA segment, allowing for further analysis."
  },
  {
    question: "Which of the following is a method by which bacteria can gain new genetic material?",
    answers: {
      a: "Transcription",
      b: "Translation",
      c: "Transduction",
      d: "Meiosis"
    },
    correctAnswer: "c",
    explanation: "Transduction involves the transfer of DNA from one bacterium to another via a bacteriophage (a virus that infects bacteria)."
  },
  {
    question: "What is the purpose of gene therapy?",
    answers: {
      a: "To modify the genetic code of an entire population",
      b: "To introduce a normal gene into cells to replace a faulty gene",
      c: "To produce synthetic proteins in a laboratory",
      d: "To analyze the function of a specific gene",
    },
    correctAnswer: "b",
    explanation: "Gene therapy aims to treat or prevent diseases by inserting a normal copy of a gene into cells to compensate for a defective or malfunctioning gene."
  },
  {
    question: "What type of mutation is caused by the addition or deletion of a base pair in DNA?",
    answers: {
      a: "Silent mutation",
      b: "Missense mutation",
      c: "Frameshift mutation",
      d: "Point mutation"
    },
    correctAnswer: "c",
    explanation: "A frameshift mutation occurs when nucleotide bases are added or deleted from the DNA sequence, altering the reading frame and potentially changing every amino acid coded for after the mutation."
  },
  {
    question: "Which term describes the use of CRISPR-Cas9 technology in gene editing?",
    answers: {
      a: "RNA interference",
      b: "Gene knockout",
      c: "Base editing",
      d: "Gene silencing"
    },
    correctAnswer: "b",
    explanation: "CRISPR-Cas9 technology allows for precise gene knockout, where specific genes are targeted and deactivated, or edited, to study their function or treat genetic diseases."
  },
  {
    question: "Which of the following is NOT a source of genetic variation in populations?",
    answers: {
      a: "Mutation",
      b: "Genetic recombination during meiosis",
      c: "Gene flow",
      d: "Mitosis"
    },
    correctAnswer: "d",
    explanation: "Mitosis is a process of cell division that results in two identical daughter cells, and it does not contribute to genetic variation like meiosis or mutations."
  }
];

let currentQuestionIndex = 0; // To keep track of the current question

function showQuestion() {
  const quizContainer = document.getElementById('quiz');
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answers = [];

  for (let letter in currentQuestion.answers) {
    answers.push(
      `<label>
        <input type="radio" name="question" value="${letter}">
        ${letter} : ${currentQuestion.answers[letter]}
      </label><br>`
    );
  }

  quizContainer.innerHTML = `
    <div class="question">${currentQuestion.question}</div>
    <div class="answers">${answers.join('')}</div>
    <button id="submit">Submit Answer</button>
    <div id="feedback"></div>
  `;

  document.getElementById('submit').addEventListener('click', checkAnswer);
}

function checkAnswer() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const answerContainer = document.querySelector('.answers');
  const selectedOption = document.querySelector('input[name=question]:checked');

  const feedbackContainer = document.getElementById('feedback');

  if (!selectedOption) {
    feedbackContainer.innerHTML = "<p>Please select an answer!</p>";
    return;
  }

  const userAnswer = selectedOption.value;

  if (userAnswer === currentQuestion.correctAnswer) {
    feedbackContainer.innerHTML = `<p style="color: green;">Correct! ${currentQuestion.explanation}</p>`;
  } else {
    feedbackContainer.innerHTML = `<p style="color: red;">Incorrect! ${currentQuestion.explanation}</p>`;
  }

  document.getElementById('quiz').innerHTML += `<button id="next">Next Question</button>`;
  document.getElementById('next').addEventListener('click', showNextQuestion);
}

function showNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    document.getElementById('quiz').innerHTML = `<p>You've completed the quiz! Your score is shown below:</p>`;
  }
}

showQuestion();
