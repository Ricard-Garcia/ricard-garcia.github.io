/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { vanillaExamples } from "./vanilla.js";
import { jQueryExamples } from "./jquery.js";
export { blankMacroOutput, removeEventVanilla, removeEventJQuery };

// console.log("Script JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                              GENERAL VARIABLES                             */
/* -------------------------------------------------------------------------- */
let events = [
  "Loaded document",
  "Element clicked",
  "Element double clicked",
  "Key pressed",
  "Moved mouse",
  "Text input changed",
  "Loaded image",
  "Failed image",
  "Submitted form",
  "Changed option in select elment",
  "Mouse over",
  "Checked/Unchecked",
  "Clicked ul item",
];

let functions = [
  "Create html element with text value",
  "Remove html element with text value",
  "Append html element to a parent",
  "Prepend html element to a parent",
  "Create & add after",
  "Create & add before",
  "Clone element within other element",
  "Add class",
  "Remove class",
  "Toggle class",
  "Add disabled attribute",
  "Remove disabled attribute",
  "Set data-src to image",
  "Remove data-src to image",
  "Hide element on click",
  "Show element on click",
  "Fade in element",
  "Fade out element",
  "Iterate & style elements in collection",
];

let selectors = [
  "Get parent & change font weight",
  "Get children collection & change font weight",
  "Get elements by class & change font weight",
  "Get item by id & change font weight",
  "Get elements by class & display none & change their font color",
  "Get selected options of a select element",
  "Change href attribute of the first link",
  "Show an alert with the value of the first input",
  "Remove all items of a selector",
  "Animate an item after 2 seconds",
];

let categoryTitles = $(".category");
let selectedExample = $(".selected-example");

let eventsContainer = $("#events-examples");
let functionsContainer = $("#functions-examples");
let selectorsContainer = $("#selectors-examples");

let vanillaCheckbox = $("#vanilla-radio");
let jQueryCheckbox = $("#jquery-radio");

let macroText = $("#macro-text");

let runButton = $("#run-button");
let clearButton = $("#clear-button");

let outputPanel = $("#output-panel");

let idIndex = 0;

/* -------------------------------------------------------------------------- */
/*                              CALLING FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
// Arrows for each category
arrowTranslation($(".down-arrow-events"), $("#events-examples"));
arrowTranslation($(".up-arrow-events"), $("#events-examples"));

arrowTranslation($(".down-arrow-functions"), $("#functions-examples"));
arrowTranslation($(".up-arrow-functions"), $("#functions-examples"));

arrowTranslation($(".down-arrow-selectors"), $("#selectors-examples"));
arrowTranslation($(".up-arrow-selectors"), $("#selectors-examples"));

// Appending examples
setExamples(eventsContainer, events, "event");
setExamples(functionsContainer, functions, "functions");
setExamples(selectorsContainer, selectors, "selectors");

// Deleting macro & output content
blankMacroOutput();

// Assigning display container to three titles
for (var t = 0; t <= categoryTitles.length; t++) {
  showContainer(categoryTitles[t]);
}

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Set containers' examples
function setExamples(container, array, type) {
  let i = 1;
  for (let e of array) {
    // Creating the div
    let newExample = $("<div>");
    newExample.addClass("example");
    // newExample.addClass(type + "-" + i);
    newExample.html(e);
    // Adding examples in container
    $(container).append(newExample);

    i++;
  }
}

// Showing examples containers
function showContainer(title) {
  $(title).click(function () {
    // Hide container if it is displayed
    if ($(this).next().hasClass("displayed")) {
      $(this).next().toggleClass("displayed");
      // Display another one
    } else {
      // Get the element that is displayed
      $(".displayed").toggleClass("displayed");
      $(this).next().addClass("displayed");
    }
  });
}

// Arrow animations
function arrowTranslation(arrow, container) {
  $(arrow).click(function (event) {
    let contHeight = container.height();

    if ($(arrow).hasClass("up-arrow")) {
      $(container).css("transform", "translateY(0px)");
      console.log("Up arrow");
    } else {
      $(container).css("transform", `translateY(-${contHeight}px)`);
      console.log("Down arrow");
    }
  });
}

// Assigning ex-ID and accessing each example
$(".example").each(function () {
  $(this).attr("id", "ex" + idIndex);
  // Clickable element
  $(this).click(function () {
    $(".selected-example").removeClass("selected-example");
    $(this).addClass("selected-example");
    blankMacroOutput();
    console.clear();

    //Accessing only its id
    let exampleIndex = $(this).attr("id").replace("ex", "");
    // Vanilla or jQuery
    if (vanillaCheckbox.prop("checked")) {
      removeRunListeners();
      macroText.text(vanillaExamples[exampleIndex]);
    } else {
      removeRunListeners();
      macroText.text(jQueryExamples[exampleIndex]);
    }
  });
  idIndex++;
});

// Change example on checkbox checked
$(".js-type").click(function () {
  if ($(".selected-example").length > 0) {
    blankMacroOutput();
    console.clear();

    let exampleIndex = $(".selected-example").attr("id").replace("ex", "");
    // Vanilla or jQuery
    if ($(this).attr("id") === "vanilla-radio") {
      removeRunListeners();
      macroText.text(vanillaExamples[exampleIndex]);
    } else {
      removeRunListeners();
      macroText.text(jQueryExamples[exampleIndex]);
    }
  } else {
    console.log("No selected example");
  }
});

// Deleting macro & output content
function blankMacroOutput() {
  macroText.children().remove();
  macroText.html("");
  outputPanel.children().remove();
  outputPanel.html("");
}

// Remove event listeners on run button
function removeRunListeners() {
  runButton.prop("onclick", null);
  runButton.unbind();
}

// Remove event listeners (used in vanilla.js)
function removeEventVanilla(target, type, insideFunction, array) {
  for (let e of array) {
    e.addEventListener("click", function () {
      target.removeEventListener(type, insideFunction);
    });
  }
  console.log("Removed event listener " + type + " in " + target);
}

// Remove the content in output when clicking "Clear" button
clearButton.on("click", function () {
  outputPanel.text(null);
  outputPanel.children().remove();
  outputPanel.html("");
});

// Remove event listeners (used in jquery.js)
function removeEventJQuery(target, type, insideFunction, array) {
  $(array).each(function () {
    $(this).click(function () {
      $(target).off(type, insideFunction);
    });
  });
  console.log("Removed event listener '" + type + "' in " + target);
}

/* -------------------------------------------------------------------------- */
/*                                    TEST                                    */
/* -------------------------------------------------------------------------- */
