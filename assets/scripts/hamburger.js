$(document).ready(function() {

	$('#hamburger-toggle').on('click touch', function(event) {
		event.preventDefault();
		$('#hamburger-container').toggleClass('active');
	});

	$('.subnav-toggle').on('click touch', function(event) {
		event.preventDefault();
		$('nav.subnav').toggleClass('toggled');
	});

	var thisHeight = $(window).innerHeight() - 300;

	$('#central-content').css('min-height', thisHeight );

});