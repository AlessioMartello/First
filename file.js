"use strict"

function showDivs(n) {
  var i;
  var image = document.getElementsByClassName("slideShow");
  if (n > image.length ) {slideIndex=1;}
  // if reached end of array, starts over
  if (n < 1) {slideIndex = image.length;}
//if slideIndex is less than 0 then show the last image instead
  for (i = 0; i < image.length; i++)          //
    {image[i].style.display = "none";}        //execute this

  image[slideIndex-1].style.display = "block";
}

var slideIndex = 1; //set the picture to number one
showDivs(slideIndex); // call the function showDivs for the current slideIndex (number) to dislay it

function plusDivs (n) {
  showDivs(slideIndex += n); //code to be executed
  }

// This is what concerns the buttons
// plusDivs adds or subtracts to the slideIndex hence
// changing the image.
// so it does function showDivs for varying slide Indices
