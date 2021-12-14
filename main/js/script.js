$(function(){
	function header_up(){
		$('.login_header').stop().animate({'height': '80px'},300);
	}
		
	/* 인풋에 포커스 되면 header 줄어듬  */
	$('input[type="text"], input[type="password"], input[type="search"]').focus(function(){
		header_up();
	});
	
	/* 다른 로그인 접기 펴기 */
	var d_login_state = 'off';
	var d_login_text = $('.d_text_line');
	d_login_text.on('click touch', function(e){
		e.preventDefault();
		if(d_login_state == 'off'){
			$('.d_logins').stop().slideDown();
			$('.downarrow').css('display','none');
			$('.uparrow').css('display','block');			
			header_up();
			d_login_state = 'on';
		} else if(d_login_state == 'on'){
			$('.d_logins').stop().slideUp();
			$('.downarrow').css('display','block');
			$('.uparrow').css('display','none');		
			d_login_state = 'off';
		}
	});
});