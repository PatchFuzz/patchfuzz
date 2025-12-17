function mathMinThisAbsent() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call();
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) mathMinThisAbsent();

function mathMin0() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null);
    print(r, Infinity);
  }
}
for (let i = 0; i < 2; ++i) mathMin0();

function mathMin0Bound1() {
  var MathMin = Math.min.bind(null, 0);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null);
    print(r, 0);
  }
}
for (let i = 0; i < 2; ++i) mathMin0Bound1();

function mathMin0Bound2() {
  var MathMin = Math.min.bind(null, 100, 50);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null);
    print(r, 50);
  }
}
for (let i = 0; i < 2; ++i) mathMin0Bound2();

function mathMin0Bound3() {
  var MathMin = Math.min.bind(null, 100, 50, 25);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null);
    print(r, 25);
  }
}
for (let i = 0; i < 2; ++i) mathMin0Bound3();

function mathMin1() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i);
    print(r, i);
  }
}
for (let i = 0; i < 2; ++i) mathMin1();

function mathMin1Bound1() {
  var MathMin = Math.min.bind(null, 200);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i);
    print(r, Math.min(i, 200));
  }
}
for (let i = 0; i < 2; ++i) mathMin1Bound1();

function mathMin1Bound3() {
  var MathMin = Math.min.bind(null, 200, 150, 100);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i);
    print(r, Math.min(i, 100));
  }
}
for (let i = 0; i < 2; ++i) mathMin1Bound3();

function mathMin1Bound4() {
  var MathMin = Math.min.bind(null, 200, 150, 100, 50);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i);
    print(r, Math.min(i, 50));
  }
}
for (let i = 0; i < 2; ++i) mathMin1Bound4();

function mathMin2() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1);
    print(r, i);
  }
}
for (let i = 0; i < 2; ++i) mathMin2();

function mathMin2Bound1() {
  var MathMin = Math.min.bind(null, 200);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1);
    print(r, Math.min(i, 200));
  }
}
for (let i = 0; i < 2; ++i) mathMin2Bound1();

function mathMin3() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2);
    print(r, i);
  }
}
for (let i = 0; i < 2; ++i) mathMin3();

function mathMin3Bound1() {
  var MathMin = Math.min.bind(null, 200);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2);
    print(r, Math.min(i, 200));
  }
}
for (let i = 0; i < 2; ++i) mathMin3Bound1();

function mathMin4() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2, i + 3);
    print(r, i);
  }
}
for (let i = 0; i < 2; ++i) mathMin4();

function mathMin4Bound1() {
  var MathMin = Math.min.bind(null, 200);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2, i + 3);
    print(r, Math.min(i, 200));
  }
}
for (let i = 0; i < 2; ++i) mathMin4Bound1();

function mathMin5() {
  var MathMin = Math.min.bind();
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2, i + 3, i + 4);
    print(r, i);
  }
}
for (let i = 0; i < 2; ++i) mathMin5();

function mathMin5Bound1() {
  var MathMin = Math.min.bind(null, 200);
  for (let i = 0; i < 400; ++i) {
    let r = MathMin.call(null, i, i + 1, i + 2, i + 3, i + 4);
    print(r, Math.min(i, 200));
  }
}
for (let i = 0; i < 2; ++i) mathMin5Bound1();
