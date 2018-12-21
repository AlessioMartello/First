"use strict";

changeImg;

var i = 0; //start index
var images = document.getElementsByClassName ("images_full"); // images to be looped through
var time = 3000; //time is ms to switch between images

//image list - array values with image paths
images[0] = "2018-12-09/1028.jpg";
images[1] = "2018-12-09/965.jpg";
images[2] = "2018-12-09/1089.jpg";

//Function to change the images

function changeImg(){
  document.slide.src = images[i];

  if ( i < images.length - 1)
  {i++;
  } else {
    1 = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
