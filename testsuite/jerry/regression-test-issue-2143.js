













var a = new Uint8Array(2);

try {
  a[0] = { valueOf : function() { throw "intoint"; } };
  assert(false);
} catch (e) {
  assert(e === "intoint")
}
