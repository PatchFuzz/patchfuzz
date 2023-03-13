















var len;
var d = [];
print(d.length === 0);
len = d.push();
print(d.length === 0);
print(d.length === len);
len = d.push(1);
print(d.length === 1);
print(d.length === len);
len = d.push(2);
print(d.length === 2);
print(d.length === len);
len = d.push('a');
print(d.length === 3);
print(d.length === len);
len = d.push('b', 'c', 3);
print(d.length == 6);
print(d.length === len);
print(d[0] === 1);
print(d[1] === 2);
print(d[2] === 'a');
print(d[3] === 'b');
print(d[4] === 'c');
print(d[5] === 3);

var a = [];
a.length = 4294967294;
print(a.push("x") === 4294967295);
print(a.length === 4294967295);
print(a[4294967294] === "x");

try {
  a.push("y");
  print(false);
} catch (e) {
  print(e instanceof RangeError);
}
print(a.length === 4294967295)

var o = { length : 4294967294, push : Array.prototype.push };
print(o.push("x") === 4294967295);
print(o.length === 4294967295);
print(o[4294967294] === "x");

try {
  print(o.push("y") === 4294967296);
} catch (e) {
  print(false);
}
print(o.length === 4294967296);
print(o[4294967295] === "y");


var arr = [];
Object.freeze(arr);

try {
  arr.push(1, 2);
  print(false);
} catch (e) {
  print(e instanceof TypeError);
}
