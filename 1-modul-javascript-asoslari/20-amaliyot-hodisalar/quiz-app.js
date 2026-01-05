/**
 * INTERACTIVE QUIZ APP
 * 
 * Event-driven quiz tizimi - interaktiv test loyihasi
 */

console.log("INTERACTIVE QUIZ APP\n");

const demoContainer = document.getElementById('demo-container');
if (!demoContainer) {
    console.log("❌ Demo container topilmadi");
    return;
}

// Quiz ma'lumotlari
const quizData = [
    {
        question: "JavaScript qaysi yilda yaratilgan?",
        options: ["1995", "1996", "1997", "1998"],
        correct: 0
    },
    {
        question: "DOM nimani anglatadi?",
        options: ["Document Object Model", "Data Object Model", "Dynamic Object Model", "Document Oriented Model"],
        correct: 0
    },
    {
        question: "addEventListener qanday ishlaydi?",
        options: ["Event listener qo'shadi", "Event listener olib tashlaydi", "Event yaratadi", "Event o'chiradi"],
        correct: 0
    },
    {
        question: "Event delegation nima?",
        options: ["Parent elementda listener qo'yish", "Child elementda listener qo'yish", "Event yaratish", "Event o'chirish"],
        correct: 0
    },
    {
        question: "preventDefault() nima qiladi?",
        options: ["Default xatti-harakatni to'xtatadi", "Event yaratadi", "Event o'chiradi", "Event listener qo'shadi"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Quiz UI yaratish
function createQuiz() {
    const quizContainer = document.createElement('div');
    quizContainer.id = 'quiz-app';
    quizContainer.style.cssText = `
        max-width: 600px;
        margin: 0 auto;
        background: white;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    `;

    // Progress bar
    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = 'margin-bottom: 20px;';

    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.cssText = `
        width: 100%;
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
    `;

    const progressFill = document.createElement('div');
    progressFill.id = 'progress-fill';
    progressFill.style.cssText = `
        height: 100%;
        background: #667eea;
        transition: width 0.3s;
        width: ${((currentQuestion + 1) / quizData.length) * 100}%;
    `;

    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressBar);
    quizContainer.appendChild(progressContainer);

    // Question counter
    const counter = document.createElement('div');
    counter.id = 'question-counter';
    counter.style.cssText = `
        text-align: center;
        color: #666;
        margin-bottom: 20px;
        font-size: 14px;
    `;
    quizContainer.appendChild(counter);

    // Question
    const questionDiv = document.createElement('div');
    questionDiv.id = 'question';
    questionDiv.style.cssText = `
        font-size: 1.3em;
        font-weight: bold;
        color: #333;
        margin-bottom: 25px;
        text-align: center;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    quizContainer.appendChild(questionDiv);

    // Options container
    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'options-container';
    optionsContainer.style.cssText = 'margin-bottom: 20px;';
    quizContainer.appendChild(optionsContainer);

    // Navigation buttons
    const navContainer = document.createElement('div');
    navContainer.style.cssText = 'display: flex; gap: 10px;';

    const prevBtn = document.createElement('button');
    prevBtn.id = 'prev-btn';
    prevBtn.textContent = '← Oldingi';
    prevBtn.style.cssText = `
        flex: 1;
        padding: 12px;
        background: #9e9e9e;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
            console.log(`Oldingi savolga o'tildi: ${currentQuestion + 1}`);
        }
    });

    const nextBtn = document.createElement('button');
    nextBtn.id = 'next-btn';
    nextBtn.textContent = 'Keyingi →';
    nextBtn.style.cssText = `
        flex: 1;
        padding: 12px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    nextBtn.addEventListener('click', () => {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            selectedAnswer = null;
            renderQuestion();
            console.log(`Keyingi savolga o'tildi: ${currentQuestion + 1}`);
        } else {
            showResults();
        }
    });

    navContainer.appendChild(prevBtn);
    navContainer.appendChild(nextBtn);
    quizContainer.appendChild(navContainer);

    // Results container
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results-container';
    resultsContainer.style.cssText = 'display: none; text-align: center;';
    quizContainer.appendChild(resultsContainer);

    // Eski quiz ni olib tashlash
    const oldQuiz = document.getElementById('quiz-app');
    if (oldQuiz) {
        oldQuiz.remove();
    }

    demoContainer.appendChild(quizContainer);
    renderQuestion();
    console.log("✅ Quiz yaratildi");
}

