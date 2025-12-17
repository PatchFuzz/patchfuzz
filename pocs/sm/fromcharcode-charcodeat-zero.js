function toCharCodes(str) {
  return [...str].map(s => s.length === 1 ? [s.charCodeAt(0)] : [s.charCodeAt(0), s.charCodeAt(1)])
                 .flat();
}

function test() {
  
  const constant = "AaÁáĀā𝐀𝐚";
  const charCodes = toCharCodes(constant);

  
  const linear = String.fromCharCode(...charCodes);
  print(linear, constant);

  
  for (let i = 0; i < 500; ++i) {
    let idx = i & 3;

    
    print(constant[idx].charCodeAt(0), charCodes[idx]);
    print(linear[idx].charCodeAt(0), charCodes[idx]);

    
    print(constant.charAt(idx).charCodeAt(0), charCodes[idx]);
    print(linear.charAt(idx).charCodeAt(0), charCodes[idx]);
  }
}
for (let i = 0; i < 4; ++i) {
  test();
}

function testNonConstantIndex() {
  
  const constant = "AaÁáĀā𝐀𝐚";
  const charCodes = toCharCodes(constant);

  
  const linear = String.fromCharCode(...charCodes);
  print(linear, constant);

  
  let indices = [0, 1, 2, 3];
  for (let i = 0; i < 500; ++i) {
    let idx = i & 3;

    
    let zero = indices[idx] - idx;

    print(constant[idx].charCodeAt(zero), charCodes[idx]);
    print(linear[idx].charCodeAt(zero), charCodes[idx]);

    print(constant.charAt(idx).charCodeAt(zero), charCodes[idx]);
    print(linear.charAt(idx).charCodeAt(zero), charCodes[idx]);
  }
}
for (let i = 0; i < 4; ++i) {
  testNonConstantIndex();
}

function testOOB() {
  
  const constant = "AaÁáĀā𝐀𝐚";
  const charCodes = toCharCodes(constant);

  
  const linear = String.fromCharCode(...charCodes);
  print(linear, constant);

  
  for (let i = 0; i < 500; ++i) {
    let idx = i & 3;

    print(constant[idx].charCodeAt(1), NaN);
    print(linear[idx].charCodeAt(1), NaN);

    print(constant.charAt(idx).charCodeAt(1), NaN);
    print(linear.charAt(idx).charCodeAt(1), NaN);
  }
}
for (let i = 0; i < 4; ++i) {
  testOOB();
}
