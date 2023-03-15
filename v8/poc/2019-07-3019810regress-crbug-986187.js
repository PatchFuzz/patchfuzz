





var obj = {}
obj.__proto__ = null;
Object.defineProperty(obj, "prop", {
  set: gc
});
for (var i = 0; i < 100 ; ++i) {
  obj["prop"] = 0;
}
