/**
 * Author:    Pete Brook
 * Created:   10.20.2021
 *
 * Public domain
 **/

 var myTransport = ["feet", "bike", "busted car", "other peoples cars", "hoverboard"];

 var myMainRide = {
   make: "Kia",
   model: "Rio",
   color: "Banana Slug Yellow",
   year: "2006",
   age: function() {
     return 2021 - year;
   }
 };

document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
