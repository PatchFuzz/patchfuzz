


























var badObj = { length : 1e40 };

assertThrows(function() { new Uint8Array(badObj); }, RangeError);
assertThrows(function() { new Uint8ClampedArray(badObj); }, RangeError);
assertThrows(function() { new Int8Array(badObj); }, RangeError);
assertThrows(function() { new Uint16Array(badObj); }, RangeError);
assertThrows(function() { new Int16Array(badObj); }, RangeError);
assertThrows(function() { new Uint32Array(badObj); }, RangeError);
assertThrows(function() { new Int32Array(badObj); }, RangeError);
assertThrows(function() { new Float32Array(badObj); }, RangeError);
assertThrows(function() { new Float64Array(badObj); }, RangeError);
