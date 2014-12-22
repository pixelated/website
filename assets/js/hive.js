var hive = new Snap('#hive');
var img_width = $('#hive').width();
var left_pos = img_width * .5;

var pixelated = hive.path("M12.4,20.3v31.8l28,15.8l28-15.8V20.3l-28-15.8L12.4,20.3z M39.2,56.4l-16.3-9V27.9l16.3,9.3L39.2,56.4z M57.7,47.4l-16.1,9l0-19.2l16.1-9.4V47.4z M57.7,25.2L40.4,35.5L22.9,25.2l17.5-9.4L57.7,25.2z").transform("translate(330, 52)").attr("fill", "white");
var all = hive.group().transform("matrix(2, 0, 0, 2, "+(left_pos - 950)+", -40)");
all.add(pixelated);
all.add(hive.text(410, 95, "Modern email with encryption."));

var height = 52;
var width = 60;
var rows = 4;
var cols = 10;
for(var j = 0; j < rows; j++) {
  for (var i = 0; i < cols; i++) {
    x = i * width + (j%2*width/2);
    y = j * height;
    all.add(pixelated.clone().transform("translate("+x+","+y+")").attr("fill-opacity", .3-i/cols*.3));
  }
}