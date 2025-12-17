var obj = {};


function* g() {
    obj.x = 0;
    yield 1;
}
var x = 2, n = 0;
with (obj) {
    for (x of g())  
        n++;
}
print(x, 2);
print(obj.x, 1);
print(n, 1);


function* h() {
    delete obj.x;
    yield 3;
}
n = 0;
with (obj) {
    for (x of h())  
        n++;
}
print(x, 3);
print("x" in obj, false);
print(n, 1);
