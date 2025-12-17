var count = 0;
function f(x) {
    try {
	if (x < 0)
	    throw "negative";
	if (x & 1)
	    return "odd";
	count++;
    } finally {
	count += 3;
    }

    return "even";
}
for (var i=0; i<15; i++) {
    var res = f(i);
    if ((i % 2) === 0)
	print(res, "even");
    else
	print(res, "odd");
}
try {
    f(-1);
    print(0, 1);
} catch(e) {
    print(e, "negative");
}

print(count, 56);
