"abcdefg".match(/(x)y(z)/g);
print(RegExp.$1, "");

print("abcdef".match(/a(b)cd/g)[0], "abcd");
print(RegExp.$1, "b");
print(RegExp.$2, "");

"abcdef".match(/(a)b(c)/g);
print(RegExp.$1, "a");
print(RegExp.$2, "c");
print(RegExp.$3, "");

"abcabdabe".match(/(a)b(.)/g);
print(RegExp.$1, "a");
print(RegExp.$2, "e");

"abcdefg".match(/(x)y(z)/g);
print(RegExp.$1, "a");    

"abcdefg".match(/(g)/g);
print(RegExp.$1, "g");
