let v0 = [0, 1];
v0.constructor = {
  [Symbol.species]: function() {
    let v1 = [2];
    Object.defineProperty(v1, "length", {writable: false});
    return v1;
  }
}

print(() => Array.prototype.map.call(v0, function() {}), TypeError);
