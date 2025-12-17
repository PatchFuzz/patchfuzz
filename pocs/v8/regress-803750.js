print(Array.isArray(Array.of.apply(Array, Array(65536))), true);
print(Array.isArray(Array.of.apply(null, Array(65536))), true);
