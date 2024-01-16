






if (this.WScript && this.WScript.LoadScriptFile) { 
    this.WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}

var tests = [
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        name: "Test Spread near array limits",
        body: function() {
            function testRange(start, end) {
                let arr = [] ;
                for (i = start; i < end; i++) {
                    arr[i] = i;
                }
                let obj = {...arr};
                assert.areEqual(end-start, Object.keys(obj).length);
                for(var propName in obj) {
                    propValue = obj[propName];
                    assert.areEqual(propName, propValue.toString());
                }
            };
            testRange(2**31-100, 2**31+100);
            testRange(2**32-100, 2**32+100);
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
