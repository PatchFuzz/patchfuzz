var value = 0;

[{ set prop(v) { value = v } }.prop = 12 ] = [ 1 ]

print(1, value);
