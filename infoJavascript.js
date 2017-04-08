$(document).ready(function() {
    console.log("Loading");
    displayArtists([
                    {"name":"Kenrick Lamar", "img":"kendrick.jpeg" },
                    {"name":"John Mayer","img":"john.jpeg"},
                    {"name":"Adele","img":"adele.jpeg"},
                    {"name":"Martin Garrix","img":"martin.jpeg"}
                ]);
    console.log("Loaded");
    
    $('.artistImg').each(function(){
        $(this).mouseover(function() {
            $(this).css('width','250px');
            $(this).css('height','250px');
        });
        
        $(this).mouseout(function() {
            $(this).css('width','200px');
            $(this).css('height','200px');
        });
    });
    
    /*
    $("#img1").mouseover(function() {
        $this.css('width','250px');
        $this.css('height','250px');
    });
    $("#img1").mouseout(function() {
        $this.css('width','200px');
        $this.css('height','200px');
    });

    $("#img2").mouseover(function() {
        $this.css('width','250px');
        $this.css('height','250px');
    });
    $("#img2").mouseout(function() {
        $this.css('width','200px');
        $this.css('height','200px');
    });

    $("#img3").mouseover(function() {
        $this.css('width','250px');
        $this.css('height','250px');
    });
    $("#img3").mouseout(function() {
        $this.css('width','200px');
        $this.css('height','200px');
    });

    $("#img4").mouseover(function() {
        $this.css('width','250px');
        $this.css('height','250px');
    });
    $("#img4").mouseout(function() {
        $this.css('width','200px');
        $this.css('height','200px');
    });

    $("#img1").click(function(){
        $(".overlay, .popup").fadeToggle();
    })
    */
    
});

/*
    artistList is an array of objects in the form of:
    
    {
        name: ---
        img: --
    }
    
    inner divs look like:
    <div>
	    <img id="img1" src=curr.img height="200" width="200"/>
	    <h3>curr.name</h3>
	</div>
	
	
*/

function displayArtists(artistList) {
    var display = $("#artistList");
    for (var i = 0; i < artistList.length; i++) {
        var curr = artistList[i];
        var artistDiv = $("<div/>"); /* create inner div here */
        var artistImg = $('<img />', { 
          id: 'img' + (i + 1),
          class: 'artistImg',
          src: curr.img,
          height: "200px",
          width: "200px"
        }); /* creates img here */
        
        var artistName = $('<h3>').text(curr.name); /* h3 */
        
        artistDiv.append(artistImg);
        artistDiv.append(artistName);
         
        display.append(artistDiv);
    }
}

