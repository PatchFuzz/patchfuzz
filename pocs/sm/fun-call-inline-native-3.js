function arrayThisAbsent() {
  for (let i = 0; i < 400; ++i) {
    let r = Array.call();
    print(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) arrayThisAbsent();

function array0() {
  for (let i = 0; i < 400; ++i) {
    let r = Array.call(null);
    print(r.length, 0);
  }
}
for (let i = 0; i < 2; ++i) array0();

function array1() {
  for (let i = 0; i < 400; ++i) {
    let r = Array.call(null, 5);
    print(r.length, 5);
  }
}
for (let i = 0; i < 2; ++i) array1();

function array2() {
  for (let i = 0; i < 400; ++i) {
    let r = Array.call(null, 5, 10);
    print(r.length, 2);
  }
}
for (let i = 0; i < 2; ++i) array2();
