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
