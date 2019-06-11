$(document).ready(function() {

  var ans = (prompt("are you sure do you want to go to beaches?"));

   if (ans == "yes") {
    $('#important').show();
   } else {
    $('#mountains').show();
  }
 });
