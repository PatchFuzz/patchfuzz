function verify(get_actual,get_expected,testid,testdesc)
{
    if(get_actual!=get_expected)
        print(testid+":"+testdesc+"\t"+"failed");
}



verify(~0,-1,1,"\"Checking for 0\"");



verify(~0xffffffff,0,2,"\"Checking result for 0xffffffff\"")



verify(~~(0xffffffff),-1,3,"\"testing the not of 0xffffffff\"");



verify(~NaN,-1,4,"\"Checking result for NaN\"")



verify(~undefined,-1,5,"\"Checking for undefined\"")



verify(~Infinity,-1,6,"\"Checking result for Infinity\"")



verify(~(-Infinity),-1,7,"\"Checking result for -Infinity\"")



verify(~536870912,-536870913,8,"\"Checking result for Tagged Limits 536870912 \"")



verify(~536870911,-536870912,9,"\"Checking result for Tagged Limits-1 536870911\"");



verify(~(-536870912),536870911,10,"\"Checking result for Tagged Limits -536870912 \"")



verify(~-536870913,536870912,11,"\"Checkings result for Tagged Limits+1 -536870913\"");



verify(~-0,-1,12,"\"Checking result for -0\"");

print("pass");
