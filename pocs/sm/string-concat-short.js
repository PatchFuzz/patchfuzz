function f() {
    var res = 0;
    for (var i=0; i<100; i++) {
	var s = "test" + i;
	res += s.length;
	print(s[0], "t");
	print(s[3], "t");
	if (i > 90)
	    print(s[4], "9");
    }
    return res;
}
print(f(), 590);
