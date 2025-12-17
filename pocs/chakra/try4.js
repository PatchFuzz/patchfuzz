function test(i) {
    try {
        var g = function (x) {
                    try {
                        eval("throw x;");
                    }
                    catch(b) {
                        print("g: caught " + b);
                    }
                };
        throw g;
    }
    catch (a) {
        return a;
    }
};

try {
    var g = function (x) {
                try {
                    throw x;
                }
                catch(b) {
                    print("g: caught " + b);
                    return x;
                }
            };
    throw g;
}
catch (a) {
    eval("print(a(6))");
}

test(1)(2);
