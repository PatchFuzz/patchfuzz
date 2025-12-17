var g1 = newGlobal({newCompartment: true});
var g2 = newGlobal({newCompartment: true});
var wrapper = g1.Math;
nukeCCW(wrapper);
print(isSameCompartment(wrapper, this), true);
g2.wrapper = wrapper;
g2.eval("print(isSameCompartment(wrapper, this), true)");
