



var re = /[bc]/;
var str = "baba";

assertEquals(["", "a", "a"], str.split(re));


re.exec = (string) => RegExp.prototype.exec.call(re, string);
assertEquals(["", "a", "a"], str.split(re));
