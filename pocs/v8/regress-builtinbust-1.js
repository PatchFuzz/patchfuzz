function nope() { return false; }
var a = [ 1, 2, 3 ];
Object.seal(a);
Object.isSealed = nope;

print(function() { a.pop(); }, TypeError);
print(function() { a.push(5); }, TypeError);
print(function() { a.shift(); }, TypeError);
print(function() { a.unshift(5); }, TypeError);
print(function() { a.splice(0, 1); }, TypeError);
