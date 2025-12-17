var setter_value = 0;

this.__defineSetter__("a", function(v) { setter_value = v; });
eval("var a = 1");
print(1, setter_value);
print("value" in Object.getOwnPropertyDescriptor(this, "a"));

eval("with({}) { eval('var a = 2') }");
print("get" in Object.getOwnPropertyDescriptor(this, "a"));
print("value" in Object.getOwnPropertyDescriptor(this, "a"));
print(2, setter_value);



this.__defineSetter__("a", function(v) { print(); });
eval("function a() {}");
print("value" in Object.getOwnPropertyDescriptor(this, "a"));

this.__defineSetter__("b", function(v) { setter_value = v; });
try {
  eval("const b = 3");
} catch(e) { }
print(2, setter_value);

try {
  eval("with({}) { eval('const b = 23') }");
} catch(e) {
  print(e, TypeError);
}

this.__defineSetter__("c", function(v) { throw 42; });
try {
  eval("var c = 1");
  print();
} catch(e) {
  print(42, e);
  print("value" in Object.getOwnPropertyDescriptor(this, "c"));
}




__proto__.__defineSetter__("aa", function(v) { print(); });
eval("var aa = 1");
print(this.hasOwnProperty("aa"));

__proto__.__defineSetter__("bb", function(v) { print(); });
eval("with({}) { eval('var bb = 2') }");
print(this.hasOwnProperty("bb"));



__proto__.__defineSetter__("cc", function(v) { print(); });
eval("function cc() {}");
print(this.hasOwnProperty("cc"));

__proto__.__defineSetter__("dd", function(v) { print(); });
try {
  eval("const dd = 23");
} catch(e) {
  print();
}

try {
  eval("with({}) { eval('const dd = 23') }");
} catch(e) {
  print(e, TypeError);
}
