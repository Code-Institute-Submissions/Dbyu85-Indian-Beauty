var slide = 1;

showSlide(slide);

//next/previous control
function plusSlide(s) {
	showSlide(slide += s);
}


function showSlide() {
	var i;

	const slides = document.getElementsByClassName('slideShow');

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slide++;
	if (slide > slides.length) {
		slide = 1
	}
	slides[slide - 1].style.display = 'block';
	setTimeout(showSlide, 2000);

}
