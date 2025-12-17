;

var f = a => { this.a = a; };
print(() => new f, TypeError);
print(() => new f(1, 2), TypeError);
