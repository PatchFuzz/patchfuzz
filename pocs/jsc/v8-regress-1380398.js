print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

function test() {
  const ab = new ArrayBuffer(2996, { maxByteLength: 8588995 });
  const dv = new DataView(ab);
  const len = dv.byteLength;
  return len >= 255;
}


print(test());
print(test());

print(test());

