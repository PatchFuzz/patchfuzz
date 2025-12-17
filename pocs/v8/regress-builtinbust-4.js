var o = { __proto__:Array.prototype, 0:"x" };
function boomer() { return 0; }
Object.defineProperty(o, "length", { get:boomer, set:boomer });
Object.seal(o);

print(function() { o.push(1); });
print(0, o.length);
print(1, o[0]);

print(function() { o.unshift(2); });
print(0, o.length);
print(2, o[0]);
