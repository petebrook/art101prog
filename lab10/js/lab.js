
/**
 * Author:    Pete
 * Created:   11.03.2021
 * No copyright.
 **/

 //Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays.
function sortUserName() {
  var userName = window.prompt("PLEASE TELL ME YOUR NAME!");

input
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

  }

  // Create an event handler within the JS file that listens for a button click.
  var buttonEl = document.getElementById("mybutton");
  buttonEl.addEventListener("click", function(){
    // When the button is pushed,
    // prompt the user to input their name with the prompt() function.
    var name = prompt("Please enter your name:");

    // Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name
    var headingEl = document.getElementById("title");
    headingEl.innerHTML = "Hello, " + name;

  })

  function putNameInTitle() {
  // When the button is pushed,
  // prompt the user to input their name
  // with the prompt() function.
  //var name = prompt("Please enter your name:");
  var field = document.getElementById("myfield");
  var name = field.value;

  // Use this input to change the text from
  // ‘Hello, World!’ to ‘Hello’ + the user’s name
  var headingEl = document.getElementById("title");
  headingEl.innerHTML = "Hello, " + name;
}

// Create an event handler within the JS file that listens for a button click.
var buttonEl = document.getElementById("mybutton");
buttonEl.addEventListener("click", putNameInTitle);
