print("foo".charAt(-123), "");
print("foo".charAt(-1), "");
print("foo".charAt(0), "f");
print("foo".charAt(1), "o");
print("foo".charAt(2), "o");
print("foo".charAt(3.4), "");
print("foo".charAt(), "f");
print("".charAt(), "");
print("".charAt(0), "");
print("abc\u9123".charAt(3), "\u9123"); 


function charAt1(x) {
    return "abc".charAt(x);
}
print(charAt1(-1), "");
print(charAt1(0), "a");
print(charAt1(1), "b");
print(charAt1(2), "c");
print(charAt1(3), "");
print(charAt1(1234), "");


function charAt2(x) {
    return "abc".charAt(x);
}
print(charAt2(-1.3), "");
print(charAt2(-0), "a");
print(charAt2(2), "c");
print(charAt2(2.3), "c");
print(charAt2(3.14), "");
print(charAt2(NaN), "a");


function charAt3(s, i) {
    var s2 = "abcdef" + s + "12345";
    return s2.charAt(i);
}
print(charAt3("abcdef", 14), "3");
print(charAt3("a" + "b", 1), "b");
print(charAt3("abcdefg" + "hijklmnop", 10), "e");


var arr = [1, 2];
arr.charAt = String.prototype.charAt;
print(arr.charAt(1), ",");


