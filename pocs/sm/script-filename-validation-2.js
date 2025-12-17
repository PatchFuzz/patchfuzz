;
;




var g = newGlobal({cloneSingletons: true});
test = `
  print(generation, 0);
`;
print(() => {
  evalWithCache(test, {
    global: g,
    checkAfter: function (ctx) {
      print(g.generation, 0);
      setTestFilenameValidationCallback();
    }
  });
}, g.InternalError);


print(g.generation, 1);
