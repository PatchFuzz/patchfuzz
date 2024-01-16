




if (true) 
{
    const c = 1;
    WScript.Echo(c);
}

WScript.Echo((function(x) {
    let y = arguments;
    return y;
})(1)[0]);

let a = 'a';
(function(a) { WScript.Echo(a) })();
WScript.Echo(a);