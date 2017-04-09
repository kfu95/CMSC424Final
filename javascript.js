$(document).ready(function() {
	
	
/* attach a submit handler to the form */
    $("#submitVenue").click(function(event) {
    	
        $('html,body').animate({
			scrollTop: $(".waiting").offset().top
		}, 'slow');
		
      /* stop form from submitting normally */
      event.preventDefault();

      /* get the action attribute from the <form action=""> element */
      var $form = $('#getEvents'),
          url = $form.attr( 'action' );
          
      /* Send the data using post with element id name and name2*/
      var getting = $.get( url, { 
      				venue: $('#venue').val(), 
    				startdate: $('#startdate').val(),
    				enddate: $('#enddate').val()
      	
    			} );

      /* Alerts the results */
      getting.done(function( data ) {
        var events = $('#eventList');
        
        var dataObj = JSON.parse(data);
    	dataObj = dataObj.data;
    	
    	for (var i = 0; i < dataObj.length; i++) {
    		var cur = dataObj[i];
    		
	        var eventItem = $('<div/>',{class: 'eventItem'});
	        
	        var eventName = $('<p/>');
	        
	        eventName.text(cur.name);
	        eventItem.append(eventName);
	        
	        events.append(eventItem);
	        events.append($('<hr>'));
    	}
    	
        $('html,body').animate({
			scrollTop: $("#events").offset().top
		}, 'slow');
		
      });
    });
	
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

	if(!Modernizr.inputtypes.date) {
		$("#start-date").datepicker({minDate:0});
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
