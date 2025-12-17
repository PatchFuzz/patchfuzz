var g = newGlobal();
print(isSameCompartment(this, g), false);
print(isProxy(g), true);
