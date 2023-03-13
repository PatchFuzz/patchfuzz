













var r;

r = new RegExp ();
print(r.source == "(?:)");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);

r = new RegExp ("a");
print(r.source == "a");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);

r = new RegExp ("a","gim");
print(r.source == "a");
print(r.global == true);
print(r.ignoreCase == true);
print(r.multiline == true);

r = RegExp ("a");
print(r.source == "a");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);

r = RegExp ("a","gim");
print(r.source == "a");
print(r.global == true);
print(r.ignoreCase == true);
print(r.multiline == true);

var r2;

r2 = RegExp (r);
print(r2.source == "a");
print(r2.global == true);
print(r2.ignoreCase == true);
print(r2.multiline == true);

r2 = RegExp (r, undefined);
print(r2.source == "a");
print(r2.global == true);
print(r2.ignoreCase == true);
print(r2.multiline == true);

r = /(?:)/;
print(r.source == "(?:)");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);

r = /a/;
print(r.source == "a");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);

r = /a/gim;
print(r.source == "a");
print(r.global == true);
print(r.ignoreCase == true);
print(r.multiline == true);


r1 = new RegExp();
r2 = new RegExp(undefined);
var foo;
r3 = new RegExp(foo)

print(r1.source === r2.source);
print(r2.source === r3.source);

r = new RegExp ("foo", undefined);
print(r.source === "foo");
print(r.global === false);
print(r.ignoreCase === false);
print(r.multiline === false);

r = new RegExp ("foo", void 0);
print(r.source === "foo");
print(r.global === false);
print(r.ignoreCase === false);
print(r.multiline === false);

try {
  new RegExp (undefined, "ii");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

try {
  new RegExp ("", "gg");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

try {
  new RegExp (void 0, "mm");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

r = new RegExp (undefined, undefined);
print(r.source == "(?:)");
print(r.global == false);
print(r.ignoreCase == false);
print(r.multiline == false);


print(RegExp.length === 2);

var r = RegExp ("a","gim");
var r2 = RegExp (r,"gim");
var r3 = RegExp (r);

print(r2.source === 'a');
print(r2.global === true);
print(r2.ignoreCase === true);
print(r2.multiline === true);

print(r3.source === 'a');
print(r3.global === true);
print(r3.ignoreCase === true);
print(r3.multiline === true);

var obj = { get source() { throw 5 }, [Symbol.match] : true }

try {
  new RegExp (obj);
  print(false)
} catch (e) {
  print(e === 5);
}

r = new RegExp ("a","gimuy");
print(r.global === true);
print(r.ignoreCase === true);
print(r.multiline === true);
print(r.unicode === true);
print(r.sticky === true);

try {
  new RegExp ("a", "uu");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}

try {
  new RegExp ("a", "yy");
  print(false);
} catch (e) {
  print(e instanceof SyntaxError);
}
