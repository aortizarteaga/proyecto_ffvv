$(document).ready(function() {
	var tipo_operacion
	var modalidad
	var cuotas
	var rowData
	
	$( "#nacimiento" ).datepicker()
	
	$('#tipo_operacion').change(function(){	
		tipo_operacion=$('#tipo_operacion').val()
		
		if(tipo_operacion==1){
			modalidad=''
			var modalidad_venta=1
			$('#listado').DataTable().clear().draw();
			$('#listado').DataTable().destroy();
			$('#tabla_oculta').css('display','none')
			
			$('#nacimiento').css('display','none')
			$('#porta').css('display','none')
			$('#lin').css('display','block')
			$('#tele').css('display','block')
			$('#port').css('display','none')
			$('#equip').css('display','block')
			$('#cuo').css('display','none')	
			$('#mensajes').css('display','none')
			$('#btnAddRow').css('display','block')
			
			$('#campania').empty()
			$('#acuerdo').empty()
			$('#nacimiento').val('')
			
			var x = document.getElementById("campania");
			var option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option);

			x = document.getElementById("acuerdo");
			option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option)
			
			
			$.post('../consulta/modalidad/'+modalidad_venta,function(data){
				$('#modalidad_venta').html(data);	
			});

		}
		else if(tipo_operacion==2){
			modalidad=''
			var modalidad_venta=10
			$('#listado').DataTable().clear().draw();
			$('#listado').DataTable().destroy();
			$('#tabla_oculta').css('display','none')
			
			$('#nacimiento').css('display','block')
			$('#porta').css('display','block')
			$('#lin').css('display','block')
			$('#tele').css('display','none')
			$('#port').css('display','block')
			$('#equip').css('display','block')
			$('#cuo').css('display','none')	
			$('#mensajes').css('display','none')
			$('#btnAddRow').css('display','block')

			$('#campania').empty()
			$('#acuerdo').empty()
			$('#nacimiento').val('')
			
			var x = document.getElementById("campania");
			var option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option);
			
			x = document.getElementById("acuerdo");
			option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option)
			
			
			$.post('../consulta/modalidad/'+modalidad_venta,function(data){
				$('#modalidad_venta').html(data);	
			});
			
		}
		else if(tipo_operacion==3){
			modalidad=''
			var modalidad_venta=10
			$('#listado').DataTable().clear().draw();
			$('#listado').DataTable().destroy();
			$('#tabla_oculta').css('display','none')
			
			$('#nacimiento').css('display','block')
			$('#porta').css('display','none')
			$('#lin').css('display','none')
			$('#tele').css('display','none')
			$('#port').css('display','none')
			$('#equip').css('display','block')
			$('#cuo').css('display','none')	
			$('#mensajes').css('display','none')
			$('#btnAddRow').css('display','block')
			
			$('#campania').empty()
			$('#acuerdo').empty()
			$('#nacimiento').val('')
			
			var x = document.getElementById("campania");
			var option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option);
			
			x = document.getElementById("acuerdo");
			option = document.createElement("option");
			option.text = "SELECCIONE";
			x.add(option);
			
			$.post('../consulta/modalidad/'+modalidad_venta,function(data){
				$('#modalidad_venta').val()
				$('#modalidad_venta').html(data);			
			});
		}
		else{
			var modalidad_venta=0
			$.post('../consulta/modalidad/'+modalidad_venta,function(data){
				$('#modalidad_venta').html(data);			
			});
		}
	})
	
	$('#modalidad_venta').change(function(){
		modalidad=$('#modalidad_venta').val()
		$('#listado').DataTable().clear().draw();
		$('#listado').DataTable().destroy();
		$('#tabla_oculta').css('display','none')
			
		var campania
		var campania2
		var campania3
		var campania4
		var campania5
		
		var plazo
		var plazo2
		var plazo3
		
/* ************************************************RENOVACION**************************************************************** */
		if(tipo_operacion==1){
			$('#cuotas').prop('readonly', true)
			
			if(modalidad==2){
				$('#cuo').css('display','none')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=151
				campania2=156
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=0
				plazo3=0
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
			}
			else if(modalidad==3){
				$('#cuo').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=159
				campania2=151
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=2
				plazo3=0
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
				$('#acuerdo').change(function(){
					var acuerdo=$('#acuerdo').val()
					if(acuerdo==2){
						$('#cuotas').val('12')
						cuotas=12
					}
					else if(acuerdo==3){
						$('#cuotas').val('18')
						cuotas=18
					}
					else{
						$('#cuotas').val('')
						cuotas=''
					}
				})
			}
			else{
				$('#cuo').css('display','none')
				modalidad=''
			}
		}
/* ************************************************FIN RENOVACION**************************************************************** */

/* ************************************************PORTABILIDAD**************************************************************** */
		else if(tipo_operacion==2){
			$('#cuotas').prop('readonly', true)
			
			if(modalidad==1){
				$('#equip').css('display','none')
				$('#cuo').css('display','none')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=155
				campania2=0
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=0
				plazo3=0
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
			}
			else if(modalidad==2){
				$('#equip').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=155
				campania2=160
				campania3=151
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=0
				plazo3=0
				
				$('#cuo').css('display','none')
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
			}
			else if(modalidad==3){
				$('#equip').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=158
				campania2=151
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=2
				plazo3=0
				
				$('#cuo').css('display','block')
				$('#cuotas').val('')
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
				$('#acuerdo').change(function(){
					var acuerdo=$('#acuerdo').val()
					if(acuerdo==2){
						$('#cuotas').val('12')
						cuotas=12
					}
					else if(acuerdo==3){
						$('#cuotas').val('18')
						cuotas=18
					}
					else{
						$('#cuotas').val('')
						cuotas=''
					}
				})
			}
			else{
				$('#cuo').css('display','none')
				modalidad=''
			}
		}
/* ************************************************FIN PORTABILIDAD**************************************************************** */
	
/* ************************************************ALTA**************************************************************** */
		else if(tipo_operacion==3){
			if(modalidad==1){
				$('#equip').css('display','none')
				$('#cuo').css('display','none')
				$('#btnAddRow').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=154
				campania2=0
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=0
				plazo3=0
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
			}
			else if(modalidad==2){
				$('#equip').css('display','block')
				$('#btnAddRow').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=154
				campania2=160
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=0
				plazo3=0
				
				$('#cuo').css('display','none')
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
			}
			else if(modalidad==3){
				$('#equip').css('display','block')
				$('#cuotas').prop('readonly', true)
				$('#btnAddRow').css('display','block')
				$('#cuotas').val('')
				$('#equipo').val('')
				$('#tope').val('')
				$('#linea').val('')
				
				campania=157
				campania2=0
				campania3=0
				campania4=0
				campania5=0
				
				plazo=3
				plazo2=2
				plazo3=0
				
				$('#cuo').css('display','block')
				$('#cuotas').val('')
				
				$.post('../consulta/campania/'+campania+'/'+campania2+'/'+campania3+'/'+campania4+'/'+campania5,function(data){
					$('#campania').html(data);			
				});
				
				$.post('../consulta/plazo/'+plazo+'/'+plazo2+'/'+plazo3,function(data){
					$('#acuerdo').html(data);			
				});
				
				$('#acuerdo').change(function(){
					var acuerdo=$('#acuerdo').val()
					if(acuerdo==2){
						$('#cuotas').val('12')
						cuotas=12
					}
					else if(acuerdo==3){
						$('#cuotas').val('18')
						cuotas=18
					}
					else{
						$('#cuotas').val('')
						cuotas=''
					}
				})
			}
			else{
				$('#cuo').css('display','none')
			}
		}
/* ************************************************FIN ALTA**************************************************************** */
	})
	
	$('#familia').change(function(){	
		var familia=$('#familia').val()
		var tope
		var tope2
		var tope3
		
		$.post('../consulta/plan/'+familia,function(data){
			$('#plan').html(data);			
		});
		
		if(familia==1){
			tope=1
			tope2=2
			tope3=0
			
			$.post('../consulta/tope/'+tope+'/'+tope2+'/'+tope3,function(data){
				$('#tope').html(data);			
			});
		}
		else if(familia==2){
			tope=2
			tope2=0
			tope3=0
			
			$.post('../consulta/tope/'+tope+'/'+tope2+'/'+tope3,function(data){
				$('#tope').html(data);			
			});
		}
		else{
			tope=0
			tope2=0
			tope3=0
			
			$.post('../consulta/tope/'+tope+'/'+tope2+'/'+tope3,function(data){
				$('#tope').html(data);			
			});
		}
	});
	
	
