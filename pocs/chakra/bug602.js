function write(v) { print(v + ""); }

function fooBaz()
{
    this.toString = function (){throw (new Error("some error"));}
}

function test1() {
    try
    {
        tempObj = new fooBaz();
        expString = "hi";
        resultString = expString + tempObj;
        write(resultString);
    }
    catch(e)
    {
        write(e);
    }
    write("Test1 Done");
}

function test2() {
    try
    {
        tempObj = new fooBaz();
        expString = "hi";
        resultString = tempObj + expString;
        write(resultString);
    }
    catch(e)
    {
        write(e);
    }
    write("Test2 Done");
}

test1();
test2();
