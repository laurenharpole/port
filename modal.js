// Get the modal
var modal = document.getElementsByClassName('modalDialog');

// Get the button that opens the modal
var btn = document.getElementsByClassName("glow");


// Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  btn[0].onclick = function() {
    modal[0].style.display = "visible";
  }

btn[1].onclick = function() {
  modal[1].style.display = "visible";
}
// When the user clicks on <span> (x), close the modal
// span[0].onclick = function() {
//   modal[0].style.display = "none";
// }
//
// span[1].onclick = function() {
//   modal[1].style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//       modal.style.display = "none";
//   }
}
