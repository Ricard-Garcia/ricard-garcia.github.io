// ----------
// OPERATIONS
// ----------

// Test ---------------------------------------------------------
console.log("'Operations' file loaded.")


// Display output ------------------------------------------------
var outputText = document.getElementById("output").innerText;
console.log(outputText);


// Historial output ------------------------------------------------
var historialText = document.getElementById("historial").innerText;


// Button elements -----------------------------------------------
// Accessing all 'button' elements
var buttonElements = document.getElementsByClassName("button");
// Adding "click" event listener to each button
for (const button of buttonElements){
    button.addEventListener("click", getButtonValue)
};


// String to evaluate later
var internalOperation = "";
// Historic arrays
var internalHistorial = new Array(); // Calculation blocks
// Historial index
var historialClicks = 0;

var buttonsPressed = new Array(); // Buttons
// Only access last button pressed if button history is bigger than 1
if (buttonsPressed.length > 0) {
    var lastButtonPressed = buttonsPressed[buttonsPressed.length-1];
    var lastButtonClass = lastButtonPressed.classList[0];
    var lastButtonValue = lastButtonPressed.getAttribute("value");
};


// Accesing the value of each button
function getButtonValue(event){
    // Current button
    var button = event.target;
    var btnValue = button.getAttribute("value");
    var btnClasses = button.classList;

    const operators = ["*", "/", "+", "-"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Previous button
    var prevButton = buttonsPressed[buttonsPressed.length-1];
    // Only access previous class button if there are pressed buttons
    if (buttonsPressed.length !== 0) {
        var prevButtonClass = prevButton.classList[0];
        var prevButtonValue = prevButton.getAttribute("value");
    } else {
        console.log("No button pressed previously")
    }

    // Historial length
    let historialLength = internalHistorial.length;
    console.log("previous historial", historialLength);
    if (historialLength !== 0){
        var historialLastIndex = historialLength-1;
        console.log(historialLastIndex);
    }

    // Remove initial 0
    if (historialLength === 0 && internalOperation.length === 0) {
        outputText = "";
    };

    // Checking the specific class (first of each button)
    switch(btnClasses[0]){


        // On/Off button
        case "onoff-button" : {
            // Off
            if (btnClasses.contains("off")){
                // Reset all values to 0
                internalOperation = "";
                outputText = "0";
                buttonsPressed = new Array ();
                internalHistorial = new Array ();

                document.getElementById("historial").innerHTML = "0"; // Referenciar com a variable millor
                console.log("Calculator turned off");
                break;
            }
            // On
            else if (btnClasses.contains("on")){
                internalOperation = "";
                outputText = "0";
                document.getElementById("historial").innerHTML = "0";
                console.log("Calculator turned on");
                break;
            }
        }


        // Historial
        case "hist-button" : {
            // If user hits "hist" after typing numbers but not "equal"
            if (internalHistorial.length === 0 && internalOperation.length > 1) {
                console.log("No historial yet");
                break;
            }
            // If user hits "hist" at beginning
            else if (internalHistorial.length === 0 || internalOperation.length === 0) {
                console.log("No historial yet");
                outputText = "0";
                break;
            }
            else {
                // While the amount of "hist" clicks is not bigger than "historialLenght"
                if (historialClicks <= historialLength) {
                    if (historialLastIndex-historialClicks < 0){
                        outputText = "0"; // Update output
                        console.log("Time to set output to 0")
                    }
                    else {
                        outputText = internalHistorial[historialLastIndex-historialClicks]; // Update output
                    }

                    // Update historial text
                    if (internalHistorial.length === 1){
                        document.getElementById("historial").innerHTML = "0";
                        // Update hist clicks to assign new index
                        historialClicks +=1;
                        break;
                    } else {
                        if(historialLastIndex-historialClicks-1 < 0){
                            document.getElementById("historial").innerHTML = "0";
                            // Remove previous operation from  historial
                            // Update hist clicks to assign new index
                            historialClicks +=1;
                            break;
                        }
                        else {
                            document.getElementById("historial").innerHTML = internalHistorial[historialLastIndex-historialClicks-1];
                            // Update hist clicks to assign new index
                            historialClicks +=1;
                            break;
                        }
                    }
                }
                else {
                    console.log("History clicks exceeded historial length");
                    break;
                }
            }
        }

        // Operators
        case "o-button" : {
            // Only being able to add operator "minus" at beginning
            if (internalOperation.length === 0 && btnValue !== "-"){
                console.log(`Not being able to put ${btnValue} operator first`);
                outputText = "0";
                break;
            }

            else if (prevButtonClass === "o-button" ){
                console.log("Operator button already pressed");
                break;
            }

            else {
                 // Excepction for division & multiply
                if (btnValue === "*" || btnValue === "/"){
                    internalOperation += btnValue;
                    outputText += button.innerHTML;
                    break;
                }
                // Multiply both output and internal operation by *-1
                else if (btnValue === "±") {
                    internalOperation = eval(internalOperation)*(-1);
                    outputText = internalOperation;
                    break;
                } else {
                    internalOperation += btnValue;
                    outputText = outputText+btnValue;
                    break;
                };
            }
        }


        // Percent (%) button
        case "percent-button" : {
            // If user hits "%" at beginning
            if (internalHistorial.length === 0 && internalOperation.length === 0) {
                console.log("Nothing to evaluate");
                outputText = "0";
                break;
            }
            // If last pressed button is "%"
            else if (prevButtonValue === "%" ){
                console.log("Percent already pressed");
                break;
            }
            // If last pressed button is "%"
            else if (prevButtonClass === "o-button" ){
                console.log("Not able to put percent after operator");
                break;
            // If there's no number before percentage
            }
            else {
                /*outputText /= 100;
                internalOperation ="";
                internalOperation += outputText;
                // Add to historial
                internalHistorial.push(outputText.toString());
                console.log("Test");*/
                outputText += btnValue;
                break;
            }

        }


        // Numbers
        case "n-button" : {
            internalOperation += btnValue;
            outputText += btnValue;
            break;
        }


        // Decimals
        case "decimal-button" : {
            // If last pressed button is "comma"
            if (prevButtonValue === "." ){
                console.log("Comma already pressed");
                internalOperation += btnValue;
                break;
            }
            // Don't add a "comma" if it is already in string
            else if (outputText.includes(".")){
                console.log("Comma already in string");
                break;
            }
            // Add a zero to output if "comma" is pressed first
            else if (internalOperation.length === 0){
                internalOperation += btnValue;
                outputText += "0" + button.innerText;
                break;
            } else {
                internalOperation += btnValue;
                outputText += button.innerText;
                break;
            }
        }


        // Clear button
        case "clear-button" : {
            outputText = "0";
            document.getElementById("historial").innerHTML = "0"; // Referenciar com a variable millor
            internalOperation = "";

            // Delete all button history
            buttonsPressed = new Array();
            internalHistorial = new Array ();
            historialClicks = 0;
            break;
        }


        // Equal button
        case "equal-button" : {
            // If user hits "equal" at beginning
            if (internalHistorial.length === 0 && internalOperation.length === 0) {
                console.log("Nothing to evaluate");
                break;
            }
            // If last pressed button is "equal"
            else if (prevButtonValue === "=" ){
                console.log("Equal already pressed");
                break;
            }
            // If "outputText" has %
            else if(outputText.includes("%")) {
                var whole = outputText.toString().split("%");
                console.log("Whole", whole);
                var parcial = Number(whole[0]);
                var total = Number(whole[1]);
                //console.log(parcial)
                //console.log(total)
                var percent = (parcial/total) * 100;
                //console.log(percent)
                internalEqual = percent;
                outputText = internalEqual.toString();
                break;
            }
            else {
                // Add previous output to history
                document.getElementById("historial").innerHTML = outputText; // Referenciar com a variable millor

                // Add to historial
                internalHistorial.push(outputText);

                // Integer result
                if (eval(internalOperation) % 1 === 0){
                    internalEqual = eval(internalOperation);
                    // Set values
                    outputText = internalEqual;
                    internalOperation = internalEqual;
                    break;
                }
                // Float result (round with two decimals)
                else if (eval(internalOperation) % 1 !== 0){
                    internalEqual = eval(internalOperation).toFixed(2);
                    // Set values
                    outputText = internalEqual;
                    internalOperation = internalEqual;
                    break;
                }
            }
        }


        // Default behaivour
        default: {
            console.log("Not valid button");
            break;
        }
    };


    // OUTPUT STRING
    // If text is longer than 9 numbers
    if (outputText.length > 9){
        //console.log(">>>>> MORE THAN NINE NUMBERS");
        document.getElementById("output").innerHTML = outputText.slice(-9);
    } else {
        //console.log(">>>>> LESS THAN NINE NUMBERS");
        document.getElementById("output").innerHTML = outputText;
    }


    // Adding the pressed button to the historic list
    buttonsPressed.push(button);


    // Historial index
    //console.log("Historial length: ", historialLength);
    //console.log("Historial clicks", historialClicks);


    // Test
    //console.log("Internal operation: ", internalOperation);
    //console.log("Historial output: ", historialText)
    console.log("Internal historial: ", internalHistorial);
    //console.log("Output text: ", outputText);
    //console.log("Buttons pressed: ", buttonsPressed);
    //console.log("Last button is: ", buttonsPressed[buttonsPressed.length-1]);
};




