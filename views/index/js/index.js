$(document).ready(function() {

$('#btn_ingresar').click(function(){

	var user = $('#user').val();
	var pass = $('#pass').val();

	if(user==""){
		$('#mensajes').css('display','block')
		$('#mensaje').html('Por favor ingrese usuario');
		$('#user').focus()
	}
	else if (pass==""){
		$('#mensajes').css('display','block')
		$('#mensaje').html('Por favor ingresar contraseña');
		$('#pass').focus()
	}
	else{
		$('#mensajes').css('display','none')
		$.post('index/login',{
				user : user,
				pass : pass

			},function(data){
				if(data==1){
					window.location="panel/";
				}
				else{
					$('#mensajes').css('display','block')
					$('#mensaje').html(data);
				}
		})
	}
})

$(document).keypress(function(e) {
    if(e.which == 13) {
    	var user = $('#user').val();
    	var pass = $('#pass').val();

    	if(user==""){
    		$('#mensajes').css('display','block')
    		$('#mensaje').html('Por favor ingrese usuario');
    		$('#user').focus()
    	}
    	else if (pass==""){
    		$('#mensajes').css('display','block')
    		$('#mensaje').html('Por favor ingresar contrase�a');
    		$('#pass').focus()
    	}
    	else{
    		$('#mensajes').css('display','none')
    		$.post('index/login',{
    				user : user,
    				pass : pass

    			},function(data){
    				if(data==1){
    					window.location="panel/";
    				}
    				else{
    					$('#mensajes').css('display','block')
    					$('#mensaje').html(data);
    				}
    		})
    	}
    }
});


});
