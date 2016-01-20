$(document).ready(function() {

	$('#hamburger-toggle').on('click touch', function(event) {
		event.preventDefault();
		$('#hamburger-container').toggleClass('active');
	});

	$('.hamburger-close').on('click touch', function(event) {
		event.preventDefault();
		$('#hamburger-container').toggleClass('active');
	});

	$('.subnav-toggle').on('click touch', function(event) {
		event.preventDefault();
		$('nav.subnav').toggleClass('toggled');
	});

	var winHeight = $(window).innerHeight()
	var thisHeight = winHeight - 300;

	if ($('#central-content').height() < winHeight) {
		$('.btn-top').css('display', 'none' );
	}

	$('#central-content').css('min-height', thisHeight );

	$("a[href='#top']").click(function() { 
		$("html, body").animate({ 
			scrollTop: 0 
		}, "slow"); return false; 
	});

});