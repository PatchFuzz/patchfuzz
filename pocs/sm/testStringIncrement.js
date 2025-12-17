var a, b;

function f(str) {
    var n;
    var k;
    for (var i = 0; i < 18; ++i) {
	n = str;
	k = n++;
	if (k) { }
    }
    return [k, n];
}

[a, b] = f("10");
print(a, 10);
print(b, 11);

[a, b] = f("5");
print(a, 5);
print(b, 6);
