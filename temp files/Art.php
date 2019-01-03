<!DOCTYPE html>

<html class="backgroundFormatting">

  <head>

    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/art.css">

  </head>

  <body>

    <h1><a href="index.php" class="heading"> Alessio</a></h1>

    <div class="dropdown">
      <p>*add logo*</p>

      <div class="dropdownContent">
        <a href="index.php">Home</a>
        <a href="Pictures.php">Pictures</a>
        <a href="Videos.php">Videos</a>
        <a href="Collaborations.php">Collaborations</a>
      </div>
    </div>

    <div class="introTextContainer">
    <div class= "introText">
      <p>This is a collection of my charcoal art. I started recently doing portraits of people I know.</p>
    </div>
    </div>

      <img src="img/1140.jpg" class= "artSlideShow" alt="Image of ...">
      <img src="img/1150.jpg" class= "artSlideShow" alt="Image of ...">
      <img src="img/011.jpg" class= "artSlideShow" alt="Image of ...">

    <div class = artSlideShowButtons>
      <button id="artLeftButton" align= "left" type="button" onclick="plusDivs(-1)">&#10094;</button>
      <button id="artRightButton" align= "right" type="button" onclick="plusDivs(1)">&#10095;</button>
    </div>

    <script src="js/picture-slideshow.js">
    </script>

  </body>
</html>
