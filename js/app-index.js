$(document).ready(function(){
	
	//gallery
	$(".digital").hide();
	$(".traditional").hide();
	$(".motion").hide();
	$(".art-gallery").show();
	
	$("#art-gallery").click(function(){
		$(".art-gallery").fadeIn();
		$(".digital").hide();
		$(".traditional").hide();
		$(".motion").hide();
		
		
	});
	
	$("#digital").click(function(){
		$(".digital").fadeIn();
		$(".traditional").hide();
		$(".motion").hide();
		$(".art-gallery").hide();
	
	});
	
	$("#traditional").click(function(){
		$(".traditional").fadeIn();
		$(".digital").hide();
		$(".motion").hide();
		$(".art-gallery").hide();
	});
	
	$("#motion").click(function(){
		$(".motion").fadeIn();
		$(".traditional").hide();
		$(".digital").hide();
		$(".art-gallery").hide();
		
	});
	
	//nav bar

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

