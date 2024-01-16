





load(libdir + "evalInFrame.js");

[1,2,3,4,(':'),6,7,8].forEach(
    function(x) {
        assertEq(evalInFrame(0, ('^')), x);
    }
);
