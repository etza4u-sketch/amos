// ===== Trivia Questions Bank =====
const QUESTIONS = [
  // מדע
  {
    category: "מדע",
    question: "כמה פלנטות יש במערכת השמש שלנו?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    hint: "פלוטו הורד מדרגת פלנטה בשנת 2006."
  },
  {
    category: "מדע",
    question: "מהו הגז הנפוץ ביותר באטמוספרה של כדור הארץ?",
    options: ["חמצן", "ארגון", "פחמן דו-חמצני", "חנקן"],
    answer: 3,
    hint: "הוא מהווה כ-78% מהאוויר שאנו נושמים."
  },
  {
    category: "מדע",
    question: "מי גילה את הגרביטציה בהשראת תפוח נופל?",
    options: ["איינשטיין", "ניוטון", "גלילאו", "קפלר"],
    answer: 1,
    hint: "חי באנגליה במאה ה-17 ופיתח את חוקי התנועה."
  },
  {
    category: "מדע",
    question: "מהי הנוסחה הכימית של מים?",
    options: ["HO", "H2O", "H3O", "OH2"],
    answer: 1,
    hint: "שני אטומי מימן ואטום אחד של חמצן."
  },
  {
    category: "מדע",
    question: "באיזו מהירות נוסע האור בחלל (בערך)?",
    options: ["300,000 קמ\"ש", "150,000 קמ\"ש", "300,000 קמ\"ש", "300,000 קמ\"ש"],
    options: ["150,000 קמ\"ש", "300,000 קמ\"ש", "500,000 קמ\"ש", "1,000,000 קמ\"ש"],
    answer: 1,
    hint: "מהירות האור היא כ-300 אלף קילומטר לשנייה."
  },
  // גיאוגרפיה
  {
    category: "גיאוגרפיה",
    question: "מהי בירת אוסטרליה?",
    options: ["סידני", "מלבורן", "קנברה", "פרת"],
    answer: 2,
    hint: "זו לא העיר הגדולה ביותר, אבל היא הבירה."
  },
  {
    category: "גיאוגרפיה",
    question: "איזה הוא הנהר הארוך ביותר בעולם?",
    options: ["אמזונס", "נילוס", "מיסיסיפי", "יאנגצה"],
    answer: 1,
    hint: "הנהר הזה זורם דרך אפריקה לים התיכון."
  },
  {
    category: "גיאוגרפיה",
    question: "כמה מדינות יש ביבשת אפריקה?",
    options: ["42", "54", "61", "48"],
    answer: 1,
    hint: "יש יותר מ-50 מדינות ביבשת הגדולה הזו."
  },
  {
    category: "גיאוגרפיה",
    question: "מהי הארץ הגדולה ביותר בשטח בעולם?",
    options: ["קנדה", "סין", "ארצות הברית", "רוסיה"],
    answer: 3,
    hint: "הארץ הזאת משתרעת על פני 11 אזורי זמן."
  },
  {
    category: "גיאוגרפיה",
    question: "איזה ים מפריד בין אירופה לאפריקה?",
    options: ["ים סוף", "הים הכספי", "הים התיכון", "ים הצפוני"],
    answer: 2,
    hint: "ים זה שוכן בין ספרד, צרפת ואיטליה לבין מרוקו ולוב."
  },
  // היסטוריה
  {
    category: "היסטוריה",
    question: "באיזו שנה הוקמה מדינת ישראל?",
    options: ["1946", "1947", "1948", "1949"],
    answer: 2,
    hint: "ב-5 באייר תש\"ח הוכרזה העצמאות."
  },
  {
    category: "היסטוריה",
    question: "מי היה הנשיא הראשון של ארצות הברית?",
    options: ["אברהם לינקולן", "ג'ורג' וושינגטון", "תומס ג'פרסון", "בנג'מין פרנקלין"],
    answer: 1,
    hint: "הוא נבחר ב-1789 ופניו מופיעות על שטר הדולר."
  },
  {
    category: "היסטוריה",
    question: "באיזו שנה התפוצצה פצצת האטום הראשונה?",
    options: ["1943", "1945", "1947", "1950"],
    answer: 1,
    hint: "זה היה בשנת סיום מלחמת העולם השנייה."
  },
  {
    category: "היסטוריה",
    question: "מי כתב את 'משנה תורה'?",
    options: ["רש\"י", "הרמב\"ן", "הרמב\"ם", "יוסף קארו"],
    answer: 2,
    hint: "הרב הגדול ממצרים, חי במאה ה-12."
  },
  // ספורט
  {
    category: "ספורט",
    question: "כמה שחקנים יש בקבוצת כדורגל בתוך המגרש?",
    options: ["9", "10", "11", "12"],
    answer: 2,
    hint: "כולל שוער אחד."
  },
  {
    category: "ספורט",
    question: "באיזו עיר נערכו המשחקים האולימפיים הראשונים בעידן המודרני?",
    options: ["רומא", "לונדון", "אתונה", "פריז"],
    answer: 2,
    hint: "עיר יוונית, 1896."
  },
  {
    category: "ספורט",
    question: "מי שחקן הכדורגל שקיבל הכי הרבה כדורי זהב?",
    options: ["קריסטיאנו רונאלדו", "ליונל מסי", "פלה", "מרדונה"],
    answer: 1,
    hint: "שחקן ארגנטינאי שמשחק כיום ב-MLS."
  },
  // תרבות
  {
    category: "תרבות",
    question: "מי כתב את הרומן 'הארי פוטר'?",
    options: ["ס.ס. לואיס", "ג'יי.קיי. רולינג", "ג'ון טולקין", "רואל דאל"],
    answer: 1,
    hint: "סופרת בריטית שהתחילה לכתוב בבית קפה."
  },
  {
    category: "תרבות",
    question: "כמה צבעים יש בקשת הברית?",
    options: ["5", "6", "7", "8"],
    answer: 2,
    hint: "אדום, כתום, צהוב, ירוק, כחול, אינדיגו, סגול."
  },
  {
    category: "תרבות",
    question: "מי צייר את 'מונה ליזה'?",
    options: ["מיכלאנג'לו", "רפאל", "לאונרדו דה וינצ'י", "בוטיצ'לי"],
    answer: 2,
    hint: "גאון איטלקי שגם היה מהנדס וממציא."
  },
  {
    category: "תרבות",
    question: "מהי שפת התכנות שנוצרה על ידי גווידו ואן רוסום?",
    options: ["Java", "Ruby", "Python", "Go"],
    answer: 2,
    hint: "שפה שקרויה על שם להקת קומדיה בריטית."
  },
  {
    category: "מדע",
    question: "כמה שיניים יש למבוגר בריא (כולל שיני בינה)?",
    options: ["28", "30", "32", "36"],
    answer: 2,
    hint: "4 שיני בינה + 28 שיניים רגילות."
  },
  {
    category: "גיאוגרפיה",
    question: "איזו עיר נקראת 'עיר האורות'?",
    options: ["לונדון", "ניו יורק", "פריז", "טוקיו"],
    answer: 2,
    hint: "בירת צרפת, בה עומד מגדל אייפל."
  }
];

