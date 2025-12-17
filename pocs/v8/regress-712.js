var obj = {};
Object.defineProperty(obj, "x", { get: function() { return "42"; },
                                  configurable: false });
print(obj.x, "42");
Object.defineProperty(obj, 'x', {});
print(obj.x, "42");
