

gczeal(0);

gcparam("minNurseryBytes", 4096 * 1024);
gcparam("maxNurseryBytes", 4096 * 1024);
gc();


assertEq(nurseryStringsEnabled(), true);


assertEq(isNurseryAllocated("foo"), false);


assertEq(isNurseryAllocated((1234).toString()), true);


let s = "bar";
assertEq(isNurseryAllocated("foo" + s), true);


assertEq(isNurseryAllocated("foobar".substr(1)), true);


assertEq(isNurseryAllocated(newString("foobar", { tenured: true })), false);
assertEq(isNurseryAllocated(newString("foobar", { tenured: false })), true);



let a = [];
for (let i = 1; i < 500000; i++) {
  a.push(i.toString());
}
gc();
assertEq(nurseryStringsEnabled(), false);



a = undefined;
gc();
assertEq(nurseryStringsEnabled(), true);
