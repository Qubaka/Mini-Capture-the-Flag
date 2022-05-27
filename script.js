"use strict"

const FLAG_1 = "Look for images inside";
const FLAG_2 = "Brighten";
const FLAG_3 = "notacolor";
let FLAG_POINTS = 0;

const headings = [
  "Watch out for secrets!",
  "Look for images within",
  "Watch your back..."
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
    heading.innerText = correctAnswer ? headings[1] : headings[0];
    document.querySelector('html > body > div > div > div > div > div').innerHTML+= '<!-- <img src="untitled.svg">-->';
  }
  const sideEffectTwo = (correctAnswer) => {
    heading.innerText = correctAnswer ? headings[2] : headings[0]
    document.documentElement.style.setProperty('--myBodyBackground', 'notacolor');
  }

  // Main part
  // if (target.value === flag) {
  //   target.classList.add("correct");
  // }
  // else { target.classList.remove("correct") }

  // Side effects
  switch (target.name) {
    case "input1":
      sideEffectOne(target.value === flag)
      FLAG_POINTS = 1;

      if (target.value === flag) {
        target.classList.add("correct");
      }
      else { target.classList.remove("correct") }

      break;
    case "input2":
      if(FLAG_POINTS == 1){
        sideEffectTwo(target.value === flag)
        FLAG_POINTS = 2

        if (target.value === flag) {
          target.classList.add("correct");
        }
        else { target.classList.remove("correct") }

      }
      break;
    case "input3":
      if(FLAG_POINTS == 2){
        alert('You did it!')

        if (target.value === flag) {
          target.classList.add("correct");
        }
        else { target.classList.remove("correct") }
        
      }
      break;

    default:
      break;
  }
}

input1.addEventListener("focusout", e => handleInputValidation(e.target, FLAG_1))
input2.addEventListener("focusout", e => handleInputValidation(e.target, FLAG_2))
input3.addEventListener("focusout", e => handleInputValidation(e.target, FLAG_3))
