
























function write(a) {
    if (this.WScript == undefined) {
        document.write(a);
        document.write("</br>");
    }
    else
        WScript.Echo(a)
}





 try
 {
   Array.prototype.sort.call(document);
    write(" Array.prototype.sort.slice(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.sort.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.slice.call(document);
    write(" Array.prototype.shift.slice(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.slice.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.shift.call(document);
    write(" Array.prototype.shift.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.shift.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.reverse.call(document);
    write(" Array.prototype.reverse.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.reverse.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.push.call(document);
    write(" Array.prototype.push.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.push.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.pop.call(document);
    write(" Array.prototype.pop.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.pop.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Array.prototype.join.call(document);
    write(" Array.prototype.join.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Array.prototype.join.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
   Object.prototype.propertyIsEnumerable.call(document);
    write(" Object.prototype.propertyIsEnumerable.call(document); ends without error;- expected ES5 ")
 }
 catch(o)
 {
     write(" Object.prototype.propertyIsEnumerable.call(document);; throws;;   -expected: es3 TypeError ::: " + o)
 }

 try
 {
    delete this;
    write(" delete this; ends without error; ")
 }
 catch(o)
 {
     write(" delete this; throws;;   -expected: es3, es5 TypeError ::: " + o)
 }

 try
 {
    var xnew = new Object();
    var y = new xnew();
    write(" var xnew = new Object(); var y = new xnew(); ends without error; ")
 }
 catch(o)
 {
     write(" var xnew = new Object(); var y = new xnew(); throws;;   -expected: es3, es5 TypeError ::: " + o)
 }


 try
 {
    var x = new Object();
    var y = x.ffm;
    write(" var x = new Object(); var y = x.ffm; ends without error; ")
 }
 catch(o)
 {
     write(" var x = new Object(); var y = x.ffm; throws;;   -expected: es3, es5 TypeError ::: " + o)
 }


 try
 {
    var x = new Object();
    x.ff();
    write(" var x = new Object(); x.ff() ends without error; ")
 }
 catch(o)
 {
     write("var x = new Object(); x.ff() throws;;   -expected: es3, es5 TypeError ::: " + o)
 }





 try
 {
    var x = function ff(){return "inner";}();
    
    ff();
    write("var x = function f(){return \"inner\";}() ends without error; ")
 }
 catch(o)
 {
     write("var x = function f(){return \"inner\";}();   -expected: es3, es5 R3eferenceError ::: " + o)
 }

 try
 {
    fg();
    write("call to undefined fg() ends without error;  ")
 }
 catch(o)
 {
     write("call to undefined fg() throws;   -expected: es3 - TypeError, es5-ReferenceError ::: " + o)
 }



try
{
var ooj= new Object();
    ooj();
}
catch(o)
{
    write(" call to an non function object ooj();;;   -expected: es3, es5 TypeError ::: " + o)
}

try
{
var o_undef= undefined;
    o_undef();
}
catch(o)
{
    write(" o_undef();;;   -expected: es3, es5 TypeError ::: " + o)
}


try
{
var o_null= null;
    o_null();
}
catch(o)
{
    write(" o_null();;;   -expected: es3, es5 TypeError ::: " + o)
}




try
{
    undefined.toString();}
catch(o)
{
    write("undefined.toString();   -expected: es3, es5 TypeError ::: " + o)
}

try
{
    null.anchor();
}
catch(o)
{
    write(" null.anchor();;   -expected: es3, es5 TypeError ::: " + o)
}

try
{
    NaN.anchor();
}
catch(o)
{
    write(" NaN.anchor();;   -expected: es3, es5 TypeError ::: " + o)
}


try
{
    true.anchor();
}
catch(o)
{
    write(" true.anchor();;   -expected: es3, es5 TypeError ::: " + o)
}



try
{
    var x = new Array(12.4);
    write("new Array(12.4)  - no exception: not expected es3, es5")
}
catch(o)
{
    write("new Array(12.4) - RangeError exception:  expected in es3 and es5::: " + o)
}


try
{
    var x = new Array(); x.length = 12.5;
    write("new Array(12.4); x.length = 12.5;  - no exception: es3-expected, ES5-not expected :")
}
catch(o)
{
    write("new Array(12.4); x.length = 12.5; - RangeError exception: es5-expected, ES3-not expected  ::: " + o)
}


try
{
    var x = (123.45).toFixed(25);
    write("(123.45).toFixed(25);  - no exception: not expected es3, es5")
}
catch(o)
{
    write("(123.45).toFixed(25); - RangeError exception : expected es3, es5::: " + o)
}



try
{
    var x = (123.45).toExponential(-25);
    write("(123.45).toExponential(-25);  - no exception: not expected es3, es5")
}
catch(o)
{
    write("(123.45).toExponential(-25); - RangeError exception : expected es3, es5 ::: " + o)
}






try
{
    eval("blah.")

    write("eval(\"blah.\");  - no exception: not expected es3, es5")
}
catch(o)
{
    write("eval(\"blah.\"); -expected es3-EvalError exception : expected es5-SyntaxException ::: " + o)
}





try
{
    var f = new Function("a", "b", "return a+b.");

    write("f = new Function(\"a\", \"b\", \"return a+b.\");  - no exception: not expected es3, es5")
}
catch(o)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o)
}




try
{
    var num = 0.0009;
    var x = num.toFixed(3);
    write("var num = 0.0009;var x = num.toFixed(3);  - no exception: not expected es3, es5  ::: value = " + x )
}
catch(o)
{
    write("f = new Function(\"a\", \"b\", \"return a+b.\"); -expected es3 and es5-SyntaxError exception ::: " + o)
}



try
{
    var re = new RegExp("a{5,4}");
    write("var re = new RegExp(\"a{5,4}\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(o)
{
    write("var re = \/a{5,4}\/;   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o)
}


try
{
    var re = new RegExp("[^\\0a]");
    write("var re = new RegExp(\"\\\\0a\");  - no exception: not expected es3, es5  ::: value = ")
}
catch(o)
{
    write("var re = new RegExp(\"\\0a\");   -expected: es3 -RegexExpError, es5-SyntaxError exception ::: " + o)
}

