



function boom() {
  var args = [];
  for (var i = 0; i < 110000; i++)
    args.push(1.1);
  return Array.apply(Array, args);
}
var array = boom();
