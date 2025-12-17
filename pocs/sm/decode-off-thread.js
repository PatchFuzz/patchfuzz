function evalWithCacheLoadOffThread(code, ctx) {
  ctx = ctx || {};
  ctx = Object.create(ctx, {
    fileName: { value: "evalWithCacheCode.js" },
    lineNumber: { value: 0 }
  });
  code = code instanceof Object ? code : cacheEntry(code);

  
  if (!("global" in ctx))
    ctx.global = newGlobal();

  var ctx_save = Object.create(ctx, {
    saveBytecodeWithDelazifications: { value: true }
  });

  ctx.global.generation = 0;
  evaluate(code, ctx_save);

  offThreadDecodeStencil(code, ctx);
  ctx.global.eval(`
stencil = finishOffThreadStencil();
evalStencil(stencil);
`);
}

var test;


test = `
  1;
`;
evalWithCacheLoadOffThread(test, {});


test = `
  var obj = { a: 1, b: 2 };
  obj.a++;
  print(obj.a, 2);
`;
evalWithCacheLoadOffThread(test, {});


test = `
  function g() {
    return function f() { return 1; };
  };
  print(g()(), 1);
`;
evalWithCacheLoadOffThread(test, {});


