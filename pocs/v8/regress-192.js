Object.prototype.__defineGetter__("x", function() {});
Object.prototype.__defineSetter__("y",
                                  function() { print("setter"); });



var x = ({ x: 42, y: 37 });
print(42, x.x);
print(37, x.y);
