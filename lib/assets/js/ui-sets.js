$(document).on('ready', setUi);

// Set placeholder for selectmenus jquery ui
$.widget( 'app.selectmenu', $.ui.selectmenu, {
    _drawButton: function() {
        this._super();
        
        var selected = this.element
                .find( '[selected]' )
                .length,
            placeholder = this.options.placeholder;
        
        if ( !selected && placeholder ) {
            this.buttonText.text( placeholder );    
        }
    }
});

function setUi() {

	// This selectmenu is set in validate.js because of the complicity of its validation
	// $('select.required').selectmenu();

	// Selectmenu > Perfil > Nacionalidad
	$('select.regular-select').selectmenu();

	// Numeric input
	$('input[type=number]').spinner();

	// Date
	$.datepicker.regional['es'] = {
	closeText: 'Cerrar',
	prevText: '<Ant',
	nextText: 'Sig>',
	currentText: 'Hoy',
	monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
	dayNames: ['Domingo', 'Lunes', 'Martes', 'MiÃ©rcoles', 'Jueves', 'Viernes', 'Sabado'],
	dayNamesShort: ['Dom','Lun','Mar','MiÃ©','Juv','Vie','Sab'],
	dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sa'],
	weekHeader: 'Sm',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};

	$.datepicker.setDefaults($.datepicker.regional['es']);
	$( ".date" ).datepicker();
	$.datepicker.formatDate('yy/mm/dd', new Date());


	// Pop-up
	$(function($) {
		$('.address-dialog-trigger').each(function() {  
			$.data(this, 'dialog', 
				$(this).next('.address-dialog').dialog({
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




