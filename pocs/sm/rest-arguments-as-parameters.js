function f1(...arguments) {
    print("1,2,3", arguments.toString());
}
f1(1, 2, 3);
function f2(arguments, ...rest) {
    print(arguments, 42);
    print("1,2,3", rest.toString());
}
f2(42, 1, 2, 3);