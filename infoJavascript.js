$(document).ready(function() {
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
});

function displayArtist(artistList) {
    var display = $("#artistList");
    for (var i = 0; i < artistList.length; i++) {
        var curr = artistList[i];
        
    }
}

