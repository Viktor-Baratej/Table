const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Перевіряємо, чи є збережена тема в localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  body.classList.add(currentTheme);
}

// Перемикаємо тему при натисканні кнопки
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  // Збереження вибору теми
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark-theme");
  } else {
    localStorage.setItem("theme", "light-theme");
  }
});
