













var r = /(?:(?:^b?)*)*a/.exec("bbba")

print(r !== null);
print(r.index === 3);
print(r[0] === "a");
