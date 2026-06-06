const d = document,
  $coinContainer = d.querySelector(".coins-container"),
  $flipResult = d.querySelector(".flip-result");

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-random") || e.target.matches("#heads-coin")) {
    $coinContainer.firstElementChild.classList.add("coin");

    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    setTimeout(() => {
      $coinContainer.firstElementChild.classList.remove("coin");

      if (result === "Heads") {
        d.querySelector(".front-side").firstElementChild.setAttribute(
          "src",
          "./resources/heads.svg",
        );
      } else {
        d.querySelector(".front-side").firstElementChild.setAttribute(
          "src",
          "./resources/tails.svg",
        );
      }

      $flipResult.textContent = result;
    }, 2000);
  }

  d.querySelector(".front-side").firstElementChild.setAttribute(
    "src",
    "./resources/heads.svg",
  );
  $flipResult.textContent = "-";
});
