function addHeartsAnimation() {
    const body = document.body;
    const numberOfHearts = 20; // Number of hearts

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = '-50px'; // Ensure hearts start below the visible area
        heart.style.animationDelay = `${Math.random() * 2}s`; // Shorter delay to reduce glitching risk
        heart.style.opacity = 0; // Start with invisible heart for smooth appearance

        // Use a timeout to set opacity and start animation at the right time
        setTimeout(() => {
            heart.style.opacity = 1;
            heart.style.animation = `floatUp 6s linear ${heart.style.animationDelay} forwards`;
        }, Math.random() * 1000);

        body.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 8000); // Give enough time for the heart to complete its journey
    }
}

function showSurprise() {
    const message = document.getElementById('surprise-message');
    if (message) {
        message.style.display = 'block'; // Show the surprise message
    }

    addHeartsAnimation(); // Trigger the hearts animation when surprise is revealed
}



const quizData = [
    {
        question: "Kat mana kita first time jumpa?",
        answers: ["Sekolah", "Class Sir Siva", "Pantai timur", "Tinder"],
        correct: 0
    },
    {
        question: "Bila first date kita in KL? (Outside UM)",
        answers: ["18 June 2022", "11 October", "14 October 2022", "15 October 2022"],
        correct: 2
    },
    {
        question: "What happened on 23 November 2022?",
        answers: ["Our first Beach date", "Our first Movie date", "Our first Karaoke date", "Our first Pasar Seni date"],
        correct: 0
    },
    {
        question: "You wrote me something on a piece of a tissue once, what was it?",
        answers: ["I love you baby", "I love you", "I love you so much", "I ❤️ you"],
        correct: 3
    },
    {
        question: "What did we do on 6 January 2023?",
        answers: ["makan ayam gepuk pak gembus", "tengok movie", "pergi rumah suna together", "naik beam kat pasar seni"],
        correct: 3
    },
    {
        question: "Kat mana kita main our first Chess match?",
        answers: ["Mamak", "Universiti Malaya", "Zus Coffee", "Sekolah"],
        correct: 1
    },
    {
        question: "kita pergi mana masa kita first time naik kereta together dengan mama I?",
        answers: ["Sekolah", "Sunway Putra Mall", "Tuition Sir Siva", "Pasar Malam"],
        correct: 2
    },
    {
        question: "Nama Playlist Spotify yang I buat untuk kita?",
        answers: ["ethologica", "lethologica", "Our Playlist", "Lagu Kita"],
        correct: 1
    },
    {
        question: "Maggi apa kita makan masa tunggu bas after yours was canceled last minute on 14 February 2024?",
        answers: ["Maggi ayam", "Maggi kari", "Maggi tomyam", "Maggi asam laksa"],
        correct: 0
    },
    {
        question: "What game did we play in Popular bookstore at Sunway Pyramid on 16 April 2024?",
        answers: ["Sonic the Hedgehog", "Resident Evil", "Super Mario", "Tetris"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const quizArea = document.getElementById('quiz-area');
    const resultArea = document.getElementById('result');

    // Reset the quiz if it has already been completed
    if (resultArea) {
        resultArea.style.display = 'none';
    }
    if (quizArea) {
        quizArea.style.display = 'block';
    }

    if (quizArea && currentQuestion < quizData.length) {
        quizArea.innerHTML = ''; // Clear previous content

        const questionObj = quizData[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerText = questionObj.question;
        quizArea.appendChild(questionElement);

        const answersElement = document.createElement('div');
        answersElement.className = 'answers';

        questionObj.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.innerText = answer;
            button.onclick = () => checkAnswer(index, button);
            answersElement.appendChild(button);
        });

        quizArea.appendChild(answersElement);
    } else {
        showResult();
    }
}

function checkAnswer(selected, button) {
    const correctAnswer = quizData[currentQuestion].correct;

    if (selected === correctAnswer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
        document.querySelectorAll('.answers button')[correctAnswer].classList.add('correct');
    }

    currentQuestion++;
    setTimeout(loadQuiz, 1000); // Load next question after a short delay
}

function showResult() {
    const quizArea = document.getElementById('quiz-area');
    const resultArea = document.getElementById('result');

    if (quizArea) {
        quizArea.style.display = 'none';
    }

    if (resultArea) {
        const scoreElement = document.getElementById('score');
        const resultMessage = document.getElementById('result-message');

        scoreElement.innerText = score;

        if (score < quizData.length / 2) {
            resultMessage.innerText = "That's not bad my Princess! try again next year😝";
        } else {
            resultMessage.innerText = "Great job my Princess! You know us so well!";
        }

        resultArea.style.display = 'block';
    }
}

function countUp() {
    // Replace with her birthdate
    const birthDate = new Date("Aug 26, 2003 00:00:00").getTime(); 

    setInterval(function () {
        const now = new Date().getTime();
        const distance = now - birthDate;

        const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25)); // Calculate years
        const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)); // Calculate months
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)); // Calculate days
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
        const seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calculate seconds

        const countUpElement = document.getElementById("countup");
        if (countUpElement) {
            countUpElement.innerHTML = years + "y " + months + "m " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
    }, 1000);
}

window.onload = function () {
    countUp(); // Start count-up timer on load

    // Reset quiz parameters
    currentQuestion = 0;
    score = 0;

    // Only load the quiz if the quiz area is present
    if (document.getElementById('quiz-area')) {
        loadQuiz(); // Initialize the quiz
    }
};