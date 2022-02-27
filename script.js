"use strict"

let submitButton = document.getElementById("button");
let textOutput = document.getElementById("output");

submitButton.addEventListener("click", async function(event) {
    event.preventDefault();
    let response = await fetch("http://localhost:3000/auth/hello");
    let data = await response.json();
    textOutput.innerText = data;
})