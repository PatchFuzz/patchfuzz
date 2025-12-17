Object.prototype.prototype = {};
print(Object.getPrototypeOf([].concat()), Array.prototype);
print(Object.getPrototypeOf([].map(x => x)), Array.prototype);
print(Object.getPrototypeOf([].filter(x => x)), Array.prototype);
print(Object.getPrototypeOf([].slice()), Array.prototype);
print(Object.getPrototypeOf([].splice()), Array.prototype);
