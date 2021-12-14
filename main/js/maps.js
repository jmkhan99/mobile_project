navigator.geolocation.getCurrentPosition(on_geo, error_geo) 

function on_geo(position){
	var lat = position.coords.latitude
	var lng = position.coords.longitude
	console.log (lat)
	console.log (lng)
	var mapOptions = {
		center: new naver.maps.LatLng(lat, lng),
		zoom: 17
	};
	var markerOptions = {
		position: mapOptions.center
	};
	var map = new naver.maps.Map('map', mapOptions);
	var marker = new naver.maps.Marker(markerOptions)

}
function error_geo(){
	alert('a');
}


// var map = null;

// function initMap() {
    // map = new naver.maps.Map('map', {
        // center: new naver.maps.LatLng(37.3595704, 127.105399),
        // zoom: 10
    // });
// }