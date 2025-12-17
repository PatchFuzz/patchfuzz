class A extends Function {
  constructor(...args) {
    super(...args);
    this.a = 42;
    this.d = 4.2;
    this.o = 0;
  }
}
var obj = new A("'use strict';");
obj.o = 0.1;
