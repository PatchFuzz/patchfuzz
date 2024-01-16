
































var source = Array(25000).join("(") + "a" + Array(25000).join(")");
var r = RegExp(source);
try {
  
  r.test("\x80");
  assertUnreachable();
} catch (e) {
}


gc();
