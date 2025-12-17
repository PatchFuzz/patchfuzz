function test(len) {
    var ta;
    for (var i = 0; i < 2149; i++) {
        if (i % 1024 === 100) {
            
            ta = new Int32Array(0x7fff_ffff);
            print(ta.length, 0x7fff_ffff);
            ta[0x7fff_fffe] = i;
            print(ta[0x7fff_fffe], i);

            
            ta = new Int32Array(len - i);
            print(ta.length, len - i);
            ta[ta.length - 1] = i;
            print(ta[ta.length - 1], i);
        }
    }
}
test(0x7fff_ffff);
