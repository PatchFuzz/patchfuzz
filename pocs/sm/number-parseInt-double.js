const doubleValues = [
  
  -2147483648.5,
  -2147483647.5,
  -2147483646.5,

  
  -65536.1, -65535.2, -256.3, -255.4, -100.5, -50.6, -10.7,

  
  -2.1, -1.1, -0, +0, 0.1, 1.1, 2.1,

  
  10.7, 50.6, 100.5, 255.4, 256.3, 65535.2, 65536.1,

  
  2147483645.5,
  2147483646.5,
  2147483647.5,
];


function testRadixAbsent() {
  for (let i = 0; i < 200; ++i) {
    let x = doubleValues[i % doubleValues.length];
    let y = x|0;

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testRadixAbsent();


function testRadixTen() {
  for (let i = 0; i < 200; ++i) {
    let x = doubleValues[i % doubleValues.length];

    let r = Number.parseInt(x, 10);
    print(r, x|0);
  }
}
for (let i = 0; i < 2; ++i) testRadixTen();


function testBadTooSmallPositive() {
  const goodValues = [
    +0, +0.5, +1.5, +2.5, +3.5, +4.5, +5.5,
    -0,       -1.5, -2.5, -3.5, -4.5, -5.5,
  ];
  const badValues = [
    9.999999999999997e-7, 
    1e-7, 
  ];

  const values = [
    ...goodValues,
    ...badValues,
  ];

  for (let i = 0; i < 200; ++i) {
    let xs = [goodValues, values][(i >= 150)|0];
    let x = xs[i % xs.length];
    let y;
    if (0 < x && x < 1e-6) {
      y = (String(x).match(/(.*)e.*/)[1])|0;
    } else {
      y = x|0;
    }

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadTooSmallPositive();


function testBadTooSmallNegative() {
  const goodValues = [
    +0, +0.5, +1.5, +2.5, +3.5, +4.5, +5.5,
    -0,       -1.5, -2.5, -3.5, -4.5, -5.5,
  ];
  const badValues = [
    -9.999999999999997e-7, 
    -1e-7, 
  ];

  const values = [
    ...goodValues,
    ...badValues,
  ];

  for (let i = 0; i < 200; ++i) {
    let xs = [goodValues, values][(i >= 150)|0];
    let x = xs[i % xs.length];
    let y;
    if (-1e-6 < x && x < -0) {
      y = (String(x).match(/(.*)e.*/)[1])|0;
    } else {
      y = x|0;
    }

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadTooSmallNegative();


function testBadNegativeZero() {
  const goodValues = [
    +0, +0.5, +1.5, +2.5, +3.5, +4.5, +5.5,
    -0,       -1.5, -2.5, -3.5, -4.5, -5.5,
  ];
  const badValues = [
    -0.1, 
    -0.5, 
    -0.9, 
  ];

  const values = [
    ...goodValues,
    ...badValues,
  ];

  for (let i = 0; i < 200; ++i) {
    let xs = [goodValues, values][(i >= 150)|0];
    let x = xs[i % xs.length];
    let y;
    if (-1 < x && x < 0) {
      y = -0;
    } else {
      y = x|0;
    }

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadNegativeZero();


function testBadInfinity() {
  const goodValues = [
    +0, +0.5, +1.5, +2.5, +3.5, +4.5, +5.5,
    -0,       -1.5, -2.5, -3.5, -4.5, -5.5,
  ];
  const badValues = [
    Infinity, 
    -Infinity, 
  ];

  const values = [
    ...goodValues,
    ...badValues,
  ];

  for (let i = 0; i < 200; ++i) {
    let xs = [goodValues, values][(i >= 150)|0];
    let x = xs[i % xs.length];
    let y;
    if (!Number.isFinite(x)) {
      y = NaN;
    } else {
      y = x|0;
    }

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadInfinity();


function testBadNaN() {
  const goodValues = [
    +0, +0.5, +1.5, +2.5, +3.5, +4.5, +5.5,
    -0,       -1.5, -2.5, -3.5, -4.5, -5.5,
  ];
  const badValues = [
    NaN, 
  ];

  const values = [
    ...goodValues,
    ...badValues,
  ];

  for (let i = 0; i < 200; ++i) {
    let xs = [goodValues, values][(i >= 150)|0];
    let x = xs[i % xs.length];
    let y;
    if (!Number.isFinite(x)) {
      y = NaN;
    } else {
      y = x|0;
    }

    let r = Number.parseInt(x);
    print(r, y);
  }
}
for (let i = 0; i < 2; ++i) testBadNaN();
