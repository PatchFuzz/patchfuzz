function __f_1(g) { return (g/-1) ^ 1; }
var __v_0 = 1 << 31;
var __v_2 = __f_1(__v_0);
caught = false;
try {
  Realm.eval(__v_2, "Realm.global(0).y = 1");
} catch (e) {
  caught = true;
}
print(caught, "exception not caught");
