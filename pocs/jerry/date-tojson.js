var obj = {
    toISOString: function() { return "RESULT-ToISOString"; },
    valueOf: function() { return "RESULT-valueOf"; }
};

var result = Date.prototype.toJSON.call(obj);

assert(result === "RESULT-ToISOString");
