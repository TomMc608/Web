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
  .then(response => response.json())
  .then(result => {
    
    // console.log(result)
    // console.log(result.response.country.name) //country 
    // console.log(result.response.country.flag) //gets the country flag
    // console.log(result.response.team.name) //name of team
    // console.log(result.response.goals.against.total.all) //shows all total goals in 2019
    // console.log(result.response.goals.against.total.away) //shows total goals away
    // console.log(result.response.goals.against.total.home) //shows total goals home
    // console.log(result.response.team.logo) //gets teams logo

    const CountryName = result.response.country.name
    const CountryFlag = result.response.country.flag
    const TeamName = result.response.team.name
    const TeamLogo = result.response.team.logo
    const TotalGoals = result.response.goals.against.total.all
    const TotalGoalsAway = result.response.goals.against.total.away
    const TotalGoalsHome = result.response.goals.against.total.home
    
  

    console.log(CountryName)
    console.log(CountryFlag)
    console.log(TeamName)
    console.log(TeamLogo)
    console.log(TotalGoals)
    console.log(TotalGoalsHome)

    document.querySelector('#stuff').innerHTML = `The countries name is ${CountryName} and this is pulled
    from an API`;






  });
  