// ===== Game State =====
const state = {
  board: Array(9).fill(null),
  currentCell: null,
  gameOver: false,
  scores: { player: 0, computer: 0, draws: 0 },
  usedQuestions: new Set(),
  hintUsed: false,
};

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// ===== DOM Refs =====
const boardEl        = document.getElementById('board');
const cells          = Array.from(document.querySelectorAll('.cell'));
const statusText     = document.getElementById('status-text');
const triviaModal    = document.getElementById('trivia-modal');
const qCategory      = document.getElementById('q-category');
const qText          = document.getElementById('q-text');
const qOptions       = document.getElementById('q-options');
const hintBtn        = document.getElementById('hint-btn');
const hintBox        = document.getElementById('hint-box');
const answerFeedback = document.getElementById('answer-feedback');
const resultOverlay  = document.getElementById('result-overlay');
const resultEmoji    = document.getElementById('result-emoji');
const resultTitle    = document.getElementById('result-title');
const resultSubtitle = document.getElementById('result-subtitle');
const newGameBtn     = document.getElementById('new-game-btn');
const resetScoresBtn = document.getElementById('reset-scores-btn');
const globalNewGame  = document.getElementById('global-new-game');
const playerScoreEl  = document.getElementById('player-score');
const computerScoreEl= document.getElementById('computer-score');
const drawScoreEl    = document.getElementById('draw-score');

