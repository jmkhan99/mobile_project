navigator.geolocation.getCurrentPosition(on_geo, error_geo) 

function on_geo(position){
	var lat = position.coords.latitude
	var lng = position.coords.longitude	
	
	// 지도 생성 및 표시
	var container = document.getElementById('map'),
		options = {
			 center: new kakao.maps.LatLng(lat, lng),
			 level: 3
		};
	var map = new kakao.maps.Map(container, options);

	// 마커 표시
	var markerPosition  = new kakao.maps.LatLng(lat, lng); 
	var marker = new kakao.maps.Marker({
		position: markerPosition
	});
	marker.setMap(map);

	// 장소 검색 객체를 생성합니다
	var ps = new kakao.maps.services.Places(map); 

	// 지도에 idle 이벤트를 등록합니다
	kakao.maps.event.addListener(map, 'idle', searchPlaces);

	// 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
	contentNode.className = 'placeinfo_wrap';

	// 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
	// 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
	addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
	addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

	// 커스텀 오버레이 컨텐츠를 설정합니다
	placeOverlay.setContent(contentNode);  

	// 각 카테고리에 클릭 이벤트를 등록합니다
	addCategoryClickEvent();

	// 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
	function addEventHandle(target, type, callback) {
		if (target.addEventListener) {
			target.addEventListener(type, callback);
		} else {
			target.attachEvent('on' + type, callback);
		}
	}	
	
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
