

gczeal(0);


const count = 1000;
let c = [];
let a = [];
for (let i = 0; i < count; i++) {
    c[i] = function() { this.a = 1; this.b = 0; this.c = 2; };
    a[i] = new c[i];
}


assertEq(gcstate(), "NotActive");
gczeal(21);
startgc(1);



assertEq(gcstate(), "Sweep");
gczeal(10);
unsetgczeal(20);
while (gcstate() == "Sweep") {
    oomAfterAllocations(2);
    gcslice(1);
    resetOOMFailure();
}


let x = c.length + a.length;
