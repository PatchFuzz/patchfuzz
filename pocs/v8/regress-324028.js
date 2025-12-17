var badObj = { length : 1e40 };

print(function() { new Uint8Array(badObj); }, RangeError);
print(function() { new Uint8ClampedArray(badObj); }, RangeError);
print(function() { new Int8Array(badObj); }, RangeError);
print(function() { new Uint16Array(badObj); }, RangeError);
print(function() { new Int16Array(badObj); }, RangeError);
print(function() { new Uint32Array(badObj); }, RangeError);
print(function() { new Int32Array(badObj); }, RangeError);
print(function() { new Float32Array(badObj); }, RangeError);
print(function() { new Float64Array(badObj); }, RangeError);
