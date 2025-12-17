var __v_2 = function() {};
var __v_3 = new Proxy({}, __v_2);
__v_2.__defineGetter__('name', function() {});
__v_2.get = function() { return "value 2" };
print(__v_3.property, "value 2");
