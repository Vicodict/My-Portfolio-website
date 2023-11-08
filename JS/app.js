window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggleBtn");
  const navbar = document.querySelector(".navbar");
  const body = document.querySelector("body");
  const chevronUp = document.querySelector(".chevronUp");

  const screenwidth = window.innerWidth;
  // console.log(screenwidth);
  toggleBtn.addEventListener("click", (e) => {
    navbar.classList.toggle("shownavbar");
    // console.log(navbar.classList);
    const screenwidth = window.innerWidth;
    if (navbar.classList.contains("shownavbar") && screenwidth <= 900) {
      // e.target.classList.remove("fa-bars");
      // e.target.classList.add("fa-times");
    }
  });
  body.addEventListener("click", (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const screenwidth = window.innerWidth;
    const clickElement = e.target.classList[1];
    console.log(clickY);
    if (
      screenwidth <= 900 &&
      clickX > 300 &&
      clickY >= 80 &&
      clickElement !== "toggleBtn"
    ) {
      navbar.classList.remove("shownavbar");
    }
  });
  window.addEventListener("scroll", () => {
    const scrollHeight = scrollY;
    // console.log(scrollHeight);
    if (scrollHeight <= 345) {
      chevronUp.style.display = "none";
    } else {
      chevronUp.style.display = "flex";
    }
  });
});
