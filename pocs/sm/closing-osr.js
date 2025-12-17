var log = "";
function* f() {
    try {
	try {
	    log += "a";
	    yield 2;
	    log += "b";
	    yield 3;
	} finally {
	    log += "c";
	    for (var i=0; i<20; i++) {};
	    log += "d";
	}
    } catch(e) {
	log += "e";
    }
    log += "f";
}

var it = f();
print(it.next().value, 2);
it.return();
print(log, "acd");
