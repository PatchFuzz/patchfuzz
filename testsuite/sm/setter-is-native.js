
setJitCompilerOption("ion.forceinlineCaches", 1);


var obj = Object.defineProperty({}, "prop", {
  set: eval
});

var p;
for (let i = 0; i < 1000; ++i) {
  
  obj.prop = `p = ${i}`;

  assertEq(p, i);
}
