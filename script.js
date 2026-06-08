document.querySelectorAll(".chord-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".chord-button.active")?.classList.remove("active");
    button.classList.add("active");
    document.querySelector("#chord-title").textContent = button.dataset.title;
    document.querySelector("#chord-fact").textContent = button.dataset.fact;
  });
});
