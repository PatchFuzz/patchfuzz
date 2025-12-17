function f1(a, bIs, cIs, dIs, b=a, c=5, d=c) {
    print(a, 1);
    print(b, bIs);
    print(c, cIs);
    print(d, dIs);
}
f1(1, 1, 5, 5);
f1(1, 42, 5, 5, 42);
f1(1, 42, 43, 43, 42, 43);
f1(1, 42, 43, 44, 42, 43, 44);
function f2(a=[]) { return a; }
print(f2() !== f2(), true);
function f3(a=function () {}) { return a; }
print(f3() !== f3(), true);
function f4(a=Date) { return a; }
print(f4(), Date);
Date = 0;
print(f4(), 0);
function f5(x=FAIL()) {};  
var n = 0;
function f6(a=n++) {}
print(n, 0);
function f7([a, b], A=a, B=b) {
    print(A, a);
    print(B, b);
}
f7([0, 1]);
