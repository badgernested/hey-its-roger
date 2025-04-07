/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navbar_showHamburg() {
  var titlebar =  document.getElementById("navtitle");

  var x = document.getElementById("navbar_items");
  if (x.style.display === "block") {
    x.style.display = "none";
    navtitle.style.color = "";
  } else {
    x.style.display = "block";
    navtitle.style.color = "white";
  }
}
