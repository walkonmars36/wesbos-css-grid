const navBtn = document.querySelector("button[aria-expanded]");

function toggleNav({target}) {
  const expanded = (target.getAttribute("aria-expanded") === "true") | false;

  navBtn.setAttribute("aria-expanded", !expanded);
}

navBtn.addEventListener("click", toggleNav);
