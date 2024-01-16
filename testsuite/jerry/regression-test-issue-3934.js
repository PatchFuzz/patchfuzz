













var r = /(?:(?:^b?)*)*a/.exec("bbba")

assert (r !== null);
assert (r.index === 3);
assert (r[0] === "a");
