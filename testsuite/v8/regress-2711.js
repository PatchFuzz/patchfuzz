



























var a = Object.freeze([1]);
assertThrows(function() { a.push(2); }, TypeError);
assertEquals(1, a.length);
assertThrows(function() { a.push(2); }, TypeError);
assertEquals(1, a.length);
