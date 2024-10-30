export function initNavToggle() {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
}
