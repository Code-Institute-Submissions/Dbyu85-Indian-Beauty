$(document).ready(function () {
	//hide answers for the faq section.
	$(".answer").hide();

	//showing answer with slideToggle method.
	$(".faq h4").click(function () {
		$(this).next(".answer").slideToggle();
	});
	$(".faq h4").addClass("faq-question");
	//------------------end-faq
	
	//next and prev button for the slideshow
	
	$(".next").click (function(){
		var currentImg = $(".active");
		var nextImg = currentImg.next();
		
		if(nextImg.length){
			currentImg.removeClass("active").css("z-index", -10);
			nextImg.addClass("active").css("z-index", 10);
		}
	});
	
	$(".prev").click (function(){
		var currentImg = $(".active");
		var prevImg = currentImg.prev();
		
		if(prevImg.length){
			currentImg.removeClass("active").css("z-index", -10);
			prevImg.addClass("active").css("z-index", 10);
		}
    });
    
    //EventListener Dropdown menu
	
});
