var map = new naver.maps.Map('map', mapOptions);


var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};

navigator.geolocation.getCurrentPosition(on_geo, error_geo) 

function on_geo(position){
	console.log(position);
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