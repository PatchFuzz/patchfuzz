













var o = Object("str");
o.toString = function() { throw "toString error" };

try {
  JSON.stringify(o);
  print(false);
} catch (e) {
  print(e === "toString error");
}
