;


var obj = eval('({"__proto__": null})');
print(Object.getPrototypeOf(obj), null);
print(Object.prototype.hasOwnProperty.call(obj, "__proto__"), false);


obj = JSON.parse('{"__proto__": null}');
print(Object.getPrototypeOf(obj), Object.prototype);
print(Object.prototype.hasOwnProperty.call(obj, "__proto__"), true);




assertThrowsInstanceOf(() =>
    eval('({ "__proto__" : null, "__proto__" : null })'), SyntaxError);

assertThrowsInstanceOf(() =>
    eval('  ({ "__proto__" : null, "__proto__" : null })'), SyntaxError);


obj = JSON.parse('{"__proto__": null, "__proto__": 5}');
print(Object.getPrototypeOf(obj), Object.prototype);
print(obj["__proto__"], 5);
