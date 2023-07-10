const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const photo = document.getElementsByClassName('TS')
const scoreValueElement = document.getElementById("scoreValue");


var sad = ['sad/sad0', 'sad/sad1', 'sad/sad2', 'sad/sad3', 'sad/sad4'];

var happy = ['happy/happy0', 'happy/happy1', 'happy/happy2', 'happy/happy3', 'happy/happy4', 'happy/happy5', 'happy/happy6'];

var score = 0;


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function getRandomNumber(minimum, maximum) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
    
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    clearStatusClass(document.body)
    document.getElementById("img").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemGOaBH1ipIjvagC2qZb5DCfvlSAISV0p2A&usqp=CAU"
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct) {
        changeImage(happy[getRandomNumber(0,6)])
        score++
        scoreValueElement.innerText = score.toString();
    } else{
        alert('stoopid be better')
        changeImage(sad[getRandomNumber(0,4)])
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')    
    } else {
        questionElement.innerText = `You got ${score}` + `/ ${shuffledQuestions.length}`
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        console.log('correct')
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function changeImage(a) {
    document.getElementById("img").src=a + '.jpeg';
}

const questions = [
    {
        question: "He puts papers in his briefcase __________",
        answers: [
            { text: "and drives away", correct: true },
            { text: "takes a big dump", correct: false},
            { text: "goes to work", correct: false},
            { text: "mhmmmhhm", correct: false}
        ]
    },
    {
        question: "You made a rebel of a __________",
        answers: [
            { text: "careless man's careful daughter", correct: true},
            { text: "careless mom's careful daughter", correct: false},
            { text: "careless dog's careful daughter", correct: false},
            { text: "careless monkey's careful daughter", correct: false},
        ]
    },
    {
        question: "Do you remember, we were sittin' there by the __________",
        answers: [
            { text: "poop", correct: false},
            { text: "lake", correct: false},
            { text: "water", correct: true},
            { text: "beach", correct: false},
        ]
    },
    {
        question: "You say we'll never __________",
        answers: [
            { text: "make it out of this town", correct: false},
            { text: "make my parents' mistakes", correct: true},
            { text: "poop", correct: false},
            { text: "but I know we'll find our way", correct: false},
        ]
    },
    {
        question: "Braced myself __________",
        answers: [
            { text: "for the goodbye", correct: true},
            { text: "to make my parents' mistakes", correct: false},
            { text: "massive fart", correct: false},
            { text: "careless man's careful daughter", correct: false},
        ]
    },
    {
        question: "Wearing a gown shaped like a __________",
        answers: [
            { text: "pastry", correct: true},
            { text: "dog", correct: false},
            { text: "donut", correct: false},
            { text: "croissant", correct: false},
        ]
    },
    {
        question: "She floats down the aisle like a __________",
        answers: [
            { text: "bumblebee", correct: false},
            { text: "beauty queen", correct: false},
            { text: "imagined scene", correct: false},
            { text: "pageant queen", correct: true},
        ]
    },
    {
        question: "There's the silence, __________",
        answers: [
            { text: "here's my last chance", correct: false},
            { text: "there's my last chance", correct: true},
            { text: "there's my best chance", correct: false},
            { text: "huzzah", correct: false},
        ]
    },
    {
        question: "I stand up with shaky hands, __________",
        answers: [
            { text: "all feet on me", correct: false},
            { text: "all eyes on me", correct: true},
            { text: "call on me", correct: false},
            { text: "speak now", correct: false},
        ]
    },
    {
        question: 'And they said,  "__________"',
        answers: [
            { text: "speak now", correct: true},
            { text: "fart now", correct: false},
            { text: "poop now", correct: false},
            { text: "eat now", correct: false},
        ]
    },
]

// mine done