document.body.addEventListener("mousemove", function(event) {
    var div = document.querySelector("#info");
    var position = "X Coordinate: " + event.clientX + " Y Coordinate: " + event.clientY;
    div.innerHTML(position);
});