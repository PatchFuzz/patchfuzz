




function test0() {
    var GiantPrintArray = [];
    
    function v2() {
        var v3 = 10;
        var v4 = new Array(v3);
        for (var v5 = 0; v5 < v3; v5++) {
            
            var v6 = { a: 0 };

            if (v5 % 2)
                v6.p = 1;

            
            v6.p = 1;
            v6.z = 1;
            v4[v5] = v6;
        }

        for (var v5 = 0; v5 < v3; v5++) {
            GiantPrintArray.push("{ a: " + v4[v5].a + ", p: " + v4[v5].p + ", z: " + v4[v5].z + "}");
        }
    }

    v2();

};

test0();
test0();


runningJITtedCode = true;
test0();

WScript.Echo('pass');
