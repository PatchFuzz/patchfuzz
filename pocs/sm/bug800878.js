;

[1,2,3,4,(':'),6,7,8].forEach(
    function(x) {
        print(evalInFrame(0, ('^')), x);
    }
);
