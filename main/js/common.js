$(function(){
	/* 정확한 모바일 화면 높이값 vh*/
	function setScreenSize() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);	
	}	
	setScreenSize();
	
	$(window).resize(function(){
		setScreenSize();
	});
	
	/* 헤더 높이만큼 페이지에 padding-top */
	var header_height = $('#header').height();
	$('#main').css('padding-top', header_height);
	
	/* 모바일 키보드 나오면 footer 사라짐 */
	// var first_height = window.innerHeight;
	// var first_width = window.innerWidth;
	// var first_size = first_height + first_width;
	// var footer_height = $('#footer').height();
	// window.addEventListener('resize', function(){
		// if(first_size > window.innerHeight + window.innerWidth){
			// $('#footer').stop().animate({bottom: -footer_height},300);			
		// }else {
			// $('#footer').stop().animate({bottom: 0},300);		
		// }
	// })
	
	/* 처음 시작 때 메인 부분 fadeIn */
	$('#main').fadeIn();
	
	/* 햄버거 메뉴 */
	var hamburger = $('.hamburger_box');

	if(hamburger.length > 0){
		var hamburger_menu = $('.hamburger_menu');
		var ham_menu_box = $('.ham_menu_box');

		hamburger.on('click touch', function(){
			hamburger_menu.fadeIn();			
			$('#wrap').css('overflow','hidden');
			ham_menu_box.css('right', '-85%');
			ham_menu_box.stop().animate({'right': '0'},300);
		})
		$('.leftbar, .ham_close_btn').on('click touch', function(){
			hamburger_menu.fadeOut();			
			$('#wrap').css('overflow','visible');
			ham_menu_box.css('right', '0%');
			ham_menu_box.stop().animate({'right': '-85%'},300);			
		})
	}
	
	// apk 용 맵 대체 링크
	$('.map_link').click(function(e){
		e.preventDefault();
		var new_window = confirm('지도 사용을 위해 브라우저 새 창을 여시겠습니까?');
		console.log(new_window)
		if(new_window==true){
			// 모바일용
			window.open("https://jmkhan99.github.io/mobile_project/main/maps.html","");
		}
	});
});