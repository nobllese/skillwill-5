const questions = [
    {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
        {text: '&lt;js&gt;', correct: false},
        {text: '&lt;script&gt;', correct: true},
        {text: '&lt;javascript&gt;', correct: false},
        {text: '&lt;scripting&gt;', correct: false},
    ]
    },
    {
        question: 'What is  output of typeof null?',
        answers: [
            {text: 'Object', correct: true},
            {text: 'Null', correct: false},
            {text: 'undefined', correct: false},
            {text: 'number', correct: false},
        ]
    },
    {
        question: 'What is the correct syntax to create a single-line comment in JavaScript?',
        answers: [
            {text: '/* This is a comment*/', correct: false},
            {text: '#This is a comment', correct: false},
            {text: '//This is a comment', correct: true},
            {text: '&lt;!--This is a comment--&gt', correct: false},
        ]
    },
    {
        question: 'Acronym for DOM in JavaScript ?',
        answers: [
            {text: 'Document Object Method', correct: false},
            {text: 'Data Object Model', correct: false},
            {text: 'Document Oriented Method', correct: false},
            {text: 'Document Object Model', correct: true},
        ]
    },
    {
        question: 'Which of the following is not a JavaScript data type?',
        answers: [
            {text: 'String', correct: false},
            {text: 'Boolean', correct: false},
            {text: 'Float', correct: true},
            {text: 'Number', correct: false},
        ]
    },
];



const questionElement = document.querySelector('#question')
const answerButtons = document.querySelector('#answer-buttons')
const nextButton = document.querySelector('#next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement
    .innerHTML = questionNo + '. ' + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.append(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
} 

function resetState(){
    nextButton.computedStyleMap.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === ' true'){
            button.classList.add('correct')
        }
        button.disabled = 'true';
    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 
    ${questions.length}!`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();