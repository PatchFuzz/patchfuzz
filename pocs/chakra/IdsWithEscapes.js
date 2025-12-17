function Execute(str)
{
    try {
        eval(str);
    }
    catch (e) {
        print(e);
    }
}





Execute("var hello=10; print(hello); print(h\\u0065llo);");

Execute("var h\u0065llo=20; print(hello); print(h\\u0065llo);");

Execute("print(h\\u0065llo2);");



Execute("print(fals\\u0065);");
Execute("var a = fals\\u0065; print(a);");
Execute("var b = tru\\u0065; print(b);");


Execute("var c = var;");
Execute("var c = v\\u0061r;");
Execute("var c = else;");
Execute("var c = els\\u0065;");


Execute("var false=30; print(false); print(fals\\u0065);");
Execute("var var=30; print(var); print(v\\u0061r);");
Execute("var fals\\u0065=40; print(false); print(fals\\u0065);");
Execute("var v\\u0061r=30; print(var); print(v\\u0061r);");


Execute("var x1={};x1.else = 10;print(x1.else);");
Execute("var x2={};x2.els\\u0065 = 10;print(x2.els\\u0065);");


Execute("var x1={};x1.double = 10;print(x1.double);");
Execute("var x2={};x2.doubl\\u0065 = 10;print(x2.doubl\\u0065);");


Execute("function else() {};");
Execute("function els\\u0065() {};");


Execute("function double() {};");
Execute("function doubl\\u0065() {};");
