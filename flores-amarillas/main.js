onload = () => {
  document.body.classList.remove("container");

  const night = document.querySelector(".night");

  function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    // Posición inicial aleatoria arriba
    const startX = Math.random() * window.innerWidth * 0.8;
    const startY = Math.random() * window.innerHeight * 0.3;
    star.style.top = startY + "px";
    star.style.left = startX + "px";

    night.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 2000);
  }

  // Intervalo aleatorio de estrellas fugaces
  setInterval(() => {
    if (Math.random() > 0.5) {
      createShootingStar();
    }
  }, 1500);
};