/* ***************************************************EDITANDO EL DATATABLE******************************************** */

	//RENOVACION
	function reno_contado(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": false, "aTargets": [6] },
	            { "bVisible": true, "aTargets": [7] },
	            { "bVisible": false, "aTargets": [8] },
	            { "bVisible": false, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	function reno_cuotas(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": true, "aTargets": [6] },
	            { "bVisible": true, "aTargets": [7] },
	            { "bVisible": false, "aTargets": [8] },
	            { "bVisible": false, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	//PORTABILIDAD
	function porta_chip(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": false, "aTargets": [4] },
	            { "bVisible": false, "aTargets": [6] },
	            { "bVisible": true, "aTargets": [7] },
	            { "bVisible": true, "aTargets": [8] },
	            { "bVisible": true, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	function porta_contado(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": true, "aTargets": [4] },
	            { "bVisible": false, "aTargets": [6] },
	            { "bVisible": true, "aTargets": [7] },
	            { "bVisible": true, "aTargets": [8] },
	            { "bVisible": true, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	function porta_cuotas(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": true, "aTargets": [4] },
	            { "bVisible": true, "aTargets": [6] },
	            { "bVisible": true, "aTargets": [7] },
	            { "bVisible": true, "aTargets": [8] },
	            { "bVisible": true, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	//ALTA
	
	function alta_chip(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": false, "aTargets": [4] },
	            { "bVisible": false, "aTargets": [6] },
	            { "bVisible": false, "aTargets": [7] },
	            { "bVisible": false, "aTargets": [8] },
	            { "bVisible": false, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	function alta_contado(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": true, "aTargets": [4] },
	            { "bVisible": false, "aTargets": [6] },
	            { "bVisible": false, "aTargets": [7] },
	            { "bVisible": false, "aTargets": [8] },
	            { "bVisible": false, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	function alta_cuotas(){
		$('#listado').DataTable({
			"bJQueryUI": false,
		    "bDeferRender": false,
		    "bInfo" : false,
		    "bSort" : false,
		    "bDestroy" : true,
		    "bFilter" : false,
		    "bLengthChange": false,
		    "bPagination" : false,
	        "aoColumnDefs": [
	            { "bVisible": true, "aTargets": [4] },
	            { "bVisible": true, "aTargets": [6] },
	            { "bVisible": false, "aTargets": [7] },
	            { "bVisible": false, "aTargets": [8] },
	            { "bVisible": false, "aTargets": [9] },
	            { "bVisible": false, "aTargets": [10] },
	            { "bVisible": false, "aTargets": [11] },
	            { "bVisible": false, "aTargets": [12] },
	            { "bVisible": false, "aTargets": [13] },
	            { "bVisible": false, "aTargets": [14] },
	            { "bVisible": false, "aTargets": [15] },
	            { "bVisible": false, "aTargets": [16] },
	            { "bVisible": false, "aTargets": [17] }
	        ],     
	    });
	  }
	
	
	    $('#btnAddRow').on( 'click', function () {
	    	var deletes
	    	function addRow(){
	    		deletes='<a id="delete" name="delete" class="linkhref fa fa-trash fa-2x" title="Eliminar" style="cursor: pointer;"></a>'
	    		$('#listado').
	    		DataTable().
	    		row.add(
	    		[campania,plazo,familia,plan,equipo,tope,cuota,numero,modalidadlinea,
	    		 operador,idcampania,idplazo,idfamilia,idplan,idequipo,idtope,idmodalidad,
	    		 idoperador,deletes]
	    		).draw(false);
	    	 }
	    	
	    	
	    	var idcampania=$('#campania').val()
			var idplazo=$('#acuerdo').val()
			var idfamilia=$('#familia').val()
			var idplan=$('#plan').val()
			var idequipo=$('#equipo').val()
			var idtope=$('#tope').val()
			var idmodalidad=$('#modalidad').val()
			var idoperador=$('#operador').val()
			
			var campania=document.getElementById('campania').options[document.getElementById('campania').selectedIndex].text
			var plazo=document.getElementById('acuerdo').options[document.getElementById('acuerdo').selectedIndex].text
			var familia=document.getElementById('familia').options[document.getElementById('familia').selectedIndex].text
			var plan=document.getElementById('plan').options[document.getElementById('plan').selectedIndex].text
			var equipo=document.getElementById('equipo').options[document.getElementById('equipo').selectedIndex].text
			var tope=document.getElementById('tope').options[document.getElementById('tope').selectedIndex].text
			var modalidadlinea=document.getElementById('modalidad').options[document.getElementById('modalidad').selectedIndex].text
			var operador=document.getElementById('operador').options[document.getElementById('operador').selectedIndex].text
			
			var cuota=$('#cuotas').val()
			var numero=$('#linea').val()
			
			var re = /^(-)?[0-9]*$/;
			
			if(tipo_operacion==null || tipo_operacion=='SELECCIONE' || tipo_operacion=='' ){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija tipo operacion');
				$('#tipo_operacion').focus()
				
			}
			else if(modalidad=='SELECCIONE' || modalidad==null || modalidad==''){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija modalidad de venta');
				$('#modalidad_venta').focus()
			}
			else if(idcampania==null || idcampania=='SELECCIONE' || idcampania=='' ){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija la campaña');
				$('#campania').focus()
				
			}
			else if(idplazo=='SELECCIONE' || idplazo==null || idplazo==''){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija el plazo');
				$('#acuerdo').focus()
			}
			else if(idfamilia=='SELECCIONE' || idfamilia==null || idfamilia==''){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija el tipo de familia del plan');
				$('#familia').focus()
			}
			else if(idplan=='SELECCIONE' || idplan==null || idplan==''){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor elija el tipo de plan');
				$('#plan').focus()
			}
			else{
				$('#mensajes').css('display','none')
				
					 if(tipo_operacion==1){
						 	if(idequipo=='SELECCIONE' || idequipo==null || idequipo==''){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor elija el equipo');
								$('#equipo').focus()
							}
							else if(idtope=='SELECCIONE' || idtope==null || idtope==''){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor elija el tipo de tope adecuado');
								$('#tope').focus()
							}
							else if(numero==null || numero==''){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor ingrese telefono');
								$('#linea').focus()
							}
							else if(!re.test(numero)==true){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor ingrese solo caracteres numericos');
								$('#linea').focus()
							}
							else{
								if(modalidad==2){
										$('#tabla_oculta').css('display','block')
										idmodalidad=''
										idoperador=''
										cuota=''
										modalidadlinea=''
										operador=''
										reno_contado()
										addRow()
										$('#btnAddRow').css('display','none')
										$('#oculto_boton').css('display','block')
								}
								else if(modalidad==3){
									if(cuota==null || cuota==''){
										$('#mensajes').css('display','block')
										$('#mensaje').html('Por favor ingrese la cuota');
										$('#cuotas').focus()
									}
									else{
										$('#tabla_oculta').css('display','block')
										idmodalidad=''
										idoperador=''
										modalidadlinea=''
										operador=''
										reno_cuotas()
										addRow()
										$('#btnAddRow').css('display','none')
										$('#oculto_boton').css('display','block')
									}
								}
							}
					 }
					 else if(tipo_operacion==2){
						 	if(idmodalidad=='SELECCIONE' || idmodalidad==null || idmodalidad==''){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor elija la modalidadde la linea');
								$('#modalidad').focus()
							}
							else if(idoperador=='SELECCIONE' || idoperador==null || idoperador==''){
								$('#mensajes').css('display','block')
								$('#mensaje').html('Por favor elija el tipo de operador cedente');
								$('#operador').focus()
							}
							else{
								 if(modalidad==1){
										if(idtope=='SELECCIONE' || idtope==null || idtope==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor elija el tipo de tope adecuado');
											$('#tope').focus()
										}
										else if(numero==null || numero==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese telefono');
											$('#linea').focus()
										}
										else if(!re.test(numero)==true){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese solo caracteres numericos');
											$('#linea').focus()
										}
										else{
											$('#tabla_oculta').css('display','block')
											idequipo=''
											equipo=''
											cuota=''
											porta_chip()
											addRow()
											$('#oculto_boton').css('display','block')
										}
								 }
								 else if(modalidad==2){
									 	if(idequipo=='SELECCIONE' || idequipo==null || idequipo==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor elija el equipo');
											$('#equipo').focus()
										}
									 	else if(idtope=='SELECCIONE' || idtope==null || idtope==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor elija el tipo de tope adecuado');
											$('#tope').focus()
										}
										else if(numero==null || numero==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese telefono');
											$('#linea').focus()
										}
										else if(!re.test(numero)==true){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese solo caracteres numericos');
											$('#linea').focus()
										}
										else{
											$('#tabla_oculta').css('display','block')
											cuota=''
											porta_contado()
											addRow()
											$('#oculto_boton').css('display','block')
										}
								 }
								 else if(modalidad==3){
									 	if(idequipo=='SELECCIONE' || idequipo==null || idequipo==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor elija el equipo');
											$('#equipo').focus()
										}
									 	else if(idtope=='SELECCIONE' || idtope==null || idtope==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor elija el tipo de tope adecuado');
											$('#tope').focus()
										}
										else if(numero==null || numero==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese telefono');
											$('#linea').focus()
										}
										else if(!re.test(numero)==true){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese solo caracteres numericos');
											$('#linea').focus()
										}
										else if(cuota==null || cuota==''){
											$('#mensajes').css('display','block')
											$('#mensaje').html('Por favor ingrese la cuota');
											$('#cuotas').focus()
										}
										else{
											$('#tabla_oculta').css('display','block')
											porta_cuotas()
											addRow()
											$('#oculto_boton').css('display','block')
										}
								 }
							}
					 }
					 else if(tipo_operacion==3){
						 if(modalidad==1){
							 if(idtope=='SELECCIONE' || idtope==null || idtope==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor elija el tipo de tope adecuado');
									$('#tope').focus()
							 }
							 else{
								 $('#tabla_oculta').css('display','block')
								 idmodalidad=''
								 idoperador=''
								 cuota=''
								 modalidadlinea=''
								 operador=''
								 idequipo=''
								 equipo=''
								 deletes=''
								 alta_chip()
								 addRow()
								 $('#oculto_boton').css('display','block')
							 }
						 }
						 else if(modalidad==2){
							 if(idequipo=='SELECCIONE' || idequipo==null || idequipo==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor elija el equipo');
									$('#equipo').focus()
								}
							 	else if(idtope=='SELECCIONE' || idtope==null || idtope==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor elija el tipo de tope adecuado');
									$('#tope').focus()
								}
								else{
									$('#tabla_oculta').css('display','block')
									 idmodalidad=''
									 idoperador=''
									 cuota=''
									 modalidadlinea=''
									 operador=''
									 alta_contado()
									 addRow()
									 $('#oculto_boton').css('display','block')
								}
						 }
						 else if(modalidad==3){
							 if(idequipo=='SELECCIONE' || idequipo==null || idequipo==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor elija el equipo');
									$('#equipo').focus()
								}
							 	else if(idtope=='SELECCIONE' || idtope==null || idtope==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor elija el tipo de tope adecuado');
									$('#tope').focus()
								}
								else if(cuota==null || cuota==''){
									$('#mensajes').css('display','block')
									$('#mensaje').html('Por favor ingrese la cuota');
									$('#cuotas').focus()
								}
								else{
									$('#tabla_oculta').css('display','block')
									 idmodalidad=''
									 idoperador=''
									 modalidadlinea=''
									 operador=''
									 alta_cuotas()
									 addRow()
									 $('#oculto_boton').css('display','block')
									 
								}
						 }
					 }
			}	
	    } );
	    
		 

	    $("#listado tbody").on('click','a.linkhref',function(){
	    	var index = $('#listado').DataTable().row( $(this).parents('tr') ).index();
	    	$.confirm({
			    title: 'Plan',
			    content: '¿Desea eliminar el plan seleccionado?',
			    closeIcon: true,
			    closeIconClass: 'fa fa-close' ,
			    confirmButton: 'Continuar',
			    confirmButtonClass: 'btn-warning',	
			    cancelButton:'Cancelar',
			    cancelButtonClass: 'btn-default',
		        icon: 'fa fa-exclamation-triangle',
			    confirm: function(){
			    	$('#listado').DataTable().row(index).remove().draw( false );
			   },cancel: function(){   
				   
			    }	   
			});
	    	
	    })
	    
	$('#btn_Grabar').click(function(){

		var nombres=$('#nombres').val().trim()
		var apellidopat=$('#apellidopat').val().trim()
		var apellidomat=$('#apellidomat').val().trim()
		var tipo_documento=$('#tipo_documento').val().trim()
		var documento=$('#documento').val().trim()
		var contacto=$('#contacto').val().trim()
		var nacimiento=$('#nacimiento').val().trim()
		var observaciones=$('#observaciones').val().trim()
		var re = /^(-)?[0-9]*$/;

		var table = $('#listado').DataTable()
		var array = []
		array = table.data().toArray()
		jsonString = JSON.stringify(array);
		$('#arraysito').val(jsonString)
		
		var formData = new FormData($("#principal")[0]);
		
		/*var json={
				'array':array,
				'nombres':nombres,
				'apellidopat':apellidopat,
				'apellidomat':apellidomat,
				'tipo_documento':tipo_documento,
				'documento':documento,
				'contacto':contacto,
				'nacimiento':nacimiento,
				'observaciones':observaciones,
				'tipo_operacion':tipo_operacion,
				'modalidad':modalidad,
				
		}*/
		
		if(tipo_operacion==null || tipo_operacion=='SELECCIONE' || tipo_operacion=='' ){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor elija tipo operacion');
			$('#tipo_operacion').focus()
			
		}
		else if(tipo_documento==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor ingrese tipo de documento');
			$('#tipo_documento').focus()
		}
		else if(documento==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor ingrese nro de documento');
			$('#documento').focus()
		}
		else if((tipo_operacion==2 || tipo_operacion==3) && nacimiento==""){
				$('#mensajes').css('display','block')
				$('#mensaje').html('Por favor ingrese fecha de nacimiento');
				$('#nacimiento').focus()
		}
		else if(nombres==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor nombre cliente');
			$('#nombres').focus()
		}
		else if(apellidopat==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor ingrese el apellido paterno');
			$('#apellidopat').focus()
		}
		else if(apellidomat==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor ingrese apellido materno');
			$('#apellidomat').focus()
		}
		else if(contacto==""){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor ingrese numero');
			$('#contacto').focus()
		}
		else if(!re.test(contacto)==true){
			$('#mensajes').css('display','block')
			$('#mensaje').html('Por favor solo caracteres numericos');
			$('#contacto').focus()
		}
		else{
			
			$.ajax({
				   url: '../consulta/insertConsulta',  
				   type: 'POST',
				   data: formData,
				   cache: false,
				   contentType: false,
				   processData: false,
				   success: function(data){
					   if(data==1){
						   $.alert({
					   		    title: 'Consulta',
					   		    content: 'Error, tipo 1, favor de comunicarse con sistemas',
					   		});
						   $('#principal').find('input, textarea, button, select').attr('disabled',true);
					   }
					   else if(data==2){
						   $.alert({
					   		    title: 'Consulta',
					   		    content: 'Error, tipo 2, favor de comunicarse con sistemas',
					   		});
						   $('#principal').find('input, textarea, button, select').attr('disabled',true);
					   }
					   else if(data==3){
						   $.alert({
					   		    title: 'Consulta',
					   		    content: 'Error, tipo 3, favor de comunicarse con sistemas',
					   		});
						   $('#principal').find('input, textarea, button, select').attr('disabled',true);
					   }
					   else if(data==4){
						   $.alert({
					   		    title: 'Consulta',
					   		    content: 'Error, tipo 4, favor de comunicarse con sistemas',
					   		});
						   $('#principal').find('input, textarea, button, select').attr('disabled',true);
					   }
					   else{
						   $.confirm({
					   			title: 'Consulta',
							    content: 'Se registro correctamente',
							    confirm: function(){
							    	window.location = "../panel/"
							    },
							    cancel: function(){   
							    	$('#principal').find('input, textarea, button, select').attr('disabled',true);
							    }
					   		})
					   }
				   }
				  });
		}
	})
	
	function formatSizeUnits(bytes){
	        if      (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2);}
	        else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2);}
	        else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2);}
	        else if (bytes>1)           {bytes=bytes;}
	        else if (bytes==1)          {bytes=bytes;}
	        else                        {bytes=0;}
	        return bytes;
	}
	    
	function formatSizeUnitsdescripction(bytes){
	        if      (bytes>=1000000000) {bytes='GB';}
	        else if (bytes>=1000000)    {bytes='MB';}
	        else if (bytes>=1000)       {bytes='KB';}
	        else if (bytes>1)           {bytes='bytes';}
	        else if (bytes==1)          {bytes='byte';}
	        else                        {bytes='0 byte';}
	        return bytes;
	}
	
	$('#documentos_pdf').change(function(){
        var file = $("#documentos_pdf")[0].files[0];
        var fileName = file.name;        
        var fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        var fileSize = file.size;
        var fileType = file.type;
        var tamanio
        var descripction
        
        tamanio=formatSizeUnits(fileSize)
        descripction=formatSizeUnitsdescripction(fileSize)
        pdffile_url=URL.createObjectURL(file);
        
        if(fileExtension!='pdf'){ 
        	$('#mensajes').css('display','block')
			$('#mensaje').html('Solo Archivos con extension .PDF');
        	$('#documentos_pdf').val('');
        	$('#document_name').text('')
			$('#documentos_pdf').focus()
        }
        else if(tamanio>2.2 && (descripction=='MB' ||descripction=='GB')){ 
        	$('#mensajes').css('display','block')
			$('#mensaje').html('Tamaño de archivo supera al limite permitido');
        	$('#documentos_pdf').val('');
        	$('#document_name').text('')
			$('#documentos_pdf').focus()
        }
        else{
        	$('#adjuntos').css('display','block')
        	$('#document_name').text(fileName+' ('+tamanio+' '+descripction+')');
        	$('#mensajes').css('display','none')
        	$('#linkear_pdf').attr('href',pdffile_url);
        }
    });	
	
	$('#remove_document').click(function(){
		$('#adjuntos').css('display','none')
		$('#documentos_pdf').val('');
	})
	    
 
});