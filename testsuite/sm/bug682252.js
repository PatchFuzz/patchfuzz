



re = new RegExp("([^b]*)+((..)|(\\3))+?Sc*a!(a|ab)(c|bcd)(<*)", "i");
var str = "aNULLxabcd";
str.replace(re, function(s) { return s; });
