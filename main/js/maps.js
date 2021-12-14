navigator.geolocation.getCurrentPosition(on_geo, error_geo) 

function on_geo(position){
	var lat = position.coords.latitude
	var lng = position.coords.longitude
	alert (lat)
	alert (lng)
	var mapOptions = {
		center: new naver.maps.LatLng(lat, lng),
		zoom: 19
	};
	var map = new naver.maps.Map('map', mapOptions);
	
	var markerOptions = {
		position: new naver.maps.LatLng(lat, lng),
		map: map
	};
	var marker = new naver.maps.Marker(markerOptions)

}
function error_geo(){
	alert('a');
}
