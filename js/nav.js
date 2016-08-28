$(document).ready(function(){
	//gallery
	$(".gallery, .profile, .contact, .plogos").hide();
	$(".portfolio, .works").show();

		

		$(".digital").show();
		$(".traditional, .motion").hide();

		$( "#portfolio" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#portfolio a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#gallery, #profile, #contact" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#gallery a, #profile a, #contact a" ).removeClass( "button-hover-link" ).addClass( "button-link" );

		$( "#works" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#works a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#plogos" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#plogos" ).removeClass( "button-hover-link" ).addClass( "button-link" );

		$( "#digital" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#digital a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#traditional, #motion" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#traditional a, #motion a" ).removeClass( "button-hover-link" ).addClass( "button-link" );



	
	$("#gallery").click(function(){
		$(".gallery").fadeIn();
		$(".portfolio, .profile, .contact").hide();

		$( "#gallery" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#gallery a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#portfolio, #profile" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#portfolio a, #profile a" ).removeClass( "button-hover-link" ).addClass( "button-link" );

	});

		$("#digital").click(function(){
			$(".digital").fadeIn();
			$(".traditional, .motion").hide();

			$( "#digital" ).removeClass( "button" ).addClass( "button-hover" );
			$( "#digital a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
			$( "#traditional, #motion" ).removeClass( "button-hover" ).addClass( "button" );
			$( "#traditional a, #motion a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
		});
		$("#traditional").click(function(){
			$(".traditional").fadeIn();
			$(".digital, .motion").hide();

			$( "#traditional" ).removeClass( "button" ).addClass( "button-hover" );
			$( "#traditional a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
			$( "#digital, #motion" ).removeClass( "button-hover" ).addClass( "button" );
			$( "#digital a, #motion a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
		});
		$("#motion").click(function(){
			$(".motion").fadeIn();
			$(".digital, .traditional").hide();

			$( "#motion" ).removeClass( "button" ).addClass( "button-hover" );
			$( "#motion a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
			$( "#traditional, #digital" ).removeClass( "button-hover" ).addClass( "button" );
			$( "#traditional a, #digital a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
		});
	
	$("#portfolio").click(function(){
		$(".portfolio").fadeIn();
		$(".gallery, .profile, .contact").hide();

		$( "#portfolio" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#portfolio a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#gallery, #profile" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#gallery a, #profile a" ).removeClass( "button-hover-link" ).addClass( "button-link" );

	});

		$("#works").click(function(){
			$(".works").fadeIn();
			$(".plogos").hide();

			$( "#works" ).removeClass( "button" ).addClass( "button-hover" );
			$( "#works a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
			$( "#plogos" ).removeClass( "button-hover" ).addClass( "button" );
			$( "#plogos a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
		});
		$("#plogos").click(function(){
			$(".plogos").fadeIn();
			$(".works").hide();

			$( "#plogos" ).removeClass( "button" ).addClass( "button-hover" );
			$( "#plogos a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
			$( "#works" ).removeClass( "button-hover" ).addClass( "button" );
			$( "#works a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
		});
	
	$("#profile").click(function(){
		$(".profile").fadeIn();
		$(".portfolio, .gallery, .contact").hide();

		$( "#profile" ).removeClass( "button" ).addClass( "button-hover" );
		$( "#profile a" ).removeClass( "button-link" ).addClass( "button-hover-link" );
		$( "#gallery, #portfolio" ).removeClass( "button-hover" ).addClass( "button" );
		$( "#gallery a, #portfolio a" ).removeClass( "button-hover-link" ).addClass( "button-link" );
	});
	
});

