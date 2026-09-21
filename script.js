const $ = (id) => document.getElementById(id);
const subjectSelect = $('subject-select');
const topicSelects = document.querySelectorAll('.topic-select');
const modeButtons = document.querySelectorAll('.mode-button');
const emptyState = $('empty-state');
const flashcardView = $('flashcard-view');
const quizView = $('quiz-view');

const flashcardEl = $('flashcard');
const prevCardBtn = $('prev-card');
const nextCardBtn = $('next-card');

const quizOptionsEl = $('quiz-options');
const nextQuestionBtn = $('next-question');
const nextLabel = nextQuestionBtn.querySelector('span');

let currentMode = 'flashcards';
let topicData = null;
let cardIndex = 0;
let quizIndex = 0;
let quizScore = 0;

subjectSelect.addEventListener('change', () => {
    topicSelects.forEach((sel) => {
        sel.value = '';
        sel.classList.toggle('hidden', sel.dataset.subject !== subjectSelect.value);
    });
    showView();
});

topicSelects.forEach((sel) => sel.addEventListener('change', showView));

modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        modeButtons.forEach((b) => b.classList.toggle('active', b === btn));
        currentMode = btn.dataset.mode;
        showView();
    });
});

function showView() {
    const subject = questionBank[subjectSelect.value];
    const topicSelect = [...topicSelects].find((sel) => !sel.classList.contains('hidden'));
    topicData = subject && topicSelect.value ? subject.topics[topicSelect.value] : null;
    const show = !!topicData;
    emptyState.classList.toggle('hidden', show);
    flashcardView.classList.toggle('hidden', !show || currentMode !== 'flashcards');
    quizView.classList.toggle('hidden', !show || currentMode !== 'practice');
    if (!show) return;
    if (currentMode === 'flashcards') { cardIndex = 0; renderCard(); }
    else { quizIndex = 0; quizScore = 0; renderQuestion(); }
}

/* Flashcards */
function renderCard() {
    const cards = topicData.flashcards;
    flashcardEl.classList.remove('flipped');
    $('card-front').textContent = cards[cardIndex].front;
    $('card-back').textContent = cards[cardIndex].back;
    $('card-counter').textContent = `Card ${cardIndex + 1} of ${cards.length}`;
    prevCardBtn.disabled = cardIndex === 0;
    nextCardBtn.disabled = cardIndex === cards.length - 1;
}

flashcardEl.addEventListener('click', () => flashcardEl.classList.toggle('flipped'));
prevCardBtn.addEventListener('click', () => { cardIndex--; renderCard(); });
nextCardBtn.addEventListener('click', () => { cardIndex++; renderCard(); });

/* Quiz: the Uiverse CSS colours answers by input value ("value-2" = correct) */
function renderQuestion() {
    const questions = topicData.quiz;
    const q = questions[quizIndex];
    const isLast = quizIndex === questions.length - 1;

    $('quiz-counter').textContent = `${quizIndex + 1}/${questions.length}`;
    $('quiz-question').textContent = q.prompt;
    $('quiz-score').textContent = '';
    nextQuestionBtn.disabled = true;
    nextLabel.textContent = isLast ? 'See Score' : 'Next Question';

    quizOptionsEl.innerHTML = '';
    q.options.forEach((text, i) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'quiz';
        input.id = `opt-${i}`;
        input.value = i === q.correct ? 'value-2' : 'value-1';
        input.addEventListener('change', () => {
            quizOptionsEl.querySelectorAll('input').forEach((el) => (el.disabled = true));
            if (i === q.correct) quizScore++;
            nextQuestionBtn.disabled = false;
        });
        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = text;
        quizOptionsEl.append(input, label);
    });
}

nextQuestionBtn.addEventListener('click', () => {
    const total = topicData.quiz.length;
    if (quizIndex < total - 1) {
        quizIndex++;
        renderQuestion();
        return;
    }
    $('quiz-question').textContent = 'Quiz complete!';
    $('quiz-counter').textContent = '';
    quizOptionsEl.innerHTML = '';
    nextQuestionBtn.disabled = true;
    $('quiz-score').textContent = `Score: ${quizScore} / ${total}`;
});