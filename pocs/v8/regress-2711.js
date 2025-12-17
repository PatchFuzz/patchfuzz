var a = Object.freeze([1]);
print(function() { a.push(2); }, TypeError);
print(1, a.length);
print(function() { a.push(2); }, TypeError);
print(1, a.length);
