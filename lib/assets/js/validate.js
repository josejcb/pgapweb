(function($,W,D) {
	
	var JQUERY4U = {};
	
	JQUERY4U.UTIL = {
		setupFormValidation: function(){

			$(function(){
			    $('select.required').selectmenu({
			        style:'dropdown',
			        transferClasses: true,
			        width: null,
			        change: function() {
			            var id = $(this).attr('id');
			            // $('#' + id + '-button,#' + id + '-menu').removeClass('ui-s<wbr ></wbr><wbr ></wbr>tate-error<wbr ></wbr> ui-state-valid');
			            $("#form1").validate().element(this);
			        }
			    });

				jQuery.validator.addMethod("selectNone", function(a) {return true;});

				$('#form1').validate({

			        errorPlacement: function(a, b) {
			            if(b.find(".selectmenu-placeholder")){
			                a.appendTo(b.closest("div"));
			                var id = b.attr('id');
			                $('#' + id + '-button,#' + id + '-menu').removeClass('ui-state-error ui-state-valid');
			                $('#' + id + '-button,#' + id + '-menu').addClass('ui-state-error');
			            }
			            else {
			                a.appendTo(b.closest("div"));
			            }
			        },

			        success: function(a, b) {
			            a = $(a);
			            b = $(b);
			            if(b.find(".selectmenu-placeholder")){
			                a.appendTo(b.closest("div"));
			                var id = b.attr('id');
			                $('#' + id + '-button,#' + id + '-menu').removeClass('ui-state-error ui-state-valid');
			                //$('#' + id + '-button,#' + id + '-menu').addClass('ui-state-error');
			            }else {
			                a.appendTo(b.closest("div"));
			            }
			        },

        			ignore: [],

					rules: {

						sector: { 
							required: true},

						desc: { 
							required: true },

						tlf: {
							required: true }
					},

					messages: {

						sector: { 
							required: "Por favor, selecciona un sector."},

						desc: {
							required: "Por favor, ingresa una dirección de envío." },

						tlf: {
							required: "Por favor, ingresa un número de contacto." }			
					},

					submitHandler: function(form) {
						$("input[type=submit]").css('color', '#00afab');
						$("#loader").fadeIn('fast');
						form.submit();
					}

				});

			});

		}
	}
 
// When the dom has loaded setup form validation rules
$(D).ready(function($) {
	JQUERY4U.UTIL.setupFormValidation();
});
 
})(jQuery, window, document);