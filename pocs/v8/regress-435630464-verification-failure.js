delete String.prototype.concat;

gc();
gc();
gc();
gc();



%VerifyGetJSBuiltinState(false);
