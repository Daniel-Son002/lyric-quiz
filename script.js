const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
const photo = document.getElementsByClassName('TS')


var sad = ['sad/sad0', 'sad/sad1', 'sad/sad2', 'sad/sad3', 'sad/sad4'];

var happy = ['happy/happy0', 'happy/happy1', 'happy/happy2', 'happy/happy3', 'happy/happy4', 'happy/happy5', 'happy/happy6'];


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
    } else{
        changeImage(sad[getRandomNumber(0,4)])
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')    
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        console.log('correct')
        // changeImage(happy[getRandomNumber(0,6)])
        element.classList.add('correct')
    } else {
        // changeImage(sad[getRandomNumber(0,4)])
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
    }
]