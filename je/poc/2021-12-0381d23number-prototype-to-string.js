















print((NaN).toString() === "NaN");
print((-Infinity).toString() === "-Infinity");
print((Infinity).toString() === "Infinity");
print((NaN).toString(6) === "NaN");
print((-Infinity).toString(7) === "-Infinity");
print((Infinity).toString(8) === "Infinity");
print((16).toString(16) === "10");
print((15).toString(16) === "f");
print((12.5).toString(4) === "30.2");
print((0.005).toString(4) === "0.000110132232011013223201101323");
print((2000).toString(4) === "133100");
print((2000).toString(3) === "2202002");
print((2000).toString(16) === "7d0");
print((0.03125).toString(2) === "0.00001");
print((0.03125).toString(16) === "0.08");
print((0.0001).toString(4) === "0.000000122031232023223013010030231")
print((0).toString(16) === "0");
print((-16).toString(16) === "-10");
print((-15).toString(16) === "-f");
print((-12.5).toString(4) === "-30.2");
print((-0.005).toString(4) === "-0.000110132232011013223201101323");
print((-2000).toString(4) === "-133100");
print((-2000).toString(3) === "-2202002");
print((-2000).toString(16) === "-7d0");
print((-0.03125).toString(2) === "-0.00001");
print((-0.03125).toString(16) === "-0.08");
print((-0.0001).toString(4) === "-0.000000122031232023223013010030231")
print((-0).toString(16) === "0");
print((1e+73).toString(35) === "2nx1mg1l0w6b000000000000000000000000000000000000")
print((-1e+73).toString(35) === "-2nx1mg1l0w6b000000000000000000000000000000000000")
print((1).toString(undefined) === "1")

print((123400).toString(2) === "11110001000001000");
print((123400).toString(3) === "20021021101");
print((123400).toString(4) === "132020020");
print((123400).toString(5) === "12422100");
print((123400).toString(6) === "2351144");
print((123400).toString(7) === "1022524");
print((123400).toString(8) === "361010");
print((123400).toString(9) === "207241");
print((123400).toString(10) === "123400");
print((123400).toString(11) === "84792");
print((123400).toString(12) === "5b4b4");
print((123400).toString(13) === "44224");
print((123400).toString(14) === "32d84");
print((123400).toString(15) === "2686a");
print((123400).toString(16) === "1e208");
print((123400).toString(17) === "181ge");
print((123400).toString(18) === "132fa");
print((123400).toString(19) === "hife");
print((123400).toString(20) === "f8a0");
print((123400).toString(21) === "d6h4");
print((123400).toString(22) === "bcl2");
print((123400).toString(23) === "a365");
print((123400).toString(24) === "8m5g");
print((123400).toString(25) === "7mb0");
print((123400).toString(26) === "70e4");
print((123400).toString(27) === "677a");
print((123400).toString(28) === "5hb4");
print((123400).toString(29) === "51l5");
print((123400).toString(30) === "4h3a");
print((123400).toString(31) === "44ck");
print((123400).toString(32) === "3og8");
print((123400).toString(33) === "3ead");
print((123400).toString(34) === "34pe");
print((123400).toString(35) === "2upp");
print((123400).toString(36) === "2n7s");

print((1152921504606846600).toString([1,2,3,4].slice(1,2)) === "111111111111111111111111111111111111111111111111111010000000");
print((-1152921504606846600).toString(2) === "-111111111111111111111111111111111111111111111111111010000000");

print((0x100000000000061).toString(2) === "100000000000000000000000000000000000000000000000001100000")
print((-0x100000000000061).toString(16) === "-100000000000060");

print((123400).toString(new Number(16)) === "1e208");

print(65535.9.toString(3) === "10022220020.220022002200220022002201");

var digit_chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y', 'z'];

for (radix = 2; radix <= 36; radix++) {
  for (num = 1; num < 100; num++) {
    var value = num;
    var str = "";
    while (value > 0) {
      str = digit_chars[value % radix] + str;
      value = Math.floor(value / radix);
    }

    print(str === (num).toString(radix));
  }
}

try {
  print((123).toString(1));
  print(false)
} catch (e) {
  print(e instanceof RangeError);
}

try {
  print((123).toString(37));
  print(false)
} catch (e) {
  print(e instanceof RangeError);
}

try {
  print((123).toString(Infinity));
  print(false)
} catch (e) {
  print(e instanceof RangeError);
}
