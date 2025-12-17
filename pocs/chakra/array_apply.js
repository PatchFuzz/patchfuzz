var arr=new Array(1,2,3,4,5,6);
print(arr);
var newarr = Array.apply(this, arr);
print(newarr);