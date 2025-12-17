var r = Realm.create();
for (let i = 0; i < 3; i++) {
  var dst = {};
  var src = Realm.eval(r, "var o = {}; o.x = 1; o");
  Object.assign(dst, src);
}
