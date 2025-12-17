var funProto = Function.prototype;
print(Object.getOwnPropertyDescriptor(funProto, "prototype"), undefined);

function Point(x, y) { this.x = x; this.y = y; }

var YAxisPoint = Point.bind(null, 0);

print(YAxisPoint.prototype, undefined);

var oldPoint;
for (var i = 0, sz = 9; i < sz; oldPoint = point, i++)
{
  var point = new YAxisPoint(5);
  print(point === oldPoint, false);
  print(point.x, 0);
  print(point.y, 5);
  print(Object.getOwnPropertyDescriptor(funProto, "prototype"), undefined);
  print(Object.getOwnPropertyDescriptor(YAxisPoint, "prototype"), undefined);
}

