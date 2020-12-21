function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: { lat: 20.593683, lng: 78.962883 }
	});


	var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var locations = [
        { lat: 15.334880, lng: 76.462044 },
        { lat: 13.084520, lng: 77.400421 },
	];



	const markers = locations.map((location, i) => {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
    });

	// Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });


}