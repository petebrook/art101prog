
/**
 * Author:    Pete
 * Created:   11.15.2021
 * No copyright.
 **/

 function bigSortTub(str){
 var length = str.length;
 var mod = length % 4;
  if (mod == 0){
    return "Liverpool FC";
  }
  else if (mod == 1){
    return "Barcelona FC";
  }
  else if (mod == 2){
    return "Fenerbache";
  }
  else if (mod == 3){
    return "Sampdoria";
  }
 }

 var myButton = document.getElementById("button");
 myButton.addEventListener("click", function() {
   var name = document.getElementById("input").value;
   var FootieTeam = bigSortTub(name);
   newText = "<p>You are now an official supporter of " + FootieTeam"</p>";
   document.getElementById("output").innerHTML = newText;
 })
