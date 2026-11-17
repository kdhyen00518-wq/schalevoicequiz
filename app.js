
// DOM Elements
const screens = {
    mode: document.getElementById('mode-screen'),
    config: document.getElementById('config-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    card: document.getElementById('card-screen'),
    final: document.getElementById('final-result-screen') // 추가된 부분
};

// State
let currentMode = '';
let questionCount = 0;
let currentQIndex = 0;
let score = 0;
let activeVoiceGroups = {}; 
let questionPool = []; 
let currentQuestion = null;

// Card Game State
let cardDeck = [];
let flippedCards = [];
let matchedPairs = 0;

// --- Initialize Data ---
function processData() {
    const groups = {};
    students.forEach(st => {
        if (!st.voice) return;
        if (!groups[st.voice]) groups[st.voice] = [];
        groups[st.voice].push(st);
    });

    // 조건: 담당 학생이 2명 이상인 성우만 유지
    for (const voice in groups) {
        if (groups[voice].length >= 2) {
            activeVoiceGroups[voice] = groups[voice];
        }
    }
}

// --- Screen Management ---
function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// --- Mode Selection ---
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentMode = e.currentTarget.dataset.mode;
        setupConfigScreen();
        showScreen('config');
    });
});

// --- Config Screen ---
function setupConfigScreen() {
    const title = document.getElementById('config-title');
    const optionsBox = document.getElementById('config-options');
    const startBtn = document.getElementById('start-btn');
    
    startBtn.className = 'start-btn';
    questionCount = 0;
    optionsBox.innerHTML = '';

    if (currentMode === 'card') {
        title.innerText = '카드 뒤집기 설정';
        document.getElementById('config-desc').innerText = '그리드 크기를 선택하세요';
        const sizes = [
            { label: '4 x 4 (16장)', val: 8 },
            { label: '4 x 5 (20장)', val: 10 },
            { label: '6 x 6 (36장)', val: 18 }
        ];
        sizes.forEach(s => {
            const btn = document.createElement('button');
            btn.className = 'config-opt-btn';
            btn.innerText = s.label;
            btn.onclick = () => selectConfig(btn, s.val);
            optionsBox.appendChild(btn);
        });
    } else {
        title.innerText = currentMode === 'input' ? '직접 입력하기 설정' : '4지선다 설정';
        document.getElementById('config-desc').innerText = '문제 수를 선택하세요';
        
        // 동적으로 최대 성우 수를 파악하여 '전체(49문제)'로 표시
        const maxQ = Object.keys(activeVoiceGroups).length; 
        
        const counts = [
            { label: '10문제', val: 10 },
            { label: '20문제', val: 20 },
            { label: '30문제', val: 30 },
            { label: `전체 (${maxQ})`, val: maxQ }
        ];
        counts.forEach(c => {
            const btn = document.createElement('button');
            btn.className = 'config-opt-btn';
            btn.innerText = c.label;
            btn.onclick = () => selectConfig(btn, c.val);
            optionsBox.appendChild(btn);
        });
    }
}

function selectConfig(btn, val) {
    document.querySelectorAll('.config-opt-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    questionCount = val;
    document.getElementById('start-btn').classList.add('ready');
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (questionCount === 0) return;
    startGame();
});

// Return Buttons
document.getElementById('return-btn').addEventListener('click', () => showScreen('mode'));
document.getElementById('card-return-btn').addEventListener('click', () => showScreen('mode'));

// --- Game Logic ---
function startGame() {
    score = 0;
    currentQIndex = 0;
    
    let availableVoices = Object.keys(activeVoiceGroups);
    
    // --- 데이터 부족 예외 처리 추가 ---
    if (availableVoices.length === 0) {
        alert("출제 가능한 문제가 없습니다!\n데이터(students.js)에 동일한 성우(voice)를 가진 학생이 2명 이상 묶인 세트가 있는지 확인해 주세요.");
        document.getElementById('start-btn').classList.remove('ready');
        showScreen('mode');
        return;
    }
    // ---------------------------------

    availableVoices = availableVoices.sort(() => 0.5 - Math.random()); // Shuffle

    // ... (이하 기존 코드 동일)

    if (currentMode === 'card') {
        // Generate Card Deck (questionCount = number of pairs)
        const selectedVoices = availableVoices.slice(0, questionCount);
        cardDeck = [];
        selectedVoices.forEach(v => {
            // 한 성우가 3명을 담당했어도 짝맞추기를 위해 딱 2명만 추출
            const pair = activeVoiceGroups[v].slice(0, 2); 
            cardDeck.push(pair[0], pair[1]);
        });
        cardDeck = cardDeck.sort(() => 0.5 - Math.random());
        initCardGame();
        showScreen('card');
    } else {
        // Input or 4-Choice
        const totalAvail = availableVoices.length;
        const limit = Math.min(questionCount, totalAvail);
        questionPool = availableVoices.slice(0, limit);
        
        document.getElementById('input-controls').style.display = currentMode === 'input' ? 'flex' : 'none';
        document.getElementById('choice-controls').style.display = currentMode === 'choice' ? 'flex' : 'none';
        
        loadNextQuestion();
        showScreen('quiz');
    }
}

