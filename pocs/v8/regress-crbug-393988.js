var o = {};
Error.captureStackTrace(o);
Object.defineProperty(o, "stack", { value: 1 });
print(1, o.stack);
