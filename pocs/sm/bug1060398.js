function test() {
    var c = 0;
    for (var i=0; i<20; i++) {
	var arr = [1];
	if (i > 5)
	    Object.defineProperty(arr, "length", { writable: false, value: 4 });
	try {
	    arr.push(2);
	} catch(e) {
	    print(e.toString().includes("length"), true);
	    c++;
	}
    }
    print(c, 14);
}
test();
