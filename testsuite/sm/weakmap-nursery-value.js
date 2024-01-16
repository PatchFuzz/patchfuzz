



gczeal(0);



if (!this.enqueueMark) quit(0);

var wm = new WeakMap();



wm.set({}, {});

var tenuredKey = Object.create(null);
gc(); 



startgc(1);
while (gcstate() === "Prepare") gcslice(1);


var nurseryValue = Object.create(null);
wm.set(tenuredKey, nurseryValue);




enqueueMark(wm);

gcslice(1000);
minorgc();
