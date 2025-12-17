print('{"x":1}', JSON.stringify({ x : 1 }, ["x", 1, "x", 1]));
print('{"1":1}', JSON.stringify({ 1 : 1 }, ["x", 1, "x", 1]));
print('{"1":1}', JSON.stringify({ 1 : 1 }, ["1", 1, "1", 1]));
print('{"1":1}', JSON.stringify({ 1 : 1 }, [1, "1", 1, "1"]));


var fired = 0;
var getter_obj = { get x() { fired++; return 2; } };
print('{"x":2}', JSON.stringify(getter_obj, ["x", "y", "x"]));
print(1, fired);


print('{"y":4,"x":3}', JSON.stringify({ x : 3, y : 4}, ["y", "x"]));
print('{"y":4,"1":2,"x":3}',
             JSON.stringify({ x : 3, y : 4, 1 : 2 }, ["y", 1, "x"]));



var a = { x : 8 };
print('{"__proto__":{"__proto__":null},"x":8}',
             JSON.stringify(a, ["__proto__", "x", "__proto__"]));
a.__proto__ = { x : 7 };
print('{"__proto__":{"__proto__":{"__proto__":null},"x":7},"x":8}',
             JSON.stringify(a, ["__proto__", "x"]));
var b = { __proto__: { x: 9 } };
print('{}', JSON.stringify(b));
print('{"x":9}', JSON.stringify(b, ["x"]));
var c = {x: 10};
Object.defineProperty(c, 'x', { enumerable: false });
print('{}', JSON.stringify(c));
print('{"x":10}', JSON.stringify(c, ["x"]));


print("[9,8,7]", JSON.stringify([9, 8, 7], [1, 1]));
var mixed_arr = [11,12,13];
mixed_arr.x = 10;
print('[11,12,13]', JSON.stringify(mixed_arr, [1, 0, 1]));


var mixed_obj = { x : 3 };
mixed_obj[0] = 6;
mixed_obj[1] = 5;
print('{"1":5,"0":6}', JSON.stringify(mixed_obj, [1, 0, 1]));


print('{"z":{"x":3},"x":1}',
             JSON.stringify({ x: 1, y:2, z: {x:3, b:4}}, ["z","x"]));


print('{}',
             JSON.stringify({ x : 1, "1": 1 }, [{}]));
print('{}',
             JSON.stringify({ x : 1, "1": 1 }, [true, undefined, null]));
print('{}',
             JSON.stringify({ x : 1, "1": 1 },
                            [{ toString: function() { return "x";} }]));
print('{}',
             JSON.stringify({ x : 1, "1": 1 },
                            [{ valueOf: function() { return 1;} }]));



print('{"toString":42}', JSON.stringify({ toString: 42 }, ["toString"]));


print('{"1":1,"s":"s"}',
             JSON.stringify({ 1: 1, s: "s" },
                            [new Number(1), new String("s")]));
