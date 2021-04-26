// ----------------------
// SWITCH LIGHT/DARK MODE
// ----------------------

// Test
// console.log("Toggle file loaded.");

// Toggle button (icon)
var toggleButton = document.getElementById("mode-button");
toggleButton.addEventListener("click", toggleMode);
//console.log("Mode button: ", toggleButton);

// Stylesheet element
var theme = document.getElementById("stylesMode");
//console.log("Style: ", theme);

// Title element
var title = document.querySelector("title");
//console.log("Title: ", title);

// Function to togge color mode
function toggleMode() {
  // If "moon" visible in "light mode"
  if (toggleButton.getAttribute("class").includes("uil-moon")) {
    // Switch to "dark mode"
    toggleButton.classList.remove("uil-moon");
    toggleButton.classList.add("uil-sun");

    // Changing the stylesheet itself
    theme.href = "./assets/css/dark-mode-styles.css";
    // Changing the title
    title.innerHTML = "Calculator | Dark Mode";
  } else {
    // If "sun" visible in "dark mode"
    // Switch to "light mode"
    toggleButton.classList.remove("uil-sun");
    toggleButton.classList.add("uil-moon");

    // Changing the stylesheet itself
    theme.href = "./assets/css/light-mode-styles.css";
    // Changing the title
    title.innerHTML = "Calculator | Light Mode";
  }
}
