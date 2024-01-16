













Object.defineProperty (Object.prototype, "", { 'set' : function () { throw ReferenceError ("") } });
assert (JSON.stringify () === undefined);
print (JSON.stringify ());
