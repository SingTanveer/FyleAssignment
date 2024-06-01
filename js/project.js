function changeImage(imageNumber) {
  var imageElement = document.getElementById("displayedImage");
  var imagePath = "";

  // Determine the image path based on the button clicked
  switch (imageNumber) {
    case 1:
      imagePath = "./images/image1.jpg";
      break;
    case 2:
      imagePath = "./images/image5.jpg";
      break;
    case 3:
      imagePath = "./images/image3.jpg";
      break;
    default:
      imagePath = "/assets/img.png";
  }

  // Change the displayed image
  imageElement.src = imagePath;
}
