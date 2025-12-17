function f1() {
    foo:
    if ([1]) {
	bar:
	for (var i=0; i<100; i++) {
	    if (i > 60)
		break foo;
	}
	print(0, 1);
    }
    print(i, 61);
    return true;
}
print(f1(), true);


function f2() {
    foo:
    if ([1]) {
	for (var i=0; i<100; i++) {
	}
    }
    print(i, 100);
    return true;
}
print(f2(), true);


function f3() {
    foo: {
	if (true) {
	    for (var i=0; i<100; i++) {
	    }
	}
	return false;
    }
    print(i, 100);
    return true;
}
print(f3(), false);


function f4() {
    foo: {
	if (true) {
	    for (var i=0; i<100; i++)
		if (i > 70)
		    break foo;
	        if (i > 80)
		    break foo;
	}
	break foo;
    }
    print(i, 71);
    return true;
}
print(f4(), true);