// ===== Init =====
cells.forEach(cell => cell.addEventListener('click', () => onCellClick(+cell.dataset.index)));
hintBtn.addEventListener('click', showHint);
newGameBtn.addEventListener('click', newGame);
resetScoresBtn.addEventListener('click', resetAll);
globalNewGame.addEventListener('click', newGame);

// ===== Cell Click =====
function onCellClick(index) {
  if (state.gameOver || state.board[index] !== null) return;
  state.currentCell = index;
  openTrivia();
}

// ===== Trivia =====
let currentQ = null;

function getRandomQuestion() {
  let available = QUESTIONS.filter((_, i) => !state.usedQuestions.has(i));
  if (available.length === 0) { state.usedQuestions.clear(); available = QUESTIONS; }
  const idx = QUESTIONS.indexOf(available[Math.floor(Math.random() * available.length)]);
  state.usedQuestions.add(idx);
  return QUESTIONS[idx];
}

function openTrivia() {
  currentQ = getRandomQuestion();
  state.hintUsed = false;

  qCategory.textContent = currentQ.category;
  qText.textContent = currentQ.question;
  hintBox.textContent = '';
  hintBox.classList.add('hidden');
  hintBtn.disabled = false;
  answerFeedback.classList.add('hidden');
  answerFeedback.className = 'feedback hidden';

  qOptions.innerHTML = '';
  currentQ.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(i, btn));
    qOptions.appendChild(btn);
  });

  triviaModal.classList.remove('hidden');
}

function showHint() {
  state.hintUsed = true;
  hintBox.textContent = `💡 ${currentQ.hint}`;
  hintBox.classList.remove('hidden');
  hintBtn.disabled = true;
}

function handleAnswer(selectedIndex, clickedBtn) {
  // Disable all buttons
  const allBtns = qOptions.querySelectorAll('.option-btn');
  allBtns.forEach(b => b.disabled = true);

  const correct = selectedIndex === currentQ.answer;

  // Highlight answer
  allBtns[currentQ.answer].classList.add('correct');
  if (!correct) clickedBtn.classList.add('wrong');

  // Show feedback
  answerFeedback.classList.remove('hidden');
  if (correct) {
    answerFeedback.className = 'feedback correct';
    answerFeedback.textContent = '✅ נכון! מקבל ✕';
  } else {
    answerFeedback.className = 'feedback wrong';
    answerFeedback.textContent = `❌ לא נכון! המחשב מקבל ○`;
  }

  setTimeout(() => {
    triviaModal.classList.add('hidden');
    if (correct) {
      // Player gets X, then computer takes its turn
      placeSymbolSilent(state.currentCell, 'X');
      if (!state.gameOver) computerTurn();
    } else {
      // Computer gets O in the cell the player chose, then takes another turn
      placeSymbolSilent(state.currentCell, 'O');
      if (!state.gameOver) computerTurn();
    }
  }, 1600);
}

// ===== Place Symbol (silent – no win/draw check) =====
function placeSymbolSilent(index, symbol) {
  state.board[index] = symbol;
  const cell = cells[index];
  cell.textContent = symbol === 'X' ? '✕' : '○';
  cell.classList.add('taken', symbol.toLowerCase());
  // Check win immediately – if computer won right here, stop
  const winner = checkWinner();
  if (winner) {
    highlightWinner(winner.line);
    setTimeout(() => endGame(winner.symbol), 500);
    state.gameOver = true;
  }
}