// Student Card HTML Generator (Fixed size box with absolute name overlay)
function createStudentCardHTML(student) {
    return `
        <div class="student-card">
            <img src="${student.image}" alt="${student.name}">
            <div class="name-overlay">${student.fullName}</div>
        </div>
    `;
}

function loadNextQuestion() {
    if (currentQIndex >= questionPool.length) {
        endGame();
        return;
    }

    const voice = questionPool[currentQIndex];
    const studentsInVoice = activeVoiceGroups[voice];
    
    // 출제할 학생(Q)과 정답 그룹 설정
    const qStudent = studentsInVoice[0];
    currentQuestion = {
        voice: voice,
        qStudent: qStudent,
        answers: studentsInVoice.slice(1)
    };

    // Update UI
    document.querySelector('.progress-text').innerText = `${currentQIndex + 1} / ${questionPool.length}`;
    document.querySelector('.score-text').innerText = score;
    document.getElementById('question-content').innerHTML = createStudentCardHTML(qStudent);

    if (currentMode === 'input') {
        const input = document.getElementById('answer-input');
        input.value = '';
        input.focus();
    } else if (currentMode === 'choice') {
        generateChoices(qStudent, currentQuestion.answers[0]);
    }
}

function generateChoices(qStudent, correctStudent) {
    const grid = document.getElementById('choice-grid');
    grid.innerHTML = '';

    const choices = [correctStudent];
    const allVoices = Object.keys(activeVoiceGroups);
    const usedVoices = [qStudent.voice];

    // 오답 3개 추출 (같은 성우 배제)
    while (choices.length < 4) {
        const randomVoice = allVoices[Math.floor(Math.random() * allVoices.length)];
        if (!usedVoices.includes(randomVoice)) {
            usedVoices.push(randomVoice);
            choices.push(activeVoiceGroups[randomVoice][0]);
        }
    }

    choices.sort(() => 0.5 - Math.random());

    choices.forEach(st => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        
        // 변경된 부분: 버튼 텍스트 대신 이미지와 텍스트를 함께 렌더링
        btn.innerHTML = `
            <img src="${st.image}" alt="${st.name}" class="choice-thumb">
            <span>${st.fullName}</span>
        `;
        
        btn.onclick = () => checkChoice(st);
        grid.appendChild(btn);
    });
}
// --- Answer Checking ---
document.getElementById('submit-btn').addEventListener('click', checkInput);
document.getElementById('answer-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkInput();
});
document.getElementById('skip-btn').addEventListener('click', () => showResult(false));

function checkInput() {
    const val = document.getElementById('answer-input').value.trim().toLowerCase();
    if (!val) return;
    
    const isCorrect = currentQuestion.answers.some(ans => 
        ans.fullName.toLowerCase() === val || 
        ans.aliases.some(alias => alias.toLowerCase() === val)
    );
    showResult(isCorrect);
}

function checkChoice(selectedStudent) {
    const isCorrect = currentQuestion.answers.some(ans => ans.id === selectedStudent.id);
    showResult(isCorrect);
}

function showResult(isCorrect) {
    if (isCorrect) score++;
    
    const msg = document.getElementById('result-message');
    msg.innerText = isCorrect ? '정답입니다!' : '오답입니다!';
    msg.style.color = isCorrect ? 'var(--blue-accent)' : '#ff4d4d';

    const layout = document.getElementById('result-layout');
    layout.innerHTML = '';
    
    const allStudents = activeVoiceGroups[currentQuestion.voice];
    
    // 정삼각형(피라미드) 레이아웃 로직 (3명일 경우)
    if (allStudents.length >= 3) {
        const wrapper = document.createElement('div');
        wrapper.className = 'triangle-layout';
        wrapper.innerHTML = `
            <div class="triangle-top">
                ${createStudentCardHTML(allStudents[0])}
            </div>
            <div class="triangle-bottom">
                ${createStudentCardHTML(allStudents[1])}
                ${createStudentCardHTML(allStudents[2])}
            </div>
        `;
        layout.appendChild(wrapper);
    } else {
        // 2명일 경우 양옆 나란히
        allStudents.forEach(st => {
            layout.innerHTML += createStudentCardHTML(st);
        });
    }

    document.getElementById('result-cv').innerText = `CV. ${currentQuestion.voice}`;
    showScreen('result');
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentQIndex++;
    loadNextQuestion();
    if (currentQIndex < questionPool.length) {
        showScreen('quiz');
    }
});

