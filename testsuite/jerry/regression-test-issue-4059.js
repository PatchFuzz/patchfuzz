













try {
  new new Proxy(Function(), { get:String.fromCharCode })
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
