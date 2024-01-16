




Object.defineProperty(Object.getPrototypeOf({}), "echo", { value: function () { WScript.Echo(this); } });
Object.defineProperty(Object.getPrototypeOf({}), "echos", { value: function () { WScript.Echo(JSON.stringify(this)); } });
Object.defineProperty(Object.getPrototypeOf({}), "echoChars", {
    value: function () {
        var chars = [];
        var that = String(this);
        for (var i = 0; i < that.length; i++) {
            chars.push(that.charCodeAt(i));
        }
        chars.echos();
    }
});
Object.defineProperty(Object.getPrototypeOf({}), "echoCP", {
    value: function () {
        var chars = [];
        var that = String(this);
        for (var i = 0; i < that.length;) {
            var cp = that.codePointAt(i);
            chars.push(cp);
            i += cp > 0x10000 ? 2 : 1;
        }
        chars.echos();
    }
});


try {
    eval('/./\\u0069'); 
} catch (e) {
    e.echo();
}
try {
    eval('var test = "\\u{0}"'); 
} catch (e) {
    e.echo();
}
try {
    eval('var test = "\\u{00}"'); 
} catch (e) {
    e.echo();
}

try {
    eval('var test = "\\u{000}"');
} catch (e) {
    e.echo();
}

try {
    eval('var test = "\\u{0000000}"');
} catch (e) {
    e.echo();
}

try {
    eval('var test = "\\u{200000}"'); 
} catch (e) {
    e.echo();
}

try {
    new RegExp("[\u{0}-\u{1}]"); 
} catch (e) {
    e.echo();
}

try {
    new RegExp("[\u{10000}-\u{10001}]"); 
} catch (e) {
    e.echo();
}

try {
    new RegExp("[\u{10000}-\u{10001}]", "u"); 
} catch (e) {
    e.echo();
}

try {
    new RegExp(/\u{10FFFF}/,"u");
}
catch (e)
{
    print ("Unexpected error " + e);
}

try {
    new RegExp(/\u{110000}/, "u");
}
catch (e)
{
    print (e);
}


eval('var test = "\\u{0000}"');



/\u{1}/.test("\u0001").echo();
/\u{01}/.test("\u0001").echo();
/\u{001}/.test("\u0001").echo();
/\u{0000001}/.test("\u0001").echo();

/\u{1}/.test("\u{0001}").echo();
/\u{01}/.test("\u{0001}").echo();
/\u{001}/.test("\u{0001}").echo();
/\u{0000001}/.test("\u{0001}").echo();


/\u{0001}/.test("\u0001").echo();
/\u{00001}/.test("\u0001").echo();

/\u{0001}/.test("\u{0001}").echo();
/\u{00001}/.test("\u{0001}").echo();

try{
    new RegExp("[\\u{1000}-\\u{1001}]").test("\u{1001}").echo();
} catch (ex) {
    ex.echo();
}
try{
    eval("/[\\u{1000}-\\u{1001}]/").test("\u{1001}").echo(); 
} catch (ex) {
    ex.echo();
}


/\u{1}/u.test("\u0001").echo();
/\u{01}/u.test("\u0001").echo();
/\u{001}/u.test("\u0001").echo();
/\u{0000001}/u.test("\u0001").echo();

/\u{1}/u.test("\u{0001}").echo();
/\u{01}/u.test("\u{0001}").echo();
/\u{001}/u.test("\u{0001}").echo();
/\u{0000001}/u.test("\u{0001}").echo();


/\u{0001}/u.test("\u0001").echo();
/\u{00001}/u.test("\u0001").echo();

/\u{0001}/u.test("\u{0001}").echo();
/\u{00001}/u.test("\u{0001}").echo();


var validStrings = [ "\u{1}", "\u{10}", "\u{100}", "\u{1000}", "\u{10000}", "\u{100000}", "\u{10FFFF}", "\u{00000001000}", "\u{00000000000000000000000000000}"];
var validIDs = [ "\u{41}", "\u{0041}", "\u{00041}", "\u{20BB7}", "\u{0000000020BB7}" ];
validStrings.forEach(function (str) {
    eval("/" + str + "/.test('" + str + "').echo()");
});

validIDs.forEach(function (str) {
    eval("/" + str + "/.test('" + str + "').echo()");
});

var invalidStrings = ["\\u\{\}", "\\u\{1000000000\}", "\\u\{110000\}"];

invalidStrings.forEach(function (str){
    try{
        eval(invalidStrings + ".echo()");
    } catch(ex){
        ex.echo();
    }
});

/a\u{}b/.test("au\{\}b").echo();
/a\u{1}b/.test("a\u0001b").echo();
/a\u{1.1}b/.test("au\{1.1\}b").echo();
/a\u{110000}b/.test("a" + (Array(110001).join('u')) +"b").echo();
/a\u{11FFFF}b/.test("au\{11FFFF\}b").echo();
/a\u{10FFFF}b/.test("a\uDBFF\uDFFFb").echo();

/a\u{1000000}b/.test("au\{1000000\}b").echo();
/a\u{1.1}b/.test("a\u0001b").echo();
/a\u{1}b/.test("a\\ub").echo();
/a\u{1}b/.test("aub").echo();
/a\u{}b/.test("a\u{0}b").echo();

/a\u{}b/u.test("au\{\}b").echo();
/a\u{1}b/u.test("a\u0001b").echo();
/a\u{1.1}b/u.test("au\{1.1\}b").echo();
/a\u{110000}b/.test("a" + (Array(110001).join('u')) +"b").echo();
/a\u{11FFFF}b/.test("au\{11FFFF\}b").echo();
/a\u{10FFFF}b/.test("a\uDBFF\uDFFFb").echo();

/a\u{1000000}b/.test("au\{1000000\}b").echo();
/a\u{1.1}b/u.test("a\u0001b").echo();
/a\u{1}b/u.test("a\\ub").echo();
/a\u{1}b/u.test("aub").echo();
/a\u{}b/u.test("a\u{0}b").echo();


try {
  eval("var do\u0061 = 5;");
} catch(e) {
  e.echo();
}