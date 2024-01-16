





var ary =[1,2,3,4];

 function test0(i)
 {
    return ary.pop();
 }

 WScript.Echo("Test0:");
 WScript.Echo(test0(1));
 ary[4]=1.1; 
 WScript.Echo(test0(1));

 
 var ary2 = new Array(10);
 ary2[0] = 1.1;

 function test1()
 {
    return ary2.pop();
 }
 WScript.Echo("Test1:");
 WScript.Echo("length = "+ary2.length);
 WScript.Echo(test1());
 WScript.Echo("length = "+ary2.length);
 WScript.Echo(test1());
 WScript.Echo("length = "+ary2.length);
