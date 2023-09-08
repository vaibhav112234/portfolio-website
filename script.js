// this is for parab menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".parab-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// this is for theme dark and light
var theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "./images/sun.png";
  } else {
    theme.src = "./images/moon.png";
  }
};
theme.addEventListener('click', () => {
  console.log('button is click');
})


// for coder for skills slider  library is used which is type.js
var typeData = new Typed(".role", {
  strings: ["Frontend Developer", "web developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
});