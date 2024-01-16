













var t;

t = new RegExp ("^alma$").exec("alma");
assert (t == "alma");

t = new RegExp ("^alma$").exec("almaa");
assert (t == undefined);

t = new RegExp ("^alma$").exec("aalma");
assert (t == undefined);

t = new RegExp ("^alma").exec("alma");
assert (t == "alma");

t = new RegExp ("^alma").exec("almaa");
assert (t == "alma");

t = new RegExp ("^alma").exec("aalma");
assert (t == undefined);

t = new RegExp ("alma$").exec("alma");
assert (t == "alma");

t = new RegExp ("alma$").exec("almaa");
assert (t == undefined);

t = new RegExp ("alma$").exec("aalma");
assert (t == "alma");

t = new RegExp ("\\bis\\b").exec("This island is beautiful");
assert (t == "is");

t = new RegExp ("\\Bis\\B").exec("This island is beautiful");
assert (t == undefined);

t = new RegExp ("\\Bis").exec("This island is beautiful");
assert (t == "is");

t = new RegExp ("is\\B").exec("This island is beautiful");
assert (t == "is");

t = new RegExp ("\\Bis\\b").exec("This island is beautiful");
assert (t == "is");

t = new RegExp ("\\bis\\B").exec("This island is beautiful");
assert (t == "is");

t = new RegExp ("al(?=(ma))").exec("al");
assert (t == undefined);

t = new RegExp ("al(?!(ma))").exec("ala");
assert (t[0] == "al");
assert (t[1] == undefined);

t = new RegExp ("al(?=(ma))").exec("alma");
assert (t[0] == "al");
assert (t[1] == "ma");

t = new RegExp ("al(?=(ma))").exec("almama");
assert (t[0] == "al");
assert (t[1] == "ma");

t = new RegExp ("(al)(?=(ma))ma").exec("al");
assert (t == undefined);

t = new RegExp ("(al)(?=(ma)ma)").exec("al");
assert (t == undefined);

t = new RegExp ("al(?=(ma))*ma").exec("alma");
assert (t[0] == "alma");
assert (t[1] == undefined);

t = new RegExp ("al(?!(ma))*ma").exec("alma");
assert (t[0] == "alma");
assert (t[1] == undefined);

t = new RegExp ("al(?=(ma))ma").exec("alma");
assert (t[0] == "alma");
assert (t[1] == "ma");

t = new RegExp ("al(?!(ma))ma").exec("alma");
assert (t == undefined);

t = new RegExp ("(al)(?=(ma))ma").exec("almama");
t = new RegExp ("(al)(?=(ma)ma)").exec("almama");

t = new RegExp ("al(?=(ma))ma").exec("almama");
assert (t[0] == "alma");
assert (t[1] == "ma");

t = new RegExp ("al(?=(ma)ma)").exec("almama");
assert (t[0] == "al");
assert (t[1] == "ma");

t = new RegExp ("al(?!(ma))ma").exec("almama");
assert (t == undefined);

t = new RegExp ("a(?=(a)(a))aab|aaac").exec("aaac");
t = new RegExp ("a(?=(a)(a))aab|aaac").exec("aaab");

t = new RegExp ("(?!(a)b)|ab").exec("ab");
assert (t[0] == "ab");
assert (t[1] == undefined);

t = new RegExp ("(?=(a)b)|ab").exec("ab");
assert (t[0] == "");
assert (t[1] == "a");

t = new RegExp ("(?=a|.)Dt").exec("Dt");
assert (t == "Dt");

t = new RegExp ("(?=.|a)Dt").exec("Dt");
assert (t == "Dt");

t = new RegExp ("(?=a|b)Dt").exec("Dt");
assert (t == undefined);

t = new RegExp ("(?=.|P)").exec("a");
assert (t == "");

t = new RegExp ("(?=.)").exec("a");
assert (t == "");

t = new RegExp ("(?!a|.)Dt").exec("Dt");
assert (t == undefined);

t = new RegExp ("(?!.|a)Dt").exec("Dt");
assert (t == undefined);

t = new RegExp ("(?!a|b)Dt").exec("Dt");
assert (t == "Dt");

t = new RegExp ("(?!.|P)").exec("a");
assert (t == "");

t = new RegExp ("(?!.)").exec("a");
assert (t == "");

t = new RegExp ("abc","g");
t.lastIndex = {toString: function () { return "4"}};
var result = t.exec("abc   abc");
assert(result[0] === "abc");
assert(result.index === 6);

t = new RegExp ("abc","g");
t.lastIndex = {valueOf: function () { return "4"}};
var result = t.exec("abc   abc");
assert(result[0] === "abc");
assert(result.index === 6);

t = new RegExp ("abc","g");
t.lastIndex = "2"
var result = t.exec("abc   abc");
assert(result[0] === "abc");
assert(result.index === 6);
