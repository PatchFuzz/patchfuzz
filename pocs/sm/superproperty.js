class Base {
  get accessor() {
    return this.constructor.name;
  }
  method() {
    return this.constructor.name;
  }
}

class Derived extends Base {
  constructor() {
    super();
  }
  get accessor() {
    throw new Error("don't call this");
  }
  method() {
    throw new Error("don't call this");
  }
  field1 = super.accessor;
  field2 = super.method();
}

print(new Derived().field1, "Derived");
print(new Derived().field2, "Derived");

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
