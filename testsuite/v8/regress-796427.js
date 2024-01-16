





assertThrows(() => "" + { toString: Object.prototype.toLocaleString }, RangeError);
