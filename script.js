document.querySelectorAll(".chord-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".chord-button.active")?.classList.remove("active");
    button.classList.add("active");
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

document.querySelectorAll(".entry-card").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".entry-card.active")?.classList.remove("active");
    button.classList.add("active");
    document.querySelector("#entry-meta").textContent = button.dataset.entryMeta;
    document.querySelector("#entry-title").textContent = button.dataset.entryTitle;
    document.querySelector("#entry-copy").textContent = button.dataset.entryCopy;
    document.body.dataset.theme = button.dataset.themeName;
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
  { rootMargin: "-40% 0px -40% 0px" },
);

document.querySelectorAll(".theme-section").forEach((section) => {
  observer.observe(section);
});
