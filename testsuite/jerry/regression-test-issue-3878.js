













var d = new Date();

var s = d.setHours();
assert (typeof s === "number" && isNaN (s));

var g = d.getHours();
assert (typeof g === "number" && isNaN (g));
