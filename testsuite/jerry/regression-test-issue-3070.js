













var r = new RegExp("([X]{6}|.*)", "g");
var s = "a";
s.replace(r, () => r.compile("[PqaCZlWQUT]{0}", "m"));
