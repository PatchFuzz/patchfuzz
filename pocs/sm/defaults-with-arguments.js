function f(a=1, b=2, c=3) { return arguments; }
var args = f();
print(args.length, 0);
print("0" in args, false);
args = f(5, 6);
print(args.length, 2);
print(args[1], 6);
args = f(9, 8, 7, 6, 5);
print(args.length, 5);
print(args[4], 5);
