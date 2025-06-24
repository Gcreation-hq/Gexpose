// ===== Hamburger Menu Toggle =====
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("hidden");
});

// ===== Card Shine + Dim Behavior =====
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    // Reset all cards first
    cards.forEach((c) => {
      c.classList.remove("active");
      c.classList.remove("dimmed");
    });

    // If this card wasn't active before, activate it
    if (!isActive) {
      card.classList.add("active");
      cards.forEach((c) => {
        if (c !== card) c.classList.add("dimmed");
      });
    }
  });
});
