






function test0() {
    var func0 = function () {
        var x = 1;
        
    }
    var func7 = function () {
        var __loopvar4 = 0;
        do {
            __loopvar4++;
        } while (false);
        (1 >= 2 ? 0 : func0()) + 1;
    }
    func7(1, 1);
};
test0();
test0();

WScript.Echo("PASS");
