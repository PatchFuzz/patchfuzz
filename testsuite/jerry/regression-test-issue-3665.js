













var idx1 = 32.6;
var idx2 = 42.7;
var obj = { [idx1] : { [idx2] : {}}};
([obj[idx1][idx2]] = [5.7]);

assert (obj[idx1][idx2] === 5.7);
