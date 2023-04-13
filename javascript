const questions = [
    // Insert your array of questions here
];

const questionText = document.getElementById('question-text');
const getQuestionBtn = document.getElementById('get-question-btn');

getQuestionBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[randomIndex];
});

