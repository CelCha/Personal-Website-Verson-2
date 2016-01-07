$(document).ready(function(){	
	var start_scroll = 0;
	var transition = $("#bottom-nav");
	var offset = transition.offset();
	$(document).scroll(function() {
		start_scroll = $(this).scrollTop();
    	if (start_scroll >= 1000) {
        	$("#navbar").css("background-color", "#fff");
        	$(".button-hover").css("color", "#2C95DA");
    	} else {
        	$("#navbar").css("background-color","transparent");
        	$(".button-hover").css("color", "#fff");
   		}
	});
});