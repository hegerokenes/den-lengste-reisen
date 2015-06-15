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
			$("article header").addClass("visible");
		} else {
			$("article header").removeClass("visible");
		}
	});

	scaleFrontImage();

	$(window).on("resize", function () {
		scaleFrontImage();
	})

	$("#map").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active").css("height", "250px");
		} else {
			var windowHeight = $(window).height();
			$(this).addClass("active");
			$(this).css("height", windowHeight);
		}
	});


});

function scaleFrontImage() {

	$("article").imagesLoaded(function() {
		var windowHeight = $(window).height();
		var imageHeight = $(".main-image").height();

		var topMargin = windowHeight > imageHeight ? imageHeight : windowHeight;

		$("article header").css("height", imageHeight);

		$("article .post-content").css("margin-top", topMargin - 60);
	});
}

function updateCounter() {
	var now = new Date();
	var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	var startDate = new Date(2014, 7, 18);
	var diff = Math.abs(startDate.getTime() - today.getTime());

	var oneDay = 1000 * 60 * 60 * 24;
	var days = Math.round(diff/oneDay);
	$("#travel-counter-value").text(days);
}
