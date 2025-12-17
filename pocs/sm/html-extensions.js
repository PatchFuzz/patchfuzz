var noParamFuns = ["".bold, "".italics, "".fixed, "".strike, "".small, "".big,
	           "".blink, "".sup, "".sub];
var noParamTags = ["b", "i", "tt", "strike", "small", "big",
		   "blink", "sup", "sub"];

function testNoParam(s) {
    for (var i=0; i<noParamFuns.length; i++) {
	var fun = noParamFuns[i];
	print(fun.length, 0);
	var res = fun.call(s);
	var tag = noParamTags[i];
	print(res, "<" + tag + ">" + String(s) + "</" + tag + ">");
    }
}
testNoParam("Foo");
testNoParam('aaa"bbb\'c<>123');
testNoParam(123);


testNoParam({toString: () => 1, valueOf: () => { throw "fail"; } });

print("".anchor.length, 1);
print("".link.length, 1);
print("".fontsize.length, 1);
print("".fontcolor.length, 1);


String.prototype[Symbol.replace] = function() {
    throw "Shouldn't call @@replace";
};


print("bla\"<>'".anchor("foo'<>\"\"123\"/\\"),
	 "<a name=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</a>");
print("bla\"<>'".link("foo'<>\"\"123\"/\\"),
	 "<a href=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</a>");
print("bla\"<>'".fontsize("foo'<>\"\"123\"/\\"),
	 "<font size=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</font>");
print("bla\"<>'".fontcolor("foo'<>\"\"123\"/\\"),
	 "<font color=\"foo'<>&quot;&quot;123&quot;/\\\">bla\"<>'</font>");

print("".anchor('"'), '<a name="&quot;"></a>');
print("".link('"'), '<a href="&quot;"></a>');
print("".fontcolor('"'), '<font color="&quot;"></font>');
print("".fontsize('"'), '<font size="&quot;"></font>');

print("".anchor('"1'), '<a name="&quot;1"></a>');
print("".link('"1'), '<a href="&quot;1"></a>');
print("".fontcolor('"1'), '<font color="&quot;1"></font>');
print("".fontsize('"1'), '<font size="&quot;1"></font>');

print("".anchor('"""a"'), '<a name="&quot;&quot;&quot;a&quot;"></a>');
print("".link('"""a"'), '<a href="&quot;&quot;&quot;a&quot;"></a>');
print("".fontcolor('"""a"'), '<font color="&quot;&quot;&quot;a&quot;"></font>');
print("".fontsize('"""a"'), '<font size="&quot;&quot;&quot;a&quot;"></font>');

print("".anchor(""), '<a name=""></a>');
print("".link(""), '<a href=""></a>');
print("".fontcolor(""), '<font color=""></font>');
print("".fontsize(""), '<font size=""></font>');

print("foo".anchor(), "<a name=\"undefined\">foo</a>");
print("foo".link(), "<a href=\"undefined\">foo</a>");
print("foo".fontcolor(), "<font color=\"undefined\">foo</font>");
print("foo".fontsize(), "<font size=\"undefined\">foo</font>");

print("foo".anchor(3.14), '<a name="3.14">foo</a>');
print("foo".link(3.14), '<a href="3.14">foo</a>');
print("foo".fontcolor(3.14), '<font color="3.14">foo</font>');
print("foo".fontsize(3.14), '<font size="3.14">foo</font>');

print("foo".anchor({}), '<a name="[object Object]">foo</a>');
print("foo".link(Math), '<a href="[object Math]">foo</a>');
print("foo".fontcolor([1,2]), '<font color="1,2">foo</font>');
print("foo".fontsize({}), '<font size="[object Object]">foo</font>');




var count = 0;
var o1 = {toString: () => { return count += 1; }, valueOf: () => { throw "fail"; } };
var o2 = {toString: () => { return count += 5; }, valueOf: () => { throw "fail"; } };
print("".anchor.call(o1, o2), '<a name="6">1</a>');
print("".link.call(o1, o2), '<a href="12">7</a>');
print("".fontcolor.call(o1, o2), '<font color="18">13</font>');
print("".fontsize.call(o1, o2), '<font size="24">19</font>');
print(count, 24);
