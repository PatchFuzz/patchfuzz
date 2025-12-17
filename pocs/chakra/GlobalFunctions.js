var a = eval("1+1");
eval("a");
eval.foo = "Expando_In_Eval_Ok";
print(eval.foo);

var nn = isNaN(Number.NaN);
print("test: isNaN(Number.NaN) : " + nn);

nn = isNaN(123);
print("test: isNaN(123) : " + nn);
isNaN.foo = "Expando_In_IsNaN_Ok";
print(isNaN.foo);

nn = isFinite(Number.POSITIVE_INFINITY);
print("test: isFinite(Number.POSITIVE_INFINITY) : " + nn);

nn = isFinite(123);
print("test: isFinite(123) : " + nn);
isFinite.foo = "Expando_In_IsFinite_Ok";
print(isNaN.foo);

function GetCharCodes(str) {
    var result = [];
    str.split("").forEach(function(_,i,a) {
      result.push(a[i].charCodeAt(0));
    });

    return result.join();
}

print("*** Test URI  functions ***");
var checkChar = "\u00a9";
print("Test print wchar: \"\\u00a9\" ");
print(GetCharCodes(checkChar) == "169");

var a = encodeURI("\u00a9");
print("Test encode : encodeURI(\"\\u00a9\");");
var a = encodeURI("\u00a9");
print(a);

print("Test decode back: ")
var b = decodeURI(encodeURI("\u00a9"));
print(GetCharCodes(b) == "169");

print("Test encode :  encodeURI(\"http:\/\/www.isp.com\/app.cgi?arg1=1&arg2=hello world\");");
a = encodeURI("http://www.isp.com/app.cgi?arg1=1&arg2=hello world");
print(a);
print("Test decode back: ")
b = decodeURI(encodeURI("http://www.isp.com/app.cgi?arg1=1&arg2=hello world"));
print(b);


print("Test encode component : encodeURIComponent(\"http\");");
a = encodeURIComponent("http");
print(a);
print("Test decode component back: ")
b = decodeURIComponent(encodeURIComponent("http"));
print(b);

print("Test encode component : encodeURIComponent(\"\/\/www.isp.com\/app.cgi\");");
a = encodeURIComponent("
print(a);
print("Test decode component back: ")
b = decodeURIComponent(encodeURIComponent("
print(b);

print("Test encode component : encodeURIComponent(\"arg1=1&arg2=hello world\");");
a = encodeURIComponent("arg1=1&arg2=hello world");
print(a);
print("Test decode component back: ")
b = decodeURIComponent(encodeURIComponent("arg1=1&arg2=hello world"));
print(b);

print("Test global constants: ");
print(Infinity);
print(undefined);

print("Escape Unescape ");
print(escape("Hello World"));
print(unescape("Hello%20World"));
print(unescape(escape("foo bar")));
print(unescape("It%27s%20a%20test%21"));
