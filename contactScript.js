// ================= MODAL =================
const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
