/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { removeEventVanilla } from "./script.js";

// console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

let examples = document.getElementsByClassName("example");
let runButton = document.getElementById("run-button");
let clearButton = document.getElementById("clear-button");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0 ----------------------------------------------------------
function htmlLoaded() {
  // Macro
  macroTextVanilla.innerText = `// Loading an html file

document.onload = function(){
  console.log("HTML file loaded!");
};`;

  // Output
  runButton.onclick = function () {
    outputVanilla.innerHTML = "> HTML file loaded!";
    console.log("HTML file loaded!");
  };
}

//1 ----------------------------------------------------------
function clickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Clicked element

element.onclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Click me";

    function clickItemInside(event) {
      event.target.innerText = "Clicked!";
    }

    exampleButton.addEventListener("click", clickItemInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", clickItemInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//2 ----------------------------------------------------------
function dblClickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Double clicked element

element.ondblclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Double click me";

    function dblClickItemInside(event) {
      event.target.innerText = "Clicked!";
    }

    exampleButton.addEventListener("dblclick", dblClickItemInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "dblclick", dblClickItemInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//3 ----------------------------------------------------------
function keyPressed() {
  // Macro
  macroTextVanilla.innerText = `// Return a message on a pressed key

element.onkeypress = function(){
  this.innerText = "Key pressed!";
};`;

  // Output
  let outputText = "> Key pressed! \n";

  function keyPressedInside() {
    outputVanilla.innerText = outputText;
    outputText += "> Key pressed! \n";
  }

  runButton.onclick = function () {
    outputVanilla.innerText = "";

    document.addEventListener("keypress", keyPressedInside);
    // Removing event listener if example is clicked
    removeEventVanilla(document, "keypress", keyPressedInside, examples);
  };

  clearButton.onclick = function () {
    document.removeEventListener("keypress", keyPressedInside);
    outputVanilla.innerText = "";
    outputText = "";
  };
}

//4 ----------------------------------------------------------
function mouseMoved() {
  // Macro
  macroTextVanilla.innerText = `// Show mouse movement

document.onmousemove = function(e){
  console.log("> Mouse at:("
  + e.pageX + ", "
  + e.pageY + ")");
};`;

  // Output
  function mouseMovedInside(e) {
    outputVanilla.innerText = "> Mouse at: (" + e.pageX + ", " + e.pageY + ")";
  }

  runButton.onclick = function () {
    document.addEventListener("mousemove", mouseMovedInside);
    // Removing event listener if example is clicked
    removeEventVanilla(document, "mousemove", mouseMovedInside, examples);
  };

  clearButton.onclick = function () {
    document.removeEventListener("mousemove", mouseMovedInside);
  };
}

//5 ----------------------------------------------------------
function changedInput() {
  // Macro
  macroTextVanilla.innerText = `// Changed input behaviour

element.onchange = function(){
  this.style.color = "yellow";
  this.style.color = "2px solid yellow";
  this.style.color = "black";
};`;

  // Output
  runButton.onclick = function () {
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("type", "text");
    exampleInput.setAttribute("placeholder", "Text goes here");

    function changedInputInside(event) {
      event.target.style.color = "var(--accent-color)";
      event.target.style.outline = "2px solid var(--accent-color)";
      event.target.style.backgroundColor = "var(--dark-color";
    }

    exampleInput.addEventListener("change", changedInputInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleInput, "change", changedInputInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleInput);
  };
}

//6 ----------------------------------------------------------
function loadedImage() {
  // Macro
  macroTextVanilla.innerText = `// Loaded image

image.onload = function(){
  console.log("Image loaded!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/montypython.jpg");

    function loadedImageInside() {
      console.log("Image loaded!");
    }

    exampleImage.addEventListener("load", loadedImageInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleImage, "load", loadedImageInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleImage);
    outputVanilla.innerHTML += "\n\n> Image loaded!";
  };
}

//7 ----------------------------------------------------------
function errorImage() {
  // Macro
  macroTextVanilla.innerText = `// Not loaded image

image.error = function(){
  console.log("Image not loaded!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/montypythonerror.jpg");

    function errorImageInside() {
      console.log("Image not loaded!");
    }

    exampleImage.addEventListener("error", errorImageInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleImage, "error", errorImageInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleImage);
    outputVanilla.innerHTML += "\n\n> Image not loaded!";
  };
}

//8 ----------------------------------------------------------
function submittedForm() {
  // Macro
  macroTextVanilla.innerText = `// Submitted form

form.onsubmit = function(){
  console.log("Submitted form!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleForm = document.createElement("form");
    exampleForm.classList.add("example-form");
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("placeholder", "Text goes here");
    exampleInput.required = true;
    let exampleSubmit = document.createElement("input");
    exampleSubmit.classList.add("example-submit");
    exampleSubmit.setAttribute("type", "submit");
    exampleSubmit.innerText = "Submit";

    exampleForm.appendChild(exampleInput);
    exampleForm.appendChild(exampleSubmit);

    function submittedFormInside() {
      console.log("Submitted form!");
    }

    exampleForm.addEventListener("submit", submittedFormInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleForm, "submit", submittedFormInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleForm);
  };
}

//9 ----------------------------------------------------------
function selectedOption() {
  // Macro
  macroTextVanilla.innerText = `// Selected option

select.onchange = function(){
  console.log("Movie: " + select.value");
};`;

  // Output
  runButton.onclick = function () {
    let exampleSelect = document.createElement("select");
    exampleSelect.classList.add("example-select");

    let option1 = document.createElement("option");
    option1.innerText = "The Life of Brian";
    option1.setAttribute("value", option1.innerText);

    let option2 = document.createElement("option");
    option2.innerText = "Spamalot";
    option2.setAttribute("value", option2.innerText);

    let option3 = document.createElement("option");
    option3.innerText = "The meaning of Life";
    option3.setAttribute("value", option3.innerText);

    exampleSelect.appendChild(option1);
    exampleSelect.appendChild(option2);
    exampleSelect.appendChild(option3);

    let selected = document.createElement("p");

    function selectedOptionInside(event) {
      console.log("Movie: " + event.target.value);
      selected.innerText = "\n> Movie: " + event.target.value;
    }

    exampleSelect.addEventListener("change", selectedOptionInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleSelect, "change", selectedOptionInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleSelect);
    outputVanilla.appendChild(selected);
  };
}

//10 ----------------------------------------------------------
function mouseOver() {
  // Macro
  macroTextVanilla.innerText = `// Mouse over element

element.onmouseover = function(){
  this.text("Mouse over");
};

// Mouse out element

element.onmouseout = function(){
  this.text("Mouse out");
}`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Mouse out";
    exampleButton.style.cursor = "auto";

    function mouseOverInside() {
      this.innerText = "Mouse over";
    }

    function mouseOverInsideOut() {
      this.innerText = "Mouse out";
    }

    exampleButton.addEventListener("mouseover", mouseOverInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "mouseover", mouseOverInside, examples);

    exampleButton.addEventListener("mouseout", mouseOverInsideOut);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "mouseout", mouseOverInsideOut, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//11 ----------------------------------------------------------
function checkBoxOnOff() {
  // Macro
  macroTextVanilla.innerText = `// Checked unchecked checkbox

element.onclick = function(event){
  if (event.target.checked == true){
    console.log("Welcome to the Ministry of Silly Walks!")
  } else {
    console.log("How you dare?")
  }
}`;

  // Output
  runButton.onclick = function () {
    // Checkbox wrapper
    let checkboxWrapper = document.createElement("label");
    checkboxWrapper.classList.add("checkbox");

    // Hidden input + styled span
    let inputWrapper = document.createElement("span");
    inputWrapper.classList.add("checkbox-input");

    let exampleInput = document.createElement("input");
    exampleInput.setAttribute("type", "checkbox");
    exampleInput.setAttribute("id", "exampleCheck");

    let exampleCheck = document.createElement("span");
    exampleCheck.classList.add("checkbox-control");
    exampleCheck.classList.add("example-checkbox");

    inputWrapper.appendChild(exampleInput);
    inputWrapper.appendChild(exampleCheck);

    let exampleLabel = document.createElement("label");
    exampleLabel.innerText = "I am a Monty Python fan";
    exampleLabel.setAttribute("for", "exampleCheck");
    exampleLabel.classList.add("example-label");

    checkboxWrapper.appendChild(inputWrapper);
    checkboxWrapper.appendChild(exampleLabel);

    let exampleParagraph = document.createElement("p");

    function checkBoxOnOffInside(event) {
      if (event.target.checked == true) {
        exampleParagraph.innerText =
          "\n> Welcome to the Ministry of Silly Walks!";
        console.log("I'm a fan");
      } else {
        exampleParagraph.innerText = "\n> How you dare?";
        console.log("I'm not a fan");
      }
    }

    inputWrapper.addEventListener("click", checkBoxOnOffInside);
    // Removing event listener if example is clicked
    removeEventVanilla(
      inputWrapper,
      "mouseover",
      checkBoxOnOffInside,
      examples
    );

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(checkboxWrapper);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//12 ----------------------------------------------------------
function ulSelection() {
  // Macro
  macroTextVanilla.innerText = `// Return li element

let liElements = document.getElementsByTagName("li");

for (let l of liElements{
  l.onclick = function(){
    console.log(this.outerHTML);
  }
});`;

  // Output
  runButton.onclick = function () {
    let exampleUL = document.createElement("ul");
    exampleUL.classList.add("example-ul");

    let ulItem1 = document.createElement("li");
    ulItem1.innerText = "Graham Chapman";
    let ulItem2 = document.createElement("li");
    ulItem2.innerText = "Terry Jones";
    let ulItem3 = document.createElement("li");
    ulItem3.innerText = "Terry Gilliam";
    let ulItem4 = document.createElement("li");
    ulItem4.innerText = "Eric Idle";
    let ulItem5 = document.createElement("li");
    ulItem5.innerText = "John Clesse";
    let ulItem6 = document.createElement("li");
    ulItem6.innerText = "Michael Palin";

    exampleUL.appendChild(ulItem1);
    exampleUL.appendChild(ulItem2);
    exampleUL.appendChild(ulItem3);
    exampleUL.appendChild(ulItem4);
    exampleUL.appendChild(ulItem5);
    exampleUL.appendChild(ulItem6);

    let exampleParagraph = document.createElement("p");

    function ulSelectionInside() {
      exampleParagraph.innerText = "\n> " + this.outerHTML;
      console.log(this);
    }

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleUL);
    outputVanilla.appendChild(exampleParagraph);

    let liElements = $("li");
    for (let l of liElements) {
      l.addEventListener("click", ulSelectionInside);
      // Removing event listener if example is clicked
      removeEventVanilla(l, "click", ulSelectionInside, examples);
    }
  };
}

// Functions
//13 ----------------------------------------------------------
function createHTML() {
  // Macro
  macroTextVanilla.innerText = `// Create an html element

let container = document.createElement("div");

element.onclick = function(){
  let newElement = document.createElement("p");
  newElement.innerText = "Element created"
  container.appendChild(newElement);
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Create";
    exampleButton.style.marginBottom = "var(--margin)";

    function createHTMLInside() {
      let exampleParagraph = document.createElement("p");
      exampleParagraph.classList.add("example-element");
      exampleParagraph.innerText = "Element created";
      outputVanilla.appendChild(exampleParagraph);
      console.log("Element created in vanilla!");
    }

    exampleButton.addEventListener("click", createHTMLInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", createHTMLInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
  };
}

//14 ----------------------------------------------------------
function removeHTML() {
  // Macro
  macroTextVanilla.innerText = `// Remove an html element

let container = document.createElement("div");
let child = document.getElementById("child");

element.onclick = function(){
  container.removeChild(child);
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Delete";
    exampleButton.style.marginBottom = "var(--margin)";

    let exampleParagraph = document.createElement("p");
    exampleParagraph.classList.add("example-element");
    exampleParagraph.innerText = "Element to remove";

    function deleteHTMLInside() {
      if (outputVanilla.contains(exampleParagraph)) {
        outputVanilla.removeChild(exampleParagraph);
        console.log("Element deleted in vanilla!");
      } else {
        console.log("Element already removed");
      }
    }

    exampleButton.addEventListener("click", deleteHTMLInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", deleteHTMLInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//15 ----------------------------------------------------------
function appendElement() {
  // Macro
  macroTextVanilla.innerText = `// Append an html element

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Appending the child after 2 seconds
setTimeout(function(){
  container.appendChild(child);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.innerText = "Child";

    setTimeout(function () {
      let appendedChild = exampleChild.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Appended child!";
      exampleParent.appendChild(appendedChild);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild);
    outputVanilla.appendChild(exampleParent);
  };
}

//16 ----------------------------------------------------------
function prependElement() {
  // Macro
  macroTextVanilla.innerText = `// Prepend an html element

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Prepending the child after 2 seconds
setTimeout(function(){
  container.insertBefore(child, container.firstChild);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.innerText = "Child";

    setTimeout(function () {
      let appendedChild = exampleChild.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Prepended child!";
      exampleParent.insertBefore(appendedChild, exampleParent.childNodes[1]);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild);
    outputVanilla.appendChild(exampleParent);
  };
}

//17 ----------------------------------------------------------
function addAfter() {
  // Macro
  macroTextVanilla.innerText = `// Create & add element after

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Creating & adding element after 2 seconds
setTimeout(function(){
  container.insertBefore(child, container.childNodes[2]);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild1 = document.createElement("div");
    exampleChild1.classList.add("example-child");
    exampleChild1.innerText = "Child 1";

    let exampleChild2 = document.createElement("div");
    exampleChild2.classList.add("example-child");
    exampleChild2.innerText = "Child 2";

    let exampleChild3 = document.createElement("div");
    exampleChild3.classList.add("example-child");
    exampleChild3.innerText = "Child 3";

    setTimeout(function () {
      let appendedChild = exampleChild1.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Inserted after Child 2!";
      exampleParent.insertBefore(appendedChild, exampleChild3);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild1);
    exampleParent.appendChild(exampleChild2);
    exampleParent.appendChild(exampleChild3);
    outputVanilla.appendChild(exampleParent);
  };
}

//18 ----------------------------------------------------------
function addBefore() {
  // Macro
  macroTextVanilla.innerText = `// Create & add element before

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Creating & adding element after 2 seconds
setTimeout(function(){
  container.insertBefore(child, container.childNodes[1]);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild1 = document.createElement("div");
    exampleChild1.classList.add("example-child");
    exampleChild1.innerText = "Child 1";

    let exampleChild2 = document.createElement("div");
    exampleChild2.classList.add("example-child");
    exampleChild2.innerText = "Child 2";

    let exampleChild3 = document.createElement("div");
    exampleChild3.classList.add("example-child");
    exampleChild3.innerText = "Child 3";

    setTimeout(function () {
      let appendedChild = exampleChild1.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Inserted before Child 2!";
      exampleParent.insertBefore(appendedChild, exampleChild2);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild1);
    exampleParent.appendChild(exampleChild2);
    exampleParent.appendChild(exampleChild3);
    outputVanilla.appendChild(exampleParent);
  };
}

//19 ----------------------------------------------------------
function cloneWithin() {
  // Macro
  macroTextVanilla.innerText = `// Clone element within html element

let container1 = document.createElement("#parent1");
let container2 = document.createElement("#parent2");

// Cloning the child after 2 seconds
setTimeout(function(){
  let container3 = container2.cloneNode(true);
  container1.appendChild(container3);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent1 = document.createElement("div");
    exampleParent1.setAttribute("class", "example-parent");
    exampleParent1.innerText = "Parent";

    let exampleParent2 = document.createElement("div");
    exampleParent2.classList.add("example-appended-child");
    exampleParent2.style.padding = "calc(var(--margin) / 2)";
    exampleParent2.style.marginTop = "var(--margin)";
    exampleParent2.innerText = "Element to clone";

    setTimeout(function () {
      let clonedChild = exampleParent2.cloneNode(true);
      clonedChild.classList.add("example-appended-child");
      exampleParent1.appendChild(clonedChild);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent1);
    outputVanilla.appendChild(exampleParent2);
  };
}

//20 ----------------------------------------------------------
function addedClass() {
  // Macro
  macroTextVanilla.innerText = `// Add class to an html element

setTimeout(function(){
  element.classList.add("newClass");
  console.log(element.outerHTML);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleElement = document.createElement("div");
    exampleElement.setAttribute("class", "example-element");
    exampleElement.innerText = "Spam!";
    exampleElement.style.marginBottom = "var(--margin)";

    let exampleParagraph = document.createElement("p");
    exampleParagraph.innerText = "Spam!";
    exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;

    setTimeout(function () {
      exampleParagraph.classList.add("newClass");
      exampleParagraph.innerText = "Spam!";
      exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;
      console.log(exampleParagraph.outerHTML);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleElement);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//21 ----------------------------------------------------------
function removedClass() {
  // Macro
  macroTextVanilla.innerText = `// Remove class to an html element

setTimeout(function(){
  element.classList.remove("class2");
  console.log(element.outerHTML);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleElement = document.createElement("div");
    exampleElement.setAttribute("class", "example-element");
    exampleElement.innerText = "Spam!";
    exampleElement.style.marginBottom = "var(--margin)";

    let exampleParagraph = document.createElement("p");
    exampleParagraph.innerText = "Spam!";
    exampleParagraph.classList.add("class1");
    exampleParagraph.classList.add("class2");
    exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;

    setTimeout(function () {
      exampleParagraph.classList.remove("class2");
      exampleParagraph.innerText = "Spam!";
      exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleElement);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//22 ----------------------------------------------------------
function toggledClass() {
  // Macro
  macroTextVanilla.innerText = `// Toggle class to an html element

element.onclick = function(){
  this.classList.toggle("toggledClass");
  console.log("Toggled class");
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Toggle class";
    exampleButton.style.marginBottom = "var(--margin)";

    let exampleParagraph = document.createElement("div");
    exampleParagraph.innerText = "Toggle class";
    exampleParagraph.classList.add("class1");
    exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;

    function toggledClassInside() {
      exampleParagraph.classList.toggle("toggledClass");
      exampleParagraph.innerText = "Toggle class";
      exampleParagraph.innerText = "> " + exampleParagraph.outerHTML;
      console.log("Toggled class");
    }

    exampleButton.addEventListener("click", toggledClassInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", toggledClassInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//23 ----------------------------------------------------------
function addedDisable() {
  // Macro
  macroTextVanilla.innerText = `// Add disable attribute

setTimeout(function(){
  element.disabled = true;
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("type", "text");
    exampleInput.setAttribute("placeholder", "Text goes here");

    setTimeout(function () {
      exampleInput.disabled = true;
      exampleInput.style.opacity = "50%";
      exampleInput.setAttribute("placeholder", "Disabled");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleInput);
  };
}

//24 ----------------------------------------------------------
function removedDisable() {
  // Macro
  macroTextVanilla.innerText = `// Remove disable attribute

element.disabled = true;

setTimeout(function(){
  element.disabled = false;
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("type", "text");
    exampleInput.setAttribute("placeholder", "Disabled");
    exampleInput.style.opacity = "50%";
    exampleInput.disabled = true;

    setTimeout(function () {
      exampleInput.disabled = false;
      exampleInput.setAttribute("placeholder", "Text goes here");
      exampleInput.style.opacity = "100%";
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleInput);
  };
}

//25 ----------------------------------------------------------
function setDataSrc() {
  // Macro
  macroTextVanilla.innerText = `// Set data-src to img after 2 seconds

setTimeout(function(){
  image.setAttribute("data-src", "addedDataSrc");
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.style.width = "50%";
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/spamalot.jpg");

    let exampleParagraph = document.createElement("div");
    exampleParagraph.innerText = "> " + exampleImage.outerHTML;

    setTimeout(function () {
      exampleImage.setAttribute("data-src", "addedDataSrc");
      exampleParagraph.innerText = "> " + exampleImage.outerHTML;
      console.log("Added data-src");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleImage);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//26 ----------------------------------------------------------
function removeDataSrc() {
  // Macro
  macroTextVanilla.innerText = `// Remove data-src to img after 2 seconds

setTimeout(function(){
  image.removeAttribute("data-src");
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.style.width = "50%";
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/spamalot.jpg");
    exampleImage.setAttribute("data-src", "removeDataSrc");

    let exampleParagraph = document.createElement("div");
    exampleParagraph.innerText = "> " + exampleImage.outerHTML;

    setTimeout(function () {
      exampleImage.removeAttribute("data-src");
      exampleParagraph.innerText = "> " + exampleImage.outerHTML;
      console.log("Removed data-src");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleImage);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//27 ----------------------------------------------------------
function displayNone() {
  // Macro
  macroTextVanilla.innerText = `// Hide element on click (display: none)

button.onclick = function(){
  element.style.display = "none";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Click to hide";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.classList.add("example-appended-child");
    exampleChild.style.marginTop = "var(--margin)";
    exampleChild.style.width = "200px";
    exampleChild.innerText = "Hide me";

    function displayNoneInside() {
      exampleChild.style.display = "none";
    }

    exampleButton.addEventListener("click", displayNoneInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", displayNoneInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
    outputVanilla.appendChild(exampleChild);
  };
}

//28 ----------------------------------------------------------
function displayBlock() {
  // Macro
  macroTextVanilla.innerText = `// Show element on click (display: block)

button.onclick = function(){
  element.style.display = "block";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Click to show";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.classList.add("example-appended-child");
    exampleChild.style.marginTop = "var(--margin)";
    exampleChild.style.width = "200px";
    exampleChild.innerText = "Show me";
    exampleChild.style.display = "none";

    function displayBlockInside() {
      exampleChild.style.display = "block";
    }

    exampleButton.addEventListener("click", displayBlockInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", displayBlockInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
    outputVanilla.appendChild(exampleChild);
  };
}

//29 ----------------------------------------------------------
function fadedIn() {
  // Macro
  macroTextVanilla.innerText = `// Fade in element in 2 seconds

element.style.animation = "fadeIn 2s";

/* CSS animation */
@keyframes fadeIn {
  0% {opacity:0%;}
  100% {opacity:100%;}
}`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.classList.add("example-parent");
    exampleParent.innerText = "Fading in";
    exampleParent.style.animation = "fadeIn 2s";

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent);
  };
}

//30 ----------------------------------------------------------
function fadedOut() {
  // Macro
  macroTextVanilla.innerText = `// Fade out element in 2 seconds

element.style.animation = "fadeOut 2s forwards";

/* CSS animation */
@keyframes fadeOut {
  0% {opacity:100%;}
  100% {opacity:0%;}
}`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.classList.add("example-parent");
    exampleParent.innerText = "Fading out";
    exampleParent.style.animation = "fadeOut 2s forwards";

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent);
  };
}

//31 ----------------------------------------------------------
function styleCollection() {
  // Macro
  macroTextVanilla.innerText = `// Style collection items

let liElements = document.getElementsByTagName("li");

for (let l of liElements){
  l.innerText = l.innerText.toUpperCase();
  console.log("Styled collection");
};`;

  // Output
  runButton.onclick = function () {
    let exampleUL = document.createElement("ul");
    exampleUL.classList.add("example-ul");

    let ulItem1 = document.createElement("li");
    ulItem1.innerText = "Graham Chapman";
    let ulItem2 = document.createElement("li");
    ulItem2.innerText = "Terry Jones";
    let ulItem3 = document.createElement("li");
    ulItem3.innerText = "Terry Gilliam";
    let ulItem4 = document.createElement("li");
    ulItem4.innerText = "Eric Idle";
    let ulItem5 = document.createElement("li");
    ulItem5.innerText = "John Clesse";
    let ulItem6 = document.createElement("li");
    ulItem6.innerText = "Michael Palin";

    let exampleParagraph = document.createElement("p");

    exampleUL.appendChild(ulItem1);
    exampleUL.appendChild(ulItem2);
    exampleUL.appendChild(ulItem3);
    exampleUL.appendChild(ulItem4);
    exampleUL.appendChild(ulItem5);
    exampleUL.appendChild(ulItem6);

    let liElements = document.getElementsByTagName("li");

    setTimeout(function () {
      for (let l of liElements) {
        l.innerText = l.innerText.toUpperCase();
      }
      exampleParagraph.innerText = "\n> Styled collection";
      console.log("Styled collection");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleUL);
    outputVanilla.appendChild(exampleParagraph);
  };
}

// Selectors
//32 ----------------------------------------------------------
function styleParent() {
  // Macro
  macroTextVanilla.innerText = `// Change parent's font-weight after 2 seconds

setTimeout(function(){
  let parent = element.parentNode;
  parent.style.fontWeight = "light";
  parent.style.outline = "1px solid white";
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.innerText = "Child";

    setTimeout(function () {
      let parent = exampleChild.parentElement;
      parent.style.fontWeight = "var(--extraLight)";
      parent.style.outline = "1px solid var(--light-color)";
      console.log("Styled parent");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild);
    outputVanilla.appendChild(exampleParent);
  };
}

//33 ----------------------------------------------------------
function styleChildren() {
  // Macro
  macroTextVanilla.innerText = `// Change children's font-weight after 2 seconds

setTimeout(function(){
  let childs = parent.childNodes;
  for ( let c of childs ){
    c.style.fontWeight = "light";
    c.style.outline = "1px solid white";
  }
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild1 = document.createElement("div");
    exampleChild1.classList.add("example-child");
    exampleChild1.innerText = "Child 1";

    let exampleChild2 = document.createElement("div");
    exampleChild2.classList.add("example-child");
    exampleChild2.innerText = "Child 2";

    let exampleChild3 = document.createElement("div");
    exampleChild3.classList.add("example-child");
    exampleChild3.innerText = "Child 3";

    let exampleChild4 = document.createElement("div");
    exampleChild4.classList.add("example-child");
    exampleChild4.innerText = "Child 4";

    setTimeout(function () {
      let childs = exampleParent.childNodes;
      for (let c = 1; c < childs.length; c++) {
        childs[c].style.fontWeight = "var(--extraLight)";
        childs[c].style.outline = "1px solid var(--light-color)";
      }
      console.log("Styled children");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild1);
    exampleParent.appendChild(exampleChild2);
    exampleParent.appendChild(exampleChild3);
    exampleParent.appendChild(exampleChild4);
    outputVanilla.appendChild(exampleParent);
  };
}

//34 ----------------------------------------------------------
function styleClass() {
  // Macro
  macroTextVanilla.innerText = `// Style element by class

setTimeout(function(){
  let element = document.querySelector(".element-3");
  element.style.fontWeight = "light";
  element.style.outline = "1px solid white";
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent1 = document.createElement("div");
    exampleParent1.classList.add("example-parent");
    exampleParent1.classList.add("parent-1");
    exampleParent1.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent1.innerText = "Element 1";

    let exampleParent2 = document.createElement("div");
    exampleParent2.classList.add("example-parent");
    exampleParent2.classList.add("parent-2");
    exampleParent2.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent2.innerText = "Element 2";

    let exampleParent3 = document.createElement("div");
    exampleParent3.classList.add("example-parent");
    exampleParent3.classList.add("parent-3");
    exampleParent3.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent3.innerText = "Element 3";

    let exampleParent4 = document.createElement("div");
    exampleParent4.classList.add("example-parent");
    exampleParent4.classList.add("parent-4");
    exampleParent4.innerText = "Element 4";

    setTimeout(function () {
      let selectedElement = document.querySelector(".parent-3");
      selectedElement.style.fontWeight = "var(--extraLight)";
      selectedElement.style.outline = "1px solid var(--light-color)";
      console.log("Changed style to ", selectedElement);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent1);
    outputVanilla.appendChild(exampleParent2);
    outputVanilla.appendChild(exampleParent3);
    outputVanilla.appendChild(exampleParent4);
  };
}

//35 ----------------------------------------------------------
function styleId() {
  // Macro
  macroTextVanilla.innerText = `// Style element by id

setTimeout(function(){
  let element = document.querySelector("#element-2");
  element.style.fontWeight = "light";
  element.style.outline = "1px solid white";
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent1 = document.createElement("div");
    exampleParent1.classList.add("example-parent");
    exampleParent1.setAttribute("id", "parent-1");
    exampleParent1.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent1.innerText = "Element 1";

    let exampleParent2 = document.createElement("div");
    exampleParent2.classList.add("example-parent");
    exampleParent2.setAttribute("id", "parent-2");
    exampleParent2.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent2.innerText = "Element 2";

    let exampleParent3 = document.createElement("div");
    exampleParent3.classList.add("example-parent");
    exampleParent3.setAttribute("id", "parent-3");
    exampleParent3.style.marginBottom = "calc(var(--margin)/2)";
    exampleParent3.innerText = "Element 3";

    let exampleParent4 = document.createElement("div");
    exampleParent4.classList.add("example-parent");
    exampleParent4.setAttribute("id", "parent-4");
    exampleParent4.innerText = "Element 4";

    setTimeout(function () {
      let selectedElement = document.querySelector("#parent-2");
      selectedElement.style.fontWeight = "var(--extraLight)";
      selectedElement.style.outline = "1px solid var(--light-color)";
      console.log("Changed style to ", selectedElement);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent1);
    outputVanilla.appendChild(exampleParent2);
    outputVanilla.appendChild(exampleParent3);
    outputVanilla.appendChild(exampleParent4);
  };
}

//36 ----------------------------------------------------------
function styleHiddenId() {
  // Macro
  macroTextVanilla.innerText = `// Style element by class and display none

let elements = document.getElementsByTagName("targetClass");
setTimeout(function(){
  for (let e of elements){
    if (e.style.display === "none"){
      e.style.display = "block";
    }
  }
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleGrid = document.createElement("div");
    exampleGrid.classList.add("example-grid");

    let numCells = 25;

    for (let i = 1; i <= numCells; i++) {
      let cell = document.createElement("div");
      exampleGrid.appendChild(cell);
      cell.setAttribute("id", "cell" + i);
      cell.classList.add("example-parent");
      cell.classList.add("example-cell");
      cell.innerHTML = i;
    }

    let allCells = document.getElementsByClassName("example-cell");

    setTimeout(function () {
      for (let c of allCells) {
        if (c.style.display === "none") {
          c.style.display = "block";
          c.style.outlineColor = "var(--accent-color)";
          c.color = "var(accent-color)";
        }
      }
      console.log("Styled hidden elements with example-cell class");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleGrid);

    // Hiding elements
    document.getElementById("cell4").style.display = "none";
    document.getElementById("cell4").style.color = "var(--accent-color)";
    document.getElementById("cell7").style.display = "none";
    document.getElementById("cell7").style.color = "var(--accent-color)";
    document.getElementById("cell10").style.display = "none";
    document.getElementById("cell10").style.color = "var(--accent-color)";
    document.getElementById("cell11").style.display = "none";
    document.getElementById("cell11").style.color = "var(--accent-color)";
    document.getElementById("cell15").style.display = "none";
    document.getElementById("cell15").style.color = "var(--accent-color)";
    document.getElementById("cell17").style.display = "none";
    document.getElementById("cell17").style.color = "var(--accent-color)";
    document.getElementById("cell19").style.display = "none";
    document.getElementById("cell19").style.color = "var(--accent-color)";
  };
}

//37 ----------------------------------------------------------
function selectedAttribute() {
  // Macro
  macroTextVanilla.innerText = `// Select option with selected attribute

document.querySelector("[selected]");`;

  // Output
  runButton.onclick = function () {
    let exampleSelect = document.createElement("select");
    exampleSelect.classList.add("example-select");

    let option1 = document.createElement("option");
    option1.innerText = "The Life of Brian";
    option1.setAttribute("value", option1.innerText);

    let option2 = document.createElement("option");
    option2.innerText = "Spamalot";
    option2.setAttribute("value", option2.innerText);
    option2.setAttribute("selected", "true");

    let option3 = document.createElement("option");
    option3.innerText = "The meaning of Life";
    option3.setAttribute("value", option3.innerText);

    exampleSelect.appendChild(option1);
    exampleSelect.appendChild(option2);
    exampleSelect.appendChild(option3);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleSelect);
    let selectedElement = document.querySelector("[selected]");

    let exampleParagraph = document.createElement("p");
    exampleParagraph.innerText = "\n> " + selectedElement.outerHTML;
    outputVanilla.appendChild(exampleParagraph);
  };
}

//38 ----------------------------------------------------------
function changeHref() {
  // Macro
  macroTextVanilla.innerText = `// Change href of the first <a>

let firstA = document.querySelector("a");
firstA.setAttribute("href", "newUrl");`;

  // Output
  runButton.onclick = function () {
    let exampleUL = document.createElement("ul");
    exampleUL.classList.add("example-ul");

    let ulItem1 = document.createElement("li");

    let ulItem2 = document.createElement("li");
    let ulItem3 = document.createElement("li");
    let ulItem4 = document.createElement("li");
    let ulItem5 = document.createElement("li");
    let ulItem6 = document.createElement("li");

    let aItem1 = document.createElement("a");
    aItem1.setAttribute("href", "https://ca.wikipedia.org/wiki/Graham_Chapman");
    aItem1.innerText = "Graham Chapman";
    let aItem2 = document.createElement("a");
    aItem2.setAttribute("href", "https://ca.wikipedia.org/wiki/Terry_Jones");
    aItem2.innerText = "Terry Jones";
    let aItem3 = document.createElement("a");
    aItem3.setAttribute("href", "https://ca.wikipedia.org/wiki/Terry_Gilliam");
    aItem3.innerText = "Terry Gilliam";
    let aItem4 = document.createElement("a");
    aItem4.setAttribute("href", "https://ca.wikipedia.org/wiki/Eric_Idle");
    aItem4.innerText = "Eric Idle";
    let aItem5 = document.createElement("a");
    aItem5.setAttribute("href", "https://ca.wikipedia.org/wiki/John_Cleese");
    aItem5.innerText = "John Clesse";
    let aItem6 = document.createElement("a");
    aItem6.setAttribute("href", "https://ca.wikipedia.org/wiki/Michael_Palin");
    aItem6.innerText = "Michael Palin";

    ulItem1.appendChild(aItem1);
    ulItem2.appendChild(aItem2);
    ulItem3.appendChild(aItem3);
    ulItem4.appendChild(aItem4);
    ulItem5.appendChild(aItem5);
    ulItem6.appendChild(aItem6);

    exampleUL.appendChild(ulItem1);
    exampleUL.appendChild(ulItem2);
    exampleUL.appendChild(ulItem3);
    exampleUL.appendChild(ulItem4);
    exampleUL.appendChild(ulItem5);
    exampleUL.appendChild(ulItem6);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleUL);
    let firstLink = document.querySelector("li a");
    console.log("Initial first <a>", firstLink);

    setTimeout(function () {
      firstLink.setAttribute(
        "href",
        "https://blog.sirena.app/hubfs/02%20LATA%20SPAM.jpg"
      );
      console.log("Final first <a>", firstLink);
    }, 2000);
  };
}

//39 ----------------------------------------------------------
function inputAlert() {
  // Macro
  macroTextVanilla.innerText = `// Alert with first input value

let firstInput = document.querySelector("input")
alert(firstInput.value);`;

  // Output
  runButton.onclick = function () {
    let exampleInput1 = document.createElement("input");
    exampleInput1.classList.add("example-input");
    exampleInput1.setAttribute("type", "text");
    exampleInput1.setAttribute("placeholder", "We have eggs, bacon & Spam!");

    let exampleInput2 = document.createElement("input");
    exampleInput2.classList.add("example-input");
    exampleInput2.setAttribute("type", "text");
    exampleInput2.setAttribute("placeholder", "We also have bacon & Spam!");

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleInput1);
    outputVanilla.appendChild(exampleInput2);
    let allInputs = document.querySelectorAll("input");

    setTimeout(function () {
      allInputs[2].value = allInputs[2].getAttribute("placeholder");
      alert(allInputs[2].value);
    }, 2000);
  };
}

//40 ----------------------------------------------------------
function deleteSelectors() {
  // Macro
  macroTextVanilla.innerText = `// Delete all given selectors

  document.querySelectorAll('li').forEach((e) => e.remove());`;

  // Output
  runButton.onclick = function () {
    let exampleUL = document.createElement("ul");
    exampleUL.classList.add("example-ul");

    let ulItem1 = document.createElement("li");
    ulItem1.innerText = "Graham Chapman";
    let ulItem2 = document.createElement("li");
    ulItem2.innerText = "Terry Jones";
    let ulItem3 = document.createElement("li");
    ulItem3.innerText = "Terry Gilliam";
    let ulItem4 = document.createElement("li");
    ulItem4.innerText = "Eric Idle";
    let ulItem5 = document.createElement("li");
    ulItem5.innerText = "John Clesse";
    let ulItem6 = document.createElement("li");
    ulItem6.innerText = "Michael Palin";

    exampleUL.appendChild(ulItem1);
    exampleUL.appendChild(ulItem2);
    exampleUL.appendChild(ulItem3);
    exampleUL.appendChild(ulItem4);
    exampleUL.appendChild(ulItem5);
    exampleUL.appendChild(ulItem6);

    let liElements = document.getElementsByTagName("li");

    setTimeout(function () {
      document.querySelectorAll("li").forEach((e) => e.remove());
      console.log("Deleted all <li> elements");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleUL);
  };
}

//41 ----------------------------------------------------------
function animateAfter() {
  // Macro
  macroTextVanilla.innerText = `// Animate element after 2 seconds

document.onload = function(){
  setTimeout(function(){
    element.style.animation = "animationAfter 2s forwards";
  }, 2000)
};

/* CSS animation */
@keyframes animationAfter {
  100% {transform:translateY(600%); color: yellow};};`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.classList.add("example-parent");
    exampleParent.innerText = "Animated";

    setTimeout(function () {
      exampleParent.style.animation = "animationAfter 2s forwards";
      console.log("Element animated");
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleParent);
  };
}
/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const vanillaExamples = [
  // Events

  // 0
  function () {
    htmlLoaded();
  },
  // 1
  function () {
    clickedItem();
  },
  // 2
  function () {
    dblClickedItem();
  },
  // 3
  function () {
    keyPressed();
  },
  // 4
  function () {
    mouseMoved();
  },
  // 5
  function () {
    changedInput();
  },
  // 6
  function () {
    loadedImage();
  },
  // 7
  function () {
    errorImage();
  },
  // 8
  function () {
    submittedForm();
  },
  // 9
  function () {
    selectedOption();
  },
  // 10
  function () {
    mouseOver();
  },
  // 11
  function () {
    checkBoxOnOff();
  },
  // 12
  function () {
    ulSelection();
  },

  // Functions

  // 13
  function () {
    createHTML();
  },
  // 14
  function () {
    removeHTML();
  },
  // 15
  function () {
    appendElement();
  },
  // 16
  function () {
    prependElement();
  },
  // 17
  function () {
    addAfter();
  },
  // 18
  function () {
    addBefore();
  },
  // 19
  function () {
    cloneWithin();
  },
  // 20
  function () {
    addedClass();
  },
  // 21
  function () {
    removedClass();
  },
  // 22
  function () {
    toggledClass();
  },
  // 23
  function () {
    addedDisable();
  },
  // 24
  function () {
    removedDisable();
  },
  // 25
  function () {
    setDataSrc();
  },
  // 26
  function () {
    removeDataSrc();
  },
  // 27
  function () {
    displayNone();
  },
  // 28
  function () {
    displayBlock();
  },
  // 29
  function () {
    fadedIn();
  },
  // 30
  function () {
    fadedOut();
  },
  // 31
  function () {
    styleCollection();
  },

  // Selectors
  // 32
  function () {
    styleParent();
  },
  // 33
  function () {
    styleChildren();
  },
  // 34
  function () {
    styleClass();
  },
  // 35
  function () {
    styleId();
  },
  // 36
  function () {
    styleHiddenId();
  },
  // 37
  function () {
    selectedAttribute();
  },
  // 38
  function () {
    changeHref();
  },
  // 39
  function () {
    inputAlert();
  },
  // 40
  function () {
    deleteSelectors();
  },
  // 41
  function () {
    animateAfter();
  },
];
