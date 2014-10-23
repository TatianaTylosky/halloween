$(document).ready(function() {

    $("#button").click(function(){
      setTimeout(function () {
        var ghost = document.getElementsByClassName("ghost")[0];
        var snd = new Audio("file.wav"); // buffers automatically when created
        snd.play();
        ghost.style.visibility = "visible";
      }, 1000);

      setTimeout(function () {
        var ghost = document.getElementsByClassName("ghost")[0];
        ghost.style.visibility = "hidden";
      }, 3000);

    });

});



