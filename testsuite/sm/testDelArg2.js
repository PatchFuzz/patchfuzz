function f(del) {
    o = arguments;
    if (del)
        delete o[2];
    for (var i = 0; i < 10; ++i)
        assertEq(o[2] == undefined, del);
}


f(false, 1,2,3,4);


f(true, 1,2,3,4);
