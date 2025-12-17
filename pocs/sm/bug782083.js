gcPreserveCode();
function r() {}
gczeal(2);
evaluate("");
evaluate("\
function randomFloat () {\
    if (r < 0.25)\
        fac = 10000000;\
}\
for (var i = 0; i < 2000; i++)\
    randomFloat();\
");
