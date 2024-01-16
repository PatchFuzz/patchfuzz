






var id=0;
function verify(get_actual,get_expected,testid,testdesc)
{

    if(get_actual !==get_expected)
        WScript.Echo(testid+":"+testdesc+"\t"+"failed");
}



var arr1=new Array(536870912)
verify(arr1.length,536870912,id++, "\"Testing Array of length 2^29 \"");



var arr2=new Array(536870913)
verify(arr2.length, 536870913, id++,"\"Testing Array of length 2^29+1 \"");



var arr3=new Array(536870911)
verify(arr3.length, 536870911, id++,"\"Testing Array of length 2^29-1 \"");


var arr4=new Array(4294967295)
verify(arr4.length ,4294967295, id++,"\"Testing Array of length 2^32-1 \"");



try
{
    var arr5=new Array(1024*1024*1024*4)
    verify(1,0,"\"Testing an array of length >2^32 Did not raise an exception\"")
}
catch(e)
{
    verify(arr5,undefined,id++,"\"Testing an array of length greater than the max length of the Integer\"")
}



var arr6=new Array(0)
verify(arr6.length, 0, id++,"\"Testing Array of length 0 \"");



var arr7=new Array(536870911)
arr7.length=536870912
verify(arr7.length, 536870912,id++, "\"Testing Array of length 2^29 after changing the length property \"")


try
{
var arr8=new Array(3);
arr8.length=-1
verify(1,0,"\"Testing an array length property with -1 Did not raise an exception\"")
}
catch(e)
{
verify(arr8.length, 3, id++,"\"Testing negative array length property \"")

}

print("pass");
