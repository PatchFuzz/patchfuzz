var delicate = new Object();
delicate.toString = function(){ throw Error("toString"); };
delicate.valueOf = function(){ throw Error("valueOf"); };

var x = { foo: delicate };

var status = "fail";
try {
  Object.getOwnPropertyDescriptor(x, "foo");
  Object.freeze(x);
  status = "succeed";
} catch (e) {}

print("succeed", status);
