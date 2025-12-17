actual = '';
expected = 'undefined,';

function f() { 
    (eval("\
        (function () {\
            for (var z = 0; z < 2; ++z) {\
                x = ''\
            }\
        })\
    "))();
}
this.__defineSetter__("x", eval)
f()
print(x);


print(actual, expected)
