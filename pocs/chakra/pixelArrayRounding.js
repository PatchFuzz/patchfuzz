function test0() {
    var ui8 = new Uint8Array(256);
    var cpa8 = ui8;
    var g = 0;
    var h = 0.5;
    var i = 0;
    var total = 0;
    while (g < 10) {
        
        cpa8[i] = g + h;
        print("cpa8[" + i + "] = " + cpa8[i++]);
        g++;
    }
    return total;
};

test0();

test0();
