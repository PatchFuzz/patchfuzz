function build_getter(i) {
    var x = [i];
    return function f() { return x; }
}

function test()
{
    var N = internalConst("MARK_STACK_BASE_CAPACITY") + 2;
    var o = {};
    var descriptor = { enumerable: true};
    for (var i = 0; i != N; ++i) {
	descriptor.get = build_getter(i);
	Object.defineProperty(o, i, descriptor);
    }

    
    
    
    
    
    
    
    
    
    gc();
    gc();
    for (var i = 0; i != N; ++i)
	print(o[i][0], i);
}

test();
