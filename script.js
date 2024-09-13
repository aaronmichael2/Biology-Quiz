const quizQuestions = [
  {
    question: "What is the role of a plasmid in genetic engineering?",
    answers: {
      a: "To act as a vector for gene insertion",
      b: "To provide energy for gene expression",
      c: "To degrade foreign DNA",
      d: "To replicate host DNA"
    },
    correctAnswer: "a",
    explanation: "Plasmids are used as vectors to carry and insert new genes into host organisms in genetic engineering.",
    dotPoint: "6.2.2 - Plasmids and vectors"
  },
  {
    question: "How does RNA interference (RNAi) regulate gene expression?",
    answers: {
      a: "By enhancing the transcription of target genes",
      b: "By degrading target mRNA molecules",
      c: "By modifying DNA sequence directly",
      d: "By increasing the stability of mRNA"
    },
    correctAnswer: "b",
    explanation: "RNA interference (RNAi) regulates gene expression by degrading specific mRNA molecules, preventing their translation into proteins.",
    dotPoint: "6.2.7 - RNA interference"
  },
  {
    question: "Which process involves the insertion of a foreign gene into a host genome?",
    answers: {
      a: "Transcription",
      b: "Transformation",
      c: "Translation",
      d: "Transduction"
    },
    correctAnswer: "b",
    explanation: "Transformation involves the insertion of foreign DNA into a host organism's genome, which can then be expressed or replicated.",
    dotPoint: "6.3.1 - Genetic transformation"
  },
  {
    question: "What does a Southern blot detect?",
    answers: {
      a: "Protein expression",
      b: "RNA levels",
      c: "Specific DNA sequences",
      d: "Cellular metabolites"
    },
    correctAnswer: "c",
    explanation: "A Southern blot is used to detect specific DNA sequences within a DNA sample.",
    dotPoint: "6.2.8 - Southern blotting"
  },
  {
    question: "Which type of genetic variation involves the movement of DNA sequences within the genome?",
    answers: {
      a: "Gene amplification",
      b: "Transposons",
      c: "Point mutations",
      d: "Inversions"
    },
    correctAnswer: "b",
    explanation: "Transposons, or jumping genes, are DNA sequences that can move to different positions within the genome, causing genetic variation.",
    dotPoint: "6.3.4 - Transposable elements"
  },
  {
    question: "What is the function of the Cas9 protein in CRISPR-Cas9 technology?",
    answers: {
      a: "To introduce mutations in DNA",
      b: "To guide RNA to specific DNA sequences",
      c: "To cut DNA at specific locations",
      d: "To amplify DNA sequences"
    },
    correctAnswer: "c",
    explanation: "The Cas9 protein acts as a molecular scissors in CRISPR-Cas9 technology, cutting DNA at specific locations as guided by RNA.",
    dotPoint: "6.2.5 - CRISPR-Cas9 technology"
  },
  {
    question: "Which of the following techniques would be used to study gene expression?",
    answers: {
      a: "Northern blotting",
      b: "Western blotting",
      c: "Southern blotting",
      d: "ELISA"
    },
    correctAnswer: "a",
    explanation: "Northern blotting is used to study gene expression by detecting specific RNA molecules within a sample.",
    dotPoint: "6.2.9 - Northern blotting"
  },
  {
    question: "Which type of DNA sequencing method reads the entire DNA sequence of an organism?",
    answers: {
      a: "Sanger sequencing",
      b: "Next-generation sequencing (NGS)",
      c: "Polymerase chain reaction (PCR)",
      d: "Gel electrophoresis"
    },
    correctAnswer: "b",
    explanation: "Next-generation sequencing (NGS) allows for the sequencing of entire genomes, providing comprehensive information about an organism's DNA.",
    dotPoint: "6.2.10 - DNA sequencing"
  },
  {
    question: "Which process involves the introduction of foreign DNA into eukaryotic cells?",
    answers: {
      a: "Transformation",
      b: "Transduction",
      c: "Transfection",
      d: "Conjugation"
    },
    correctAnswer: "c",
    explanation: "Transfection is the process of introducing foreign DNA into eukaryotic cells, allowing for gene expression and study.",
    dotPoint: "6.2.11 - Transfection"
  },
  {
    question: "What is the purpose of a DNA microarray?",
    answers: {
      a: "To visualize protein interactions",
      b: "To measure gene expression levels",
      c: "To sequence DNA",
      d: "To cut DNA at specific sites"
    },
    correctAnswer: "b",
    explanation: "A DNA microarray measures gene expression levels by detecting and quantifying the presence of specific mRNA transcripts.",
    dotPoint: "6.2.12 - DNA microarrays"
  }
    {
    question: "What is the purpose of gene silencing using RNA interference?",
    answers: {
      a: "To increase the expression of target genes",
      b: "To degrade specific RNA molecules",
      c: "To mutate target genes",
      d: "To amplify DNA sequences"
    },
    correctAnswer: "b",
    explanation: "Gene silencing using RNA interference (RNAi) aims to degrade specific RNA molecules, thereby reducing or preventing their translation into proteins.",
    dotPoint: "6.2.13 - Gene silencing"
  },
  {
    question: "Which of the following is a key advantage of using CRISPR technology over traditional gene editing methods?",
    answers: {
      a: "Higher cost and complexity",
      b: "More precise and targeted gene modification",
      c: "Less efficiency in editing",
      d: "Greater risk of off-target effects"
    },
    correctAnswer: "b",
    explanation: "CRISPR technology provides a more precise and targeted approach to gene modification compared to traditional methods, which can reduce off-target effects.",
    dotPoint: "6.2.14 - Advantages of CRISPR"
  },
  {
    question: "Which technique is used to analyze protein-protein interactions?",
    answers: {
      a: "ELISA",
      b: "Western blotting",
      c: "Immunoprecipitation",
      d: "Northern blotting"
    },
    correctAnswer: "c",
    explanation: "Immunoprecipitation is a technique used to analyze protein-protein interactions by isolating proteins that interact with a specific protein of interest.",
    dotPoint: "6.2.15 - Protein interactions"
  },
  {
    question: "Which type of mutation involves the insertion of extra nucleotide bases into a DNA sequence?",
    answers: {
      a: "Substitution",
      b: "Deletion",
      c: "Insertion",
      d: "Duplication"
    },
    correctAnswer: "c",
    explanation: "An insertion mutation occurs when additional nucleotide bases are added into the DNA sequence, potentially disrupting the normal function of genes.",
    dotPoint: "6.1.3 - Insertion mutations"
  },
  {
    question: "What is the purpose of a plasmid in gene cloning?",
    answers: {
      a: "To cut DNA into fragments",
      b: "To introduce a gene of interest into a host cell",
      c: "To amplify genes through PCR",
      d: "To visualize gene expression"
    },
    correctAnswer: "b",
    explanation: "Plasmids serve as vectors to introduce a gene of interest into host cells, allowing for the cloning and expression of the gene.",
    dotPoint: "6.2.2 - Plasmids and vectors"
  }
];

let currentQuestionIndex = 0; // To keep track of the current question
const performance = {}; // To track performance by dot point

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

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
    <button id="end">End Quiz</button>
    <div id="feedback"></div>
  `;

  document.getElementById('submit').addEventListener('click', checkAnswer);
  document.getElementById('end').addEventListener('click', showFeedback);
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
  
  // Randomize questions if reaching the end
  if (currentQuestionIndex >= quizQuestions.length) {
    shuffle(quizQuestions);
    currentQuestionIndex = 0;
  }

  showQuestion();
}

function showFeedback() {
  let feedbackHTML = "<p>Quiz Complete! Here's your performance by syllabus dot point:</p><ul>";
  
  for (const dotPoint in performance) {
    const { correct, total } = performance[dotPoint];
    const percentage = Math.round((correct / total) * 100);
    feedbackHTML += `<li>${dotPoint}: ${correct} out of ${total} (${percentage}%)</li>`;
  }

  feedbackHTML += "</ul>";
  document.getElementById('quiz').innerHTML = feedbackHTML;
}

// Start the quiz
shuffle(quizQuestions); // Shuffle questions at the start
showQuestion();
