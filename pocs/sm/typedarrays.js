;

function typedArrayMatchesString(ta, str, uptoStringLength = false) {
  if (ta.length != str.length && !uptoStringLength)
    return false;
  for (let i = 0; i < str.length; i++) {
    if (ta[i] != str.charCodeAt(i))
      return false;
  }
  return true;
}

function test() {

  

  const shortU8 = ctypes.unsigned_char.array(10)("abc\0\0\0\0\0\0\0").readTypedArray();
  print(shortU8 instanceof Uint8Array, true);
  print(typedArrayMatchesString(shortU8, "abc\0\0\0\0\0\0\0"), true);

  const shortI8 = ctypes.signed_char.array(10)("abc\0\0\0\0\0\0\0").readTypedArray();
  print(shortI8 instanceof Int8Array, true);
  print(typedArrayMatchesString(shortI8, "abc\0\0\0\0\0\0\0"), true);

  const shortU16 = ctypes.char16_t.array(10)("千").readTypedArray();
  print(shortU16 instanceof Uint16Array, true);
  print(typedArrayMatchesString(shortU16, "千", 'ignore zero-padding, please'), true);

  

  const I16 = ctypes.int16_t.array(10)().readTypedArray();
  print(I16 instanceof Int16Array, true);

  const U32 = ctypes.uint32_t.array(10)().readTypedArray();
  print(U32 instanceof Uint32Array, true);

  const I32 = ctypes.int32_t.array(10)().readTypedArray();
  print(I32 instanceof Int32Array, true);

  

  const unsignedCharArray = ctypes.unsigned_char.array(10)("abc\0\0\0");
  const shortU8cs = unsignedCharArray.addressOfElement(0).readTypedArray();
  print(shortU8cs instanceof Uint8Array, true);
  print(shortU8cs.length, 3);
  print(typedArrayMatchesString(shortU8cs, "abc", 'stop at NUL, please'), true);

  const signedCharArray = ctypes.signed_char.array(10)("abc\0\0\0");
  const shortI8cs = signedCharArray.addressOfElement(0).readTypedArray();
  print(shortI8cs instanceof Int8Array, true);
  print(shortI8cs.length, 3);
  print(typedArrayMatchesString(shortI8cs, "abc", 'stop at NUL, please'), true);

  const char16Array = ctypes.char16_t.array(10)("千\0");
  const shortU16cs = char16Array.addressOfElement(0).readTypedArray();
  print(shortU16cs instanceof Uint16Array, true);
  print(shortU16cs.length, 1);
  print(typedArrayMatchesString(shortU16cs, "千", 'ignore zero-padding, please'), true);

  

  print(() => { ctypes.int32_t.array(3)().addressOfElement(0).readTypedArray(); },
                         /base type .* is not an 8-bit or 16-bit integer or character type/);
  print(() => { ctypes.float.array(3)().addressOfElement(0).readTypedArray(); },
                         /base type .* is not an 8-bit or 16-bit integer or character type/);
  print(() => { ctypes.double.array(3)().addressOfElement(0).readTypedArray(); },
                         /base type .* is not an 8-bit or 16-bit integer or character type/);
  
  print(() => { ctypes.int16_t.array(3)().addressOfElement(0).readTypedArray(); },
                         /base type .* is not an 8-bit or 16-bit integer or character type/);

  

  const input2 = "千千千千千千千千千千千千千千千千千千千千千千千千千";
  const encoded = ctypes.char.array(input2.length * 3)(input2).readTypedArray();
  
  print(encoded.length, input2.length * 3);

  

  const encoded16 = ctypes.char16_t.array(input2.length)(input2).readTypedArray();
  print(encoded16.length, input2.length);

  

  const floats = ctypes.float.array(3)([10, 20, 30]).readTypedArray();
  print(floats instanceof Float32Array, true);
  print(floats.toString(), "10,20,30");

  const doubles = ctypes.double.array(3)([10, 20, 30]).readTypedArray();
  print(doubles instanceof Float64Array, true);
  print(doubles.toString(), "10,20,30");

  

  print(() => { ctypes.int64_t.array(3)([10, 20, 30]).readTypedArray() },
                         /base type ctypes.int64_t.array.*is not compatible with a typed array element type/);

}

if (typeof ctypes === "object")
  test();
