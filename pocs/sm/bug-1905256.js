gczeal(0);
gc();

let key = {};
let value = {}
let wm = new WeakMap();
wm.set(key, value);
grayRoot()[0] = wm;
addMarkObservers([key, wm, value])
wm = undefined;
value = undefined;


gczeal(11);


gczeal(8);


startgc(1);
print(gcstate(), "Mark");


key = undefined;


while (gcstate() !== "NotActive") {
  gcslice(1);
}
gczeal(0);

print(getMarks().join(), "black,gray,gray");
