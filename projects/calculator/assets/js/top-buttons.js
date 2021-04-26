// ----------
// TOP BUTTONS
// ----------

// Test
// console.log("Top buttons file loaded.");

// Accessing all window-icon elements (top buttons)
var topIcons = document.querySelectorAll(".window-icon");

// Adding listeneres
topIcons.forEach(function(btn){
    btn.addEventListener("click", windowButtonAction);
    btn.addEventListener("click", removeActive)
});

// Stylize elements to close or open
function windowButtonAction(event){
    var button = event.target;
    var buttonClasses = button.getAttribute("class")

    // Calculator body
    var calculatorBody = document.querySelector("div.calculator-body");
    // Display screen element
    var displayScreen = document.querySelector("div.display-box");
    // Buttons panel
    var buttonsPanel = document.querySelector("div.buttons-box");

    // Minimize animation
    if (button.id === "minimize-button" && buttonClasses.includes("active") === false){
        calculatorBody.style.animation = "minimizeCalculator .4s ease forwards"
        displayScreen.style.animation = "minimizeDisplay .4s ease forwards";
        buttonsPanel.style.display = "none"
        buttonsPanel.style.animation = "minimizeButtons .4s ease forwards";

        button.classList.add("active");
        console.log("Minimized window");

    // Maximize animation
    } else if (button.id === "maximize-button" && buttonClasses.includes("active") === false){
        calculatorBody.style.animation = "maximizeCalculator .4s ease forwards";
        displayScreen.style.animation = "maximizeDisplay .4s ease forwards";
        buttonsPanel.style.display = "flex";
        buttonsPanel.style.animation = "maximizeButtons .4s ease forwards"

        button.classList.add("active");
        console.log("Maximized window");

    // Closing animation
    } else if (button.id === "close-button" && buttonClasses.includes("active") === false){
        calculatorBody.style.animation = "closeCalculator .4s ease forwards";
        calculatorBody.style.display = "none";

        button.classList.add("active");
        console.log("Closed window")

    // If the user repeats the same button
    } else {
        console.log("Button already active.")
    }
}

// Delete "active" from another icon button another is pressed
function removeActive(event){
    var button = event.target;
    topIcons.forEach(function(btn){
        if ( btn.getAttribute("class").includes("active") && button.id !== btn.id  )
        {btn.classList.remove("active");}
    });
}


