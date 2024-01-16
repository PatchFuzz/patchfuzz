



































Object.prototype.__defineGetter__("x", function() {});
Object.prototype.__defineSetter__("y",
                                  function() { assertUnreachable("setter"); });



var x = ({ x: 42, y: 37 });
assertEquals(42, x.x);
assertEquals(37, x.y);
