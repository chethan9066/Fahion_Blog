
//dropdown imges
   function bigImg(x)
   {
     x.style.height="170px";
     x.style.width="120px"

   }

   function smallImg(x)
   {
     x.style.height="150px"
     x.style.width="100px"
   }

   function bigImg1(x)
   {
     x.style.height="170px";
     x.style.width="240px"

   }

   function smallImg1(x)
   {
     x.style.height="150px"
     x.style.width="200px"
   }

   //slider code
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("centered");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
       y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    y[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds

}
    // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

function focus(x)
{
  x.style.color="blue";
}

function fun1()
{
  if(1)
   alert("yess")
   else {
     alert("no")
   }
}
