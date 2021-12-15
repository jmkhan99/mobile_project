$(function(){
	// var protocol = window.location.protocol;
	var path = window.location.href;
	path = path.replace('index.html', '');
		localStorage.setItem('path', path);
});