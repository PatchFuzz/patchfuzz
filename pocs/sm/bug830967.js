var x = Array.prototype.concat.call(Object.freeze([{}]));
print(x.length, 1);
print(0 in x, true);
print(JSON.stringify(x[0]), "{}");
