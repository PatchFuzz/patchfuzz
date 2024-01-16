



var o = { 0: 11, 1: 9};
assertThrows(() => JSON.parse('[0,0]', function() { this[1] = o; }), RangeError);
