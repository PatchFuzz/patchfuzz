const g = newGlobal({sameCompartmentAs: this});
g.eval(`function f() { y(); }`);
dis(g.f);
