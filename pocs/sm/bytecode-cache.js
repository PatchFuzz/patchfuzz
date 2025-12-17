function evalWithCache(code, ctx) {
  ctx = ctx || {};
  ctx = Object.create(ctx, {
    fileName: { value: "evalWithCacheCode.js" },
    lineNumber: { value: 0 }
  });
  code = code instanceof Object ? code : cacheEntry(code);

  var collectDelazifications = ctx.collectDelazifications || false;

  
  if (!("global" in ctx))
      ctx.global = newGlobal({newCompartment: ctx.newCompartment});

  var ctx_save = Object.create(ctx, {
    saveBytecodeWithDelazifications: { value: true }
  });

  
  
  
  var checkAfter = ctx.checkAfter || function(ctx) {};

  
  
  
  ctx.global.generation = 0;
  var res1 = evaluate(code, ctx_save);
  checkAfter(ctx);

  ctx.global.generation = 1;
  var res2 = evaluate(code, Object.create(ctx_save, {loadBytecode: { value: true } }));
  checkAfter(ctx);

  ctx.global.generation = 2;
  var res3 = evaluate(code, Object.create(ctx, {loadBytecode: { value: true } }));
  checkAfter(ctx);

  ctx.global.generation = 3;
  var res0 = evaluate(code, ctx);
  checkAfter(ctx);

  if (ctx.assertEqResult) {
    print(res0, res1);
    print(res0, res2);
    print(res0, res3);
  }

  if (ctx.checkFrozen) {
    print(Object.isFrozen(res0), Object.isFrozen(res1));
    print(Object.isFrozen(res0), Object.isFrozen(res2));
    print(Object.isFrozen(res0), Object.isFrozen(res3));
  }
}
