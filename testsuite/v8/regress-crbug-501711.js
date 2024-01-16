





function f() {
  try {
    f();
  } catch(e) {
    try {
      Realm.create();
    } catch (e) {
      quit();
    }
  }
}
f();
