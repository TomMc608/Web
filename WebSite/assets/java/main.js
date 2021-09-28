window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}  
//This bit is for the boxes around the mouse
let boxes = document.querySelectorAll('.box');
    
const onMouseMove = (e) =>{        
  boxes.forEach((b,i) => {
      setTimeout(()=>{   
          b.style.opacity = 5 - (.1*i);
          b.style.left = e.pageX + 'px';
          b.style.top = e.pageY + 'px';           
      },40*(i+5))      
                                 
  });
}




document.addEventListener('mousemove', onMouseMove);
console.log("box")

document.querySelector(".toggle").addEventListener("click",() => {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".showcase").classList.toggle("active");


})

//-------------------------------------------------------------
//This bit is for the slide show 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  setTimeout(1000);
  showSlides(slideIndex += n);
}
setTimeout(1000);
function currentSlide(n) {
  showSlides(slideIndex = n);
}


setTimeout(1000);

console.log("zzzzz")

function showSlides() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}




  //dots[slideIndex-1].className += " active";


//-------------------------------------------------------------
//This bit is for API

var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "ed8fa7ffbf00e7ed51dca5edc25c11e9");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

//look at the https://api-sports.io/documentation/hockey/v1#section/Architecture to find out how to write the URL
fetch("https://v1.hockey.api-sports.io/teams/statistics?season=2019&team=29&league=3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



