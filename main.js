// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("hidden");
});

// Card shine effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    cards.forEach(c => {
      c.classList.remove("active");
      c.classList.remove("dimmed");
    });

    if (!isActive) {
      card.classList.add("active");
      cards.forEach(c => {
        if (c !== card) c.classList.add("dimmed");
      });
    }
  });
});
