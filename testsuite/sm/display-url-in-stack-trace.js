eval(`
  function a() {
    return b();
  }
  
`);

eval(`
  function b() {
    return c();
  }
  
`);

eval(`
  function c() {
    return Error().stack;
  }
  
`);

let filenames = a().split(/\n/)
                   .map(f => f.slice(f.indexOf("@") + 1, f.indexOf(":")));
print(filenames.join("\n"));
assertEq(filenames[0], "source-c.js");
assertEq(filenames[1], "source-b.js");
assertEq(filenames[2], "source-a.js");
