load(libdir + "asserts.js");
load(libdir + 'bytecode-cache.js');




var g = newGlobal({cloneSingletons: true});
test = `
  assertEq(generation, 0);
`;
assertThrowsInstanceOf(() => {
  evalWithCache(test, {
    global: g,
    checkAfter: function (ctx) {
      assertEq(g.generation, 0);
      setTestFilenameValidationCallback();
    }
  });
}, g.InternalError);


assertEq(g.generation, 1);
