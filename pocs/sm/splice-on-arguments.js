function splice_args () {
    args = arguments;
    return Array.prototype.splice.apply(args, [0, 5]);
}

var args;
var O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var A = splice_args.apply(undefined, O)


print(args[0], 5);
print(args[1], 6);
print(args[2], 7);
print(args[3], 8);
print(args[4], 9);
print(args.length, 5);


print(A[0], 0);
print(A[1], 1);
print(A[2], 2);
print(A[3], 3);
print(A[4], 4);
print(A.length, 5);


print(O[0], 0);
print(O[1], 1);
print(O[2], 2);
print(O[3], 3);
print(O[4], 4);
print(O[5], 5);
print(O[6], 6);
print(O[7], 7);
print(O[8], 8);
print(O[9], 9);
print(O.length, 10);
