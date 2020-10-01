var image = null;
var canvas = null;
var backup = null;
var output = null;
var imgfile;
var avg;
canvas = document.getElementById("canvas1");
function upload() {
	imgfile = document.getElementById("upload");
	image = new SimpleImage(imgfile); //image that undergoes filters
	backup = new SimpleImage(imgfile); //a originalimage
	image.drawTo(canvas);
	alert("image uploaded");
}

function dogrey() {
	image = new SimpleImage(backup);
	for (var pixel of image.values()) {
		avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
		pixel.setGreen(avg);
		pixel.setRed(avg);
		pixel.setBlue(avg);
	}
	image.drawTo(canvas);
	alert("have fun making filtered pics!");
}
function average(pixel) {
	avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
	return avg;
}
function dored() {
	image = new SimpleImage(backup);

	alert("image in processing...");
	var redpix;
	for (var pixel of image.values()) {
		redpix = average(pixel);
		if (redpix < 128) {
			pixel.setRed(2 * redpix);
			pixel.setGreen(0);
			pixel.setBlue(0);
		} else if (redpix >= 128) {
			pixel.setRed(255);
			pixel.setGreen(2 * redpix - 255);
			pixel.setBlue(2 * redpix - 255);
		}
	}
	image.drawTo(canvas);
	alert("have fun making filtered pics!");
}

function rainbow() {
	image = new SimpleImage(backup);
	var width = image.getWidth();
	var w = image.getHeight();
	alert("image in processing...");
	for (var pixel of image.values()) {
		if (pixel.getY() >= 0 && pixel.getY() <= w / 7) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (pixel.getY() >= w / 7 && pixel.getY() <= (2 * w) / 7) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(0.8 * avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(1.2 * avg - 51);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (pixel.getY() >= 2 * (w / 7) && pixel.getY() <= 3 * (w / 7)) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(2 * avg);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (pixel.getY() >= 3 * (w / 7) && pixel.getY() <= 4 * (w / 7)) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(2 * avg);
				pixel.setBlue(0);
			} else if (avg >= 128) {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(255);
				pixel.setBlue(2 * avg - 255);
			}
		} else if (pixel.getY() >= 4 * (w / 7) && pixel.getY() <= 5 * (w / 7)) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else if (avg >= 128) {
				pixel.setRed(2 * avg - 255);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		} else if (pixel.getY() >= 5 * (w / 7) && pixel.getY() <= 6 * (w / 7)) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(0.8 * avg);
				pixel.setGreen(0);
				pixel.setBlue(2 * avg);
			} else if (avg >= 128) {
				pixel.setRed(1.2 * avg - 51);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(255);
			}
		} else if (pixel.getY() >= 6 * (w / 7) && pixel.getY() <= w) {
			avg = average(pixel);
			if (avg < 128) {
				pixel.setRed(1.6 * avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6 * avg);
			} else if (avg >= 128) {
				pixel.setRed(0.4 * avg + 153);
				pixel.setGreen(2 * avg - 255);
				pixel.setBlue(0.4 * avg + 153);
			}
		}
	}
	image.drawTo(canvas);
	alert("your rainbow filter is ready");
}

function doreset() {
	backup.drawTo(canvas);
	alert("resetted image");
}

function windowpane() {
	image = new SimpleImage(backup);
	var w = image.getWidth();
	var h = image.getHeight();
	for (var pixel of image.values()) {
		if (pixel.getX() >= 0 && pixel.getX() <= w / 24) {
			//one
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getX() >= (23 * w) / 72 && pixel.getX() <= (26 * w) / 72) {
			//two
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getX() >= (46 * w) / 72 && pixel.getX() <= (49 * w) / 72) {
			//three
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getX() >= (69 * w) / 72 && pixel.getX() <= w) {
			//4
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getY() >= 0 && pixel.getY() <= h / 24) {
			//1'
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getY() >= (23 * h) / 72 && pixel.getY() <= (26 * h) / 72) {
			//2'
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getY() >= (46 * h) / 72 && pixel.getY() <= (49 * h) / 72) {
			//3'
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		if (pixel.getY() >= (69 * h) / 72 && pixel.getY() <= h) {
			//4'
			pixel.setRed(0);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
	}
	alert("windowpane");
	image.drawTo(canvas);
}

// blur by moving random pixels
function ensureInImage(coordinate, size) {
	// coordinate cannot be negative
	if (coordinate < 0) {
		return 0;
	}
	// coordinate must be in range [0 .. size-1]
	if (coordinate >= size) {
		return size - 1;
	}
	return coordinate;
}

function getPixelNearby(image, x, y, diameter) {
	var dx = Math.random() * diameter - diameter / 2;
	var dy = Math.random() * diameter - diameter / 2;
	var nx = ensureInImage(x + dx, image.getWidth());
	var ny = ensureInImage(y + dy, image.getHeight());
	return image.getPixel(nx, ny);
}
//code for blur filter
function doblur() {
	image = new SimpleImage(backup);
	output = new SimpleImage(image.getWidth(), image.getHeight());
	for (var pixel of image.values()) {
		var x = pixel.getX();
		var y = pixel.getY();
		if (Math.random() > 0.5) {
			var other = getPixelNearby(image, x, y, 10);
			output.setPixel(x, y, other);
		} else {
			output.setPixel(x, y, pixel);
		}
	}
	output.drawTo(canvas);
	alert("blur filter is ready");
}
