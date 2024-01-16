function f(useArg2, arg2, expect) {
    var args = arguments;
    if (useArg2)
	args = arg2;

    print(args)
    assertEq(args.length, expect);
}


f(false, 0, 3);
f(false, 0, 3);
f(false, 0, 3);


var a = [1, 2, 3];
a.x = 9;

f(true, a, 3);
