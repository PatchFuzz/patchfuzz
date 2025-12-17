var o = Object("str");
o.toString = function() { throw "toString error" };

try {
  JSON.stringify(o);
  assert(false);
} catch (e) {
  assert(e === "toString error");
}
