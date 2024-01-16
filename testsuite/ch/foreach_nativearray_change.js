




var IntArr1 = new Array();
prop1 = 1;
IntArr1[0] = 1;
IntArr1[1] = 1;
IntArr1[3] = 2147483647;
IntArr1[2] = 1;
IntArr1 = IntArr1.concat(prop1);

IntArr1.forEach(function (element, index) {
    WScript.Echo(IntArr1[index]++);
    WScript.Echo(element);
});

