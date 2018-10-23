function trad() {
	$('#mdivtrad').empty();
	console.log($('#mtrad').val())
	$.get( "/mots/gtranslate?q=" + $('#mtrad').val(), function( data ) {
		for (var i = 0; i < data.length; i++) {
			$('#mdivtrad').append("<tr><td>"+data[i].to+"</td><td>"+data[i].v+"</td></tr>");
		}			
	});
}

function addworld(){
	ici faut faire en sorte de recupe tout les info et faire un post
	// $.post( "ajax/test.html", function( data ) {
	// 	$( ".result" ).html( data );
	// });
}