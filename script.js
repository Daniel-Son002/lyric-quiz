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
        startButton.addEventListener("click", () => {
            score = 0;
        })
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
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
        correctAnswer: "and drives away"
    },
    {
        question: "You made a rebel of a __________",
        correctAnswer: "careless man's careful daughter"
    },
    {
        question: "Do you remember, we were sittin' there by the __________",
        correctAnswer: "water"
    },
    {
        question: "You say we'll never __________",
        correctAnswer: "make my parents' mistakes"
    },
    {
        question: "Braced myself __________",
        correctAnswer: "for the goodbye"
    },
    {
        question: "Wearing a gown shaped like a __________",
        correctAnswer: "pastry"
    },
    {
        question: "She floats down the aisle like a __________",
        correctAnswer: "pageant queen"
    },
    {
        question: "There's the silence, __________",
        correctAnswer: "there's my last chance"
    },
    {
        question: "I stand up with shaky hands, __________",
        correctAnswer: "all eyes on me"
    },
    {
        question: 'And they said,  "__________"',
        correctAnswer: "speak now"
    },
]

// mine done