const themeSwitcher = () => {
  const themeSwitcherBtns = document.querySelectorAll(".theme_switcher-btn");

  const theme = localStorage.getItem("theme");

  theme && document.body.classList.add(theme); // Short circuit operation
  // If the first condition is true then execute the second condition

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class"); // Remove class attribute
    }
  };

  themeSwitcherBtns.forEach((btn) => (btn.onclick = handleThemeToggle));
};

export default themeSwitcher;
