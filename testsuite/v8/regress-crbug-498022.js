





"use strict";
class Base {
}
class Derived extends Base {
  constructor() {
    eval();
  }
}
assertThrows("new Derived()", ReferenceError);
