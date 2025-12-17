print("[object global]", this.toString());
print("[object Undefined]", toString());

print("[object global]", eval("this.toString()"));
print("[object Undefined]", eval("toString()"));

print("[object global]", eval("var f; this.toString()"));
print("[object Undefined]", eval("var f; toString()"));


function F(f) {
  print("[object global]", this.toString());
  print("[object Undefined]", toString());

  print("[object global]", eval("this.toString()"));
  print("[object Undefined]", eval("toString()"));

  print("[object global]", eval("var f; this.toString()"));
  print("[object Undefined]", eval("var f; toString()"));

  print("[object Undefined]", eval("f()"));

  
  print("[object Arguments]", eval("arguments[0]()"));
  with (arguments) {
    print("[object Arguments]", toString());
  }
}

F(Object.prototype.toString);
