




function Execute(str)
{
    try {
        eval(str);
    }
    catch (e) {
        WScript.Echo(e);
    }
}





Execute("var hello=10; WScript.Echo(hello); WScript.Echo(h\\u0065llo);");

Execute("var h\u0065llo=20; WScript.Echo(hello); WScript.Echo(h\\u0065llo);");

Execute("WScript.Echo(h\\u0065llo2);");



Execute("WScript.Echo(fals\\u0065);");
Execute("var a = fals\\u0065; WScript.Echo(a);");
Execute("var b = tru\\u0065; WScript.Echo(b);");


Execute("var c = var;");
Execute("var c = v\\u0061r;");
Execute("var c = else;");
Execute("var c = els\\u0065;");


Execute("var false=30; WScript.Echo(false); WScript.Echo(fals\\u0065);");
Execute("var var=30; WScript.Echo(var); WScript.Echo(v\\u0061r);");
Execute("var fals\\u0065=40; WScript.Echo(false); WScript.Echo(fals\\u0065);");
Execute("var v\\u0061r=30; WScript.Echo(var); WScript.Echo(v\\u0061r);");


Execute("var x1={};x1.else = 10;WScript.Echo(x1.else);");
Execute("var x2={};x2.els\\u0065 = 10;WScript.Echo(x2.els\\u0065);");


Execute("var x1={};x1.double = 10;WScript.Echo(x1.double);");
Execute("var x2={};x2.doubl\\u0065 = 10;WScript.Echo(x2.doubl\\u0065);");


Execute("function else() {};");
Execute("function els\\u0065() {};");


Execute("function double() {};");
Execute("function doubl\\u0065() {};");
