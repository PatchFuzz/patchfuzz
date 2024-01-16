













Object.defineProperty(Array.prototype, 0, {set: function() { return Array.prototype.push(), Object.freeze(Array.prototype)}});
Promise.all([0]);
