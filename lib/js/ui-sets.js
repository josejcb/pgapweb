$(document).on('ready', main);

function main() {
	
	// Selectmenu
	$('select').selectmenu();
	
	// Numeric input
	$('input[type=number]').spinner();

	// Pop-up
	$(function($) {
	  $('.la-direccion').each(function() {  
	    $.data(this, 'dialog', 
	      $(this).next('.dialog').dialog({
	      	width: 'auto',
	        autoOpen: false,  
	        modal: true,
	      })
	    );  
	  }).click(function() {  
	      $.data(this, 'dialog').dialog('open');  
	      return false;  
	  });  
	}); 

}




