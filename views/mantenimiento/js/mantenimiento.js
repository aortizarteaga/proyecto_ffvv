$(document).ready(function() {

	if( $('#listado_usuarios').length > 0 ) {
		$('#listado_usuarios').dataTable().fnDestroy();
		var dtTable = $('#listado_usuarios').DataTable({
			"ajax": "../mantenimiento/getListado",
			"scrollX": true,
		    "bAutoWidth": false,
  	        "autoWidth": false,
			"autoWidth" : true,
			"scrollX": true,
			//"bFilter": false,
	    	"bLengthChange": false,
	        "columns": [
	                    { "data": "id_buzon_usuario"},
	                    { "data": "nombres" },
	                    { "data": "apellidos" },
	                    { "data": "tipo_documento" },
	                    { "data": "nro_documento" },
	                    { "data": "opciones",
			                    	"fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
			                    		$(nTd).html("<center><a id_usuario='"+oData.id_buzon_usuario+"' class='usuario fa fa-sign-out' title='Actualizacion' style='cursor: pointer;display:inline;color: black;font-size:20px'></a></center>");
		                        }
			               }
									 ],
			sDom:
				'Bfrtip',
				   buttons: [ {
					    extend: "excel",
					    className: "btn btn-success btn-xs"
						}],
			"language": {
		      	"url": "/proyecto_ffvv/public/assets/cdn/datatable.spanish.lang"
		     }
		});

		$('#listado_usuarios thead th input[type=text]').on('keyup change', function() {
			dtTable
				.column($(this).parent().index()+':visible')
				.search(this.value)
				.draw();
		});

	}

	$("#listado_usuarios tbody").on('click','a.usuario',function(){
		 idusuario = $(this).attr("id_usuario");

		$.post('../mantenimiento/getMantenimientoupdate/' + idusuario, function(data) {

				var myarray = data.split(",")
				// alert(myarray[2])
							$('#usuario').val(myarray[0].trim())
							$('#tipo_usuarios').val(myarray[1].trim()).change()
							$('#tipo_documento').val(myarray[2].trim()).change()
							$('#documento').val(myarray[3].trim())
							$('#nombres').val(myarray[4].trim())
							$('#apellidos').val(myarray[5].trim())
							$('#email').val(myarray[6].trim())
							$('#telefono1').val(myarray[7].trim())
							$('#telefono2').val(myarray[8].trim())
							$('#direccion').val(myarray[9].trim())
							$('#password').val(myarray[10].trim())

							if(myarray[11].trim()=='Y'){
						$('#flg_activo').prop('checked',true)
					}
					else{
						$('#flg_activo').prop('checked',false)
					}


		});

		 $('#myModalLabel').html('<strong>ACTUALIZACION DE DATOS DEL USUARIO </strong>'+'<strong>'+idusuario+'</strong>');
		 $('#updatedata').modal();
	})

	$('#tipo_documento').change(function(){
		var tipo_documento=$('#tipo_documento').val()
		if(tipo_documento!=''|| tipo_documento!=null){
			$('#tipo_documento').popover('disable')
			$('#tipo_documento').popover('hide')
		}
	})

	$('#documento').keyup(function(){
			$('#documento').popover('disable')
			$('#documento').popover('hide')
			$('#documento').popover('destroy')
	})

	$('#nombres').keyup(function(){
		 $('#nombres').popover('disable')
		 $('#nombres').popover('hide')
		 $('#nombres').popover('destroy')
	})

	$('#apellidos').keyup(function(){
		$('#apellidos').popover('disable')
		$('#apellidos').popover('hide')
		$('#apellidos').popover('destroy')
	})

	$('#telefono1').keyup(function(){
		$('#telefono1').popover('disable')
		$('#telefono1').popover('hide')
		$('#telefono1').popover('destroy')
	})

	$('#telefono2').keyup(function(){
	 $('#telefono2').popover('disable')
	 $('#telefono2').popover('hide')
	 $('#telefono2').popover('destroy')
	})

	$('#tipo_usuarios').change(function(){
	 var tipo_usuarios=$('#tipo_usuarios').val()
	 if(tipo_usuarios!=''|| tipo_usuarios!=null){
		 $('#tipo_usuarios').popover('disable')
		 $('#tipo_usuarios').popover('hide')
	 }
	})


		 $('#btn_actualizar').click(function(){

	 		var tipo_documento=$('#tipo_documento').val()
	 		var documento=$('#documento').val()
	 		var nombres=$('#nombres').val()
	 		var apellidos=$('#apellidos').val()
	 		var telefono1=$('#telefono1').val()
			var telefono2=$('#telefono2').val()
	 		var email=$('#email').val()
	 		var direccion=$('#direccion').val()

	 		var tipo_usuario=$('#tipo_usuario').val()
	 		var accesos=$('#grupo').val()
	 		var usuario=$('#usuario').val()
	 		var password=$('#password').val()


	 		var re = /^(-)?[0-9]*$/;
	 		var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

	 		var formData = new FormData($("#formu")[0]);

	 		if(tipo_documento==''){
	 			$('#tipo_documento').popover({
	 				html: true,
	 				placement:'top',
	 				title: '<i class="fa fa-warning"></i> CORREGIR',
	 				trigger: 'focus',
	 				content: 'Ingrese tipo de documento'
	 			});
	 			$('#tipo_documento').focus()
	 		}
	 		else if(documento==''){
	 			$('#documento').popover({
	 				html: true,
	 				placement:'top',
	 				title: '<i class="fa fa-warning"></i> CORREGIR',
	 				trigger: 'focus',
	 				content: 'Ingrese número de documento'
	 			});
	 			$('#documento').focus()
	 		}
			else if(!re.test(documento)==true){

				$('#documento').popover({
					html: true,
					placement:'top',
					title: '<i class="fa fa-warning"></i> CORREGIR',
					trigger: 'focus',
					content: 'Ingrese solo numeros'
				});
				$('#documento').focus()
			}
	 		else if(nombres==''){

	 			$('#nombres').popover({
	 				html: true,
	 				placement:'top',
	 				title: '<i class="fa fa-warning"></i> CORREGIR',
	 				trigger: 'focus',
	 				content: 'Ingrese su nombre(s)'
	 			});
	 			$('#nombres').focus()
	 		}

			else if(re.test(nombres)==true){

				$('#nombres').popover({
					html: true,
					placement:'top',
					title: '<i class="fa fa-warning"></i> CORREGIR',
					trigger: 'focus',
					content: 'Ingrese solo letras'
				});
				$('#nombres').focus()
			}
	 		else if(apellidos==''){
	 			$('#apellidos').popover({
	 				html: true,
	 				placement:'top',
	 				title: '<i class="fa fa-warning"></i> CORREGIR',
	 				trigger: 'focus',
	 				content: 'Ingrese sus apellidos'
	 			});
	 			$('#apellidos').focus()
	 		}
			else if(re.test(apellidos)==true){

				$('#apellidos').popover({
					html: true,
					placement:'top',
					title: '<i class="fa fa-warning"></i> CORREGIR',
					trigger: 'focus',
					content: 'Ingrese solo letras'
				});
				$('#apellidos').focus()
			}
	 		else if(telefono1==''){
	 				$('#telefono1').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'ingrese su número de telefono'
	 				});
	 				$('#telefono1').focus()
	 		}
			else if(!re.test(telefono1)==true){

				$('#telefono1').popover({
					html: true,
					placement:'top',
					title: '<i class="fa fa-warning"></i> CORREGIR',
					trigger: 'focus',
					content: 'Ingrese solo numeros'
				});
				$('#telefono1').focus()
			}
			else if(!re.test(telefono2)==true){

				$('#telefono2').popover({
					html: true,
					placement:'top',
					title: '<i class="fa fa-warning"></i> CORREGIR',
					trigger: 'focus',
					content: 'Ingrese solo numeros'
				});
				$('#telefono2').focus()
			}
	 		else if(direccion==''){
	 				$('#direccion').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'Ingrese su dirección'
	 				});
	 				$('#direccion').focus()
	 		}
			else if(email==''){
	 				$('#email').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'Ingrese email correcto'
	 				});
	 				$('#email').focus()
	 		}
	 		else if(!emailRegex.test(email)){
	 			$('#email').popover({
	 				html: true,
	 				placement:'top',
	 				title: '<i class="fa fa-warning"></i> CORREGIR',
	 				trigger: 'focus',
	 				content: 'Ingrese email correcto'
	 			});
	 			$('#email').focus()
	 		}
	 		else if(tipo_usuarios==''){
	 				$('#tipo_usuarios').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'Ingrese tipo de usuario'
	 				});
	 				$('#tipo_usuarios').focus()
	 		}
	 		else if(usuario==''){
	 				$('#usuario').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'Ingrese usuario y/o usuario existente'
	 				});
	 				$('#usuario').focus()
	 		}

	 		else if(password==''){
	 				$('#password').popover({
	 					html: true,
	 					placement:'top',
	 					title: '<i class="fa fa-warning"></i> CORREGIR',
	 					trigger: 'focus',
	 					content: 'Ingrese password'
	 				});
	 				$('#password').focus()
	 		}

	 		else{

				$.ajax({
					url: '../mantenimiento/UpdateUsuario/',
					type: 'POST',
					data:formData,
					cache: false,
					contentType: false,
					processData: false,
					success: function(data){
						//  alert(data)
					}
				 });

	 		}
	 	})


})
