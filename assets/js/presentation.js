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
	
});

function initMap() {
				var map = new google.maps.Map(document.getElementById('map'), {
					zoom: 4,
					center: {
						lat: 20.593684,
						lng: 78.96288
					}
				});

				var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

				var locations = [{
						lat: 15.335013,
						lng: 76.460024
					}
				];

				var markers = locations.map(function(location, i) {
					return new google.maps.Marker({
						positon: location,
						label: labels[i % labels.length]
					});
				});
				var markerCluster = new MarkerClusterer(map, markers, {
					imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
				});

			}

