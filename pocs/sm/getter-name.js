print(Object.getOwnPropertyDescriptor(Set, Symbol.species).get.name, "get [Symbol.species]");
print(Object.getOwnPropertyDescriptor(Set.prototype, "size").get.name, "get size");
