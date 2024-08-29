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
    explanation: "A substitution mutation involves the replacement of one nucleotide base with another, which may result in a different amino acid in the protein sequence.",
    dotPoint: "6.1.1 - Types of mutations"
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
    explanation: "Restriction enzymes recognize specific DNA sequences and cut the DNA at these sites, allowing for the manipulation and recombination of DNA fragments.",
    dotPoint: "6.2.3 - Recombinant DNA technology"
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
    explanation: "Polymerase Chain Reaction (PCR) is a technique used to make millions of copies of a specific DNA segment, allowing for further analysis.",
    dotPoint: "6.2.4 - DNA amplification"
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
    explanation: "Transduction involves the transfer of DNA from one bacterium to another via a bacteriophage (a virus that infects bacteria).",
    dotPoint: "6.3.1 - Genetic variation in bacteria"
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
    explanation: "Gene therapy aims to treat or prevent diseases by inserting a normal copy of a gene into cells to compensate for a defective or malfunctioning gene.",
    dotPoint: "6.4.2 - Gene therapy"
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
    explanation: "A frameshift mutation occurs when nucleotide bases are added or deleted from the DNA sequence, altering the reading frame and potentially changing every amino acid coded for after the mutation.",
    dotPoint: "6.1.2 - Frameshift mutations"
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
    explanation: "CRISPR-Cas9 technology allows for precise gene knockout, where specific genes are targeted and deactivated, or edited, to study their function or treat genetic diseases.",
    dotPoint: "6.2.5 - CRISPR-Cas9 technology"
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
    explanation: "Mitosis is a process of cell division that results in two identical daughter cells, and it does not contribute to genetic variation like meiosis or mutations.",
    dotPoint: "6.3.2 - Sources of genetic variation"
  },
  // Additional questions
  {
    question: "What technique is used to separate DNA fragments by size?",
    answers: {
      a: "Polymerase Chain Reaction (PCR)",
      b: "Gel electrophoresis",
      c: "Cloning",
      d: "Sequencing"
    },
    correctAnswer: "b",
    explanation: "Gel electrophoresis is used to separate DNA fragments based on their size, allowing for the analysis of DNA patterns.",
    dotPoint: "6.2.6 - Gel electrophoresis"
  },
  {
    question: "Which process involves the transfer of genetic material between organisms that are not sexually reproducing?",
    answers: {
      a: "Conjugation",
      b: "Transformation",
      c: "Transduction",
      d: "All of the above"
    },
    correctAnswer: "d",
    explanation: "Conjugation, transformation, and transduction are all processes by which genetic material can be transferred between organisms that are not reproducing sexually.",
    dotPoint: "6.3.3 - Genetic transfer mechanisms"
  },
  {
    question: "What is the primary goal of gene cloning?",
    answers: {
      a: "To create a genetically identical organism",
      b: "To produce a large quantity of a specific gene or protein",
      c: "To edit genes within an organism",
      d: "To introduce new genes into an organism"
    },
    correctAnswer: "b",
    explanation: "Gene cloning aims to produce multiple copies of a specific gene or protein, which can be used for research, medicine, or agriculture.",
    dotPoint: "6.4.1 - Gene cloning"
  }
];

let currentQuestionIndex = 0; // To keep track of the current question
const performance = {}; // To track performance by dot point

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

  // Check if the answer is correct and provide feedback
  if (userAnswer === currentQuestion.correctAnswer) {
    feedbackContainer.innerHTML = `<p style="color: green;">Correct! ${currentQuestion.explanation}</p>`;
    
    // Update performance for the correct dot point
    if (performance[currentQuestion.dotPoint]) {
      performance[currentQuestion.dotPoint].correct++;
    } else {
      performance[currentQuestion.dotPoint] = { correct: 1, total: 1 };
    }
  } else {
    feedbackContainer.innerHTML = `<p style="color: red;">Incorrect! ${currentQuestion.explanation}</p>`;
    
    // Update performance for the dot point with incorrect answer
    if (performance[currentQuestion.dotPoint]) {
      performance[currentQuestion.dotPoint].total++;
    } else {
      performance[currentQuestion.dotPoint] = { correct: 0, total: 1 };
    }
  }

  document.getElementById('quiz').innerHTML += `<button id="next">Next Question</button>`;
  document.getElementById('next').addEventListener('click', showNextQuestion);
}

function showNextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showFeedback();
  }
}

function showFeedback() {
  let feedbackHTML = "<p>Quiz Complete! Here's your performance by syllabus dot point:</p><ul>";
  
  for (const dotPoint in performance) {
    const { correct, total } = performance[dotPoint];
    const percentage = Math.round((correct / total) * 100);
    feedbackHTML += `<li>${dotPoint}: ${correct} out of ${total} correct (${percentage}%)</li>`;
  }

  feedbackHTML += "</ul>";
  document.getElementById('quiz').innerHTML = feedbackHTML;
}

showQuestion();
