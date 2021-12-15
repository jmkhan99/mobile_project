navigator.geolocation.getCurrentPosition(on_geo, error_geo) 

function on_geo(position){
	var container = document.getElementById('map'),
		options = {
			 center: new kakao.maps.LatLng(33.450701, 126.570667),
			 level: 17
		};
	 var map = new kakao.maps.Map(container, options);
}
function error_geo(){
	return;
}





// 네이버
// function on_geo(position){
	// var lat = position.coords.latitude
	// var lng = position.coords.longitude
	// var mapOptions = {
		// center: new naver.maps.LatLng(lat, lng),
		// zoom: 19
	// };
	// var map = new naver.maps.Map('map', mapOptions);
	
	// var markerOptions = {
		// position: new naver.maps.LatLng(lat, lng),
		// map: map
	// };
	// var marker = new naver.maps.Marker(markerOptions)

// }
// function error_geo(){
	// return;
// }
