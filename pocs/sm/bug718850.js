function f() {
	var i = 0;
	while (i < 100 && 1 == 1) {
		i++;
	}
	return i;
}

print(f(), 100);
