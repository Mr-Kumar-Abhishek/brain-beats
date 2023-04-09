// picker
window.picker = {
	canvas: document.getElementById('pickercanvas'),
	load: function() {
		picker.context = picker.canvas.getContext('2d');

		picker.canvas.width = $('.colorpicker').width();
		picker.canvas.height = 110;

		$(window).resize(function(){
			picker.canvas.width = $('.colorpicker').width();
			picker.draw(picker.marker.location);
		});


		$('#pickercanvas').mousedown(picker.drag.down);
		$('body').mouseup(picker.drag.up);
		$('body').mousemove(picker.drag.move);

		picker.draw({'x':10, 'y':(picker.canvas.height / 2)});
	},
	clear: function() {
		picker.context.clearRect(0, 0, picker.canvas.width, picker.canvas.height);
	},
	draw: function(point) {
		picker.clear();
		picker.drawPallete();

		var rgba = picker.context.getImageData(point.x, point.y, 1, 1).data;
		if ((rgba[0] == 0 && rgba[1] == 0 && rgba[2] == 0) || rgba[3] != 255) {
			if (point.x <= 10) point.x = 10;
			else if (point.x >= picker.canvas.width -10) point.x = picker.canvas.width -11;
			if (point.y <= 10) point.y = 10;
			else if (point.y >= picker.canvas.height -10) point.y = picker.canvas.height -11;
		}
		picker.marker.location 	= point;
		rgba 					= picker.context.getImageData(point.x, point.y, 1, 1).data;
		picker.marker.color		= picker.toHex(rgba[0], rgba[1], rgba[2]);
		picker.marker.draw();
	},
	drawPallete: function() {
		var gradient = picker.context.createLinearGradient(0, 0, picker.canvas.width -20, 0);
		gradient.addColorStop(0,"#ff5c5d");
		gradient.addColorStop(0.15,"#cc6699");
		gradient.addColorStop(0.33,"#4971b6");
		gradient.addColorStop(0.49,"#1fa4c7");
		gradient.addColorStop(0.67,"#b9d94a");
		gradient.addColorStop(0.84,"#ffff00");
		gradient.addColorStop(1,"#ff5c5d");
		picker.context.fillStyle = gradient;
		picker.context.fillRect(10, 10, picker.canvas.width -20, picker.canvas.height -20);
		// dark gradient
		gradient = picker.context.createLinearGradient(0, 0, 0, picker.canvas.height -20);
		gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
		gradient.addColorStop(0.15,"rgba(0, 0, 0, 0)");
		gradient.addColorStop(1,"rgba(0, 0, 0, 0.95)");
		picker.context.fillStyle = gradient;
		picker.context.fillRect(10, 10, picker.canvas.width -20, picker.canvas.height -20);
	},
	marker: {
		locaion: {},
		color: "",
		outerRadius: 10,
		innerRadius: 7.5,
		draw: function() {
			picker.marker.drawCircle('#FFF', picker.marker.location, picker.marker.outerRadius);
			picker.marker.drawCircle('#000', picker.marker.location, picker.marker.innerRadius+1);
			picker.marker.drawCircle(picker.marker.color, picker.marker.location, picker.marker.innerRadius);
		},
		drawCircle: function(color, point, radius) {
			picker.context.fillStyle = color;
			picker.context.beginPath();
			picker.context.arc(point.x, point.y, radius, 0, 2*Math.PI);
			picker.context.fill();
			picker.context.closePath();
		}
	},
	drag: {
		isDragging: false,
		down: function(e) {
			picker.drag.isDragging = true;
			picker.drag.move(e);
		},
		up: function() {
			picker.drag.isDragging = false;
		},
		move: function(e) {
			if (picker.drag.isDragging) {
				picker.draw({
					'x': Math.floor(e.pageX - picker.canvas.offsetLeft),
					'y': Math.floor(e.pageY - picker.canvas.offsetTop)
				});
			}
		}
	},
	toHex: function(r, g, b) {
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}
picker.load();