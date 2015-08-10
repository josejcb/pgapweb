$(document).ready(function() {

// Top Frame

	// Open button options
	$('.top-frame .item').on('click', function(){
		$('.open').not(this).toggleClass('open').next('.top-frame .option').toggle();
		$(this).toggleClass('open').next('.top-frame .option').toggle();
		
		var width = $(window).width();
		if((width <= 767)){
			$('.close-button').show();
			$('.close-button').on('click', function(){
				$('.top-frame .option').hide();
				$(this).hide();
			});
		}

		$(document).on('touchstart click', function(event) {
			if (!$(event.target).closest('.open').length) {
				$('.top-frame .item').removeClass('open');
				$('.top-frame .option').hide();
				$('.close-button').hide();
			}
		});
	});


// Address

	// Show 'No Address' message
	if($("#address ul.list .the-address").length){ // If there's an address
		$(".no-address-msg").hide();
	}else{
		$(".item-address").hide();
	}

	if($("#address .select .the-address").is(':empty')){
		$("#address .select .text").css('width', 'auto');
		$("#address .select .the-address").text('Seleccionar dirección');
		$(".top-frame .address-options .the-address").text('Debes seleccionar una dirección de envío.');
		$(".top-frame .item-address").removeClass('address-dialog-trigger');
		$('.begin').on('click', function(e){
			e.preventDefault();
			alert('Debes seleccionar una dirección de envío antes de comenzar a ordenar.');
		});
	}else{
		$("#address .select .the-address").text($("#address .select .the-address").text().substring(0,50) + '...');
		$('#address .select .text, #current-address').after('<div><span class="address-status">Dirección actual</span></div>');
	}

	// Select address
	$(function(){
		$('#address .select').on('click', function(){
			$('#address ul.list').toggle();
			$(this).toggleClass('address-select-active');
		});
	});

	$(function() {
		$('#address .choose').on('click', function(){
			$('#address .select').hide();
			$('#address .current').show();
		});
	});

	// Delete Address
	$('#address .delete').on('click', deleteAddress);
	function deleteAddress() {
		return confirm("¿Estás seguro de querer eliminar esta dirección?");
	}

}); // Document ready