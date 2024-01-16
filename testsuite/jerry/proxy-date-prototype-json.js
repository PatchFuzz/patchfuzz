














var found = [];

var target = {
  toString: function() { return "TARGET_toString"; },
  toISOString: function() { return "TARGET_toISOString"; }
};

var prox = new Proxy(target, {
  get: function(trg, key) {
    found.push(key);
    return trg[key];
  }
});


var json_result = Date.prototype.toJSON.call(prox);
assert(json_result === "TARGET_toISOString");


assert(found[0] === Symbol.toPrimitive);


var methods = found.slice(1);
assert(methods.toString() === "valueOf,toString,toISOString");
