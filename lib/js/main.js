$(document).on('ready', responsiveMenu);

function responsiveMenu(){
	$('#trigger').on('click', slideMenu);
}

// Set the effect type
var effect = 'slide';
// Set the options for the effect type chosen
var options = { direction: 'left' };
// Set the duration (default: 400 milliseconds)
var duration = 'fast';

function slideMenu(){
	$('.sidebar-menu').toggle(effect, options, duration);
	$(".primary").toggleClass("primary-slide", 'fast');
}