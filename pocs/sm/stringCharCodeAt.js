print("foo".charCodeAt(-123), NaN);
print("foo".charCodeAt(-0), 102);
print("foo".charCodeAt(0), 102);
print("foo".charCodeAt(2), 111);
print("foo".charCodeAt(3.4), NaN);
print("foo".charCodeAt(), 102);
print("".charCodeAt(), NaN);
print("".charCodeAt(0), NaN);


function charCodeAt1(x) {
    return "abc".charCodeAt(x);
}
print(charCodeAt1(-1), NaN);
print(charCodeAt1(0), 97);
print(charCodeAt1(1), 98);
print(charCodeAt1(2), 99);
print(charCodeAt1(3), NaN);
print(charCodeAt1(1234), NaN);


function charCodeAt2(x) {
    return "abc".charCodeAt(x);
}
print(charCodeAt2(-1.3), NaN);
print(charCodeAt2(-0), 97);
print(charCodeAt2(2), 99);
print(charCodeAt2(2.3), 99);
print(charCodeAt2(3.14), NaN);
print(charCodeAt2(NaN), 97);


function charCodeAt3(s, i) {
    var s2 = "abcdef" + s + "12345";
    return s2.charCodeAt(i);
}
print(charCodeAt3("abcdef", 14), 51);
print(charCodeAt3("a" + "b", 1), 98);
print(charCodeAt3("abcdefg" + "hijklmnop", 10), 101);


var n = new Number(123);
n.charCodeAt = String.prototype.charCodeAt;
print(n.charCodeAt(1), 50);


