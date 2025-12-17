__defineSetter__.__proto__ = function() {};
__defineSetter__['prototype']

eval.__proto__ = function () { };
eval['prototype'] = {};




function f() { return 42; }
f.prototype = 43;
__defineGetter__.__proto__ = f;


print(__defineGetter__.prototype, 43);


__defineGetter__.prototype = "foo";
print(__defineGetter__.prototype, "foo");
