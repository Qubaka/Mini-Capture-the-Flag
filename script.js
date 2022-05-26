"use strict"

const FLAG_1 = "Look for images inside";
const FLAG_2 = "F2";
const FLAG_3 = "F3";

const headings = [
  "Watch out for secrets!",
  "Look for images within",
  "Always two there are no more no less"
]

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let button = document.getElementById("submitButton");
let heading = document.querySelector("h1");

// debounce ofc
const handleInputValidation = (target, flag) => {
  // Helpers
  const sideEffectOne = (correctAnswer) => {
    heading.innerText = correctAnswer ? headings[1] : headings[0]
  }

  // Main part
  if (target.value === flag) {
    target.classList.add("correct");
  }
  else { target.classList.remove("correct") }

  // Side effects
  switch (target.name) {
    case "input1":
      sideEffectOne(target.value === flag)
      break;
    case "input2":

      break;
    case "input3":

      break;

    default:
      break;
  }
}

input1.addEventListener("change", e => handleInputValidation(e.target, FLAG_1))
input2.addEventListener("change", e => handleInputValidation(e.target, FLAG_2))
input3.addEventListener("change", e => handleInputValidation(e.target, FLAG_3))

// button.addEventListener("click", function () {
//   if (input3.value == "f3" && input2.value == "f2" && input1.value == "Look for images inside") {
//     alert("Yo! You did it champ!")
//   }
//   else if (input2.value == "f2" && input1.value == "Look for images inside") {
//     alert("Great! That's the right answer!")
//   }
//   else if (input1.value == "Look for images inside") {
//     alert("Good job! that was the first task!")
//   }
//   else {
//     alert("You need to pass at least one flag!")
//   }
// }) 