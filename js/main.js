$(function() {

	$("body").keydown(function(e) {
	  if(e.keyCode == 37) { // left
	    $(".nav.prev").addClass("active").trigger("click");
	  } else if(e.keyCode == 39) { // right
	    $(".nav.next").addClass("active").trigger("click");
	  }
	});

	$("#blog-list-menu").on("click", function(e) {
		e.preventDefault();
		if($(this).hasClass("active")) {
			$("#navigation-wrapper").removeClass("open");
			$(this).removeClass("active");
		} else {
			$("#navigation-wrapper").addClass("open");
			$(this).addClass("active");
		}
		
	});

	$(window).on("scroll", function () {
		if($(window.scrollTop > 10)) {
			$("article header").addClass("faded");
		}
	});

	$("article").imagesLoaded(function() {
		var windowHeight = $(window).height();
		var imageHeight = $(".main-image").height();

		var topMargin = windowHeight > imageHeight ? imageHeight : windowHeight;

		$("article header").css("height", imageHeight);

		$("article .post-content").css("margin-top", topMargin - 20);	
	});
	

});