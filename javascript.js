$(document).ready(function() {
	$(".arrow").mouseover(function() {
		$(this).fadeTo("fast",1);
	});

    $(".arrow").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".venues").offset().top},
	        'slow');
	});
	if(!Modernizr.inputtypes.date) {
		$("#start-date").datepicker();
		$("#end-date").datepicker();
	}
	
	$(function(){

    $('body').on('click', '.button', function(e)
    {
        e.preventDefault();

        var link = $(this).attr('href');
        
        $('body').append(
            '<div id="overlay">' +
            '<img id="loading" src="http://bit.ly/pMtW1K">' +
            '</div>'
        );
        
        setTimeout(function(){
          $('#overlay').remove();
        }, 2000); //2 seconds
    });

})
	
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



function displayEvents(eventsList) {
	var events = $(#eventsList);
	for (var i = 0; i < eventsList.length; i++) {
		var curr = eventsList[i];
		
		var eventName = curr.eventName;
		
		var eventDiv = $("<div/>");
		var eventDescription = $('<h3>').text(eventName);
		
		eventDiv.append(eventDescription);
		events.append(eventDiv);
		
	}
}

$.get( "http://127.0.0.1:8000/Bitcamp.html", callbackFunction);
