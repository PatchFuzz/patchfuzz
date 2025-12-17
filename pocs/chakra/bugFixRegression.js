function echo(o) {
    try {
        document.write(o + "<br/>");
        echo = function(o) { document.write(o + "<br/>"); };
    } catch (ex) {
        try {
            print("" + o);
            echo = function(o) { print("" + o); };
        } catch (ex2) {
            print("" + o);
            echo = function(o) { print("" + o); };
        }
    }
}

var suppressLastIndex = false;
var suppressRegExp = false;
var suppressIndex = false;

function safeCall(f) {
    var args = [];
    for (var a = 1; a < arguments.length; ++a)
        args.push(arguments[a]);
    try {
        return f.apply(this, args);
    } catch (ex) {
        echo("EXCEPTION");
    }
}

hex = "0123456789abcdef";

function dump(o) {
    var sb = [];
    if (o === null)
        sb.push("null");
    else if (o === undefined)
        sb.push("undefined");
    else if (o === true)
        sb.push("true");
    else if (o === false)
        sb.push("false");
    else if (typeof o === "number")
        sb.push(o.toString());
    else if (typeof o == "string") {
        if (o.length > 8192)
            sb.push("<long string>");
        else {
            sb.push("\"");
            var start = -1;
            for (var i = 0; i < o.length; i++) {
                var c = o.charCodeAt(i);
                if (c < 32 || c > 127 || c == '"'.charCodeAt(0) || c == '\\'.charCodeAt(0)) {
                    if (start >= 0)
                        sb.push(o.substring(start, i));
                    start = -1;
                    sb.push("\\u");
                    sb.push(String.fromCharCode(hex.charCodeAt((c >> 12) & 0xf)));
                    sb.push(String.fromCharCode(hex.charCodeAt((c >> 8) & 0xf)));
                    sb.push(String.fromCharCode(hex.charCodeAt((c >> 4) & 0xf)));
                    sb.push(String.fromCharCode(hex.charCodeAt((c >> 0) & 0xf)));
                }
                else {
                    if (start < 0)
                        start = i;
                }
            }
            if (start >= 0)
                sb.push(o.substring(start, o.length));
            sb.push("\"");
        }
    }
    else if (o instanceof RegExp) {
        var body = o.source;
        sb.push("/");
        var start = -1;
        for (var i = 0; i < body.length; i++) {
            var c = body.charCodeAt(i);
            if (c < 32 || c > 127) {
                if (start >= 0)
                    sb.push(body.substring(start, i));
                start = -1;
                sb.push("\\u");
                sb.push(String.fromCharCode(hex.charCodeAt((c >> 12) & 0xf)));
                sb.push(String.fromCharCode(hex.charCodeAt((c >> 8) & 0xf)));
                sb.push(String.fromCharCode(hex.charCodeAt((c >> 4) & 0xf)));
                sb.push(String.fromCharCode(hex.charCodeAt((c >> 0) & 0xf)));
            }
            else {
                if (start < 0)
                    start = i;
            }
        }
        if (start >= 0)
            sb.push(body.substring(start, body.length));
        sb.push("/");
        if (o.global)
            sb.push("g");
        if (o.ignoreCase)
            sb.push("i");
        if (o.multiline)
            sb.push("m");
        if (!suppressLastIndex && o.lastIndex !== undefined) {
            sb.push("  ");
        }
    }
    else if (o.length !== undefined) {
        sb.push("[");
        for (var i = 0; i < o.length; i++) {
            if (i > 0)
                sb.push(",");
            sb.push(dump(o[i]));
        }
        sb.push("]");
        if (!suppressIndex && (o.input !== undefined || o.index !== undefined))
        {
            sb.push("  ");
        }
    }
    else if (o.toString !== undefined) {
        sb.push("<object with toString>");
    }
    else
        sb.push(o.toString());
    return sb.join("");
}

function pre(w, origargs, n) {
    var sb = [w];
    sb.push("(");
    for (var i = 0; i < n; i++) {
        if (i > 0) sb.push(", ");
        sb.push(dump(origargs[i]));
    }
    if (origargs.length > n) {
        sb.push(", ");
        sb.push(dump(origargs[n]));
        origargs[0].lastIndex = origargs[n];
    }
    sb.push(");");
    echo(sb.join(""));
}

