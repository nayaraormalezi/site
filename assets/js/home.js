(function () {
  function initHero() {
    const root = document.querySelector("[data-hero]");
    if (!root) return;
    const slides = [...root.querySelectorAll("[data-hero-slide]")];
    const dots = [...root.querySelectorAll("[data-hero-dot]")];
    const prev = root.querySelector("[data-hero-prev]");
    const next = root.querySelector("[data-hero-next]");
    let index = 0;
    let timer;

    function go(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle("is-active", n === index));
      dots.forEach((d, n) => d.classList.toggle("is-active", n === index));
    }

    function start() {
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 6000);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        go(i);
        start();
      });
    });

    prev?.addEventListener("click", () => {
      go(index - 1);
      start();
    });
    next?.addEventListener("click", () => {
      go(index + 1);
      start();
    });

    go(0);
    start();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHero);
  } else {
    initHero();
  }
})();
