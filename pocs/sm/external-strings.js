print(newString("", {external: true}), "");
print(newString("abc", {external: true}), "abc");
print(newString("abc\0def\u1234", {external: true}), "abc\0def\u1234");

var o = {foo: 2, "foo\0": 4};
var ext = newString("foo", {external: true});
print(o[ext], 2);
var ext2 = newString("foo\0", {external: true});
print(o[ext2], 4);

eval(newString("print(1, 1)", {external: true}));


ext = newString("abc\0defg\0", {external: true});
print(ensureLinearString(ext), "abc\0defg\0");
print(ensureLinearString(ext), "abc\0defg\0");

for (var s of representativeStringArray())
    print(ensureLinearString(s), s);

for (var s of representativeStringArray())
    print(newString(s, {external: true}), s);

function testQuote() {
    for (var data of [["abc", "abc"],
		      ["abc\t", "abc\\t"],
		      ["abc\t\t\0", "abc\\t\\t\\x00"],
		      ["abc\\def", "abc\\\\def"]]) {
	try {
	    print(newString(data[0], {external: true}), false);
	} catch(e) {
	    print(e.toString().includes('got "' + data[1] + '",'), true)
	}
    }
}
testQuote();

function testMaybeExternal() {
    for (var i=0; i<10; i++) {
        var s = "abcdef4321" + i;
        print(newString(s, {maybeExternal: true}), s);
        if ((i % 2) === 0)
            print(ensureLinearString(newString(s, {maybeExternal: true})), s);
    }
}
testMaybeExternal();
gc();
testMaybeExternal();
