let mobileMenu = document.getElementById("nav-links_mobile");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
mobileMenu.style.transition = "500ms";
mobileMenu.style.width = "0";
closeBtn.style.display = "none";

menuBtn.addEventListener("click", function openMenu() {
  mobileMenu.style.width = "75%";
  closeBtn.style.display = "initial";
});
closeBtn.addEventListener("click", function closeMenu() {
  mobileMenu.style.width = "0";
  closeBtn.style.display = "none";
});
