if (print && print) { 
    print("..\\UnitTestFramework\\UnitTestFramework.js");
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
                print(end-start, Object.keys(obj).length);
                for(var propName in obj) {
                    propValue = obj[propName];
                    print(propName, propValue.toString());
                }
            };
            testRange(2**31-100, 2**31+100);
            testRange(2**32-100, 2**32+100);
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
