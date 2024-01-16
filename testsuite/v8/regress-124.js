


























assertEquals("[object global]", this.toString());
assertEquals("[object Undefined]", toString());

assertEquals("[object global]", eval("this.toString()"));
assertEquals("[object Undefined]", eval("toString()"));

assertEquals("[object global]", eval("var f; this.toString()"));
assertEquals("[object Undefined]", eval("var f; toString()"));


function F(f) {
  assertEquals("[object global]", this.toString());
  assertEquals("[object Undefined]", toString());

  assertEquals("[object global]", eval("this.toString()"));
  assertEquals("[object Undefined]", eval("toString()"));

  assertEquals("[object global]", eval("var f; this.toString()"));
  assertEquals("[object Undefined]", eval("var f; toString()"));

  assertEquals("[object Undefined]", eval("f()"));

  
  assertEquals("[object Arguments]", eval("arguments[0]()"));
  with (arguments) {
    assertEquals("[object Arguments]", toString());
  }
}

F(Object.prototype.toString);
