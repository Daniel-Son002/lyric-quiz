const superman = [
    // superman
    {
      question: "He puts papers in his briefcase __________",
      correctAnswer: "and drives away"
    },
    {
        question: "Tall, dark, and __________",
        correctAnswer: "Superman"
    },
    {
        question: "He's complicated, __________",
        correctAnswer: "he's irrational"
    }
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
{
    question: "You were in college, working part-time, __________",
    correctAnswer: "waiting tables"
},
{
    question: "Do you remember all the __________?",
    correctAnswer: "city lights on the water"
},
{
    question: "I ran out, crying, and you __________",
    correctAnswer: "followed me out into the street"
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
{
    question: '__________, run away now',
    correctAnswer: "Don't say yes"
},
{
    question: 'I hear the preacher say, "__________"',
    correctAnswer: "Speak now or forever hold your peace"
},
];

const enchanted = [
    {
        question: "Forcing laughter, __________",
        correctAnswer: "faking smiles"
    },
    {
        question: "Walls of insincerity, __________",
        correctAnswer: "shifting eyes and vacancy"
    },
    {
        question: "I'm wonderstruck, blushing __________",
        correctAnswer: "all the way home"
    },
    {
        question: "This night is sparkling, __________",
        correctAnswer: "don't you let it go"
    }
]

const sparks_fly = [
    {
        question: "The way you move is like __________",
        correctAnswer: "a full on rainstorm"
    },
    {
        question: "'Cause I see sparks fly, __________",
        correctAnswer: "whenever you smile"
    },
    {
        question: "My mind forgets to remind me __________",
        correctAnswer: "you're a bad idea"
    },
    {
        question: "You find I'm even better than __________",
        correctAnswer: "you imagined I would be"
    },
    {
        question: "Gimme something that'll haunt me __________",
        correctAnswer: "when you're not around"
    },
    {
        question: "It's just wrong enough __________",
        correctAnswer: "to make it feel right"
    },
    {
        question: "Meet me in the __________",
        correctAnswer: "pouring rain"
    }
]

const haunted = [
    {
        question: "You and I walk a __________",
        correctAnswer: "fragile line"
    },
    {
        question: "Stood there and watched you __________",
        correctAnswer: "walk away"
    },
    {
        question: "Something's gone __________",
        correctAnswer: "terribly wrong"
    },
    {
        question: "Can't breathe whenever __________",
        correctAnswer: "you're gone"
    }
]

const tsou = [
    {
        question: "I used to think one day __________",
        correctAnswer: "we'd tell the story of us"
    },
    {
        question: "I used to know my place __________",
        correctAnswer: "was a spot next to you"
    },
    {
        question: "Miscommunications lead to __________",
        correctAnswer: "fall out"
    },
    {
        question: "See me nervously pulling at __________",
        correctAnswer: "my clothes"
    },
    {
        question: "How I was losing my mind when __________",
        correctAnswer: "I saw you here"
    },
    {
        question: "But I liked it better when you __________",
        correctAnswer: "were on my side"
    }
]

const btr = [
    {
        question: "The story starts when __________",
        correctAnswer: "it was hot and it was summer"
    },
    {
        question: "She came along, got him alone, __________",
        correctAnswer: "and let's hear the applause"
    },
    {
        question: "She's not a saint and __________",
        correctAnswer: "she's not what you think"
    },
    {
        question: "She looks at life like it's a party and __________",
        correctAnswer: "she's on the list"
    },
    {
        question: "I'm just another thing for you __________",
        correctAnswer: "to roll your eyes at honey"
    },
    {
        question: "She took him faster than __________",
        correctAnswer: "you could say sabotage"
    }
]

const mean = [
    {
        question: "And swords and weapons __________",
        correctAnswer: "that you use against me"
    },
    {
        question: "Got me feeling like __________",
        correctAnswer: "a nothing"
    },
    {
        question: "Someday, I'll be livin' in __________",
        correctAnswer: "a big old city"
    },
    {
        question: "Someday, I'll be big enough __________",
        correctAnswer: "so you can't hit me"
    }
]

var obj = { "superman": superman, 
            "speak_now": speak_now, 
            "mine": mine, 
            "enchanted": enchanted, 
            "sparks_fly": sparks_fly,
            "haunted": haunted,
            "tsou": tsou,
            "btr": btr,
            "mean": mean};

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

    let newQuestions = [];
    selectedChoices.forEach(element => {
      newQuestions = newQuestions.concat(obj[element]);
    });
  
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
  