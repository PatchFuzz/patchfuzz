function test() {
  var i8 = new Int8Array(4);
  var i16 = new Int16Array(i8.buffer, 0, 2);

  for (var i = 0; i < 100; ++i) {
    i8.set([
      0x11,
      0x22,
      0x33,
      0x44,
    ]);

    var oldval = 0x22_11;

    
    print(i16[0], oldval);
    print(i16[1], 0x44_33);

    
    var newval = 0x88_99_55_66;

    oldval = Atomics.compareExchange(i16, 0, 0x22_11, newval);

    
    print(oldval, 0x22_11);

    
    print(i8[0], 0x66);
    print(i8[1], 0x55);
    print(i8[2], 0x33);
    print(i8[3], 0x44);
  }
}
test();
