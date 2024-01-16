





var validator = new Proxy({}, {
  set(that, prop, value) {
    assertEq(prop, value);
  }
});


validator["0"] = "0";
validator["1"] = "1";
validator["10"] = "10";
validator["123"] = "123";




validator["4294967296"] = "4294967296";
validator["10000000000000"] = "10000000000000";


validator["01"] = "01";
validator["0000001"] = "0000001";


validator["+1"] = "+1";
validator["-1"] = "-1";


validator["0b1"] = "0b1";
validator["0o1"] = "0o1";
validator["0x1"] = "0x1";


validator["1.1"] = "1.1";
validator["1."] = "1.";
validator[".1"] = ".1";
validator["0.1"] = "0.1";


validator["1a"] = "1a";
validator["1 "] = "1 ";
validator[" 1"] = " 1";
