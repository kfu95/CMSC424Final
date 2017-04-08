$(document).ready(function() {
	$(".arrow").mouseover(function() {
		$(this).fadeTo("fast",1);
	});

    $(".arrow").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".venues").offset().top},
	        'slow');
	});
});

function callbackFunction( data ) {
	// $( ".result" ).html( data );
	// document.body.innerHTML += data;
	if (typeof data == "string") {

		try {
			data = JSON.parse(data);
		} catch (err) {
			console.log(err);
		}
	}
}


$.get( "http://127.0.0.1:8000/Bitcamp.html", callbackFunction);
