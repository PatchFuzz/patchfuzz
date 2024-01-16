





var arr1 = [1, 2, 3, 4, 5];
arr1[arr1.length + 5] = 10;
WScript.Echo(arr1[arr1.length]); 


var arr2 = [1, 2, 3, 4, 5];
arr1[arr2.length + 5] = 6.5;
WScript.Echo(arr1[arr2.length]); 


var arr3 = [1, 2, 3, 4, 5];
arr3[arr3.length + 5] = arr1;
WScript.Echo(arr3[arr3.length]); 


var arr4 = [1.3, 5.3, -0];
arr4[arr4.length + 5] = arr2;
WScript.Echo(arr4[arr4.length]);


var arr5 = [1, 4,5];
arr5[arr5.length + 5] = 0x80000002;
WScript.Echo(arr5[arr5.length]); 


var arr6 = [1.3, 3.4, 0x80000002];
arr6[arr6.length + 5] = -0;
