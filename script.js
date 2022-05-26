"use strict"

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    if(input1.value == "Look for images inside" || input1.value == "f1"){
        alert("Good job! that was the first task!")
    }else if(input2.value == "f2"){
        alert("Great! That's the right answer!")
    }else if(input3.value == "f3"){
        alert("Yo! You did it champ!")
    }
}) 