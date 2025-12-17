"use strict";
class Base {
}
class Derived extends Base {
  constructor() {
    eval();
  }
}
print("new Derived()", ReferenceError);
