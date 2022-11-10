const quizData = [
    {
        question: "How old is Kaan?",
        a: "10",
        b: "17",
        c: "20",
        d: "110",
        correct: "c"
    },
    {
        question: "What is the best programming language in 2022?",
        a: "Python",
        b: "Java",
        c: "C++",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "Who is the President of USA?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "a" 
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "What year was Python launched?",
        a: "1991",
        b: "1989",
        c: "1994",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "What is a correct syntax to output \"Hello World\" in Python?",
        a: "print(\"Hello World\")",
        b: "console.log(\"Hello World\")",
        c: "document.write(\"Hello World\")",
        d: "System.out.println(\"Hello World\")",
        correct: "a"
    },
    {
        question: "What is a correct syntax to output \"Hello World\" in JavaScript?",
        a: "print(\"Hello World\")",
        b: "console.log(\"Hello World\")",
        c: "document.write(\"Hello World\")",
        d: "System.out.println(\"Hello World\")",
        correct: "b"
    },
    {
        question: "What Scripting language is used in PHP?",
        a: "Client-side",
        b: "Server-side",
        c: "Home-side",
        d: "Browser-side",
        correct: "b"
    },
    {
        question: "MySQL runs on which operating systems?",
        a: "Windows, Unix, Linux and others",
        b: "Linux and Mac OS X only",
        c: "Unix and Linux only",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which of the following is not a valid data type in MySQL?",
        a: "INT",
        b: "FLOAT",
        c: "DECIMAL",
        d: "BOOLEAN",
        correct: "d"
    },
    {
        question: "What is the correct way to end a PHP statement?",
        a: "New line",
        b: "Semicolon",
        c: "Both a and b",
        d: "None of the above",
        correct: "c"
    },
    {
        question: "Which of the following is not a valid function in PHP?",
        a: "echo",
        b: "print",
        c: "printf",
        d: "print_r",
        correct: "b"
    },
    {
        question: "Which of the following is not a valid CSS property?",
        a: "font-size",
        b: "font-family",
        c: "font-color",
        d: "font-weight",
        correct: "c"
    },
    {
        question: "What are keyframes used for in CSS?",
        a: "To define the animation sequence",
        b: "To define the animation name",
        c: "To define the animation duration",
        d: "To define the animation timing function",
        correct: "a"
    },
]

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("sbm-btn");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answerEl.checked = false;
        }
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);

    if(answer) 
    {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correct.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    } 
});