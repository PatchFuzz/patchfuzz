var g1 = newGlobal({sameCompartmentAs: this});
var g2 = newGlobal({newCompartment: true});
print(firstGlobalInCompartment(this), this);
print(firstGlobalInCompartment(g1), this);
print(firstGlobalInCompartment(g2), g2);
