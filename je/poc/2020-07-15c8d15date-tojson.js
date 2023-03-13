













var obj = {
    toISOString: function() { return "RESULT-ToISOString"; },
    valueOf: function() { return "RESULT-valueOf"; }
};

var result = Date.prototype.toJSON.call(obj);

print(result === "RESULT-ToISOString");
