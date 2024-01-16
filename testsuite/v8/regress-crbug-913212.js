



const globalThis = this;
Object.setPrototypeOf(this, new Proxy({}, {
  has() { return true; },
  getOwnPropertyDescriptor() {
    assertUnreachable("getOwnPropertyDescriptor shouldn't be called."); },
  get(target, prop, receiver) {
    assertTrue(receiver === globalThis);
  }
}));
undefined_name_access
