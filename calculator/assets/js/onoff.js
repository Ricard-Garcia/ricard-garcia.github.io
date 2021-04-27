// ------------------
// ON/OFF CALCULATOR
// -----------------

// Test ---------------------------------------------------------
// console.log("'Onoff' file loaded.");


// On/off button -------------------------------------------------
var onOffButton = document.getElementById("onoff");
//console.log(onOffButton);
onOffButton.addEventListener("click", toggleOnOff);


function toggleOnOff(event) {
    var tarElement = event.target
    // Accessing historial & output text
    var historial = document.getElementById("historial");
    var output = document.getElementById("output");

    if (tarElement.classList.contains("off")){
        tarElement.classList.remove("off");
        tarElement.classList.add("on");
        tarElement.innerText = "off"
        historial.style.opacity = "100%";
        output.style.opacity = "100%";
    }
    else if (tarElement.classList.contains("on")){
        tarElement.classList.remove("on");
        tarElement.classList.add("off");
        tarElement.innerText = "on"
        historial.style.opacity = "0%";
        output.style.opacity = "0%";
    };
};