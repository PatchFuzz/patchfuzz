






















var val = { a: 5, b: 10 }

function test(obj, val, j, x, y, z) {
    obj.a = val.a; 
    if (val.b)     
        val.b++;
}

noInline(test);

function runTest() {
    for (var j = 0; j < 50; j++) {
        var objs = [];

        let numberOfObjects = 200;
        for (var k = 0; k < numberOfObjects; k++) { 
            var obj = { };

            
            
            
            
            
            var numInitialProps = j % 20;
            for (var i = 0; i < numInitialProps; i++)
                obj["i" + i] = i;

            objs[k] = obj;
        }

        
        
        
        gc();

        for (var k = 0; k < numberOfObjects; k++) {
            
            
            
            if (k % 97 == 1 && j % 5 == 1)
                gc();

            test(objs[k], val, j);
        }
    }
}

noDFG(runTest); 
runTest();
