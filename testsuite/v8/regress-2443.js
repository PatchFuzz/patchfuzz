




























assertThrows(function() { Number.prototype.toExponential.call({}) },
             TypeError);

assertThrows(function() { Number.prototype.toPrecision.call({}) },
             TypeError);

assertThrows(function() { Number.prototype.toFixed.call({}) },
             TypeError);

assertThrows(function() { Number.prototype.toString.call({}) },
             TypeError);

assertThrows(function() { Number.prototype.toLocaleString.call({}) },
             TypeError);

assertThrows(function() { Number.prototype.ValueOf.call({}) },
             TypeError);




var x_obj = new Number(1);
x_obj.valueOf = function() { assertUnreachable(); };

assertEquals("1.00e+0",
             Number.prototype.toExponential.call(x_obj, 2));

assertEquals("1.0",
             Number.prototype.toPrecision.call(x_obj, 2));

assertEquals("1.00",
             Number.prototype.toFixed.call(x_obj, 2));


assertEquals("1.00e+0",
             Number.prototype.toExponential.call(1, 2));

assertEquals("1.0",
             Number.prototype.toPrecision.call(1, 2));

assertEquals("1.00",
             Number.prototype.toFixed.call(1, 2));










var f_flag = false;
var f_obj = { valueOf: function() { f_flag = true; return 1000; } };

assertEquals("NaN",
             Number.prototype.toExponential.call(NaN, f_obj));
assertTrue(f_flag);

f_flag = false;
assertEquals("Infinity",
             Number.prototype.toExponential.call(1/0, f_obj));
assertTrue(f_flag);

f_flag = false;
assertEquals("-Infinity",
             Number.prototype.toExponential.call(-1/0, f_obj));
assertTrue(f_flag);

f_flag = false;
assertEquals("NaN",
             Number.prototype.toPrecision.call(NaN, f_obj));
assertTrue(f_flag);

f_flag = false;
assertEquals("Infinity",
             Number.prototype.toPrecision.call(1/0, f_obj));
assertTrue(f_flag);

f_flag = false;
assertEquals("-Infinity",
             Number.prototype.toPrecision.call(-1/0, f_obj));
assertTrue(f_flag);



f_flag = false;
assertThrows(function() { Number.prototype.toFixed.call(NaN, f_obj) },
             RangeError);
assertTrue(f_flag);

f_flag = false;
assertThrows(function() { Number.prototype.toFixed.call(1/0, f_obj) },
             RangeError);
assertTrue(f_flag);

f_flag = false;
assertThrows(function() { Number.prototype.toFixed.call(-1/0, f_obj) },
             RangeError);
assertTrue(f_flag);
