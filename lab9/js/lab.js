/**
 * Author:    Pete
 * Created:   11.01.2021
 * (c) No copyright
 **/

//assign output to a variable
var outputEl = document.getElementById("output");

//create a new element and assign it to a variable
var new1El = document.createElement("p");

new1El.innerHTML = "Hellooooo there!"

var new2El = document.createElement("p");

new2El.innerHTML = "There helllloooo!"

//append child node to parent node
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "red";
new2El.style.color = "blue";

outputEl.style.backgroundColor = "yellow"
