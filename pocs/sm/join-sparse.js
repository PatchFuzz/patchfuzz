const join = Array.prototype.join;

let obj = { length: 10 };
print(join.call(obj, ""), "");
print(join.call(obj), ",".repeat(9));
print(join.call(obj, "abc"), "abc".repeat(9));

obj = { [0]: 1, length: 10 };
print(join.call(obj, ""), "1");
print(join.call(obj), "1" + ",".repeat(9));
print(join.call(obj, "abc"), "1" + "abc".repeat(9));

obj = { [0]: 1, [1]: 2, [2]: 3, [3]: 4, [4]: 5, length: 2 };
print(join.call(obj), "1,2");
print(join.call(obj, ""), "12");
print(join.call(obj, "abc"), "1abc2");

obj = { [0]: 1, [1]: 2, [2]: {}, [3]: 4, length: 3};
print(join.call(obj), "1,2,[object Object]");
print(join.call(obj, ""), "12[object Object]");
print(join.call(obj, "abc"), "1abc2abc[object Object]");

print(new Array(10).join(""), "");
print(new Array(10).join(), ",".repeat(9));
print(new Array(10).join("abc"), "abc".repeat(9));

print(new Array(100).join(), ",".repeat(99));
print(new Array(100).join(""), "");
print(new Array(100).join("abc"), "abc".repeat(99));

var a = [1];
a.length = 10;
print(a.join(), "1" + ",".repeat(9));
print(a.join(""), "1");
print(a.join("abc"), "1" + "abc".repeat(9));

var a = [1, 2, 3, 4, 5]
a.length = 2;
print(a.join(), "1,2");
print(a.join(""), "12");
print(a.join("abc"), "1abc2");

var a = [1, 2, {}, 4];
a.length = 3;
print(a.join(), "1,2,[object Object]");
print(a.join(""), "12[object Object]");
print(a.join("abc"), "1abc2abc[object Object]");




