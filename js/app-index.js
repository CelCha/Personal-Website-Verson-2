$(document).ready(function(){
	
	//nav bar
	$("#navbar").css("background-color", "transparent");

	$("#home").click(function(){
		$('html, body').animate({
			scrollTop: $("#header").offset().top
		}, 1300);
	});
	
	$("#profile").click(function(){
		$('html, body').animate({
			scrollTop: $(".profile").offset().top
		}, 1300);
	});
	
	$("#projects").click(function(){
		$('html, body').animate({
			scrollTop: $(".projects").offset().top
		}, 1300);
	});
	
	$("#gallery").click(function(){
		$('html, body').animate({
			scrollTop: $(".gallery").offset().top
		}, 1300);
	});
	
	$("#contact").click(function(){
		$('html, body').animate({
			scrollTop: $(".email").offset().top
		}, 1300);
	});


});


