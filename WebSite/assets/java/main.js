window.onbeforeunload = function() {
	window.scrollTo(0, 0);
}
//This bit is for the boxes around the mouse
let boxes = document.querySelectorAll('.box');
const onMouseMove = (e) => {
	boxes.forEach((b, i) => {
		setTimeout(() => {
			b.style.opacity = 1 - (.1 * i);
			b.style.left = e.pageX + 'px';
			b.style.top = e.pageY + 'px';
		}, 40 * (i + 5))
	});
}
document.addEventListener('mousemove', onMouseMove);
console.log("box")
document.querySelector(".toggle").addEventListener("click", () => {
	document.querySelector(".toggle").classList.toggle("active");
	document.querySelector(".menu").classList.toggle("active");
	document.querySelector(".showcase").classList.toggle("active");
})
//-------------------------------------------------------------
//This bit is for the slide show 
var slideIndex = 0;
showSlides();

function plusSlides() {
	showSlides();
}

function negSlides() {
	slideIndex -= 2;
	showSlides();
}
console.log("zzzzz")

function showSlides() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1
	}
	if (slideIndex <= 0) {
		slideIndex = 4
	}
	x[slideIndex - 1].style.display = "block";
}
setInterval(showSlides, 4000); // Change image every 2 seconds
//dots[slideIndex-1].className += " active";
//-------------------------------------------------------------
//This bit is for API