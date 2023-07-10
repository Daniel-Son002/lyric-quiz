const superman = [
    // superman
    {
      question: "He puts papers in his briefcase __________",
      correctAnswer: "and drives away"
    },
  ];
  
const mine = [
// mine
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
];

const speak_now = [
// speak now
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
];

var obj = { "superman": superman, "speak_now": speak_now, "mine": mine};

  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const questionContainerElement = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const photo = document.getElementsByClassName("TS");
  const scoreValueElement = document.getElementById("scoreValue");
  const submitButton = document.getElementById("submit-btn");
  const answerField = document.getElementById("answerField");
  const songContainerElement = document.getElementById("song-container");
  const choicesContainer = document.getElementById("choices");
  const line = document.getElementById("line");

  let selectedChoices = [];
  
  var sad = [
    "sad/sad0",
    "sad/sad1",
    "sad/sad2",
    "sad/sad3",
    "sad/sad4",
  ];
  
  var happy = [
    "happy/happy0",
    "happy/happy1",
    "happy/happy2",
    "happy/happy3",
    "happy/happy4",
    "happy/happy5",
    "happy/happy6",
  ];
  
  var score = 0;
  
  let shuffledQuestions, currentQuestionIndex;
  
  startButton.addEventListener("click", startGame);
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  submitButton.addEventListener("click", submitAnswer);
  
  function getRandomNumber(minimum, maximum) {
    minimum = Math.ceil(minimum);
    maximum = Math.floor(maximum);
  
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  
  function startGame() {
    startButton.classList.add("hide");
    songContainerElement.classList.add("hide");
    line.classList.add("hide")
    selectedChoices = Array.from(choicesContainer.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    console.log(selectedChoices)

    let newQuestions = [];
    selectedChoices.forEach(element => {
      newQuestions = newQuestions.concat(obj[element]);
    });
    console.log(newQuestions)
  
    shuffledQuestions = newQuestions
      .flat()
      .sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }
  
  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  
    answerField.value = "";
    answerField.classList.remove("correct-answer", "wrong-answer");
    submitButton.disabled = false;
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
  }
  
  function resetState() {
    clearStatusClass(document.body);
    document.getElementById(
      "img"
    ).src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemGOaBH1ipIjvagC2qZb5DCfvlSAISV0p2A&usqp=CAU";
    nextButton.classList.add("hide");
  }
  
  function submitAnswer(event) {
    event.preventDefault();
  
    let input = answerField.value;
    const correctAnswer = shuffledQuestions[currentQuestionIndex].correctAnswer;
    setStatusClass(document.body, input === correctAnswer);
  
    if (input === correctAnswer) {
      changeImage(happy[getRandomNumber(0, 6)]);
      answerField.classList.add("correct-answer");
      score++;
      scoreValueElement.innerText = score.toString();
    } else {
      alert("stoopid be better");
      answerField.classList.add("wrong-answer");
      answerField.value = correctAnswer;
      changeImage(sad[getRandomNumber(0, 4)]);
    }
  
    submitButton.disabled = true;
  
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
    } else {
      const end = score;
      questionElement.innerText = `You got ${end}/${shuffledQuestions.length}`;
      submitButton.classList.add("hide")
      songContainerElement.classList.remove("hide");
      line.classList.remove("hide");
      startButton.innerText = "Restart";
      startButton.classList.remove("hide");
      startButton.addEventListener("click", () => {
        score = 0;
        scoreValueElement.innerText = score
      });
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add("correct");
    } else {
      element.classList.add("wrong");
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
  }
  
  function changeImage(a) {
    document.getElementById("img").src = a + ".jpeg";
  }
  