





try {
  var TA = Object.getPrototypeOf(Int8Array);
  var obj = Reflect.construct(TA, [], Int8Array);
  Int8Array.prototype.values.call(obj).next();
} catch (e) {}
