




var g = newGlobal();
assertEq(isSameCompartment(this, g), false);
assertEq(isProxy(g), true);
