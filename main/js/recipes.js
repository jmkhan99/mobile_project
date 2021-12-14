$(function(){

	/* 탭 메뉴 */
	var tab_menu = $('.tab_menu>ul>li>a');
	var tab_con = $('.tab_con>div');

	function iscroll_tab() {
		var tab_scroll = new IScroll('.tab_menu', {scrollX:true, scrollY:false, click:true});
	}
	iscroll_tab();
	
	function tab_ani(){
		var active_tab_menu = $('.tab_menu>ul>li>a.active_tab');
		active_tab_menu.find('.underline').css({'width':'0%', 'opacity':'0'});
		active_tab_menu.find('.underline').stop().animate({'width':'100%', 'opacity':'1'},300);
	}
	tab_ani();
	
	tab_menu.on('click touch',function(){
		tab_menu.removeClass('active_tab');
		$(this).addClass('active_tab');
		tab_ani();
		var i = $(this).parent().index();
		tab_con.hide();
		tab_con.eq(i).fadeIn(300);
		if(i == 1){
			iscroll_r_image1();
			iscroll_r_image2();
			iscroll_r_image3();
		}		
		if(i == 2){
			iscroll_best();
		}
	});
	
	/* 레시피 목록 더보기 버튼 */
	var more_button = $('.r_list_more');
	more_button.on('touch click', function(e){
		e.preventDefault();
		$('.r_list2').slideDown();
		more_button.hide();
	})
	
	/* 베스트 레시피 가로 스크롤 */
	function iscroll_best() {
		var best_scroll = new IScroll('.best_slide_box', {scrollX:true, snap:'li', click:true});
		best_scroll.refresh();
	}
	
	/* 추천 레시피 가로 스크롤 */
	function iscroll_r_image1() {
		var r_image1_scroll = new IScroll('.r_recipe', {scrollX:true, snap:'li', click:true});
		r_image1_scroll.refresh();
	}
	function iscroll_r_image2() {
		var r_image1_scroll = new IScroll('.tv_recipe', {scrollX:true, snap:'li', click:true});
		r_image1_scroll.refresh();
	}
	function iscroll_r_image3() {
		var r_image1_scroll = new IScroll('.today_recipe', {scrollX:true, snap:'li', click:true});
		r_image1_scroll.refresh();
	}

});

