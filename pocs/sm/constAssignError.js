;

function print(str) {
  print(function () { eval(str); }, TypeError);
}

print("(function() { const x = 3; (() => x++)(); return x })()");
print("(function() { const x = 3; (() => x++)(); return x++ })()");
print("(function() { const x = 2; (() => x++)(); return ++x })()");
print("(function() { const x = 2; (() => x++)(); return x += 1 })()");

print("(function() { const x = 3; x = 1; return (function() { return x})() })()");
print("(function() { const x = 3; x = 1; return (function() { return x})() })()");
print("(function() { const x = 3; x++; return (function() { return x})() })()");
print("(function() { const x = 3; ++x; return (function() { return x})() })()");
print("(function() { const x = 3; x--; return (function() { return x})() })()");
print("(function() { const x = 3; --x; return (function() { return x})() })()");
print("(function() { const x = 3; x += 1; return (function() { return x})() })()");
print("(function() { const x = 3; x -= 1; return (function() { return x})() })()");

print("(function() { const x = 3; [x] = [1]; })()");
