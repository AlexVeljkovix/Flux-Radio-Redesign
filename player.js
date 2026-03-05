const playerToggle = document.getElementById("playerToggle");
const miniPlayer = document.getElementById("miniPlayer");
const closePlayer = document.getElementById("closePlayer");
const playIcon = document.getElementById("playIcon");
const slusajUzivoButton = document.getElementById("slusajUzivoButton");

playerToggle.addEventListener("click", () => {
  miniPlayer.classList.toggle("active");

  if (miniPlayer.classList.contains("active")) {
    playIcon.textContent = "⏸";
  } else {
    playIcon.textContent = "▶";
  }
});

slusajUzivoButton.addEventListener("click", () => {
  miniPlayer.classList.toggle("active");

  if (miniPlayer.classList.contains("active")) {
    playIcon.textContent = "⏸";
  } else {
    playIcon.textContent = "▶";
  }
});

closePlayer.addEventListener("click", () => {
  miniPlayer.classList.remove("active");
  playIcon.textContent = "▶";
});
