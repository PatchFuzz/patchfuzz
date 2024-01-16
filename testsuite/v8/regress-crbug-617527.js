





Object.defineProperty(Array.prototype, "1", { get: toLocaleString });
assertThrows(_ => new RegExp(0, 0));
