function getParameterDefinitions () {
    return [
      {name: 'sqrt', initial: Math.sqrt(3) / 2, type: 'float', caption: 'Sqrt'},
      {name: 'radius', initial: 10, type: 'float', caption: 'Radius'}
    ];
  }
// title: Tor (multi-color)
// author: Eduard Bespalov
// license: MIT License
// description: testing solidFromSlices()

function main(params) {
	var sqrt3 = params.sqrt? params.sqrt :Math.sqrt(3) / 2;
	var radius = params.radius? params.radius :10;

	var hex = CSG.Polygon.createFromPoints([
			[radius, 0, 0],
			[radius / 2, radius * sqrt3, 0],
			[-radius / 2, radius * sqrt3, 0],
			[-radius, 0, 0],
			[-radius / 2, -radius * sqrt3, 0],
			[radius / 2, -radius * sqrt3, 0]
	]);
	var angle = 5;
	return hex.solidFromSlices({
		numslices: 360 / angle,
		loop: true,
		callback: function(t, slice) {
			return this.rotate(
					[0,20,0], [-1, 0, 0], angle * slice
				).setColor(hsl2rgb(t,1,0.5));
		}
	});
}
  