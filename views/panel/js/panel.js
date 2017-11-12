$(document).ready(function() {

	var tipo_usuario=$('#tipo_usuario').val()
	var criterio

	$('#consultas').click(function(){
		window.location = "../consulta/"
	})

	$('#btn_reporte').click(function(){

		tipo_usuario=$('#tipo_usuario').val()
		fecha_inicio=$('#fechaini').val().trim()
		fecha_fin=$('#fechafin').val().trim()
		criterios_busqueda=$('#criterios').val().trim()

		if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
			bitacora="cursor: pointer;display:inline;color: blue; font-size:20px"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:inline;color: gray;font-size:20px"
			tipo_usuario_vista=true
			reporte="Bfrtip"
		}
		$('#tabla_reporte').css('display','block')
		$('#tabla_busqueda').css('display','none')

		$('#listado_servicios2').dataTable().fnDestroy();
		$('#listado_servicios2').DataTable( {
			   "order": [[ 0, "desc" ]],
			   "scrollX": true,
			   "ajax": {
	  	        	"url":'../panel/getConsultasCriterio2/'+tipo_usuario,
	  	        	"type": 'POST',
	  	            "data": {
	  	            	criterio: criterio,
	  	            	fecha_inicio: fecha_inicio,
	  	            	fecha_fin: fecha_fin,
	  	            	criterios_busqueda: criterios_busqueda
	  	            }
	  	        },
	  	      dom: reporte,
			   buttons: [ {
			    extend: "excel",
			    className: "btn btn-success btn-xs"
			   }],
				//  buttons: ['copy','pdf','excel','print','csv'],
			   responsive: !0,
		        "columns": [
		                    { "data": "id_buzon_consulta"},
		                    { "data": "tipo_operacion" },
		                    { "data": "modalidad" },
		                    { "data": "dni" },
		                    { "data": "vendedor" },
		                    { "data": "nro_documento" },
		                    { "data": "nombres_cliente" },
		                    { "data": "precio" },
		                    { "data": "sec" },
		                    { "data": "fecha_sec" },
		                    { "data": "nro_referencia" },
		                    { "data": "estado" },
		                    { "data": "motivo" },
		                    { "data": "fecha_registro"},
		                    { "data": "fecha_cierre"},
		                    { "data": "usuario_cierre"}
		                   ],
		         "columnDefs": [
											{
											    "targets": [ 2 ],
											    "visible": false
											},
		                                   {
		                                       "targets": [ 7 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 8 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 9 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 14 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 15 ],
		                                       "visible": false
		                                   }
		                       ]
		    } );
		})


	$('#btn_buscar').click(function(){

		var bitacora;
		var actualizacion;

		tipo_usuario=$('#tipo_usuario').val()
		fecha_inicio=$('#fechaini').val().trim()
		fecha_fin=$('#fechafin').val().trim()
		criterios_busqueda=$('#criterios').val().trim()

		if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
			bitacora="cursor: pointer;display:inline;color: blue; font-size:20px"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:inline;color: gray;font-size:20px"
			tipo_usuario_vista=true
		}
		else if(tipo_usuario=='VENDEDOR'){
			bitacora="cursor: pointer;display:none"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:none"
			tipo_usuario_vista=true
		}
		else if(tipo_usuario=='AGENTE'){
			bitacora="cursor: pointer;display:inline;color: blue;font-size:20px"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:none;color: gray;font-size:20px"
			tipo_usuario_vista=true
		}

		$('#listado_servicios').dataTable().fnDestroy();
		$('#listado_servicios').DataTable( {
			   "order": [[ 0, "desc" ]],
			   "scrollX": true,
			   "ajax": {
	  	        	"url":'../panel/getConsultasCriterio/'+tipo_usuario,
	  	        	"type": 'POST',
	  	            "data": {
	  	            	criterio: criterio,
	  	            	fecha_inicio: fecha_inicio,
	  	            	fecha_fin: fecha_fin,
	  	            	criterios_busqueda: criterios_busqueda
	  	            }
	  	        },
		        "columns": [
		                    { "data": "id_buzon_consulta",
		                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		                    		var estado=oData.estado
		                    		var color
		                    		if(estado=='REGISTRADO'){
		                    			color="<span class='label label-low'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Registrado</span>"
		                    		}
		                    		else if(estado=='PENDIENTE'){
		                    			color="<span class='label label-medium'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Asignado</span>"
		                    		}
		                    		else if(estado=='PROCESO'){
		                    			color="<span class='label label-high'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Proceso</span>"
		                    		}
		                    		else if(estado=='APROBADO'){
		                    			color="<span class='label label-urgent'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Aprobado</span>"
		                    		}
		                    		else if(estado=='RECHAZADO'){
		                    			color="<span class='label label-emergency'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Rechazado</span>"
		                    		}
		                    		else if(estado=='CERRADO'){
		                    			color="<span class='label label-critical'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Cerrado</span>"
		                    		}

		                    		$(nTd).html(color)
		                    	}
		                    },
		                    { "data": "tipo_operacion" },
		                    { "data": "modalidad" },
		                    { "data": "idtipooperacion" },
		                    { "data": "idmodalidadventa" },
		                    { "data": "dni" },
		                    { "data": "vendedor" },
		                    { "data": "nombres" },
		                    { "data": "tipo_documento" },
		                    { "data": "iddocumento" },
		                    { "data": "precio" },
		                    { "data": "sec" },
		                    { "data": "fecha_sec" },
		                    { "data": "nro_documento" },
		                    { "data": "fecha_nacimiento" },
		                    { "data": "nro_referencia" },
		                    { "data": "estado" },
		                    { "data": "motivo" },
		                    { "data": "opciones",
		                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		                    		var estadito=oData.estado
		                    		if((estadito=='CERRADO' && (tipo_usuario=='VENDEDOR' ||tipo_usuario=='AGENTE' || tipo_usuario=='SUPERVISOR')) || (tipo_usuario=='VENDEDOR' ||tipo_usuario=='AGENTE')){estadito=";display:none;"}else{estadito=";display:inline;"}
		                    		$(nTd).html("<a estado='"+oData.estado+"' precio='"+oData.precio+"' sec='"+oData.sec+"' fecha_sec='"+oData.fecha_sec+"' id='"+oData.opciones+"' tipo_operacion='"+oData.tipo_operacion+"' modalidad='"+oData.modalidad+"'  idtipooperacion='"+oData.idtipooperacion+"' idmodalidadventa='"+oData.idmodalidadventa+"' nombres='"+oData.nombres+"' tipo_doc='"+oData.tipo_documento+"'  id_doc='"+oData.iddocumento+"' nro_doc='"+oData.nro_documento+"' fecha_nacimiento='"+oData.fecha_nacimiento+"' nro_referencia='"+oData.nro_referencia+"' class='linkhref fa fa-sign-out' title='Actualizacion' style='"+actualizacion+"'></a>" +
	                        					"<a id='"+oData.opciones+"' estado='"+oData.estado+"' title='Bitacora' class='bitacora fa fa-archive'  style='"+bitacora+"'></a>" +
	                        					"<a id='"+oData.opciones+"' title='Reasignar' class='reasignar fa fa-exchange'  style='"+reasignamiento+estadito+"'></a>");
	                        }

		                    }
		                   ],
		          "columnDefs": [
		                                   {
		                                       "targets": [ 3 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 4 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 9 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 10 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 11 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 12 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 14 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 18 ],
		                                       "visible": tipo_usuario_vista
		                                   }

		                         ],
		    } );

	})

	function tabla_principal(tipo_usuario){
		var bitacora;
		var actualizacion;

		if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
			bitacora="cursor: pointer;display:inline;color: blue; font-size:20px"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:inline;color: gray;font-size:20px"
			tipo_usuario_vista=true
		}
		else if(tipo_usuario=='VENDEDOR'){
			bitacora="cursor: pointer;display:none"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:none"
			tipo_usuario_vista=true
		}
		else if(tipo_usuario=='AGENTE'){
			bitacora="cursor: pointer;display:inline;color: blue;font-size:20px"
			actualizacion="cursor: pointer;display:inline;color: red;font-size:20px"
			reasignamiento="cursor: pointer;display:none;color: gray;font-size:20px"
			tipo_usuario_vista=true
		}

		$('#tabla_reporte').css('display','none')

		$('#listado_servicios').dataTable().fnDestroy();
		$('#listado_servicios').DataTable( {
			    "order": [[ 0, "asc" ]],
			    "scrollX": true,
		        "ajax": "../panel/getConsultas/"+tipo_usuario,
		        "columns": [
		                    { "data": "id_buzon_consulta",
		                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		                    		var estado=oData.estado
		                    		var color
		                    		if(estado=='REGISTRADO'){
		                    			color="<span class='label label-low'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Registrado</span>"
		                    		}
		                    		else if(estado=='PENDIENTE'){
		                    			color="<span class='label label-medium'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Asignado</span>"
		                    		}
		                    		else if(estado=='PROCESO'){
		                    			color="<span class='label label-high'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Proceso</span>"
		                    		}
		                    		else if(estado=='APROBADO'){
		                    			color="<span class='label label-urgent'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Aprobado</span>"
		                    		}
		                    		else if(estado=='RECHAZADO'){
		                    			color="<span class='label label-emergency'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Rechazado</span>"
		                    		}
		                    		else if(estado=='CERRADO'){
		                    			color="<span class='label label-critical'>"+"<strong>"+oData.id_buzon_consulta+"</strong>"+" - Cerrado</span>"
		                    		}

		                    		$(nTd).html(color)
		                    	}
		                    },
		                    { "data": "tipo_operacion" },
		                    { "data": "modalidad" },
		                    { "data": "idtipooperacion" },
		                    { "data": "idmodalidadventa" },
		                    { "data": "dni" },
		                    { "data": "vendedor" },
		                    { "data": "nombres" },
		                    { "data": "tipo_documento" },
		                    { "data": "iddocumento" },
		                    { "data": "precio" },
		                    { "data": "sec" },
		                    { "data": "fecha_sec" },
		                    { "data": "nro_documento" },
		                    { "data": "fecha_nacimiento" },
		                    { "data": "nro_referencia" },
		                    { "data": "estado" },
		                    { "data": "motivo"},
		                    { "data": "opciones",
		                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		                    		var estadito=oData.estado
		                    		if((estadito=='CERRADO' && (tipo_usuario=='VENDEDOR' ||tipo_usuario=='AGENTE' || tipo_usuario=='SUPERVISOR')) || (tipo_usuario=='VENDEDOR' ||tipo_usuario=='AGENTE')){estadito=";display:none;"}else{estadito=";display:inline;"}
		                    		$(nTd).html("<a estado='"+oData.estado+"' precio='"+oData.precio+"' sec='"+oData.sec+"' fecha_sec='"+oData.fecha_sec+"' id='"+oData.opciones+"' tipo_operacion='"+oData.tipo_operacion+"' modalidad='"+oData.modalidad+"'  idtipooperacion='"+oData.idtipooperacion+"' idmodalidadventa='"+oData.idmodalidadventa+"' nombres='"+oData.nombres+"' tipo_doc='"+oData.tipo_documento+"'  id_doc='"+oData.iddocumento+"' nro_doc='"+oData.nro_documento+"' fecha_nacimiento='"+oData.fecha_nacimiento+"' nro_referencia='"+oData.nro_referencia+"' class='linkhref fa fa-sign-out' title='Actualizacion' style='"+actualizacion+"'></a>" +
	                        					"<a id='"+oData.opciones+"' estado='"+oData.estado+"' title='Bitacora' class='bitacora fa fa-archive'  style='"+bitacora+"'></a>" +
	                        					"<a id='"+oData.opciones+"' title='Reasignar' class='reasignar fa fa-exchange'  style='"+reasignamiento+estadito+"'></a>");
	                        }

		                    }
		                   ],
		          "columnDefs": [
		                                   {
		                                       "targets": [ 3 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 4 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 9 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 10 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 11 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 12 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 14 ],
		                                       "visible": false
		                                   },
		                                   {
		                                       "targets": [ 18 ],
		                                       "visible": tipo_usuario_vista
		                                   }

		                         ],
		    } );

	}

	tabla_principal(tipo_usuario)

	$("#listado_servicios tbody").on('click','a.linkhref',function(){
		 idbuzon = $(this).attr("id");
		 tipo_operacion= $(this).attr("tipo_operacion");
		 modalidad = $(this).attr("modalidad");
		 idtipooperacion= $(this).attr("idtipooperacion");
		 idmodalidadventa = $(this).attr("idmodalidadventa");
	   	 nombres = $(this).attr("nombres");
	   	 tipo_doc = $(this).attr("tipo_doc").trim();
	   	 id_doc = $(this).attr("id_doc");
	   	 precio = $(this).attr("precio").trim();
	   	 sec = $(this).attr("sec").trim();
	   	 fecha_sec = $(this).attr("fecha_sec").trim();
	   	 nrodocumento = $(this).attr("nro_doc");
	   	 fecha_nacimiento = $(this).attr("fecha_nacimiento").trim();
	   	 nro_referencia = $(this).attr("nro_referencia").trim();
	   	 estado = $(this).attr("estado");

	   	 var equipos=''
	   	 var tipo_consumo=''
	   	 var cuota=''
	   	 var telefono=''
	   	 var modalidad_ope=''
	   	 var operador=''

	   	 combo = document.forms["formu"].tipo_documento;
		 cantidad = combo.length;

		 for (i = 0; i < cantidad; i++) {
			 if(combo[i].value ==id_doc) {
				 combo[i].selected = true;
				 }
		  }

	   	 if(fecha_nacimiento=='null'){fecha_nacimiento=''}
	   	 if(fecha_sec=='null'){fecha_sec=''}
	   	 if(sec=='null'){sec=''}
	   	 if(nro_referencia=='null'){nro_referencia=''}
	   	 if(precio=='null'){precio=0}
	   	 if(idtipooperacion==1){
	   		 $('#nacimiento').attr('readonly',true)
	   	 }
	   	 else{
	   		$('#nacimiento').datepicker()
	   	 }

	   	if(estado=='CERRADO' || tipo_usuario=='VENDEDOR'){
			$('#formu').find('input, textarea, button, select').attr('disabled','disabled');
		}
	   	else{
	   		$('#formu').find('input, textarea, button, select').attr('disabled',false);
	   	}

	   	if(estado=='CERRADO'){
	   		$('#observaciones').css('display','block')
	   		$('#lbl_observaciones').css('display','block')

	   		$.ajax({
	 			url: '../panel/getObservaciones',
	 			type: 'POST',
			    data: {
			    	idbuzon:idbuzon,
			    },
	 			success: function(data){
	 				$('#observaciones').val(data).trim
	 			}
	 	  });
		}

	   	$.ajax({
 			url: '../panel/getObservacionesiniciales',
 			type: 'POST',
		    data: {
		    	idbuzon:idbuzon,
		    },
 			success: function(data){
 				$('#observaciones_iniciales').val(data).trim
 			}
	   	});

	   	$.ajax({
 			url: '../panel/getOcultarpdf',
 			type: 'POST',
		    data: {
		    	idbuzon:idbuzon,
		    },
 			success: function(data){
 				if(data==1){
 					$('#pdf_subido').css('display','block')
 					$('#pdf_ver').css('display','block')
 				}
 			}
	   	});

	   $('#myModalLabel').html('<strong>ACTUALIZACION DE DATOS - ID DE CONSULTA</strong>'+'<strong>'+idbuzon+'</strong>');
		 $('#id_consulta').val(idbuzon)
		 $('#operacion').text(tipo_operacion)
		 $('#modalidad').text(modalidad)
		 $('#nombres').text(nombres)
		 $('#documento').val(nrodocumento)
		 $('#nro_doc').val(nrodocumento)
		 $('#fecha_sec').datepicker()
		 $('#nacimiento').val(fecha_nacimiento)
		 $('#referencia').val(nro_referencia)
		 $('#precio').val(precio)
		 $('#sec').val(sec)
		 $('#fecha_sec').val(fecha_sec)
		 $('#updatedata').modal();

	   	 if(idtipooperacion==1){
	   		 if(idmodalidadventa==2){
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=false
	   			 telefono=true
	   			 modalidad_ope=false
	   			 operador=false
	   		 }
	   		 else{
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=true
	   			 telefono=true
	   			 modalidad_ope=false
	   			 operador=false
	   		 }
	   	 }
	   	 else if(idtipooperacion==2){
	   		if(idmodalidadventa==1){
	   			 equipos=false
	   			 tipo_consumo=true
	   			 cuota=false
	   			 telefono=true
	   			 modalidad_ope=true
	   			 operador=true
	   		}
	   		else if(idmodalidadventa==2){
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=false
	   			 telefono=true
	   			 modalidad_ope=true
	   			 operador=true
	   		}
	   		else if(idmodalidadventa==3){
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=true
	   			 telefono=true
	   			 modalidad_ope=true
	   			 operador=true
	   		}
	   	 }
	   	 else if(idtipooperacion==3){
	   		if(idmodalidadventa==1){
	   			 equipos=false
	   			 tipo_consumo=true
	   			 cuota=false
	   			 telefono=false
	   			 modalidad_ope=false
	   			 operador=false
	   		}
	   		else if(idmodalidadventa==2){
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=false
	   			 telefono=false
	   			 modalidad_ope=false
	   			 operador=false
	   		}
	   		else if(idmodalidadventa==3){
	   			 equipos=true
	   			 tipo_consumo=true
	   			 cuota=true
	   			 telefono=false
	   			 modalidad_ope=false
	   			 operador=false
	   		}
	   	 }

	  	$('#listado_planes').dataTable().fnDestroy();
			$('#listado_planes').DataTable( {
			   "order": [[ 0, "desc" ]],
		        "ajax": "../panel/getConsultasPlanes/"+idbuzon,
		        "columns": [
		                    { "data": "campania" },
		                    { "data": "tipo_plazo" },
		                    { "data": "tipo_familia" },
		                    { "data": "tipo_plan" },
		                    { "data": "equipos" },
		                    { "data": "tipo_consumo" },
		                    { "data": "cuota" },
		                    { "data": "telefono" },
		                    { "data": "modalidad" },
		                    { "data": "operador" },
		                    { "data": "opciones",
		                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
	                        	$(nTd).html("<a id='"+oData.opciones+"' class='idbuzonxplan fa fa-sign-out fa-2x' title='Actualizacion'></a>");
	                        }

		                    }
		                   ],
		                   "columnDefs": [
		                                   {
		                                       "targets": [ 4 ],
		                                       "visible": equipos
		                                   },
		                                   {
		                                       "targets": [ 5 ],
		                                       "visible": tipo_consumo
		                                   },
		                                   {
		                                       "targets": [ 6 ],
		                                       "visible": cuota
		                                   },
		                                   {
		                                       "targets": [ 7 ],
		                                       "visible": telefono
		                                   },
		                                   {
		                                       "targets": [ 8 ],
		                                       "visible": modalidad_ope
		                                   },
		                                   {
		                                       "targets": [ 9 ],
		                                       "visible": operador
		                                   },
		                                   {
		                                       "targets": [ 10 ],
		                                       "visible": false
		                                   }

		                         ],

		    } );


	})

	$("#listado_planes tbody").on('click','a.idbuzonxplan',function(){
		idbuzon = $(this).attr("id");
		alert(idbuzon)
	})

	$('#btn_actualizar').click(function(){

		var tipo_documento=$('#tipo_documento').val()
		var nro_doc=$('#nro_doc').val()
		var referencia=$('#referencia').val()
		var precio=$('#precio').val()
		var formData = new FormData($("#formu")[0]);
		var re = /^(-)?[0-9]*$/;

		if(tipo_documento==''){
			$('#mensaje_actualizacion').css('display','block')
			$('#mensaje_actualizacion').html('Por favor elija el tipo de documento');
			$('#tipo_documento').focus()
		}
		else if(nro_doc==''){
			$('#mensaje_actualizacion').css('display','block')
			$('#mensaje_actualizacion').html('Por favor digite el nro de documento');
			$('#nro_doc').focus()
		}
		else if(!re.test(referencia)==true){
			$('#mensaje_actualizacion').css('display','block')
			$('#mensaje_actualizacion').html('Por favor solo caracteres numericos');
			$('#referencia').focus()
		}
		else if(!re.test(precio)==true){
			$('#mensaje_actualizacion').css('display','block')
			$('#mensaje_actualizacion').html('Por favor solo caracteres numericos');
			$('#precio').focus()
		}
		else{
	  	  	$.ajax({
		 			url: '../panel/getUpdateconsulta/',
		 			type: 'POST',
		 			data:formData,
		 			cache: false,
		 			contentType: false,
		 			processData: false,
		 			success: function(data){
		 				if(data==00000){
		 					tabla_principal(tipo_usuario)
		 					$.alert({
					   		    title: 'Actualizacion',
					   		    content: 'Se guardaron los datos satisfactoriamente',
					   		});
		 					$('#mensaje_actualizacion').css('display','none')
		 				}
		 				else{
		 					$('#mensaje_actualizacion').css('display','block')
		 					$('#mensaje_actualizacion').html('No se actualizo, favor verificar');
		 				}
		 			}
		 	  });
		}
	})

	$('#estado_consulta').change(function(){

		var estado = $('#estado_consulta').val();
		$.post('../panel/getMotivo/'+estado,function(data){
			$('#motivo_consulta').html(data);
		});
	});

	function tabla_bitacora(){
		$('#listado_bitacora').dataTable().fnDestroy();
		$('#listado_bitacora').DataTable( {
			   "order": [[ 0, "desc" ]],
			   "lengthMenu": [ 3,6,9 ],
		        "ajax": "../panel/getBitacora/"+idbuzon,
		        "columns": [
		                    { "data": "nromovimiento" },
		                    { "data": "fecha_registro" },
		                    { "data": "id_usr_registro" },
		                    { "data": "estado" },
		                    { "data": "motivo" },
		                    { "data": "propietario" },
		                    { "data": "observaciones" },
		                   ],
		  });
	 }

	$("#listado_servicios tbody").on('click','a.bitacora',function(){
		idbuzon = $(this).attr("id");
		estado=$(this).attr("estado");

		if(estado=='CERRADO'){
			$('#formu_bita').find('input, textarea, button, select').attr('disabled','disabled');
		}
		else{
	   		$('#formu_bita').find('input, textarea, button, select').attr('disabled',false);
	   	}

		$('#label_bita').html("<strong>BITACORA DE TIPIFICACIONES - ID DE CONSULTA </strong>"+"<strong>"+idbuzon+"</strong>");
		$('#id_consulta_2').val(idbuzon)
		$('#addbitacora').modal();

		tabla_bitacora()
	})

	/*function agregar(){
		$("#btn_registrar").on("click", tabla_bitacora);
	}*/

	$('#btn_registrar').click(function(){

		var estado=$('#estado_consulta').val()
		var motivo=$('#motivo_consulta').val()
		var formData = new FormData($("#formu_bita")[0]);

		if(estado==''){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor elija el estado');
			$('#estado_consulta').focus()
		}
		else if(motivo==''){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor elija el motivo');
			$('#motivo_consulta').focus()
		}
		else{

			$.confirm({
			    title: 'Bitacora',
			    content: '¿Desea agregar la tipificacion en los regitros?',
			    closeIcon: true,
			    closeIconClass: 'fa fa-close' ,
			    confirmButton: 'Continuar',
			    confirmButtonClass: 'btn-warning',
			    cancelButton:'Cancelar',
			    cancelButtonClass: 'btn-default',
		        icon: 'fa fa-exclamation-triangle',
			    confirm: function(){

			    	$.ajax({
			 			url: '../panel/insertBitacora/',
			 			type: 'POST',
			 			data:formData,
			 			cache: false,
			 			contentType: false,
			 			processData: false,
			 			success: function(data){
			 				if(data==1){
			 					tabla_bitacora()
			 					tabla_principal(tipo_usuario)
			 					$('#estado_consulta option:eq(0)').prop('selected', true).change();
			 					$('#motivo_consulta option:eq(0)').prop('selected', true).change();
			 					$('#observaciones').val('')
			 					if(estado==6){
			 						window.location = "../panel/"
			 					}
			 				}
			 				else{
			 					$.alert({
						   		    title: 'Error',
						   		    content: 'No se guardaron los datos correctamente',
						   		});
			 				}
			 			}
			 	  });
			   },cancel: function(){

			    }
			});

		}
	})

	$('#criterio').change(function(){
		criterio=$('#criterio').val()
		$('#fechaini').datepicker()
		$('#fechafin').datepicker()

		if(criterio==0){
			$('#fechas').css('display','inline')
			$('#criterio_busqueda').css('display','none')
			$('#boton_busqueda').css('display','inline')
			if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
				$('#boton_reporte').css('display','inline')
			}
		}
		else if(criterio==1){
			$('#fechas').css('display','none')
			$('#criterio_busqueda').css('display','block')
			$('#boton_busqueda').css('display','inline')
			if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
				$('#boton_reporte').css('display','inline')
			}
		}
		else if(criterio==2){
			$('#fechas').css('display','none')
			$('#criterio_busqueda').css('display','block')
			$('#boton_busqueda').css('display','inline')
			if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
				$('#boton_reporte').css('display','inline')
			}
		}
		else if(criterio==3){
			$('#fechas').css('display','none')
			$('#criterio_busqueda').css('display','block')
			$('#boton_busqueda').css('display','inline')
			if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
				$('#boton_reporte').css('display','inline')
			}
		}
		else if(criterio==4){
			$('#fechas').css('display','none')
			$('#criterio_busqueda').css('display','block')
			$('#boton_busqueda').css('display','inline')
			if(tipo_usuario=='ADMINISTRADOR' || tipo_usuario=='SUPERVISOR'){
				$('#boton_reporte').css('display','inline')
			}
		}
		else{
			$('#fechas').css('display','none')
			$('#criterio_busqueda').css('display','none')
			$('#boton_busqueda').css('display','none')
			$('#boton_reporte').css('display','none')
		}

	})


	$("#listado_servicios tbody").on('click','a.reasignar',function(){
		var idbuzon = $(this).attr("id");
		$('#idbuzon').val(idbuzon);
		$('#asignamiento').modal();
		//iduser = $('#usuario_rea').val()
		//ipuser = $('#ip_rea').val()

		/*
		$.confirm({
		    title: 'Reasignar',
		    content: '¿Desea reasignar el registro '+idbuzon +' ?',
		    closeIcon: true,
		    closeIconClass: 'fa fa-close' ,
		    confirmButton: 'Continuar',
		    confirmButtonClass: 'btn-warning',
		    cancelButton:'Cancelar',
		    cancelButtonClass: 'btn-default',
	        icon: 'fa fa-exclamation-triangle',
		    confirm: function(){
				$.ajax({
		 			//url: 'http://192.168.102.15/a365_ffvv_buzon_dev/procesos/a365_buzon_proceso_reasignamiento.php',
		 			url: 'http://ffvv_claro.a365.com.pe/procesos/a365_buzon_proceso_reasignamiento.php',
		 			type: 'POST',
		 			data:{
		 				idbuzon:idbuzon,
		 				iduser:iduser,
		 				ipuser:ipuser
		 			},
		 			success: function(data){
		 				if(data==1){
		 					tabla_bitacora()
		 					tabla_principal(tipo_usuario)
		 					$.alert({
					   		    title: 'Reasignamiento',
					   		    content: 'Se reasigno correctamente la consulta',
					   		});
		 				}
		 				else{
		 					$.alert({
					   		    title: 'Error',
					   		    content: 'No se guardaron los datos correctamente',
					   		});
		 				}
		 			}
				});
		    },cancel: function(){

		    }
		});
		*/
	});

	$('#btn_registrar_asignamiento').click(function(){

			var idbuzon = $('#idbuzon').val();
			var idusuario = $('#idusuario').val();

			if(idusuario){

				$.post('../panel/asignamiento',{
					idbuzon : idbuzon,
					idusuario : idusuario
				},function(data){
					if(data){
						alert('Se asigno correctamente al asesor');
					}else{
						alert('Ocurrio un Error. Consulte a sistemas');
					}
				});

			}else{
				alert('seleccione asesor');
			}

	});

	$('#pdf_ver').click(function(){
		idbuzon = $('#id_consulta').val()
		window.open('http://localhost/proyecto_ffvv/temp/'+idbuzon+'.pdf', this.target, 'top=50,left=350,width=900,height=600')
	})



});
