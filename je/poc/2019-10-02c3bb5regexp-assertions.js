













var t;

t = new RegExp ("^alma$").exec("alma");
print(t == "alma");

t = new RegExp ("^alma$").exec("almaa");
print(t == undefined);

t = new RegExp ("^alma$").exec("aalma");
print(t == undefined);

t = new RegExp ("^alma").exec("alma");
print(t == "alma");

t = new RegExp ("^alma").exec("almaa");
print(t == "alma");

t = new RegExp ("^alma").exec("aalma");
print(t == undefined);

t = new RegExp ("alma$").exec("alma");
print(t == "alma");

t = new RegExp ("alma$").exec("almaa");
print(t == undefined);

t = new RegExp ("alma$").exec("aalma");
print(t == "alma");

t = new RegExp ("\\bis\\b").exec("This island is beautiful");
print(t == "is");

t = new RegExp ("\\Bis\\B").exec("This island is beautiful");
print(t == undefined);

t = new RegExp ("\\Bis").exec("This island is beautiful");
print(t == "is");

t = new RegExp ("is\\B").exec("This island is beautiful");
print(t == "is");

t = new RegExp ("\\Bis\\b").exec("This island is beautiful");
print(t == "is");

t = new RegExp ("\\bis\\B").exec("This island is beautiful");
print(t == "is");

t = new RegExp ("al(?=(ma))").exec("al");
print(t == undefined);

t = new RegExp ("al(?!(ma))").exec("ala");
print(t[0] == "al");
print(t[1] == undefined);

t = new RegExp ("al(?=(ma))").exec("alma");
print(t[0] == "al");
print(t[1] == "ma");

t = new RegExp ("al(?=(ma))").exec("almama");
print(t[0] == "al");
print(t[1] == "ma");

t = new RegExp ("(al)(?=(ma))ma").exec("al");
print(t == undefined);

t = new RegExp ("(al)(?=(ma)ma)").exec("al");
print(t == undefined);

t = new RegExp ("al(?=(ma))*ma").exec("alma");
print(t[0] == "alma");
print(t[1] == undefined);

t = new RegExp ("al(?!(ma))*ma").exec("alma");
print(t[0] == "alma");
print(t[1] == undefined);

t = new RegExp ("al(?=(ma))ma").exec("alma");
print(t[0] == "alma");
print(t[1] == "ma");

t = new RegExp ("al(?!(ma))ma").exec("alma");
print(t == undefined);

t = new RegExp ("(al)(?=(ma))ma").exec("almama");
t = new RegExp ("(al)(?=(ma)ma)").exec("almama");

t = new RegExp ("al(?=(ma))ma").exec("almama");
print(t[0] == "alma");
print(t[1] == "ma");

t = new RegExp ("al(?=(ma)ma)").exec("almama");
print(t[0] == "al");
print(t[1] == "ma");

t = new RegExp ("al(?!(ma))ma").exec("almama");
print(t == undefined);

t = new RegExp ("a(?=(a)(a))aab|aaac").exec("aaac");
t = new RegExp ("a(?=(a)(a))aab|aaac").exec("aaab");

t = new RegExp ("(?!(a)b)|ab").exec("ab");
print(t[0] == "ab");
print(t[1] == undefined);

t = new RegExp ("(?=(a)b)|ab").exec("ab");
print(t[0] == "");
print(t[1] == "a");

t = new RegExp ("(?=a|.)Dt").exec("Dt");
print(t == "Dt");

t = new RegExp ("(?=.|a)Dt").exec("Dt");
print(t == "Dt");

t = new RegExp ("(?=a|b)Dt").exec("Dt");
print(t == undefined);

t = new RegExp ("(?=.|P)").exec("a");
print(t == "");

t = new RegExp ("(?=.)").exec("a");
print(t == "");

t = new RegExp ("(?!a|.)Dt").exec("Dt");
print(t == undefined);

t = new RegExp ("(?!.|a)Dt").exec("Dt");
print(t == undefined);

t = new RegExp ("(?!a|b)Dt").exec("Dt");
print(t == "Dt");

t = new RegExp ("(?!.|P)").exec("a");
print(t == "");

t = new RegExp ("(?!.)").exec("a");
print(t == "");

t = new RegExp ("abc","g");
t.lastIndex = {toString: function () { return "4"}};
var result = t.exec("abc   abc");
print(result[0] === "abc");
print(result.index === 6);

t = new RegExp ("abc","g");
t.lastIndex = {valueOf: function () { return "4"}};
var result = t.exec("abc   abc");
print(result[0] === "abc");
print(result.index === 6);

t = new RegExp ("abc","g");
t.lastIndex = "2"
var result = t.exec("abc   abc");
print(result[0] === "abc");
print(result.index === 6);