// ===== Place Symbol =====
function placeSymbol(index, symbol) {
  state.board[index] = symbol;
  const cell = cells[index];
  cell.textContent = symbol === 'X' ? '✕' : '○';
  cell.classList.add('taken', symbol.toLowerCase());

  const winner = checkWinner();
  if (winner) {
    highlightWinner(winner.line);
    setTimeout(() => endGame(winner.symbol), 500);
    return;
  }
  if (state.board.every(c => c !== null)) {
    setTimeout(() => endGame(null), 300);
    return;
  }
  setStatus('תורך! בחר תא ✕');
}

// ===== Computer Turn =====
function computerTurn() {
  const aiCell = pickAIMove();
  if (aiCell === -1) {
    setTimeout(() => endGame(null), 300);
    return;
  }
  setStatus('🤖 המחשב חושב...');
  setTimeout(() => placeSymbol(aiCell, 'O'), 600);
}

// ===== AI – Minimax =====
function pickAIMove() {
  // 1. Can computer win now?
  const win = findThreateningMove('O');
  if (win !== -1) return win;
  // 2. Block player winning threat
  const block = findThreateningMove('X');
  if (block !== -1) return block;
  // 3. Center
  if (state.board[4] === null) return 4;
  // 4. Opposite corner from player
  const cornerPairs = [[0,8],[2,6],[8,0],[6,2]];
  for (const [mine, opp] of cornerPairs) {
    if (state.board[opp] === 'X' && state.board[mine] === null) return mine;
  }
  // 5. Any free corner
  for (const c of [0,2,6,8]) {
    if (state.board[c] === null) return c;
  }
  // 6. Any free edge
  for (const c of [1,3,5,7]) {
    if (state.board[c] === null) return c;
  }
  // 7. Fallback – first empty
  return state.board.findIndex(c => c === null);
}

function findThreateningMove(symbol) {
  for (const [a, b, c] of WIN_LINES) {
    const line = [state.board[a], state.board[b], state.board[c]];
    const cells3 = [a, b, c];
    const symCount  = line.filter(v => v === symbol).length;
    const nullCount = line.filter(v => v === null).length;
    if (symCount === 2 && nullCount === 1) {
      return cells3[line.indexOf(null)];
    }
  }
  return -1;
}

// ===== Winner Check =====
function checkWinner() {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c]) {
      return { symbol: state.board[a], line };
    }
  }
  return null;
}

function highlightWinner(line) {
  line.forEach(i => cells[i].classList.add('winning'));
}

// ===== End Game =====
function endGame(symbol) {
  state.gameOver = true;
  if (symbol === 'X') {
    state.scores.player++;
    resultEmoji.textContent = '🎉';
    resultTitle.textContent = 'ניצחת!';
    resultSubtitle.textContent = 'כל הכבוד, ענית נכון על כל השאלות שצריך!';
  } else if (symbol === 'O') {
    state.scores.computer++;
    resultEmoji.textContent = '🤖';
    resultTitle.textContent = 'המחשב ניצח!';
    resultSubtitle.textContent = 'נסה שוב, אתה יכול לנצח!';
  } else {
    state.scores.draws++;
    resultEmoji.textContent = '🤝';
    resultTitle.textContent = 'תיקו!';
    resultSubtitle.textContent = 'משחק מרגש! משחק חדש?';
  }
  updateScoreboard();
  resultOverlay.classList.remove('hidden');
}

// ===== New Game =====
function newGame() {
  state.board = Array(9).fill(null);
  state.currentCell = null;
  state.gameOver = false;

  cells.forEach(cell => {
    cell.textContent = '';
    cell.className = 'cell';
  });

  triviaModal.classList.add('hidden');
  resultOverlay.classList.add('hidden');
  setStatus('בחר תא כדי לענות על שאלת טריוויה!');
}

function resetAll() {
  state.scores = { player: 0, computer: 0, draws: 0 };
  updateScoreboard();
  newGame();
}

function updateScoreboard() {
  playerScoreEl.textContent  = state.scores.player;
  computerScoreEl.textContent= state.scores.computer;
  drawScoreEl.textContent    = state.scores.draws;
}

function setStatus(msg) {
  statusText.style.opacity = '0';
  setTimeout(() => {
    statusText.textContent = msg;
    statusText.style.opacity = '1';
  }, 150);
}
