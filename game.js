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

// ===== WIN LINES =====
const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// ===== State =====
let board        = Array(9).fill(null);
let gameOver     = false;
let locked       = false;   // נעילה בזמן מהלך מחשב
let chosenCell   = null;
let scores       = { player: 0, computer: 0, draws: 0 };
let usedQs       = new Set();
let currentQ     = null;

// ===== DOM =====
const cellEls       = Array.from(document.querySelectorAll('.cell'));
const statusText    = document.getElementById('status-text');
const triviaModal   = document.getElementById('trivia-modal');
const qCategory     = document.getElementById('q-category');
const qText         = document.getElementById('q-text');
const qOptions      = document.getElementById('q-options');
const hintBtn       = document.getElementById('hint-btn');
const hintBox       = document.getElementById('hint-box');
const answerFeedback= document.getElementById('answer-feedback');
const resultOverlay = document.getElementById('result-overlay');
const resultEmoji   = document.getElementById('result-emoji');
const resultTitle   = document.getElementById('result-title');
const resultSubtitle= document.getElementById('result-subtitle');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl=document.getElementById('computer-score');
const drawScoreEl   = document.getElementById('draw-score');

// ===== Init =====
cellEls.forEach(c => c.addEventListener('click', () => onCellClick(+c.dataset.index)));
hintBtn.addEventListener('click', showHint);
document.getElementById('new-game-btn').addEventListener('click', newGame);
document.getElementById('reset-scores-btn').addEventListener('click', resetAll);
document.getElementById('global-new-game').addEventListener('click', newGame);

// ===== Cell Click =====
function onCellClick(idx) {
  if (gameOver || locked || board[idx] !== null) return;
  chosenCell = idx;
  openTrivia();
}

// ===== Trivia =====
function pickQuestion() {
  let avail = QUESTIONS.map((q, i) => i).filter(i => !usedQs.has(i));
  if (!avail.length) { usedQs.clear(); avail = QUESTIONS.map((_, i) => i); }
  const i = avail[Math.floor(Math.random() * avail.length)];
  usedQs.add(i);
  return QUESTIONS[i];
}

function openTrivia() {
  currentQ = pickQuestion();
  qCategory.textContent = currentQ.category;
  qText.textContent     = currentQ.question;
  hintBox.textContent   = '';
  hintBox.classList.add('hidden');
  hintBtn.disabled      = false;
  answerFeedback.className = 'feedback hidden';
  qOptions.innerHTML    = '';
  currentQ.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className   = 'option-btn';
    btn.textContent = opt;
    btn.onclick     = () => handleAnswer(i, btn);
    qOptions.appendChild(btn);
  });
  triviaModal.classList.remove('hidden');
}

function showHint() {
  hintBox.textContent = '💡 ' + currentQ.hint;
  hintBox.classList.remove('hidden');
  hintBtn.disabled = true;
}

// ===== Answer =====
function handleAnswer(selected, btn) {
  qOptions.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
  const correct = selected === currentQ.answer;
  qOptions.querySelectorAll('.option-btn')[currentQ.answer].classList.add('correct');
  if (!correct) btn.classList.add('wrong');
  answerFeedback.className = 'feedback ' + (correct ? 'correct' : 'wrong');
  answerFeedback.classList.remove('hidden');
  answerFeedback.textContent = correct ? '✅ נכון! מקבל ✕' : '❌ לא נכון! המחשב מקבל ○';

  setTimeout(() => {
    triviaModal.classList.add('hidden');
    if (correct) {
      mark(chosenCell, 'X');
      if (!gameOver) computerPlay(1);   // תור מחשב רגיל – מהלך אחד
    } else {
      mark(chosenCell, 'O');
      if (!gameOver) computerPlay(2);   // טעות – מחשב מוסיף עוד מהלך
    }
  }, 1500);
}

// ===== Computer plays N moves sequentially =====
function computerPlay(movesLeft) {
  locked = true;
  statusText.textContent = '🤖 תור המחשב...';

  setTimeout(() => {
    const c = aiPick();
    if (c === -1) { endGame(null); return; }
    mark(c, 'O');
    if (gameOver) return;

    if (movesLeft > 1) {
      computerPlay(movesLeft - 1);   // מהלך נוסף
    } else {
      locked = false;
      statusText.textContent = 'תורך! בחר תא ✕';
    }
  }, 700);
}

// ===== Mark Cell =====
function mark(idx, sym) {
  board[idx] = sym;
  cellEls[idx].textContent = sym === 'X' ? '✕' : '○';
  cellEls[idx].classList.add('taken', sym.toLowerCase());
  const win = checkWin();
  if (win) { win.line.forEach(i => cellEls[i].classList.add('winning')); endGame(sym); return; }
  if (board.every(c => c !== null)) endGame(null);
}

// ===== AI =====
function aiPick() {
  const threat = (s) => {
    for (const [a,b,c] of WIN_LINES) {
      const ln = [board[a], board[b], board[c]];
      if (ln.filter(v => v === s).length === 2 && ln.includes(null))
        return [a,b,c][ln.indexOf(null)];
    }
    return -1;
  };
  const win   = threat('O'); if (win  !== -1) return win;
  const block = threat('X'); if (block !== -1) return block;
  if (board[4] === null) return 4;
  for (const c of [0,2,6,8]) if (board[c] === null) return c;
  for (const c of [1,3,5,7]) if (board[c] === null) return c;
  return board.findIndex(c => c === null);
}

// ===== Win Check =====
function checkWin() {
  for (const line of WIN_LINES) {
    const [a,b,c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return { sym: board[a], line };
  }
  return null;
}

// ===== End Game =====
function endGame(sym) {
  gameOver = true;
  locked   = true;
  if (sym === 'X') {
    scores.player++;
    resultEmoji.textContent   = '🎉';
    resultTitle.textContent   = 'ניצחת!';
    resultSubtitle.textContent= 'כל הכבוד!';
  } else if (sym === 'O') {
    scores.computer++;
    resultEmoji.textContent   = '🤖';
    resultTitle.textContent   = 'המחשב ניצח!';
    resultSubtitle.textContent= 'נסה שוב!';
  } else {
    scores.draws++;
    resultEmoji.textContent   = '🤝';
    resultTitle.textContent   = 'תיקו!';
    resultSubtitle.textContent= 'משחק מרגש!';
  }
  updateScores();
  resultOverlay.classList.remove('hidden');
}

// ===== New Game =====
function newGame() {
  board    = Array(9).fill(null);
  gameOver = false;
  locked   = false;
  chosenCell = null;
  cellEls.forEach(c => { c.textContent = ''; c.className = 'cell'; });
  triviaModal.classList.add('hidden');
  resultOverlay.classList.add('hidden');
  setStatus('בחר תא כדי לענות על שאלת טריוויה!');
}

function resetAll() {
  scores = { player: 0, computer: 0, draws: 0 };
  updateScores();
  newGame();
}

function updateScores() {
  playerScoreEl.textContent  = scores.player;
  computerScoreEl.textContent= scores.computer;
  drawScoreEl.textContent    = scores.draws;
}

function setStatus(msg) {
  statusText.textContent = msg;
}
