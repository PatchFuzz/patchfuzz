let x = [7];
x.splice(0, {valueOf() { x.length = 2; return 0; }}, 5);
print(x.length, 2);
print(x[0], 5);
print(x[1], 7);
