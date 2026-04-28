const html = document.documentElement;
const toggleBtn = document.getElementById("toggleDark");

// load theme
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

// toggle dark mode
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
