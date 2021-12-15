$(function(){
	if(login_state){
		var logout_interval;
		var display = document.getElementById('logout_time');
		function logout_timer(duration, display) {
		    var logout_timer = duration, minutes, seconds;
		    logout_interval = setInterval(function () {
		        minutes = parseInt(logout_timer / 60, 10);
		        seconds = parseInt(logout_timer % 60, 10);

		        minutes = minutes < 10 ? "0" + minutes : minutes;
		        seconds = seconds < 10 ? "0" + seconds : seconds;

		        display.textContent = minutes + ":" + seconds;

		        if (--logout_timer < 0) {
		            location.href = css_path+"sub_login/sub_logout.php";
		        }
		    }, 1000);
		}
		function start_logout_timer (){
		    var ten_minutes = 60 * 10;
		    logout_timer(ten_minutes, display);
		}

		start_logout_timer();
		
		$('.continue').click(function(e){
			e.preventDefault();
			display.textContent = "10:00";
			clearInterval(logout_interval);
			start_logout_timer();
		});
	}
});
