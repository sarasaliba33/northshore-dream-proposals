const triggers = Array.from(document.querySelectorAll(".pkg-lightbox-trigger"));
const lightbox = document.getElementById("pkg-lightbox");
const lightboxImg = document.getElementById("pkg-lightbox-img");
const closeBtn = document.getElementById("pkg-lightbox-close");

function openLightbox(fullSrc) {
  lightbox.style.display = "flex";
  lightbox.setAttribute("aria-hidden", "false");
  lightboxImg.src = fullSrc;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.style.display = "none";
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

triggers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const fullSrc = btn.getAttribute("data-full");
    openLightbox(fullSrc);
  });

  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const fullSrc = btn.getAttribute("data-full");
      openLightbox(fullSrc);
    }
  });
});

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (lightbox.style.display !== "flex") return;
  if (e.key === "Escape") closeLightbox();
});
