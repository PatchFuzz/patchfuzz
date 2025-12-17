




print('copy-prop-stack-slot-test-framework.js');
var tc=new TestCase();
tc.id="38";
tc.desc="Enumerate arguments";
tc.test=function(){
    var actualContent = "";
    var actualIndex = "";

    function testArgument() {
        for (var a in arguments) {
            actualContent += arguments[a];
            actualIndex += a;
        }
    }

    testArgument(12,13,14,15);
    print(actualContent);
    print(actualIndex);
}
tc.AddTest();
Run();
