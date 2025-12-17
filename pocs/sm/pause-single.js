function noArguments() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause();
  }
}
for (let i = 0; i < 2; ++i) noArguments();


function zero() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause(0);
  }
}
for (let i = 0; i < 2; ++i) zero();


function increasingLinear() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause(i);
  }
}
for (let i = 0; i < 2; ++i) increasingLinear();


function decreasingLinear() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause(-i);
  }
}
for (let i = 0; i < 2; ++i) decreasingLinear();


function increasingExp() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause(2 ** Math.min(i >> 1, 10));
  }
}
for (let i = 0; i < 2; ++i) increasingExp();


function decreasingExp() {
  for (let i = 0; i < 1000; ++i) {
    Atomics.pause(-(2 ** Math.min(i >> 1, 10)));
  }
}
for (let i = 0; i < 2; ++i) decreasingExp();
