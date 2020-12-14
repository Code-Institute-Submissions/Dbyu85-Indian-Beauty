function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5,
		center: { lat: 20.593683, lng: 78.962883}
	});

	var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

	var locations = [
        {lat: 15.334880, lng: 76.462044},
        {lat: 13.084520, lng: 77.400421},
        {lat: 31.098480, lng: -97.343750}
	];

	var markers = locations.map(function(location, i) {
		return new google.maps.Marker({positon: location, label: labels[i % labels.length]});
	});
	var markerCluster = new MarkerClusterer(map, markers, {
		imagePath: "'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
	});

}