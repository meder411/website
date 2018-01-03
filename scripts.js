// For tabs to collapse into accordian in academics sections
$('#academics-tabs').tabCollapse({});

// For Popovers
$(document).ready(function(){
	$('[data-toggle="popover"]').popover({trigger: 'hover click'});   
});


// To make the collapsed navbar hide on click
$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a:not(".dropdown-toggle")') ) {
		$(this).collapse('hide');
	}
});


// For ScrollSpy
$('body').scrollspy({target: ".navbar", offset: 50})



// Change header opacity as scrolling begins
function checkScroll(){
	var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

	if($(window).scrollTop() > startY){
		$('.navbar').addClass("scrolled");
	}else{
		$('.navbar').removeClass("scrolled");
	}
}

if($('.navbar').length > 0){
	$(window).on("scroll load resize", function(){
		checkScroll();
	});
}



// Add smooth scrolling on all links inside the navbar
$(".navbar-collapse a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

	// Prevent default anchor click behavior
	event.preventDefault();

	// Store hash
	var hash = this.hash;

	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate({
	  scrollTop: $(hash).offset().top - 50
	}, 800, function(){});

  } // End if




// Swipe functionality on the carousel
$(document).ready(function() {
   $(".carousel-inner").swiperight(function() {
	   $(this).parent().carousel('prev');
   });
   $(".carousel-inner").swipeleft(function() {
	   $(this).parent().carousel('next');
   });
});

});


var w = 0;
var text_offset = $('#computervision').position().left;
var size = $("#computervision").css('font-size');

$(document).ready(function() {
  w = $(window).width();
});

$(window).resize(function() {
  if (w > $(window).width()) {
	$("#computervision").css("font-size", size -= 1);
  } else {
	$("#computervision").css("left", text_offset += 1);
  }
  w = $(window).width();
});