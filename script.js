document.querySelectorAll(".chord-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".chord-button.active")?.classList.remove("active");
    button.classList.add("active");
    document.querySelector("#chord-title").textContent = button.dataset.title;
    document.querySelector("#chord-fact").textContent = button.dataset.fact;
  });
});

document.querySelectorAll(".interest-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".interest-button.active")?.classList.remove("active");
    button.classList.add("active");
    document.querySelector("#interest-title").textContent = button.dataset.interestTitle;
    document.querySelector("#interest-copy").textContent = button.dataset.interestCopy;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      document.body.dataset.theme = entry.target.dataset.theme;
    });
  },
  { threshold: 0.45 },
);

document.querySelectorAll(".theme-section").forEach((section) => {
  observer.observe(section);
});
