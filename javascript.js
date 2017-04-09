$(document).ready(function() {
	$(".arrow").mouseover(function() {
		$(this).fadeTo("fast",1);
	});
	$(".arrow").mouseout(function() {
		$(".arrow").fadeTo("fast",0.5);
	});

	$(".arrow").click(function() {
	    $('html,body').animate({
        scrollTop: $(".venues").offset().top},
        'slow');
	});

	$(".button").click(function() {
		$('html,body').animate({
			scrollTop: $(".waiting").offset().top
		}, 'slow');
	});

	if(!Modernizr.inputtypes.date) {
		$("#start-date").datepicker();
		$("#end-date").datepicker();
	}

});

function displayEvents(eventsList) {
	var events = $("#eventsList");
	for (var i = 0; i < eventsList.length; i++) {
		var curr = eventsList[i];
		
		var eventName = curr.eventName;
		
		var eventDiv = $("<li/>");
		var eventDescription = $('<h3>').text(eventName);
		
		eventDiv.append(eventDescription);
		events.append(eventDiv);
		
	}
}
