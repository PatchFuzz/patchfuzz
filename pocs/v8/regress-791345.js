(function(a) {
    var len = 0x80000000;
    arguments.length = len;
    Array.prototype.slice.call(arguments, len - 1, len);
}('a'));

(function(a) {
    var len = 0x40000000;
    arguments.length = len;
    Array.prototype.slice.call(arguments, len - 1, len);
}('a'));
