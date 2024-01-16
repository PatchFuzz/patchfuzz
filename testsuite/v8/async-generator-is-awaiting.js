










Object.defineProperty(Promise.prototype, 'constructor', {
  get() { throw 42; }
});


{
  async function *f() {
    try {
      await new Promise(() => {});
    } catch (e) {
    }
  }

  f().next();
}


{
  async function *f() {
    try {
      yield new Promise(() => {});
    } catch (e) {
    }
  }

  f().next();
}





