//función que valida enteros según el navegador que se esté usando
var nav4 = window.Event ? true : false;
function validarInteger(evt){
//NOTA: espacio = 8, Enter = 13, '0' = 48, '9' = 57
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=parseFloat(b_version);
if ((browser=="Microsoft Internet Explorer")  )/*|| browser=="Netscape" && (version>=4)*/
{
	// IE
	var e = e || window.event,
	key = e.which || e.keyCode;
	return (key <= 13 || (key >= 48 && key <= 57));
}else 
{
	//Firefox y otros
	var key = nav4 ? evt.which : evt.keyCode;
	return (key <= 13 || (key >= 48 && key <= 57));
}
}


function setFocus(){ 
return document.getElementById('k').focus() 
}

function pasaSiguiente(actual, siguiente, longitud)
{
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=parseFloat(b_version);
	if ((browser=="Microsoft Internet Explorer")  )/*|| browser=="Netscape" && (version>=4)*/
	{
		 if((actual.value.length) == longitud)
				siguiente.focus();
	}else 
{
	if((actual.value.length + 1) == longitud)
		siguiente.focus();
}
}
//creamos la variable ventana_secundaria que contendrá una referencia al popup que vamos a abrir
//la creamos como variable global para poder acceder a ella desde las distintas funciones
var ventana_secundaria
function abrirVentana(){
//guardo la referencia de la ventana para poder utilizarla luego
ventana_secundaria = window.open("cerrar_window2.html","miventana","width=300,height=200,menubar=no")
}

function cerrarVentana(){
//la referencia de la ventana es el objeto window del popup. Lo utilizo para acceder al método close
ventana_secundaria.close()
} 

function cerrarse(){
self.close()
} 

function mostrar(t){
var d = t.options[t.selectedIndex].value;
alert(d);
}


function inicializarEvento() {
	$("#bt_aceptar").click(function(){validar(this.form);});
}


/* function detectBrowser()
{
var browser=navigator.appName;
var b_version=navigator.appVersion;
var version=parseFloat(b_version);
if ((browser=="Netscape"||browser=="Microsoft Internet Explorer")  && (version>=4))
  {
  alert("Your browser is good enough!");
  
  }
else
  {
  alert("It's time to upgrade your browser!");
  }
} */


function validarFormulario(form,accion, tipo)
{
	/*
		tipo 
			case 1: registro
	
	*/
	alert(form.validar.value);
   	var bandera = true;
	
	if($("#validar")[0].checked == true)
	{
		switch(tipo)
		{
			case "1":
				if(form.rif_empresa != null && bandera)
				{
					if(form.rif_empresa == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Año");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.nombre_empresa != null && bandera)
				{
					if(form.nombre_empresa == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Periodo");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.tlf_empresa != null && bandera)
				{
					if(form.tlf_empresa == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Año");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.dir_empresa != null && bandera)
				{
					if(form.dir_empresa == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Periodo");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.email != null && bandera)
				{
					if(form.email == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Año");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.psw_1 != null && bandera)
				{
					if(form.psw_1 == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Periodo");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.psw_2 != null && bandera)
				{
					if(form.psw_2 == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Año");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.nombre_contacto != null && bandera)
				{
					if(form.nombre_contacto == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Periodo");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				if(form.tlf_contacto != null && bandera)
				{
					if(form.tlf_contacto == "")
					{
						alert("Su solicitud no ha sido procesada. Causa: Periodo");
						$("#validar")[0].checked = false;
						bandera = false;
					}
				}
				
				if(bandera = true )
				{
					 if (accion == "1")
					 { 
						$("#bt_aceptar")[0].disabled = false;
					//}else if(accion == "edit"){
						// $("#btn_save")[0].disabled = false;
						
					} 
				}
			break;
		} //Termina el switch
			
	}
	if(!$("#validar")[0].checked)
	{
		if(accion == "1")
		{
			$("#bt_aceptar")[0].disabled = true;
			
		}
	}
}

function validarForm(form)
{
  if(check if your conditions are not satisfying)
  { 
    alert("validation failed false");
    returnToPreviousPage();
    return false;
  }

  alert("validations passed");
  return true;
}


function mostrar(mensaje){
	alert(mensaje);
}
