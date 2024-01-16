































var obj = {};
Object.defineProperty(obj, "x", { get: function() { return "42"; },
                                  configurable: false });
assertEquals(obj.x, "42");
Object.defineProperty(obj, 'x', {});
assertEquals(obj.x, "42");
