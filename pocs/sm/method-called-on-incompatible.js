;

print(() => Set.prototype.forEach.call({}), "forEach method called on incompatible Object");
print(() => newGlobal({newCompartment: true}).Set.prototype.forEach.call({}), "forEach method called on incompatible Object");
print(() => Set.prototype.forEach.call(15), "forEach method called on incompatible number");

print(() => Int8Array.prototype.find.call({}), "find method called on incompatible Object");
print(() => newGlobal({newCompartment: true}).Int8Array.prototype.find.call({}), "find method called on incompatible Object");
print(() => Int8Array.prototype.find.call(15), "find method called on incompatible number");
