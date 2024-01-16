













var func = function(val, idx) {
    return val + idx
};

String([0, "X"].map(func).copyWithin([]));