function post(r) {
    if (!suppressLastIndex) {
        echo("r.lastIndex=" + dump(r.lastIndex));
    }
    if (!suppressRegExp) {
        
        
        
        var sb = [];
        sb.push("RegExp.${_,1,...,9}=[");
        sb.push(dump(RegExp.$_));
        for (var i = 1; i <= 9; i++) {
            sb.push(",");
            sb.push(dump(RegExp["$" + i]));
        }
        sb.push("]");
        echo(sb.join(""));
    }
}

function exec(r, s) {
    pre("exec", arguments, 2);
    echo(dump(r.exec(s)));
    post(r);
}

function test(r, s) {
    pre("test", arguments, 2);
    echo(dump(r.test(s)));
    post(r);
}

function replace(r, s, o) {
    pre("replace", arguments, 3);
    echo(dump(s.replace(r, o)));
    post(r);
}

function split(r, s) {
    pre("split", arguments, 2);
    echo(dump(s.split(r)));
    post(r);
}

function match(r, s) {
    pre("match", arguments, 2);
    echo(dump(s.match(r)));
    post(r);
}

function search(r, s) {
    pre("search", arguments, 2);
    echo(dump(s.search(r)));
    post(r);
}

function bogus(r, o) {
    echo("bogus(" + dump(r) + ", " + dump(o) + ");");
    try { new RegExp(r, o); echo("FAILED"); } catch (e) { echo("PASSED"); }
}


var r, s;


s = 'abc       ';
r = /(a)/g;
exec(r, 'slkfg');
echo("$1="+RegExp.$1);
r = /(ab)/g;
match(r, s);
exec(r, 'slkfg');
echo("$1="+RegExp.$1);
r = /(abc)/g;
exec(r, s);
exec(r, 'slkfg');
echo("$1="+RegExp.$1);
r = /(abcd)/g;
exec(r, s);
exec(r, s);
echo("$1="+RegExp.$1);
r = /(abcde)/g;
exec(r, 'slkfg');
echo("$1="+RegExp.$1);
r = /((abc)def)/g;
replace(r, 'xyz abcdef    abcdef xys', ".$1$2.");
echo("$3="+RegExp.$3);
echo("$2="+RegExp.$2);
echo("$1="+RegExp.$1);

exec(/q(a)*q/, "qaq");
exec(/q(ab)*q/, "qababq");
exec(/q(a|b)*q/, "xxqababqyy");
exec(/q(a|bc)*q/, "xxqbcbdqbcbcqyy");
exec(/q(?:a|(b))*q/, "xxqababqyy");
exec(/q(?:a|(bc))*q/, "xxqbcbdqbcbcqyy");

exec(/1{1,3}/, "1111");
match(/1{1,4}/g, "1211111");

exec(/a*$/, "b");
exec(/a*/, "b");
match(/a*/g, "b");

replace(/(a?)b(\1){2,3}/g, "abaa b", "c");
match(/(?:a?){1,2}/, "b");
match(/(?:a?){1,3}/, "b");
match(/(?:a?){2,3}/, "b");
match(/(a?){1,2}/, "ab");
match(/(a?){1,3}/, "ab");
match(/(a?){2,3}/, "ab");
match(/(?:(a)?){1,2}/, "ab");
match(/(?:(a)?){1,3}/, "ab");
match(/(?:(a)?){2,3}/, "ab");
exec(/(?:(a)|b)+/, "ab");
exec(/(?:(a)|d?)+/, "ab");
exec(/(?:(a)|\1b)+/, "aab");
exec(/(?:(a)|b\1){1,2}/, "aba");

exec(/(?:a?)*b/, "a");
exec(/(?:(?:a*)*)b/, "a");
exec(/(?:(?:a*?)*)b/, "a");
exec(/(^(?:.|\r|\n)*?):((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\3\))?(?![^\[]*\])(?![^\(]*\))/, ":contains('Google')");
exec(/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w\-]+)$/, "#main");

