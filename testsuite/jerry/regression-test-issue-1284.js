













var count = 0;
[].length = { valueOf: function() { count++; return 1; } };
assert(count == 2);

