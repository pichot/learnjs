var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
  var red = new five.Led(13);
  var white = new five.Led(11);

  red.strobe(1000);
  white.fadeIn(500);
});
