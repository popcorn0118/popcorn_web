(function($){
	
	$.extend({
			 
		smoothAnchors : function(speed, easing, redirect){
				
			speed = speed || "fast";
			easing = easing || null;
			redirect = (redirect === true || redirect == null) ? true : false;
			
			$("a").each(function(i){
							
				var url = $(this).attr("href");
				
				if(url){
					if(url.indexOf("#") != -1 && url.indexOf("#") == 0){
		
						var aParts = url.split("#",2);
						var anchor = $("a[name='"+aParts[1]+"']");
						
						if(anchor){
																					
							$(this).click(function(){
												   
								if($(document).height()-anchor.offset().top >= $(window).height()
								 || anchor.offset().top > $(window).height()
								 || $(document).width()-anchor.offset().left >= $(window).width()
								 || anchor.offset().left > $(window).width()){
												   
									$('html, body').animate({
										scrollTop: anchor.offset().top,
										scrollLeft: anchor.offset().left
									}, speed, easing, function(){
										if(redirect){ 
											window.location = url 
										}
									});
								
								}
								
								return false;
																
							});
						}
					
					}
					
				}
				
			});
			
		}
	
	});
	
})(jQuery);

$(function(){$.fn.scrollToTop=function(options){if(options.speed){var speed=options.speed;}else{var speed="slow";}if(options.ease){var ease=options.ease;}else{var ease="jswing";}if(options.start){var start=options.start;}else{var start="0";}var scrollDiv=$(this);$(this).hide().removeAttr("href");if($(window).scrollTop()>start){$(this).fadeIn("slow");}$(window).scroll(function(){if($(window).scrollTop()>start){$(scrollDiv).fadeIn("slow");}else{$(scrollDiv).fadeOut("slow");}});$(this).click(function(event){$("html, body").animate({scrollTop:"0px"},speed,ease);});}});