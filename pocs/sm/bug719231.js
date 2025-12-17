function f() {
	
	for (var y = 0; ; y++) {
		if (y == 55) break;
	}
	return y;
}

print(f(), 55);
