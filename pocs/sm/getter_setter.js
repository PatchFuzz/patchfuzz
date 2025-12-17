function f() {
    for (var i=0; i<20; i++) {
	var o = {x: 1,
		 get g1() { return this.x; },
		 set g2(v) { this.x = v; },
		 get 44() { return this.x },
		 set 44(v) { this.x = v; }
		};

	print(o.x, 1);
	print(o.g1, 1);
	print(o[44], 1);

	o.g2 = i;
	print(o.x, i);
	print(o.g1, i);
	print(o[44], i);

	o[44] = 33;
	print(o.x, 33);
	print(o.g1, 33);
	print(o[44], 33);
    }
}
f();
