JSON.stringify & (Date = 1);

b = 1;
this.a = 2;
this.a
b = 3;
assert(b == 3);
assert(a == 2);
this.a & (b = 4);
assert(b == 4);
assert(a == 2);
