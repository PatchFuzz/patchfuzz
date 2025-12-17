if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}
var Debug = false;
function print(aVal)
{
    if(Debug)
    {
        print(aVal);
    }
}

var tests = [
    {
        name: "Float Splice Test",
        body: function ()
        {
            var FloatArr0 = [9.2];
            var b = -9;
            FloatArr0[8] = 1;
            var v5432 = FloatArr0.splice(b);          
                                                      

            print(v5432.valueOf());            
            print(v5432.toString(),"9.2,,,,,,,,1");
            var FloatArr0 = [];
            print(v5432.valueOf());            
            print(v5432.toString(),"9.2,,,,,,,,1");
        }
    },
    {
        name: "Empty Float Array Splice Test",
        body: function ()
        {
            var FloatArr1 = [9.2];
            var b = -9;
            FloatArr1[8] = 1;

            delete FloatArr1[0];

            var v5432 = FloatArr1.splice(b);          
                                                      

            print(v5432.valueOf());            
            print(v5432.toString(),",,,,,,,,1");
            var FloatArr1 = [];
            print(v5432.valueOf());            
            print(v5432.toString(),",,,,,,,,1");

        }
    },
    {
        name: "Int Splice Test",
        body: function ()
        {
            var IntArr0 = [9];
            var b = -9;
            IntArr0[8] = 1;
            var intDelArr = IntArr0.splice(b);      
                                                   

            print(intDelArr.valueOf());            
            print(intDelArr.toString(),"9,,,,,,,,1");
            var IntArr0 = [];
            print(intDelArr.valueOf());            
            print(intDelArr.toString(),"9,,,,,,,,1");
        }
    },
    {
        name: "Var Splice Test",
        body: function ()
        {
            var StringArr0 = ["hello"];
            var b = -9;
            StringArr0[8] = "hi";
            var strDelArr = StringArr0.splice(b);   
                                                    

            print(strDelArr.valueOf());             
            print(strDelArr.toString(),"hello,,,,,,,,hi");
            var StringArr0 = ["bar"];
            print(strDelArr.valueOf());             
            print(strDelArr.toString(),"hello,,,,,,,,hi");
        }
    }];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}