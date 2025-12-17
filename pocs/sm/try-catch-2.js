function f() {
    try {
	throw 3;
    } catch(e) {
    }

    var res = 0;
    for (var i=0; i<40; i++)
	res += 2;
    return res;
}
print(f(), 80);
