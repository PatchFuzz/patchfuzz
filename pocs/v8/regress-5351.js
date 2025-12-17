var re = /[bc]/;
var str = "baba";

print(["", "a", "a"], str.split(re));


re.exec = (string) => RegExp.prototype.exec.call(re, string);
print(["", "a", "a"], str.split(re));
