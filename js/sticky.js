$(document).ready(function() {
	var s = $(".heading-top");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
			if (windowpos >= 150) {
				s.addClass("active");
			} else {
				s.removeClass("active");	
			}
	});
});