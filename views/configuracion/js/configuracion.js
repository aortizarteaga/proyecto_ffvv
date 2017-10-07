$(document).ready(function() {

$('#btn_Actualizar').click(function(){
	
	var user = $('#usuario').val().trim()
	var old_pswd=$('#old-password').val().trim()
	var new_pswd=$('#password').val().trim()
	var renew_pswd=$('#password2').val().trim()

	if(old_pswd==""){
		$('#mensajes').css('display','block')
		$('#mensaje').html('Por favor ingrese contrase�a antigua');
		$('#old-password').focus()
	}
	else if (new_pswd==""){
		$('#mensajes').css('display','block')
		$('#mensaje').html('Por favor ingresa la nueva contrase�a');
		$('#password').focus()
	}
	else if (renew_pswd==""){
		$('#mensajes').css('display','block')
		$('#mensaje').html('Por favor ingresa nuevamente la nueva contrase�a');
		$('#password2').focus()
	}
	else{
		$('#mensajes').css('display','none')
		$.post('configuracion/pswdValidate',{
				user : user,
				old_pswd : old_pswd
				
			},function(data){
				
				if(data==1){
					if(new_pswd==renew_pswd){
						$.post('configuracion/pswdUpdate',{
							user : user,
							new_pswd : new_pswd
							
						},function(data){
							if(data==00000){
			 					$.alert({
						   		    title: 'Actualizacion',
						   		    content: 'Se actualizo el pasword',
						   		});
			 					$('#old-password').val('')
			 					$('#password').val('')
			 					$('#password2').val('')
			 				}
			 				else{
			 					$('#mensajes').css('display','block')
								$('#mensaje').html('No se actualizo el password');
			 				}
						})
						
					}
					else{
						$('#mensajes').css('display','block')
						$('#mensaje').html('Por favor asegurate que las nuevas contrase�as coincidan');
						$('#password').focus()
						$('#password2').focus()
					}
				}
				else{
					$('#mensajes').css('display','block')
					$('#mensaje').html('Por favor ingrese correctamente la contrase�a');
					$('#old-password').focus()
				}
		})
	}
})


});