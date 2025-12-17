var a = 1;

function f() {
  throw ++a;
}

function g() {
  f();
}

function h() {
  g();
}

try {
  h();
} catch (e) {
  ++a;
}

try {
  h();
} catch (e) {
  ++a;

  try {
    throw "Catch again";
  } catch (e) {
    ++a;
  }
}

try {
  try {
    h();
  } finally {
    ++a;
  }
  ++a; 
} catch (e) {
  ++a;
}

try {
  try {
    h();
  } finally {
    ++a;
    throw "Replace the other error";
  }
} catch (e) {
  ++a;
}

try {
  break_try_label: try {
    h();
  } finally {
    ++a;
    break break_try_label;
  }
  throw "Should be caught";
} catch (e) {
  ++a;
}

h();
