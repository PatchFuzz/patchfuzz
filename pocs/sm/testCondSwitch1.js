function get(x) {
    return x;
}

function f(x) {
    switch(x) {
    case get(0):
        return 0;
    case get(1):
        return 1;
    case get("foo"):
        return "foo";
    case get(true):
        return true;
    case get(false):
        return false;
    case get({}):
        return {};
    case get(null):
        return null;
    case Number.MIN_VALUE:
        return Number.MIN_VALUE;
    case Math:
        return Math;
    default:
        return -123;
    }
}

print(f(0), 0);
print(f(-0), 0);
print(f(1), 1);
print(f("foo"), "foo");
print(f(true), true);
print(f(false), false);
print(f({}), -123);
print(f([]), -123);
print(f(Math), Math);

print(f({x:1}), -123);
print(f(333), -123);
print(f(null), null);
print(f(undefined), -123);

print(f(Number.MIN_VALUE), Number.MIN_VALUE);

