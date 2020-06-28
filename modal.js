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

}
