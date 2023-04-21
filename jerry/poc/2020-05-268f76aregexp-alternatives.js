













var r;

r = new RegExp ("a|b");
print(r.exec("a") == "a");

r = new RegExp ("a|b");
print(r.exec("b") == "b");

r = new RegExp ("a|b|c");
print(r.exec("b") == "b");

r = new RegExp ("a|b|c");
print(r.exec("c") == "c");

r = new RegExp ("a|b|c|d");
print(r.exec("") == undefined);

r = new RegExp ("a|b|c|d");
print(r.exec("a") == "a");

r = new RegExp ("a|b|c|d");
print(r.exec("b") == "b");

r = new RegExp ("a|b|c|d");
print(r.exec("c") == "c");

r = new RegExp ("a|b|c|d");
print(r.exec("d") == "d");

r = new RegExp ("a|bb|c|d");
print(r.exec("e") == undefined);

r = new RegExp ("a|bb|c|d");
print(r.exec("bb") == "bb");

r = new RegExp ("a|bb|c|d");
print(r.exec("bba") == "bb");

r = new RegExp ("a|bb|c|d");
print(r.exec("bbbb") == "bb");

r = new RegExp ("a|bb|c|d");
print(r.exec("a") == "a");

r = new RegExp ("a|bb|c|d");
print(r.exec("b") == undefined);

r = new RegExp("(?:a|b)\\b|\\.\\w+", "g");
print(r.exec("name.lower()")[0] === ".lower")
