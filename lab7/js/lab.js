/**
 * Author:    Pete
 * Created:   10.24.2021
 * No copyright.
 **/

 //Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays.
function sortUserName() {
  var userName = window.prompt("What's your name? I can fix it!");

  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;

}

document.writeln("Hello, here's your new moniker: ", sortUserName());
