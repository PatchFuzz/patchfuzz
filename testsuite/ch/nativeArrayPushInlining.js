




var GiantPrintArray = [];

function test0()
{
   GiantPrintArray.push(3.2);
   GiantPrintArray.push(true);
}

test0();

test0();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test1()
{
    var ary;
    GiantPrintArray.push(2);
    GiantPrintArray.push(ary);
}

test1();

test1();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test2(a)
{
    GiantPrintArray.push(a);
}

var GiantPrintArray = [1.1];
test2(1);

var ary;
test2(ary);

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };

function test3()
{
        GiantPrintArray = [{}];
        GiantPrintArray.push(7);

}

test3();

test3();

for(var i =0;i<GiantPrintArray.length;i++){
 WScript.Echo(GiantPrintArray[i]);
 };
