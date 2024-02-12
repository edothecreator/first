
function showImage2() {
    // Get the reference to the image element  
    var image1 = document.getElementById("image1");
    var image2 = document.getElementById("image2");
    var image3 = document.getElementById("image3"); 
    image2.style.display = "none";
      image1.style.display = "block";
      image3.style.display= "none";
  }
  function showImage() {
    // Get the reference to the image element
    var t1 = document.getElementById("p1");
    var t2 = document.getElementById("p2");
    var image4 = document.getElementById("image1");
    var image5 = document.getElementById("image2");
    var image6 = document.getElementById("image3"); 
    image5.style.display = "none";
      image4.style.display = "none";
      image6.style.display= "block";
      t1.style.display="none";
      t2.style.display="block";
  }