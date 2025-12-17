;
print(function () { new Map([undefined]); }, TypeError);
print(function () { new Map([null]); }, TypeError);
print(function () { new Map([[0, 0], [1, 1], , [3, 3]]); }, TypeError);
print(function () { new Map([[0, 0], [1, 1], ,]); }, TypeError);



print(function () { new Map([1, 2, 3]); }, TypeError);
print(function () {
	let s = new Set([1, 2, "abc"]);
	new Map(s);
}, TypeError);
