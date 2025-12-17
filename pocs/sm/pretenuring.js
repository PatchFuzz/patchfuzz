gczeal(0);
gcparam("semispaceNurseryEnabled", 0);

gcparam("minNurseryBytes", 4096 * 1024);
gcparam("maxNurseryBytes", 4096 * 1024);
gc();


print(nurseryStringsEnabled(), true);


print(isNurseryAllocated("foo"), false);


print(isNurseryAllocated((1234).toString()), true);


let s = "bar";
print(isNurseryAllocated("foo" + s), true);


print(isNurseryAllocated("foobar".substr(1)), true);


print(isNurseryAllocated(newString("foobar", { tenured: true })), false);
print(isNurseryAllocated(newString("foobar", { tenured: false })), true);



let a = [];
for (let i = 1; i < 500000; i++) {
  a.push(i.toString());
}
gc();
print(nurseryStringsEnabled(), false);
a = undefined;




gc();
print(nurseryStringsEnabled(), false);
let initGCNumber = gcparam('majorGCNumber');
while (!nurseryStringsEnabled() && gcparam('majorGCNumber') < initGCNumber + 3) {
  for (let i = 1; i < 100000; i++) {
    a = i.toString();
  }
}
print(nurseryStringsEnabled(), true);
