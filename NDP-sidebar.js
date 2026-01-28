(function () {
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.querySelector(".sidebar-close");

  if (!menuBtn || !sidebar || !overlay || !closeBtn) return;

  function openSidebar() {
    sidebar.classList.add("open");
    overlay.hidden = false;
    sidebar.setAttribute("aria-hidden", "false");
    menuBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.hidden = true;
    sidebar.setAttribute("aria-hidden", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  menuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open");
    isOpen ? closeSidebar() : openSidebar();
  });

  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });
})();
