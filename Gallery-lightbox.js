const images = Array.from(document.querySelectorAll(".gallery-img"));
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("lightbox-close");
const prevBtn = document.getElementById("lightbox-prev");
const nextBtn = document.getElementById("lightbox-next");

let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
  lightboxImg.src = images[currentIndex].src;

  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

images.forEach((img, idx) => {
  img.addEventListener("click", () => openLightbox(idx));
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showNext();
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showPrev();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display !== "flex") return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
