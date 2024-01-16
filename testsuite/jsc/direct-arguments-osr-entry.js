



var args;

function foo(a)
{
    args = arguments;
    var result = 0;
    for (var i = 0; i < 1000000; ++i) {
        (function() {
            return arguments[0];
        })(42);
        result += a;
    }
    return result;
}

noInline(foo);

foo(42);