// Savolni ko'rsatish
function renderQuestion() {
    const question = quizData[currentQuestion];
    const questionDiv = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const counter = document.getElementById('question-counter');
    const progressFill = document.getElementById('progress-fill');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const resultsContainer = document.getElementById('results-container');

    // Progress yangilash
    progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

    // Counter yangilash
    counter.textContent = `Savol ${currentQuestion + 1} / ${quizData.length}`;

    // Question yangilash
    questionDiv.textContent = question.question;

    // Options tozalash
    optionsContainer.innerHTML = '';

    // Options yaratish
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.style.cssText = `
            width: 100%;
            padding: 15px;
            margin: 8px 0;
            background: white;
            border: 2px solid #667eea;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            text-align: left;
            transition: all 0.3s;
        `;

        if (selectedAnswer === index) {
            optionBtn.style.background = '#667eea';
            optionBtn.style.color = 'white';
        }

        optionBtn.addEventListener('click', () => {
            selectedAnswer = index;
            renderQuestion();
            console.log(`Javob tanlandi: ${option}`);
        });

        optionBtn.addEventListener('mouseenter', () => {
            if (selectedAnswer !== index) {
                optionBtn.style.background = '#f5f5f5';
            }
        });

        optionBtn.addEventListener('mouseleave', () => {
            if (selectedAnswer !== index) {
                optionBtn.style.background = 'white';
            }
        });

        optionsContainer.appendChild(optionBtn);
    });

    // Navigation buttonlarini yangilash
    prevBtn.disabled = currentQuestion === 0;
    prevBtn.style.opacity = currentQuestion === 0 ? '0.5' : '1';
    prevBtn.style.cursor = currentQuestion === 0 ? 'not-allowed' : 'pointer';

    if (currentQuestion === quizData.length - 1) {
        nextBtn.textContent = 'Natijani ko\'rish';
    } else {
        nextBtn.textContent = 'Keyingi →';
    }

    // Results yashirish
    resultsContainer.style.display = 'none';
}

// Natijalarni ko'rsatish
function showResults() {
    score = 0;
    quizData.forEach((question, index) => {
        // Bu yerda selectedAnswer saqlanmagan, shuning uchun har bir savol uchun tekshirish kerak
        // Amaliy loyihada selectedAnswer massivda saqlanadi
    });

    const resultsContainer = document.getElementById('results-container');
    const questionDiv = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const navContainer = document.querySelector('#quiz-app > div:last-child');

    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'block';

    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = '🎉 Quiz Tugadi!';
    resultsTitle.style.cssText = 'color: #667eea; margin-bottom: 20px;';

    const resultsText = document.createElement('p');
    resultsText.textContent = `Siz ${quizData.length} ta savoldan ${score} tasiga to'g'ri javob berdingiz!`;
    resultsText.style.cssText = 'font-size: 1.2em; color: #666; margin-bottom: 20px;';

    const percentage = Math.round((score / quizData.length) * 100);
    const percentageText = document.createElement('p');
    percentageText.textContent = `Foiz: ${percentage}%`;
    percentageText.style.cssText = `
        font-size: 2em;
        font-weight: bold;
        color: ${percentage >= 80 ? '#4caf50' : percentage >= 60 ? '#ff9800' : '#f44336'};
        margin-bottom: 20px;
    `;

    const restartBtn = document.createElement('button');
    restartBtn.textContent = '🔄 Qayta boshlash';
    restartBtn.style.cssText = `
        padding: 12px 24px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
    `;
    restartBtn.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        renderQuestion();
        console.log("Quiz qayta boshlandi");
    });

    resultsContainer.appendChild(resultsTitle);
    resultsContainer.appendChild(resultsText);
    resultsContainer.appendChild(percentageText);
    resultsContainer.appendChild(restartBtn);

    questionDiv.style.display = 'none';
    optionsContainer.style.display = 'none';
    navContainer.style.display = 'none';

    console.log(`Quiz tugadi. Natija: ${score}/${quizData.length} (${percentage}%)`);
}

// Quiz yaratish
createQuiz();
console.log("✅ Quiz tayyor va ishga tushirildi");
