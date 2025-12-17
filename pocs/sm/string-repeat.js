;

print("abc".repeat(1), "abc");
print("abc".repeat(2), "abcabc");
print("abc".repeat(3), "abcabcabc");
print("a".repeat(10), "aaaaaaaaaa");
print("abc".repeat(0), "");
print("abc".repeat(2.9), "abcabc");

var myobj = {toString : () => "abc", repeat : String.prototype.repeat};
print(myobj.repeat(1), "abc");
print(myobj.repeat(2), "abcabc");

print(function() {
                         "abc".repeat(-1);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on negative arguments");
print(function() {
                         "abc".repeat(Number.POSITIVE_INFINITY);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on excedding maximum string length");
print(function() {
                         "abc".repeat(1 << 29);
                       }, RangeError,
                       "String.prototype.repeat should raise RangeError on excedding maximum string length");

print("".repeat(5), "");
print("".repeat(1 << 29), "");
