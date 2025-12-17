var ary =[1,2,3,4];

 function test0(i)
 {
    return ary.pop();
 }

 print("Test0:");
 print(test0(1));
 ary[4]=1.1; 
 print(test0(1));

 
 var ary2 = new Array(10);
 ary2[0] = 1.1;

 function test1()
 {
    return ary2.pop();
 }
 print("Test1:");
 print("length = "+ary2.length);
 print(test1());
 print("length = "+ary2.length);
 print(test1());
 print("length = "+ary2.length);
