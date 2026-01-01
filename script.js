// -----------------------------
// Screen & Cake Setup
// -----------------------------
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const cakeBox = document.getElementById("cakeBox");
const cutesywords = [
  "Love 💕", "Forever ♾️", "Mine 🥹", "Hugs 🤍",
  "Kisses 😘", "Us 🫶", "Always 💖", "Home 🏡"
];

cakeBox.addEventListener("click", () => {
  cakeBox.classList.add("cut");
  confetti();
  startMusicOnce();


  setTimeout(() => {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  }, 1000);
});

// -----------------------------
// Confetti function (reusable)
// -----------------------------
function confetti() {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 1000);
  }
}

// -----------------------------
// Screen 2 → Screen 3
// -----------------------------
function goToScreen3() {
  confetti();

  setTimeout(() => {
    screen2.classList.add("hidden");
    screen3.classList.remove("hidden");
    startGame();
  }, 500); // short delay for effect
}

// -----------------------------
// Mini-game (Screen 3)
// -----------------------------
let score = 0;
let gameTimer = null;

function startGame() {
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("winMsg").classList.add("hidden");
  document.getElementById("toScreen4").classList.add("hidden");
  document.getElementById("gameArea").innerHTML = "";

  if (gameTimer) clearInterval(gameTimer);
  gameTimer = setInterval(spawnHeart, 800);
}

function spawnHeart() {
  if (score >= 5) {
    clearInterval(gameTimer);
    return;
  }

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  const area = document.getElementById("gameArea");
  heart.style.left = Math.random() * 260 + "px";
  heart.style.top  = Math.random() * 260 + "px";

  heart.onclick = () => {
    heart.remove();
    score++;
    document.getElementById("score").innerText = score;

    confetti();

    if (score === 5) {
      document.getElementById("winMsg").classList.remove("hidden");
      document.getElementById("toScreen4").classList.remove("hidden");
      clearInterval(gameTimer);
    }
  };

  area.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}







// -----------------------------
// Screen 3 → Screen 4
// -----------------------------
function goToScreen4() {
  screen3.classList.add("hidden");
  screen4.classList.remove("hidden");
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
  window.scrollTo(0, 0);
  document.getElementById("toScreen4").classList.remove("hidden");



}






function goToScreen1() {
  screen4.classList.add("hidden");
  screen1.classList.remove("hidden");
}























var romanticWords = [
  "Jaan ❤️","Baby 💕","Pookie 🥺","Sona ✨","Pyari babu 💖"
];

function startGlobalFloatingWords(){
  var container = document.querySelector(".floating-words-global");
  setInterval(function(){
    var span = document.createElement("span");
    span.className = "floating-word";
    span.innerText = romanticWords[Math.floor(Math.random()*romanticWords.length)];
    span.style.left = Math.random()*(window.innerWidth-100) + "px";
    span.style.top = window.innerHeight + "px"; // start from bottom
    span.style.fontSize = 16 + Math.random()*12 + "px";

    container.appendChild(span);

    // animate upward
    setTimeout(function(){
      span.style.transform = "translateY(-" + (window.innerHeight + 50) + "px)";
      span.style.opacity = 0;
    }, 50);

    // remove after animation
    setTimeout(function(){
      if(span.parentNode) span.parentNode.removeChild(span);
    }, 8000);

  }, 600); // every 0.6s a new word
}

// start on page load
window.onload = function(){
  startGlobalFloatingWords();
};









const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusicOnce() {
  if (!musicStarted) {
    bgMusic.volume = 0.4; // soft romantic
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

// start music on first interaction anywhere


function startMusicOnce() {
  if (!musicStarted) {
    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});
    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.4) {
        v += 0.02;
        bgMusic.volume = v;
      } else {
        clearInterval(fade);
      }
    }, 150);
    musicStarted = true;
  }
}

const musicContainer = document.querySelector(".floating-music");
const notes = ["🎵", "🎶", "🎼", "💖"];

function createMusicNote() {
  const note = document.createElement("div");
  note.className = "music-note";
  note.innerText = notes[Math.floor(Math.random() * notes.length)];

  note.style.left = Math.random() * 100 + "vw";
  note.style.fontSize = 16 + Math.random() * 14 + "px";
  note.style.animationDuration = 6 + Math.random() * 6 + "s";

  musicContainer.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 12000);
}

// spawn notes continuously
setInterval(createMusicNote, 900);

