function f(x) {
    var count = 0;
    for (var i = 0; i < x.length; ++i)
	count++;
    return count;
}
print(f(Error()), 0);
print(f([[]]), 1);