function endGame() {
    const finalScoreEl = document.getElementById('final-score');
    const finalTotalEl = document.getElementById('final-total');
    const finalPercentEl = document.getElementById('final-percent');
    const finalIconEl = document.getElementById('final-mode-icon'); // 아이콘 요소
    
    // 모드별 아이콘 SVG 설정 (메인 화면 아이콘 재사용)
    const iconInput = `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238FB6FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path><path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path></svg>" alt="입력">`;
    const iconChoice = `<img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238FB6FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='7' height='7'></rect><rect x='14' y='3' width='7' height='7'></rect><rect x='14' y='14' width='7' height='7'></rect><rect x='3' y='14' width='7' height='7'></rect></svg>" alt="4지선다">`;
    
    // 현재 모드에 따라 아이콘 삽입
    if (currentMode === 'input') {
        finalIconEl.innerHTML = iconInput;
    } else if (currentMode === 'choice') {
        finalIconEl.innerHTML = iconChoice;
    } else {
        finalIconEl.innerHTML = '';
    }

    // 점수 렌더링
    finalScoreEl.innerText = score;
    finalTotalEl.innerText = questionPool.length;
    
    const percent = Math.round((score / questionPool.length) * 100);
    finalPercentEl.innerText = `정답률 : ${percent}%`;
    
    showScreen('final');
}

// (맨 아래에 결과 화면용 메인으로 가기 버튼 이벤트 추가)
document.getElementById('final-return-btn').addEventListener('click', () => showScreen('mode'));

// --- Card Flip Logic ---
function initCardGame() {
    const grid = document.getElementById('card-grid');
    grid.innerHTML = '';
    
    // 그리드 컬럼 설정 (16장=4x4, 20장=5x4, 36장=6x6)
    const totalCards = cardDeck.length;
    let cols = 4;
    if (totalCards === 20) cols = 5;
    if (totalCards === 36) cols = 6;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    matchedPairs = 0;
    flippedCards = [];
    document.getElementById('card-match-text').innerText = '0';
    document.getElementById('card-total-text').innerText = questionCount;

    cardDeck.forEach((st, idx) => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.dataset.index = idx;
        card.dataset.voice = st.voice;
        
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">?</div>
                <div class="flip-card-back">
                    <img src="${st.image}" alt="${st.name}">
                    <div class="name-overlay">${st.fullName}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => flipCard(card));
        grid.appendChild(card);
    });
}

function flipCard(card) {
    if (flippedCards.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkCardMatch, 800);
    }
}

function checkCardMatch() {
    const [c1, c2] = flippedCards;
    
    if (c1.dataset.voice === c2.dataset.voice) {
        c1.classList.add('matched');
        c2.classList.add('matched');
        matchedPairs++;
        document.getElementById('card-match-text').innerText = matchedPairs;
        
        // 변경된 부분: alert와 showScreen('mode') 강제 전환을 삭제하고 화면에 머무르게 함
        if (matchedPairs === questionCount) {
            const returnBtn = document.getElementById('card-return-btn');
            returnBtn.innerText = "완료! 돌아가기";
            returnBtn.style.background = "var(--blue-accent)"; // 완료된 느낌을 주도록 파란색으로 변경
        }
    } else {
        c1.classList.remove('flipped');
        c2.classList.remove('flipped');
    }
    
    flippedCards = [];
}

function initCardGame() {
    const grid = document.getElementById('card-grid');
    grid.innerHTML = '';
    
    const totalCards = cardDeck.length;
    let cols = 4;
    if (totalCards === 20) cols = 5;
    if (totalCards === 36) cols = 6;
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    matchedPairs = 0;
    flippedCards = [];
    document.getElementById('card-match-text').innerText = '0';
    document.getElementById('card-total-text').innerText = questionCount;

    // 추가된 부분: 새 게임 시작 시 돌아가기 버튼을 원래 상태(빨간색, 포기하기)로 초기화
    const returnBtn = document.getElementById('card-return-btn');
    returnBtn.innerText = "포기하고 돌아가기";
    returnBtn.style.background = "#ff4d4d";

    cardDeck.forEach((st, idx) => {
        const card = document.createElement('div');
        card.className = 'flip-card';
        card.dataset.index = idx;
        card.dataset.voice = st.voice;
        
        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">?</div>
                <div class="flip-card-back">
                    <img src="${st.image}" alt="${st.name}">
                    <div class="name-overlay">${st.fullName}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => flipCard(card));
        grid.appendChild(card);
    });
}

// Start
processData();