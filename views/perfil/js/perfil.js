$(document).ready(function() {
	$('#email').editable({
		 type: 'text',
		 pk: 1,
		 url: '/post',
		 title: 'Email'
	});
	
	$('#telefono').editable({
		 type: 'text',
		 pk: 1,
		 url: '/post',
		 title: 'Telefono'
	});
	$('#secundario').editable({
		 type: 'text',
		 pk: 1,
		 url: '/post',
		 title: 'Telefono Secundario'
	});
});