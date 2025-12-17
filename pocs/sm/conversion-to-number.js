;

function test() {
  function checkValue(type, provided, expected) {
    print(ctypes[type](provided).value, expected,
             `ctypes.${type}(${provided}) contains unexpected value`);
  }

  function checkCantConvert(type, value) {
    var ctor = ctypes[type];
    print(() => ctor(value),
                           /can't convert the number/);
  }

  let testInt8 = checkValue.bind(undefined, "int8_t");
  let testInt8Throws = checkCantConvert.bind(undefined, "int8_t");
  testInt8(1e100, 0);
  testInt8Throws(-129);
  testInt8(-128, -128);
  testInt8(-1, -1);
  testInt8(0, 0);
  testInt8(1, 1);
  testInt8(127, 127);
  testInt8Throws(128);

  let testUint8 = checkValue.bind(undefined, "uint8_t");
  let testUint8Throws = checkCantConvert.bind(undefined, "uint8_t");
  testUint8(1e100, 0);
  testUint8Throws(-1);
  testUint8(0, 0);
  testUint8(1, 1);
  testUint8(127, 127);
  testUint8(128, 128);
  testUint8(255, 255);
  testUint8Throws(256);

  let testInt16 = checkValue.bind(undefined, "int16_t");
  let testInt16Throws = checkCantConvert.bind(undefined, "int16_t");
  testInt16(1e100, 0);
  testInt16Throws(-32769);
  testInt16(-32768, -32768);
  testInt16(-1, -1);
  testInt16(0, 0);
  testInt16(1, 1);
  testInt16(32767, 32767);
  testInt16Throws(32768);

  let testUint16 = checkValue.bind(undefined, "uint16_t");
  let testUint16Throws = checkCantConvert.bind(undefined, "uint16_t");
  testUint16(1e100, 0);
  testUint16Throws(-1);
  testUint16(0, 0);
  testUint16(1, 1);
  testUint16(32767, 32767);
  testUint16(32768, 32768);
  testUint16(65535, 65535);
  testUint16Throws(65536);

  let testInt32 = checkValue.bind(undefined, "int32_t");
  let testInt32Throws = checkCantConvert.bind(undefined, "int32_t");
  testInt32(1e100, 0);
  
  
  
  
  testInt32(-2147483648, -2147483648);
  testInt32(-1, -1);
  testInt32(0, 0);
  testInt32(1, 1);
  testInt32(2147483647, 2147483647);
  
  
  
  

  let testUint32 = checkValue.bind(undefined, "uint32_t");
  let testUint32Throws = checkCantConvert.bind(undefined, "uint32_t");
  testUint32(1e100, 0);
  testUint32Throws(-1);
  
  
  
  
  testUint32(0, 0);
  testUint32(1, 1);
  testUint32(2147483647, 2147483647);
  testUint32(2147483648, 2147483648);
  testUint32(4294967295, 4294967295);
  
  
  
  
}

if (typeof ctypes === "object")
  test();
