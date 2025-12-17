evalcx("\
    var x = newGlobal().Object;\
    function f() { return new x; }\
    f();\
    f();\
", newGlobal());
