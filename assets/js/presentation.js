$(document).ready(function () {
	//hide answers for the faq section.
	$(".answer").hide();

	//showing answer with slideToggle method.
	$(".faq h4").click(function () {
		$(this).next(".answer").slideToggle();
	});
    $(".faq h4").addClass("faq-question");
    
	
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
     
});

 //JS Dropdown function / source w3schools.com https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown

    function responsiveFunction() {
        document.getElementById("dropMenu").classList.toggle("show");
    }
    window.onclick = function(event) {
        if (!event.target.matches('.rbt')) {
            var dropdowns = document.getElementsByClassName("dropdown-responsive");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                }
            }
        }
    }
