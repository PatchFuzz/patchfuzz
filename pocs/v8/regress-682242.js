class BaseClass {
  method() {
    return 1;
  }
}
class SubClass extends BaseClass {
  method(...args) {
    return super.method(...args);
  }
}
var a = new SubClass();
a.method();
