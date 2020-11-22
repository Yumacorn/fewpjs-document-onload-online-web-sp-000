// Your code goes here

document.addEventListener("DOMContentLoaded", updateText);

function updateText() {
    document.getElementById("text").innerHTML = "This is really cool!";
}  
console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);