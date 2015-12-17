$(document).ready(function(){
	//gallery
	$("#proj1, #proj2, #proj3").hide();

	if ($("#proj1, #proj2, #proj3").is(":hidden")) {
		$("#project-description").hide();
	}else {
		$("#project-description").show();
	}
	
	$("#project1").click(function(){
		$("#proj1").fadeIn();
		$("#proj2, #proj3").hide();
		$("#project-description").show();
	});
	
	$("#project2").click(function(){
		$("#proj2").fadeIn();
		$("#proj1, #proj3").hide();
		$("#project-description").show();
	});
	
	$("#project3").click(function(){
		$("#proj3").fadeIn();
		$("#proj1, #proj2").hide();
		$("#project-description").show();
	});
	
});
