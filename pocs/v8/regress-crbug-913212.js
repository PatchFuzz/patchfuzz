const globalThis = this;
Object.setPrototypeOf(this, new Proxy({}, {
  has() { return true; },
  getOwnPropertyDescriptor() {
    print("getOwnPropertyDescriptor shouldn't be called."); },
  get(target, prop, receiver) {
    print(receiver === globalThis);
  }
}));
undefined_name_access
