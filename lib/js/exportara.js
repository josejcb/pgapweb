var A;
$(document).on('ready', function(){
	$(".botonExcel").click(function(event) {
A= ($("<div>").append( $("#Exportar_a").eq(0).clone()).html());
		$("#datos_a_enviar").val(A);
		$("#opcion").val("excel");
		$("#FormularioExportacion").submit();
});
});
$(document).on('ready', function(){
	$(".botonWord").click(function(event) {
A= ($('<div>').append( $("#Exportar_a").eq(0).clone()).html());
		$("#datos_a_enviar").val(A);
		$("#opcion").val("word");
		$("#FormularioExportacion").submit();
});
});
	
$(document).ready(function() {
	$(".imprimir").click(function(event) {
	var pagina = window.open('reporte');
	pagina.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">');
	pagina.document.write('<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>');
	pagina.document.write('<script>$(document).on(\'ready\', function(){$("td:nth-child(8),th:nth-child(8),td:nth-child(9),th:nth-child(9),td:nth-child(10),th:nth-child(10)").hide();});</script>');
	pagina.document.write('<link href="css/principal.css" rel="stylesheet" type="text/css"><title>Reporte</title></head><body>');
	/* mywindow.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">');
		mywindow.document.write();					
		mywindow.document.write('</head><body onLoad="setTimeout(window.close, 30000)" ><div align = "left"><img src ="../../images/logos/logo-autocrm-150x40.png"></div>');*/
	pagina.document.write( $("#Exportar_a").html());
	pagina.document.write("</body></html>");
	pagina.document.close();
	pagina.print();
});
});