exec(/(?:a(?=b))*bc/, "aabc");
exec(/(?:a(?=b))*/, "aabc");
exec(/(?:a(?=aab))+/, "aaab");
exec(/(?:a(?=b?|[^b]))*/, "aabc");
exec(/(?:a(?=b*|[^b]))*/, "aabc");
exec(/(?:a(?=b|[^b]))*/, "aabc");
exec(/(?:[^?#](?![^?#\/]*\.[^?#\/.]+))*/, "a/a.a");
exec(/^((((?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, "a/6237/8200/13977-9.js?cb=0.05630486307449717");
r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
exec(r, "_http://optimized-by.rubiconproject.com/a/6237/8200/13977-9.js?cb=0.05630486307449717");
exec(r, "engine_-and-_drivetrain/clutches-comma-_flywheels_-and-_components.html");

exec(/()|/, "");
exec(/a|()|/, "");
exec(/(?:a|())a/, "a");

r = /^([^a-z0-9_-])?([a-z0-9_-]+)(.*)/i;
match(r, "#search-form");
match(r, ".relevant");

exec(/([A-Z]|[a-z]|[-_,'(){}/:\. ]|[0-9]|[^#$&%])+/, "Fbl_uex_cxe_dev4");
match(/^\s*(\S+(\s+\S+)*)\s*$/, "Fbl_uex_cxe_dev4");

replace(/^([ &-]|(of))*/i, " of london", "");
replace(/^([ &-]|(of))*/i, "ofindcoolstuff.com", "");
match(/(?:(?:kw|!c)=[^;]*;)+/, "kw=top;kw=home;kw=indexv2;!c=top;!c=home;!c=indexv2;sz=88x31;");

exec(/(?:a|b)*(b+)/, "ababb");
exec(/(?:a|b)*(a?)/, "ababa");
exec(/(ab.*)*(.*)/, "ab");
exec(/(?:(?:[^:]*):\/\/(?:[^:\/?]*)(?::(?:[0-9]+))?)?([^?#a]*|[^#]*)(?:[?](?:[^#]*))?(?:#(?:.*))?/, "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283");
exec(/(?:(?:[^:]*):\/\/(?:[^:\/?]*)(?::(?:[0-9]+))?)?(([^?#a]*)|([^#]*))(?:[?](?:[^#]*))?(?:#(?:.*))?/, "http://shop.ebay.com/i.html?rt=nc&LH_FS=1&_nkw=dell+optiplex&_fln=1&_trksid=p3286.c0.m283");

match(/\xz/, "xz");
match(/\uz/, "uz");
match(/[\xz]/g, "xz");
match(/[\uz]/g, "uz");



exec(/a*b|c*/, "ac");
exec(/a|b*|c|d/, "");
exec(/a|b(?=e)|c*|d/, "b");
exec(/a|b(?=e)|c*/, "b");
exec(/a|b(?=e)|c*(?=f)|d/, "b");
exec(/a|b(?=e)|c*(?=b)|d/, "b");
exec(/a|b*(?=e)|c*|d/, "b");

exec(/[^ ]+(?:\s*,\s*)?/g, "thead th");
exec(/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]+['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[]+)+|[>+~])(\s*,\s*)?/g, "thead th");
exec(/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, "form:not(#views-exposed-form-equipment-search-page-1) .views-exposed-widgets #edit-searchbox-wrapper input");

r = /a*/g;
s = "aa";
exec(r, s);
exec(r, s);
exec(r, s);
exec(r, s);
r.lastIndex = 0;
test(r, s);
test(r, s);
test(r, s);
test(r, s);
r.lastIndex = 0;
match(r, s);
exec(r, s);
suppressLastIndex = true; 
replace(r, s, "bc");
suppressLastIndex = false;

echo('"".match()');
var result = "".match();
echo("result is array: " + (result instanceof Array));
echo("result.length = " + result.length);
echo("result[0] = " + (result[0] === "" ? '""' : result[0]));
echo("result.input = " + (result.input === "" ? '""' : result.input));
echo("result.index = " + result.index);

safeCall(eval, "/(?:|)(?=a)/");
safeCall(eval, "/(?:|)(?!a)/");

safeCall(eval, "/[]|/;");
match(/[]|[](?:)/, "");
safeCall(eval, "/(?=[]ab|)/");
safeCall(eval, "/(?:|(?=(?:(?:[]-a]||)))((R)+?))(?!(?:i))/");

match(true ? /a/ : /a/, "a");
match(false ? /a/ : /a/, "a");


match(/\d?/g, "");
exec(/a?/, "ba");
exec(/(a*|\*)([#.])([a]+)/, "#at16filt");
exec(/((>>)a*|^a*($))/i, "buy>>");
exec(/([^a]$)|(^a)/, "www.moviesunlimited.com");
exec(/(a){0,2}(?:a?|b)/, "aaaa");
replace(/([\s]|[^a]\+|^)([#])/g, "#sub #secondary #simple", "$1*$2");
replace(/([\s]|[^a]+|^)([#])/g, "#sub #secondary #simple", "$1*$2");
exec(/a?|b/, "b");
split(/a|^/, "XaXaX");
exec(/($)/, "abc");
exec(/(\S)+/, "ab");
exec(/(a)|.{0}/, "ax");
exec(/\B/, "a ");
exec(/((?:ex)$)|(^[0-9]$)/i, "ABCex");
replace(/A(.)|B/, "B", "$1");
match(/^a(b|c)?/, "abc");
match(/(#)?([0-9a-f]*)/i, "#40000000");
match(/(Stores)$|^a/, "4 Stores");
match(/(z.|[^z])+/g, ".container");
replace(/(get|query)(Element[s]?|Selector)?(By(Class|Tag|Id|Attr)|All)?(Name|ibute)?/, "getElementsByClassName", "$1$3");
exec(/([\W]*)(\b\s*$)/, "The band's music and image (the two men perform in robot suits/helmets, for starters) has always had a noticable ");
exec(/(?:)/, "");
exec(/(c|(ab))*/, "cabcc");
match(/(^|.*)ckeditor/i, "http://ckeditor");
exec(/(?:a(?=b))?/, "ac");
exec(/^(a\1?){4}$/, "aaaaaaaaaa");
replace(/((a)\1{0})/, "aa", "b");
exec(/([ab]|a\1)b/, "aab");
exec(/\1((?=((?=\2))|G)\3)|(?!z{1,5}){4,}|(?=.+?)(P|L*)|(?!P|A)|\3|(?!")?|(?=(\5))/, "");
exec(/((?=$)|(?!-))?/, "");
match(/(\w+(\.|))+\./, "a.b");
match(/(\w+(?:\.|))+\./, "a.b");
match(/(i_event_domain=)(([a-z0-9]+(\.|))+\.[a-z]{2,3})/, "i_area_id=17&i_object_id=40394285&i_event_domain=port.hu&i_country_id=44");



match(/(?:|a{0}b)?c/, "bc");


var str = "";
for(var i = 0; i < 1024; ++i)
    str += "b";
str = "<aaaaaaaaaaaaaaa>" + str;
replace(/b/g, str, "$$");


safeCall(eval, "/[z-a]/");


exec(/a*(?:a?|b)/, "ababb");  
exec(/a*(?:a*|b)/, "ababb");  
exec(/a|b*|c|d/, "");         
exec(/a|()/, "c");            



var str = "";
for (var i = 0; i < 500; i++)
    str += "a";


exec(/(?!(.)+)/, str);



exec(/a^|b/, "ab");


var xx = String.fromCharCode("0x0080");
var pattern = eval("/" + xx + "/");
echo(dump(pattern.source));


var r = /\b\w+\b/g;
exec(r, "WT.z_acos");
exec(r, "excamp");
exec(r, "no_interstitial");


exec(/\d(?=\d|.)/, "ab");


exec(/\d{6}|\d|a/, "aaaa7a");

exec(/(?:\$\s*)?(?:(?:\d{0,3}(?:[, ]\d{0,3})*[, ])+\d{3}|\d+)(?:\.\d*)?(?:\s*\$)?$/, "$100 is less than 200$");


test(new RegExp("(?:r?)*?r|(.{2,4})", ""), "abcde");


exec(/([^:]+?:)?([x]*)+/, "x");






suppressRegExp = true; 
split(/(?=^)/, "b");
suppressRegExp = false;


exec(/(baa){3,4}/, "baabbaabaabaabaabbaababbaaabaaaaab");


exec(/b^|a/, "ba");


search(/(a$)?/, "aa");


exec(/(\3)(\1)(a)/, "cat");


exec(/\1(?=ecma3)/i, "\001ECMA3");


exec(/(?!^)b*c/, "bbc");


replace(/^\s*|\s*$/g, "    PH   ", "");


exec(/(a*)?/, "");
exec(/(a+)?/, "");
exec(/(?:a*)?/, "");
exec(/(?:a+)?/, "");
exec(/(?:a||b)?/, "b");

try {
    var r = new RegExp("[\\s-c-a]*", "");
    exec(r, " -abc");
}
catch (e) {
    echo("EXCEPTION");
}


exec(/x*(?:(?=x(y*)+)y|\1x)/, "xxy");


test(/^\cA$/, "\x01");
test(/^[\cA]$/, "\x01");





test(/(?:|)x/, "x");
test(/(?:ab|ac|)x/, "acx");
test(/(?:ab|ac|)x/, "x");
test(/(?:ab|bc|)x/, "bcx");
test(/(?:ab|bc|)x/, "x");
