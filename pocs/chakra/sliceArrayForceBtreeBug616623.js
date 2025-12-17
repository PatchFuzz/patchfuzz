if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
}

function test0()
{

    var IntArr1 = new Array();
    IntArr1[9] = 9;
    for (var v1 = 10; v1 >= 0; v1--) {
        Object.prototype[v1] = "d";
    }
    Object.defineProperty(Array.prototype, '4', {value: "four"});
    return IntArr1.slice().toString();
}
var tests = [
   {
       name: "slice interpreted baseline test",
       body: function ()
       {
        var a = test0(); 
        var b = test0();
        print(a,b,"b should equal the results of the interpreted run");
        print("d,d,d,d,four,d,d,d,d,9",b,"redundant test to make sure both a and b did not change");
       }
    }
    ];
for (var i = 0; i < tests.length; i ++) {tests[i].body()}
