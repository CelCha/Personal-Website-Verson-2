$(document).ready(function(){
	
	$('#wemesh_tablet').css("opacity","0");
	$('#zynga_hackathon, #spartans_speak, #wemesh_press_kit, #wemesh_adverts, #wemesh_mockups').hide();



	$("#wemeshtablet").click(function(){
		$('html, body').animate({
			scrollTop: $(".wemeshtablet").offset().top
		}, 1300);
	});

		$("#wemeshtablet").mouseover(function(){
			$('#zynga_hackathon, #spartans_speak, #wemesh_press_kit, #wemesh_adverts, #wemesh_mockups').hide();
			$('#wemesh_tablet').fadeTo(200,1);
		});
		
		$("#wemeshtablet").mouseout(function(){
			$('#wemesh_tablet').fadeTo(200,0);
		});

	$("#wemeshmockups").click(function(){
		$('html, body').animate({
			scrollTop: $(".wemeshmockups").offset().top
		}, 1300);
	});

		$("#wemeshmockups").mouseover(function(){
			$('#zynga_hackathon, #spartans_speak,#wemesh_tablet, #wemesh_adverts, #wemesh_press_kit').hide();
			$('#wemesh_mockups').fadeTo(200,1);
		});
		
		$("#wemeshmockups").mouseout(function(){
			$('#wemesh_mockups').fadeTo(200,0);
		});

	$("#wemesh").click(function(){
		$('html, body').animate({
			scrollTop: $(".wemesh").offset().top
		}, 1300);
	});

		$("#wemesh").mouseover(function(){
			$('#zynga_hackathon, #spartans_speak,#wemesh_tablet, #wemesh_adverts, #wemesh_mockups').hide();
			$('#wemesh_press_kit').fadeTo(200,1);
		});
		
		$("#wemesh").mouseout(function(){
			$('#wemesh_press_kit').fadeTo(200,0);
		});

	$("#wemeshadverts").click(function(){
		$('html, body').animate({
			scrollTop: $(".wemeshadverts").offset().top
		}, 1300);
	});

		$("#wemeshadverts").mouseover(function(){
			$('#zynga_hackathon, #spartans_speak, #wemesh_press_kit, #wemesh_tablet, #wemesh_mockups').hide();
			$('#wemesh_adverts').fadeTo(200,1);
		});
		
		$("#wemeshadverts").mouseout(function(){
			$('#wemesh_adverts').fadeTo(200,0);
		});

	$("#odin").click(function(){
		$('html, body').animate({
			scrollTop: $(".odin").offset().top
		}, 1300);
	});

		$("#odin").mouseover(function(){
			$('#wemesh_press_kit, #spartans_speak, #wemesh_adverts, #wemesh_tablet, #wemesh_mockups').hide();
			$('#zynga_hackathon').fadeTo(200,1);
		});
		
		$("#odin").mouseout(function(){
			$('#zynga_hackathon').fadeTo(200,0);
		});


	$("#spartans").click(function(){
		$('html, body').animate({
			scrollTop: $(".spartans").offset().top
		}, 1300);
	});

		$("#spartans").mouseover(function(){
			$('#zynga_hackathon, #wemesh_press_kit, #wemesh_tablet, #wemesh_adverts, #wemesh_mockups').hide();
			$('#spartans_speak').fadeTo(200,1);
		});
		
		$("#spartans").mouseout(function(){
			$('#spartans_speak').fadeTo(200,0);
		});


});