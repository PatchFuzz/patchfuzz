




























var gdpRatio = 16/9;

function Foo(initialX, initialY, initialScale, initialMapHeight) {
  this.ORIGIN = { x: initialX, y: initialY };
  this.scale = initialScale;
  this.mapHeight = initialMapHeight;
}

Foo.prototype.bar = function (x, y, xOffset, yOffset) {
  var tileHeight =  64 * 0.25 * this.scale,
  tileWidth  = 128 * 0.25 * this.scale,
  xOffset    = xOffset * 0.5 || 0,
  yOffset    = yOffset * 0.5 || 0;
  var xPos = ((xOffset) * gdpRatio) + this.ORIGIN.x * this.scale -
      ((y * tileWidth ) * gdpRatio) + ((x * tileWidth ) * gdpRatio);
  var yPos = ((yOffset) * gdpRatio) + this.ORIGIN.y * this.scale +
      ((y * tileHeight) * gdpRatio) + ((x * tileHeight) * gdpRatio);
  xPos = xPos - Math.round(((tileWidth) * gdpRatio)) +
      this.mapHeight * Math.round(((tileWidth) * gdpRatio));
  return {
      x: Math.floor(xPos),
      y: Math.floor(yPos)
  };
}

var f = new Foo(10, 20, 2.5, 400);

function baz() {
  var b = f.bar(1.1, 2.2, 3.3, 4.4);
  assertEquals(56529, b.x);
  assertEquals(288, b.y);
}

%PrepareFunctionForOptimization(Foo.prototype.bar);
baz();
baz();
%OptimizeFunctionOnNextCall(Foo.prototype.bar);
baz();
