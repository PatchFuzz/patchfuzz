function f(x) {
    
    for (var j = 0; j < 100; j++) { };

    for (var i = 0; i < arguments.length; i++)
        print(arguments[i], i);
};
f(0, 1, 2, 3);
