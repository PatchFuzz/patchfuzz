print(Map.prototype.set.toString().includes("function set()"), true);
print(Object.getOwnPropertyDescriptor(Map.prototype, 'size').get.toString().includes("function size()"), true);
print(Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.toString().includes("function flags()"), true);

print(Map.prototype.set.toSource().includes("function set()"), true);
print(Object.getOwnPropertyDescriptor(Map.prototype, 'size').get.toSource().includes("function get size()"), true);
print(Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get.toSource().includes("function get flags()"), true);
