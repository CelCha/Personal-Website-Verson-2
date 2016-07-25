$(document).ready(function(){
	
	//Portfolio Navigation
	$("#wemesh").click(function(){
		$('html, body').animate({
			scrollTop: $(".wemesh").offset().top
		}, 1300);
	});
	
	$("#odin").click(function(){
		$('html, body').animate({
			scrollTop: $(".odin").offset().top
		}, 1300);
	});
	
	$("#spartans").click(function(){
		$('html, body').animate({
			scrollTop: $(".spartans").offset().top
		}, 1300);
	});


});