$(document).ready(function(){
	//profile
	$("#summary").show();
	$("#technical-skills, #experience, #projects-profile, #education, #languages, #activities").hide();
	$(".hide").hide();
	
	
	$("#profile-summary").click(function(){
		$("#technical-skills, #experience, #projects-profile, #education, #languages, #activities").hide();
		$("#summary").fadeIn();	
	});
	
	$("#profile-skills").click(function(){
		$("#summary, #experience, #projects-profile, #education, #languages, #activities").hide();
		$(".hide, #technical-skills").fadeIn();	
		
	});
	
	$("#profile-experience").click(function(){
		$("#summary, #technical-skills, #projects-profile, #education, #languages, #activities").hide();
		$(".hide, #experience").fadeIn();	
	});
	
	$("#profile-projects").click(function(){
		$("#summary, #technical-skills, #experience, #education, #languages, #activities").hide();
		$(".hide, #projects-profile").fadeIn();	
		
	});
	
	$("#profile-education").click(function(){
		$("#summary, #technical-skills, #experience, #projects-profile, #languages, #activities").hide();
		$(".hide, #education").fadeIn();			
	});
	
	$("#profile-language").click(function(){
		$("#summary, #technical-skills, #experience, #projects-profile, #education, #activities").hide();
		$(".hide, #languages").fadeIn();	
		
	});
	
	$("#profile-activities").click(function(){
		$("#summary, #technical-skills, #experience, #projects-profile, #education, #languages").hide();
		$(".hide, #activities").fadeIn();		
		
	});
	
	$("#profile-all").click(function(){
		$("#technical-skills, #experience, #projects-profile, #education, #languages, #activities, .hide").fadeIn();
		$("#summary").hide();	
		
	});
	
});