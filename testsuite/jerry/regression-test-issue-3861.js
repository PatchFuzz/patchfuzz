













try {
  (function() {
    function* generatorFn() {}
    g = generatorFn()
    ownProto = Object.getPrototypeOf(g)
    sharedProto = Object.getPrototypeOf(ownProto)
    propertyIsEnumerable(sharedProto)
  })()
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
