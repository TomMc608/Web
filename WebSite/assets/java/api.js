//This java is for pulling api data and putting it in an id then displaying 
//-it on the api webpage
function smthn(){
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
    console.log(result);

    // console.log(result)
    // console.log(result.response.country.name) //country 
    // console.log(result.response.country.flag) //gets the country flag
    // console.log(result.response.team.name) //name of team
    // console.log(result.response.goals.against.total.all) //shows all total goals in 2019
    // console.log(result.response.goals.against.total.away) //shows total goals away
    // console.log(result.response.goals.against.total.home) //shows total goals home
    // console.log(result.response.team.logo) //gets teams logo
    const pic_output = document.getElementById('pic_output');

    const CountryName = result.response.country.name
    const CountryFlag = result.response.country.flag
    const TeamName = result.response.team.name
    const TeamLogo = result.response.team.logo
    const TotalGoals = result.response.goals.against.total.all
    const TotalGoalsAway = result.response.goals.against.total.away
    const TotalGoalsHome = result.response.goals.against.total.home
    
    //pic_output.innerHTML = `<img src="${result.response.country.flag}"/>`

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = CountryFlag;
    div.append(img);
    document.querySelector(".bottom_grid .images").append(div);


    console.log(CountryName)
    console.log(CountryFlag)
    console.log(TeamName)
    console.log(TeamLogo)
    console.log(TotalGoals)
    console.log(TotalGoalsHome)

   /* document.querySelector('#countryname').innerHTML = `The countries name is ${CountryName} and this is pulled
    from an API`;

    document.querySelector('#countryflag').innerHTML = `The countries flag is ${CountryFlag} and this is pulled
    from an API`;

    document.querySelector('#teamname').innerHTML = `The hockey team name is ${TeamName} and this is pulled
    from an API`;

    document.querySelector('#teamlogo').innerHTML = `The team logo is ${TeamLogo} and this is pulled
    from an API`;
    
    

    document.querySelector('#teamgoals').innerHTML = `The teams total is ${TotalGoals} and this is pulled
    from an API`;

    document.querySelector('#totalhomegoals').innerHTML = `The teams total home goals is ${TotalGoalsHome} and this is pulled
    from an API`; */

    
  });
}

smthn();