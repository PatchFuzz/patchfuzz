function foo(arr)
{
    print(Math.min.apply(Math, arr)); 
    print(Math.max.apply(Math, arr));
    print(); 
}

var arr = [{}, 3, 3.4, , new Array()];
var intArr = [1,2,3,4,5];
var floatArr = [1.2,2.3,3.4,4.5,5.6];
foo(arr);
foo(arr);

print("Testing int array");
foo(intArr);


len = intArr.length;
intArr[len+1] = 0;
foo(intArr);
intArr.length = len;


intArr[3] = 0.5;
foo(intArr);


intArr.push(Number.NaN);
foo(intArr);

print("Testing float array");
foo(floatArr);


len = floatArr.length;
floatArr[len+1] = 0.45;
foo(floatArr);
floatArr.length = len;

floatArr.push(0.5);
foo(floatArr);


floatArr.push(undefined);
foo(floatArr);