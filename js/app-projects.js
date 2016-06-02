$(document).ready(function(){
	//gallery
	$("#proj2, #proj3").hide();

	if ($("#proj2, #proj3").is(":hidden")) {
		$("#project-description").hide();
	}else {
		$("#project-description").show();
	}
	
	$("#project2").click(function(){

		if ($("#proj2").is(":hidden")) {
			$("#proj2").fadeIn();
			$("#proj3").hide();
			$("#project-description").show();
		}else {
			$("#project-description").fadeOut();
		}

	});
	
	$("#project3").click(function(){
		if ($("#proj3").is(":hidden")) {
			$("#proj3").fadeIn();
			$("#proj2").hide();
			$("#project-description").show();
		}else {
			$("#project-description").fadeOut();
		}

		
	});
	
});
