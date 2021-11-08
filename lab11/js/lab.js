/**
 * Author:    Pete
 * Created:   11.08.2021
 *
 * (c) Copyright by blah blah blah
 **/

// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section

$("#challenges").append("<button id='r-button1'>Tempting button</button>");

$("#problems").append("<button id='r-button2'>Another tempting button</button>");

$("#results").append("<button id='r-button3'>A third tempting button</button>");

// Using jQuery:
// Add a click event to each button
// Find the challenge, problems, or results section the button is in.
// Toggle a class special within the <div> of the section

// here's a different maybe better way to do it
// (we are traversing the DOM to the parent)

$("#r-button1").click(function(){
  $(this).parent().toggleClass("special");
})

$("#r-button2").click(function(){
  $(this).parent().toggleClass("special");
})

$("#r-button3").click(function(){
  $(this).parent().toggleClass("special");
})

// Go into your css and style each of the classes

// Test each button
