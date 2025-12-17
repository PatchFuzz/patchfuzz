var count = 0;



function test1() {
    try {
	return [1, 2, 3];
    } finally {
	for (var i=0; i<20; i++) { count++; }
    }
}
print(test1().toString(), "1,2,3");
print(count, 20);


function test2() {
    try {
	throw 3;
    } finally {
	for (var i=0; i<20; i++) { count++; }
    }
}
try {
    test2();
    print(0, 1);
} catch(e) {
    print(e, 3);
}
print(count, 40);
