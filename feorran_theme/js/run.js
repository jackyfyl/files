// Execution Script

jQuery(function(){

	//RESIZE IMAGE
	var img = jQuery(".bg img");
	var imgW = +jQuery(".bg img").width();
	var imgH = +jQuery(".bg img").height();
	var imgWvsH = imgW/imgH;
	//console.log("imgWvsH=" + imgWvsH);
	reSize(img, imgWvsH);
	jQuery(window).resize(function() {
		reSize(img, imgWvsH);
	//	console.log( "****height = " + img.css("height") + " width = " + img.css("width") );
	});// end RESIZE IMAGE

	//VERTICALLY SMOOTH SCROLLING
	 jQuery('#menu nav a, .backtotop a, #logo a, #collection_menu nav a, .section p a, #menuWrapper a, #mainWrapper a').bind('click',function(event){
		  var jQueryanchor = jQuery(this);
		  jQuery('html, body').stop().animate({
			  scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
		  }, 1500,'easeInOutExpo');
		  event.preventDefault();
	  }); // end VERTICALLY SMOOTH SCROLLING

	//PAGE FADE IN
	jQuery("body").css("display", "none");
    jQuery("body").fadeIn(1000);
	jQuery("#menu").css("display", "none");
    jQuery("#menu").fadeIn(3000);
	function redirectPage() {
		window.location = linkLocation;
	}// end PAGE FADE IN

});

//RESIZE IMG TO WINDOW SIZE EFFECT
  var reSize = function(img, wVsH){
	  var wW = +jQuery(window).width();
	  var wH = +jQuery(window).height();

	if( wVsH > wW/wH){
//	  	console.log("case 3 before: img width=" + img.width() + " img height=" + img.height() +" img WvsH=" + wVsH + " win WvsH=" + wW/wH + "win width=" + wW + " win height=" + wH);

		  img.css("height", wH);
		  img.css("width", "auto");

//		console.log("case 3 before: img width=" + img.width() + " img height=" + img.height() +" img WvsH=" + wVsH + " win WvsH=" + wW/wH + "win width=" + wW + " win height=" + wH);

	}else{
//		  console.log("case 4 before: img width=" + img.width() + " img height=" + img.height() +" img WvsH=" + wVsH + " win WvsH=" + wW/wH + "win width=" + wW + " win height=" + wH);
		  img.css("height", "auto");
		  img.css("width", wW);
//		  console.log("case 4 after: img width=" + img.width() + " img height=" + img.height() +" img WvsH=" + wVsH + " win WvsH=" + wW/wH + "win width=" + wW + " win height=" + wH);

		   }
  }

