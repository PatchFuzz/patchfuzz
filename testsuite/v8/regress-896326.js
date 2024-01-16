





function f() {
}

var large_array = Array(150 * 1024);
assertThrows('new f(... large_array)', RangeError);
