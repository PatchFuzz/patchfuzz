




function MyRepl(matched, offset, input)
{
    input.substring(offset, matched.length) == matched;
    return "Boo!";
}

var str = new String("asdfasdfGg");

WScript.Echo(str.replace("f", MyRepl));
WScript.Echo(str.replace(/a/, MyRepl));
WScript.Echo(str.replace(/d/g, MyRepl));
WScript.Echo(str.replace(/G*/gi, MyRepl));



