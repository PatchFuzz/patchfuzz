





try {
  var TA = Object.getPrototypeOf(Int8Array);
  var obj = Reflect.construct(TA, [], Int8Array);
  new Int8Array(4).set(obj);
} catch (e) {}
