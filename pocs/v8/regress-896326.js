function f() {
}

var large_array = Array(150 * 1024);
print('new f(... large_array)', RangeError);
