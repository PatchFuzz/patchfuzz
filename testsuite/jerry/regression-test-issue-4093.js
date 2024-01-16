













var v138 = {
    ownKeys: function() { return []; },
};

var v140 = new Proxy ({}, v138);


var result = Object.getOwnPropertyNames (v140);

assert (result instanceof Array);
assert (result.length === 0);
