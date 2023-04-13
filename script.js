const questions = [
    "How do you like to make others happy?"
    "What would you do with 1 Million € in cash right now?"
    "Three Books you would read for the rest of your life?"
];

const questionText = document.getElementById('question-text');
const getQuestionBtn = document.getElementById('get-question-btn');

getQuestionBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[randomIndex];
});

