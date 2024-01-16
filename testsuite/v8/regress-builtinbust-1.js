



function nope() { return false; }
var a = [ 1, 2, 3 ];
Object.seal(a);
Object.isSealed = nope;

assertThrows(function() { a.pop(); }, TypeError);
assertThrows(function() { a.push(5); }, TypeError);
assertThrows(function() { a.shift(); }, TypeError);
assertThrows(function() { a.unshift(5); }, TypeError);
assertThrows(function() { a.splice(0, 1); }, TypeError);
