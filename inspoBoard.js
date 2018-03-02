function openModal(){

	var modal = document.getElementById("myModal")
	modal.style.display = "block";
	document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    if (evt.keyCode == 27) {
	       closeModal();
	    };
			if(evt.keyCode == 37){changeSlides(-1);};
			if(evt.keyCode == 39){changeSlides(1);};
	};
}


function closeModal(){
	document.getElementById("myModal").style.display = "none";
	document.onkeydown = function(){};
}

var slideIndex = 1;
showSlides(slideIndex);

//next and previous
function changeSlides(n){
	showSlides(slideIndex += n);
}

//thumbnail control
function currentSlide(n){
	showSlides(slideIndex = n);
}

var play = document.getElementById("play");
var slideShowIndex = 0;
play.addEventListener("click", function(){slideShow();});

function slideShow()
{
	var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideShowIndex++;
    if (slideShowIndex > slides.length) {slideShowIndex = 1}
		setTimeout(function(){slides[slideShowIndex-1].style.opacity = ".5"; console.log("opacity .5");}, 9500);
		setTimeout(function(){slides[slideShowIndex-1].style.opacity = "1"; console.log("opacity 1");}, 10000);
		setTimeout(slides[slideShowIndex-1].style.opacity = "1", 10000);
   slides[slideShowIndex-1].style.display = "block";
//		slides[slideShowIndex-1].style.opacity = "1";

    setTimeout(slideShow, 10000);

		document.onkeydown = function(evt) {
		evt = evt || window.event;
		if (evt.keyCode == 27) {
			 closeModal();
		};
		if(evt.keyCode == 37){changeSlides(-1);};
		if(evt.keyCode == 39){changeSlides(1);};
};
}

function showSlides(n){
	//console.log("in showSlides " + n);
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementsByClassName("caption");

	if(n > slides.length){slideIndex=1;}
	if(n < 1 ) {slideIndex = slides.length;}
	for(i=0; i<slides.length; i++)
	{
		slides[i].style.display = "none";
	}
	for(i = 0; i<dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}
