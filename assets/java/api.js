//This java is for pulling api data and putting it in an id then displaying 
//-it on the api webpage
let myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "ed8fa7ffbf00e7ed51dca5edc25c11e9");
myHeaders.append("x-rapidapi-host", "v1.hockey.api-sports.io");
//cant use var use let
let requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow'
};
//look at the https://api-sports.io/documentation/hockey/v1#section/Architecture to find out how to write the URL
fetch("https://v1.hockey.api-sports.io/countries", requestOptions).then(response => response.json()).then(result => {
	console.log(result);
	console.log(result)
	result.response.forEach(element => {
		const CountryFlag = element.flag
		let div = document.createElement("div");
		let img = document.createElement("img");
		img.src = CountryFlag;
		div.append(img);
		document.querySelector(".grid-container").append(div);
	});
});