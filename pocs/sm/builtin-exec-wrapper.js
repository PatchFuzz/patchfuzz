var g = newGlobal({newCompartment: true});
g.evaluate(`RegExp.prototype.exec = {};`);
var wrapper = g.evaluate(`/abc.+def/`);
print(RegExp.prototype.test.call(wrapper, "abc"), false);
print(RegExp.prototype.test.call(wrapper, "abcXdef"), true);
print(RegExp.prototype[Symbol.match].call(wrapper, "abc"), null);
print(RegExp.prototype[Symbol.match].call(wrapper, "abcXdef")[0], "abcXdef");
