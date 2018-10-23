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
	// ici faut faire en sorte de recupe tout les info et faire un post
	let object = new Object();
	object.al = $('#f-al').val();
	object.traduction = new Object();
	object.traduction.fr = ($('#f-fr').val()).split(';');
	object.exemple = $('#f-ex').val().split("\n");
	object.desc = new Object();
	object.desc.fr = $('#f-desc').val();
	if (document.querySelectorAll("#f-conj-p")[0].value) {
	object.conjugaison = new Object()
	object.conjugaison.present = new Array();
	$(document.querySelectorAll("#f-conj-p")).each(function(e, a){
		object.conjugaison.present.push(a.value)
	})
	}
	console.log(object)

	$.post( "/mots",object, function( data ) {
		console.log(data)
	});
}