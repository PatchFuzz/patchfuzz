





function f(o, v) {
  try {
    f(o, v + 1);
  } catch (e) {
  }
  o[v] = 43.35 + v * 5.3;
}

f(Array.prototype, 0);
