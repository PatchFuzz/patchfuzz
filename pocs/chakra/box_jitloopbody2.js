var GiantPrintArray = [];

function test0() {
    var obj1 = {};
    var IntArr0 = [787917310, 4294967296, 926685325, 104, -1308153184, -1073741824, 1868785301, 1064239984, 693100003, 2147483647, 2147483647, -575755389, -615389387];
    
    function v2201() {
        function v2202() {
            try {
                this.prop1();
            } catch (ex) {
            }
        }
        var v2205 = { prop1: 0.1 };
        v2205.prop1;
        for (var v2206 = 0; v2206 < 1; ++v2206) {
            v2202();
            var v2207 = v2205.prop1;
            v2207 += 1;
            
            var v2208;
            IntArr0 + v2208;
            GiantPrintArray.push(v2207);
        }
    };
    v2201();

    for (var i = 0; i < GiantPrintArray.length; i++) {
        print(GiantPrintArray[i]);
    };
};


test0();

test0();


runningJITtedCode = true;
test0();
