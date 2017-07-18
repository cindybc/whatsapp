$(document).ready(function(){
$('#btn-micro').click(function(){	
	var input= $('#msn').val();
    var parrafo= $('<span/>', {'class' : 'pMensaje'});
    parrafo.append(input);
	$('#mensaje').append(parrafo);
	 $('#msn').val('');
    })
})