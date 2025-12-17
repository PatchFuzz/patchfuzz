print(function() { Number.prototype.toExponential.call({}) },
             TypeError);

print(function() { Number.prototype.toPrecision.call({}) },
             TypeError);

print(function() { Number.prototype.toFixed.call({}) },
             TypeError);

print(function() { Number.prototype.toString.call({}) },
             TypeError);

print(function() { Number.prototype.toLocaleString.call({}) },
             TypeError);

print(function() { Number.prototype.ValueOf.call({}) },
             TypeError);




var x_obj = new Number(1);
x_obj.valueOf = function() { print(); };

print("1.00e+0",
             Number.prototype.toExponential.call(x_obj, 2));

print("1.0",
             Number.prototype.toPrecision.call(x_obj, 2));

print("1.00",
             Number.prototype.toFixed.call(x_obj, 2));


print("1.00e+0",
             Number.prototype.toExponential.call(1, 2));

print("1.0",
             Number.prototype.toPrecision.call(1, 2));

print("1.00",
             Number.prototype.toFixed.call(1, 2));










var f_flag = false;
var f_obj = { valueOf: function() { f_flag = true; return 1000; } };

print("NaN",
             Number.prototype.toExponential.call(NaN, f_obj));
print(f_flag);

f_flag = false;
print("Infinity",
             Number.prototype.toExponential.call(1/0, f_obj));
print(f_flag);

f_flag = false;
print("-Infinity",
             Number.prototype.toExponential.call(-1/0, f_obj));
print(f_flag);

f_flag = false;
print("NaN",
             Number.prototype.toPrecision.call(NaN, f_obj));
print(f_flag);

f_flag = false;
print("Infinity",
             Number.prototype.toPrecision.call(1/0, f_obj));
print(f_flag);

f_flag = false;
print("-Infinity",
             Number.prototype.toPrecision.call(-1/0, f_obj));
print(f_flag);



f_flag = false;
print(function() { Number.prototype.toFixed.call(NaN, f_obj) },
             RangeError);
print(f_flag);

f_flag = false;
print(function() { Number.prototype.toFixed.call(1/0, f_obj) },
             RangeError);
print(f_flag);

f_flag = false;
print(function() { Number.prototype.toFixed.call(-1/0, f_obj) },
             RangeError);
print(f_flag);
