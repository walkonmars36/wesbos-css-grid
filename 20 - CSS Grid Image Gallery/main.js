const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = document.querySelector(".close");

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
        <img src="images/${randomNumber(12)}.jpg">
        <div class="item__overlay">
            <button>View →</button>
        </div>
    </div>
    `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

function handleClick(e) {
  const imgSrc = e.currentTarget.querySelector("img").src;
  overlayImage.src = imgSrc;
  overlay.classList.add("open");
}

function closeOverlay() {
  overlay.classList.remove("open");
}

const digits = Array.from({length: 50}, () => [randomNumber(4), randomNumber(4)]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

const html = digits.map(generateHTML).join("");

gallery.innerHTML = html;

const items = document.querySelectorAll(".item");

items.forEach((item) => item.addEventListener("click", handleClick));

overlayClose.addEventListener("click", closeOverlay);
