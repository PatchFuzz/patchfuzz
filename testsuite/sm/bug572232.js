
gczeal(11);
var o = { valueOf: function() { new Object(); gc(); return 17; } };
(new String.prototype.substring(o)).toString;
