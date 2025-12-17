var a = [true, false];
for (var i = 0; i < 1e4; i++) {
	var str = "x: " + a[i & 1];
	if (i & 1) {
		print(str, "x: false");
	} else {
		print(str, "x: true");
	}
}
