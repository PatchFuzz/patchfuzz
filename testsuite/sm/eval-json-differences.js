load(libdir + "asserts.js");


var obj = eval('({"__proto__": null})');
assertEq(Object.getPrototypeOf(obj), null);
assertEq(Object.prototype.hasOwnProperty.call(obj, "__proto__"), false);


obj = JSON.parse('{"__proto__": null}');
assertEq(Object.getPrototypeOf(obj), Object.prototype);
assertEq(Object.prototype.hasOwnProperty.call(obj, "__proto__"), true);




assertThrowsInstanceOf(() =>
    eval('({ "__proto__" : null, "__proto__" : null })'), SyntaxError);

assertThrowsInstanceOf(() =>
    eval('  ({ "__proto__" : null, "__proto__" : null })'), SyntaxError);


obj = JSON.parse('{"__proto__": null, "__proto__": 5}');
assertEq(Object.getPrototypeOf(obj), Object.prototype);
assertEq(obj["__proto__"], 5);
