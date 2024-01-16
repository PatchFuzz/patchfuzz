





























function F() {}

F.prototype = 1;
var o = {};

assertThrows("o instanceof F");
