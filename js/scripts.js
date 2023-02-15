let focusEvent = new Event("focus");

let button = document.querySelector("button");
let div = document.querySelector("#buttonContainer");
let input = document.querySelector("input");

input.addEventListener("focus", function(e) {
    input.focus();
});

input.dispatchEvent(focusEvent);
