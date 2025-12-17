function f() {
    var proto = {60: "ok"};
    Object.preventExtensions(proto);
    var o = Object.create(proto);
    for (var i = 0; i < 65; i++) {
	o[i] = i;
	if (i === 50)
	    Object.freeze(proto);
    }
    print(o[60], "ok");
    print(o[61], 61);
}
f();
