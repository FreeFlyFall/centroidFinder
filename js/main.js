
$("button").click(function(){
    getData();
});

$("input").keydown(function(e) {
    if (e.keyCode === 13) {
      $("button").click();
    }
  });

function getData(){
    let x1 = parseInt($("#x1").val());
    let y1 = parseInt($("#y1").val());
    let x2 = parseInt($("#x2").val());
    let y2 = parseInt($("#y2").val());
    let x3 = parseInt($("#x3").val());
    let y3 = parseInt($("#y3").val());

    // Find the midpoint of the lines
    let mx1 = (x1 + x2) / 2;
    let my1 = (y1 + y2) / 2;
    let mx2 = (x2 + x3) / 2;
    let my2 = (y2 + y3) / 2;
    let mx3 = (x1 + x3) / 2;
    let my3 = (y1 + y3) / 2;

    // Average the midpoints to get the coordinate point of the centroid
    let c1 = ((mx1 + mx2 + mx3) / 3).toFixed(2);;
    let c2 = ((my1 + my2 + my3) / 3).toFixed(2);;

    // Set strings to be displayed using the data
    let midpointString = `Midpoints: (${mx1}, ${my1}), (${mx2}, ${my2}), (${mx3}, ${my3})`;
    let centroidString = `Centroid: (${c1}, ${c2})`;

    // Show the user the centroid
    $('.inner').html("<p>" + midpointString + "</p><p>" + centroidString + "</p>");
}