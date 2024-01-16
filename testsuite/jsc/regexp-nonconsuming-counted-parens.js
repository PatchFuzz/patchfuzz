

let re = /(.|.+?|\d*)*x/;

let str = "zzzz";
if (re.test(str))
    throw re + ".test(\"" + str + "\") should return false, but returned true.";

s = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz";
if (re.test(str))
    throw re + ".test(\"" + str + "\") should return false, but returned true.";
