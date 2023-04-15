const questions = [
    "How do you like to make others happy?",
    "What would you do with 1 Million € in cash right now?",
    "Three Books you would read for the rest of your life?",
    "If you live in a world, where every decision you make, creates a new parallel universe: Which parallel universes would you want to travel the most?";
    "Imagine that between Life and Death you visit the place you have felt the most fulfilled and safed and talked to the person that has helped you grow the most in your childhood: What place would you be in and what person would you meet?",
];

const questionText = document.getElementById('question-text');
const getQuestionBtn = document.getElementById('get-question-btn');

getQuestionBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    questionText.textContent = questions[randomIndex];
});

